// 학습퀴즈컴포넌트: 문제 풀이, 정답 확인, 오답 복습 흐름
import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchEduVideoById, fetchWordsByLearnId, finishLearnWord } from "../apis/LearnApi";
import { submitQuizAnswers } from "../apis/QuizApi";
import { StudyQuizContext } from "../../../context/StudyQuizContext";
import { useStudyUser } from "../hooks/useStudyUser";
import { canSubmitQuizAnswers, mapQuizAnswersForSubmit } from "../mappers/quizMapper";
import { getLearnQuiz } from "./data/learnQuizMock";
import LearnQuizFeedback from "./parts/LearnQuizFeedback";
import LearnQuizOptionCard from "./parts/LearnQuizOptionCard";
import LearnQuizReview from "./parts/LearnQuizReview";
import * as S from "./style";

const LearnQuizComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type = "greeting", id = "1" } = useParams();

  const {
    state,
    actions: { setQuiz, selectAnswer, setResult },
  } = useContext(StudyQuizContext);

  const { userId, isGuest } = useStudyUser();

  const routeEduId = location.state?.eduId;
  const lessonTitle = location.state?.lessonTitle;
  const [sessionWords, setSessionWords] = useState([]);
  const [sessionVideos, setSessionVideos] = useState({});
  const [sessionLoading, setSessionLoading] = useState(false);
  const [sessionError, setSessionError] = useState(null);
  const baseQuiz = useMemo(() => getLearnQuiz(type), [type]);

  const quiz = useMemo(() => {
    if (sessionWords.length === 0)
      return baseQuiz;

    return {
      ...baseQuiz,
      id: routeEduId || baseQuiz.id,
      title: lessonTitle || baseQuiz.title,
      questions: sessionWords.map((word, index) => {
        const fallback = baseQuiz.questions[index % baseQuiz.questions.length];
        const correctLabel = word.wordsTitle || fallback.targetWord || fallback.options.find((option) => option.correct)?.label;
        const wrongOptions = baseQuiz.questions
          .flatMap((item) => item.options)
          .filter((option) => option.label !== correctLabel)
          .slice(0, 2)
          .map((option, optionIndex) => ({
            ...option,
            id: `wrong-${word.id}-${optionIndex}`,
            correct: false,
          }));

        return {
          ...fallback,
          id: word.id,
          title: `다음 중 어느 수어가 "${correctLabel}"인가요?`,
          targetWord: correctLabel,
          hint: word.wordsDetail || fallback.hint,
          word,
          video: sessionVideos[word.id],
          options: [
            ...wrongOptions,
            {
              id: word.id,
              label: correctLabel,
              desc: word.wordsDetail || "학습한 수어 표현이에요.",
              icon: "👋",
              correct: true,
            },
          ],
          feedback: {
            ...fallback.feedback,
            correct: `"${correctLabel}" 표현을 잘 골랐어요.`,
            incorrect: `정답은 "${correctLabel}"이에요.`,
            reviewTitle: correctLabel,
            reviewDesc: word.wordsDetail || fallback.feedback.reviewDesc,
          },
        };
      }),
    };
  }, [baseQuiz, lessonTitle, routeEduId, sessionVideos, sessionWords]);

  const currentIndex = Math.max(Number(id) - 1, 0);
  const question = quiz.questions[currentIndex] || quiz.questions[0];
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [status, setStatus] = useState("solving");

  // 세션자료조회: 학습 시작 시 단어와 영상 -> 문제형 세션 구성
  useEffect(() => {
    if (!routeEduId) return;

    let ignore = false;

    const loadSession = async () => {
      setSessionLoading(true);
      setSessionError(null);

      try {
        const words = await fetchWordsByLearnId(routeEduId);
        if (ignore)
          return;

        setSessionWords(words || []);

        const videoEntries = await Promise.all(
          (words || [])
            .filter((word) => word.eduVideoId)
            .map(async (word) => {
              try {
                const video = await fetchEduVideoById(word.eduVideoId);

                return [word.id, video];
              } catch {
                return [word.id, null];
              }
            })
        );

        if (!ignore) {
          setSessionVideos(Object.fromEntries(videoEntries.filter(([, video]) => video)));
        }
      } catch {
        if (!ignore)
          setSessionError("학습 세션을 불러오지 못해 임시 문제를 보여주고 있어요.");
      } finally {
        if (!ignore)
          setSessionLoading(false);
      }
    };

    loadSession();

    return () => {
      ignore = true;
    };
  }, [routeEduId]);

  // 퀴즈초기화: URL의 퀴즈 종류가 바뀌면 컨텍스트에 문제 목록저장
  useEffect(() => {
    setQuiz({
      mode: "learn",
      quizId: quiz.id,
      quizType: type,
      questions: quiz.questions,
    });
  }, [quiz, setQuiz, type]);

  // 문제변경초기화: 다음 문제로 이동할 때 선택 상태 초기화
  useEffect(() => {

    setSelectedOptionId(null);
    setStatus("solving");
  }, [id]);

  const correctOption = question.options.find((option) => option.correct);
  const selectedOption = question.options.find((option) => option.id === selectedOptionId);
  const progress = Math.round(((currentIndex + 1) / quiz.questions.length) * 100);
  const progressStatus = status === "correct" ? "correct" : status === "incorrect" ? "incorrect" : "solving";
  const isLastQuestion = currentIndex >= quiz.questions.length - 1;

  // 수신호구분값: 복습 화면 문구를 수어/수신호에 맞게 변경
  const isSignalQuiz = type === "signal";

  // 답안선택: 사용자가 고른 보기 저장
  const handleSelect = (optionId) => {
    if (status !== "solving")
      return;

    setSelectedOptionId(optionId);
  };

  // 정답확인: 선택한 보기의 정답 여부 확인, 컨텍스트에 답안 기록
  const handleCheck = () => {
    if (!selectedOption)
      return;

    const isCorrect = Boolean(selectedOption.correct);

    selectAnswer({
      questionId: question.id,
      answerId: selectedOption.id,
      correct: isCorrect,
    });

    setStatus(isCorrect ? "correct" : "incorrect");
  };

  // 퀴즈완료: 마지막 복습까지 끝나면 백엔드 저장 시도, 학습 화면으로 돌아감
  const handleFinish = async () => {
    if (question?.word?.eduWordMapId && !isGuest && userId) {
      try {
        await finishLearnWord({ userId, eduWordMapId: question.word.eduWordMapId });
      } catch {
        // 학습 완료 저장 실패 -> 세션 종료를 막지 않음.
      }
    }

    if (isGuest || !userId || !canSubmitQuizAnswers(quiz.id, state.answers)) {
      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: false,
        reason: isGuest || !userId ? "guest" : "mock",
        finishedAt: new Date().toISOString(),
      });

      navigate("/study/learn");

      return;
    }

    const answers = mapQuizAnswersForSubmit(state.answers);

    try {
      const result = await submitQuizAnswers({
        quizId: quiz.id,
        userId,
        answers,
      });

      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: true,
        data: result,
        finishedAt: new Date().toISOString(),
      });
    } catch {
      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: false,
        finishedAt: new Date().toISOString(),
      });
    }

    navigate("/study/learn");
  };

  // 다음문제: 다음 문제로 이동하거나 마지막 문제에서는 복습 화면으로 넘어감
  const handleNext = () => {
    if (isLastQuestion) {
      setStatus("review");

      return;
    }

    navigate(`/study/learn/quiz/${type}/questions/${currentIndex + 2}`);
  };

  // 닫기: 학습 메인 화면으로 고
  const handleClose = () => {

    navigate("/study/learn");
  };

  if (status === "review") {

    return (
      <S.LearnQuizWrap>
        <S.LearnQuizShell>
          <S.LearnQuizTop>
            <S.LearnQuizClose type="button" onClick={handleClose} aria-label="퀴즈 닫기">
              ×
            </S.LearnQuizClose>
            <S.LearnQuizProgress aria-label="복습 진행률" $progress={50} $status="review">
              <span />
            </S.LearnQuizProgress>
            <S.LearnQuizCount />
          </S.LearnQuizTop>

          <LearnQuizReview
            label={isSignalQuiz ? "▲ 수신호 배우기" : "📖 수어 배우기"}
            headline={isSignalQuiz ? "이 수신호를 기억해봐요!" : "이 수어를 기억해봐요!"}
            mediaText={isSignalQuiz ? "수신호 이미지/영상 슬롯" : "수어 이미지/영상 슬롯"}
            wordLabel={isSignalQuiz ? "수신호 표현" : "수어 표현"}
            title={question.feedback.reviewTitle}
            desc={question.feedback.reviewDesc}
            action={question.feedback.action}
            situation={question.feedback.situation}
            onSkip={handleFinish}
            onRemember={handleFinish}
          />
        </S.LearnQuizShell>
      </S.LearnQuizWrap>
    );
  }

  return (
    <S.LearnQuizWrap>
      <S.LearnQuizShell>
        <S.LearnQuizTop>
          <S.LearnQuizClose type="button" onClick={handleClose} aria-label="퀴즈 닫기">
            ×
          </S.LearnQuizClose>
          <S.LearnQuizProgress aria-label="학습 퀴즈 진행률" $progress={progress} $status={progressStatus}>
            <span />
          </S.LearnQuizProgress>
          <S.LearnQuizCount>
            {currentIndex + 1} / {quiz.questions.length}
          </S.LearnQuizCount>
        </S.LearnQuizTop>

        {(sessionLoading || sessionError || question.video) && (
          <S.LearnSessionIntro>
            {sessionLoading && <S.SessionStatus>학습 자료를 불러오는 중이에요.</S.SessionStatus>}
            {sessionError && <S.SessionStatus>{sessionError}</S.SessionStatus>}
            {question.video && (
              <S.SessionVideoCard>
                <div>
                  <span>수어 미리보기</span>
                  <strong>{question.video.eduVideoTitle || question.targetWord}</strong>
                  <p>{question.video.eduVideoDetail || question.hint}</p>
                </div>
                <video controls src={question.video.eduVideoUrl}>
                  수어 영상을 재생할 수 없어요.
                </video>
              </S.SessionVideoCard>
            )}
          </S.LearnSessionIntro>
        )}

        <S.LearnQuizHeader>
          <S.LearnQuizTitle>{question.title}</S.LearnQuizTitle>
        </S.LearnQuizHeader>

        <S.LearnQuizOptionGrid>
          {question.options.map((option, index) => (
            <LearnQuizOptionCard
              key={option.id}
              option={option}
              index={index}
              selected={selectedOptionId === option.id}
              revealed={status !== "solving"}
              correct={Boolean(option.correct)}
              onClick={() => handleSelect(option.id)}
            />
          ))}
        </S.LearnQuizOptionGrid>

        {status === "solving" ? (
          <S.LearnQuizBottom>
            <S.LearnQuizSkip type="button" onClick={handleNext}>
              건너뛰기
            </S.LearnQuizSkip>
            <S.LearnQuizCheck type="button" disabled={!selectedOptionId} onClick={handleCheck}>
              확인
            </S.LearnQuizCheck>
          </S.LearnQuizBottom>
        ) : (
          <LearnQuizFeedback
            status={status}
            exp={question.exp}
            message={status === "correct" ? question.feedback.correct : question.feedback.incorrect}
            answer={correctOption?.label}
            onNext={handleNext}
          />
        )}
      </S.LearnQuizShell>
    </S.LearnQuizWrap>
  );
};

export default LearnQuizComponent;