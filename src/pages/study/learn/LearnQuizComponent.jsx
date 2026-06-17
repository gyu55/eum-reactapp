// 학습 퀴즈 컴포넌트: 단어 조회, 문제 생성, 정답 확인, 복습 흐름을 처리합니다.
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchEduVideoById, fetchRandomWordsByLearnId, finishLearnWord, completeEduStart, startLearn, recordLearnProgress } from "../apis/LearnApi";
import { submitQuizAnswers } from "../apis/QuizApi";
import { StudyQuizContext } from "../../../context/StudyQuizContext";
import { useStudyUser } from "../hooks/useStudyUser";
import { canSubmitQuizAnswers, mapQuizAnswersForSubmit } from "../mappers/quizMapper";
import { getLearnQuiz } from "./data/learnQuizMock";
import LearnQuizFeedback from "./parts/LearnQuizFeedback";
import LearnQuizOptionCard from "./parts/LearnQuizOptionCard";
import LearnQuizReview from "./parts/LearnQuizReview";
import * as S from "./style";

const optionIcons = ["수어", "표현", "단어", "연습", "복습"];

// 고정 순서 생성: 같은 세션에서는 같은 문제 순서를 유지
const getOrderValue = (value) => {
  const hash = String(value).split("").reduce((sum, character) => ((sum * 31) + character.charCodeAt(0)) >>> 0, 0);
  const mixedHash = Math.imul(hash ^ (hash >>> 16), 0x45d9f3b);

  return (mixedHash ^ (mixedHash >>> 16)) >>> 0;
};

const shuffleItems = (items, seed) =>
  [...items].sort((left, right) => {
    const leftOrder = getOrderValue(`${seed}-${left.id}`);
    const rightOrder = getOrderValue(`${seed}-${right.id}`);

    return leftOrder - rightOrder;
  });

// 단어 보기 생성: 백엔드 단어를 퀴즈 보기 카드 형식으로 변환
const createWordOption = (word, index, correct = false, videoMode = false) => ({
  id: `${correct ? "correct" : "word"}-${word.id}`,
  label: word.wordsTitle,
  desc: word.wordsDetail || "같이 학습할 수어 표현이에요.",
  icon: videoMode ? word.wordsTitle : optionIcons[index % optionIcons.length],
  hideText: videoMode,
  correct,
});

// 오답 보기 생성: 같은 학습 단어를 우선 사용, 부족하면 임시 보기로 채운다
const createWrongOptions = ({ word, words, baseQuiz, correctLabel, videoMode = false }) => {
  const wordOptions = words
    .filter((item) => item.id !== word.id && item.wordsTitle && item.wordsTitle !== correctLabel)
    .slice(0, 2)
    .map((item, index) => createWordOption(item, index, false, videoMode));

  if (wordOptions.length >= 2) {
    return wordOptions;
  }

  const fallbackOptions = baseQuiz.questions
    .flatMap((item) => item.options)
    .filter((option) => option.label && option.label !== correctLabel)
    .filter((option, index, options) => options.findIndex((item) => item.label === option.label) === index)
    .slice(0, 2 - wordOptions.length)
    .map((option, index) => ({
      ...option,
      id: `fallback-${word.id}-${index}`,
      correct: false,
    }));

  return [...wordOptions, ...fallbackOptions];
};

// 보기 순서 생성: 정답과 오답 위치를 세션마다 섞어서 배치
const createQuestionOptions = ({ word, words, baseQuiz, correctLabel, videoMode = false, seed }) => {
  const wrongOptions = createWrongOptions({ word, words, baseQuiz, correctLabel, videoMode });
  const correctOption = createWordOption(word, wrongOptions.length, true, videoMode);

  return shuffleItems([...wrongOptions, correctOption].filter(Boolean), `${seed}-${word.id}`);
};

const LearnQuizComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type = "greeting", id = "1" } = useParams();

  const {
    state,
    actions: { setQuiz, selectAnswer, setResult },
  } = useContext(StudyQuizContext);

  const { userId, isGuest } = useStudyUser();

  const searchParams = new URLSearchParams(location.search);
  const queryEduId = searchParams.get("eduId");
  const routeEduId = location.state?.eduId || queryEduId;
  const isBackendQuiz = Boolean(routeEduId);

  const lessonTitle = location.state?.lessonTitle;
  const [sessionWords, setSessionWords] = useState([]); // 백엔드에서 받은 단어 목록
  const [sessionVideos, setSessionVideos] = useState({});
  const [sessionLoading, setSessionLoading] = useState(false);
  const [sessionError, setSessionError] = useState(null);
  const [sessionSeed, setSessionSeed] = useState(Math.random);
  const [resultSummary, setResultSummary] = useState(null);
  const sessionStartedAtRef = useRef(Date.now());
  const sessionCompletedRef = useRef(false);
  const completedSessionResultRef = useRef(null);
  const baseQuiz = useMemo(() => getLearnQuiz(type), [type]);

  const getElapsedSeconds = () => Math.max(1, Math.round((Date.now() - sessionStartedAtRef.current) / 1000));

  const formatSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const restSeconds = seconds % 60;

    return minutes > 0 ? `${minutes}분 ${restSeconds}초` : `${restSeconds}초`;
  };

  // OpenAPI 단어만 사용: eduId로 들어온 학습 퀴즈에서는 기존 임시 단어를 섞지 않습니다.
  const quizWords = useMemo(() => {
    return sessionWords;
  }, [sessionWords]);

  const orderedQuizWords = useMemo(() => shuffleItems(quizWords, sessionSeed), [quizWords, sessionSeed]);

  const quiz = useMemo(() => {
    if (orderedQuizWords.length === 0) {
      return isBackendQuiz
        ? {
            ...baseQuiz,
            id: routeEduId || baseQuiz.id,
            title: lessonTitle || baseQuiz.title,
            questions: [],
          }
        : baseQuiz;
    }

    return {
      ...baseQuiz,
      id: routeEduId || baseQuiz.id,
      title: lessonTitle || baseQuiz.title,
      questions: orderedQuizWords.map((word, index) => {
        const fallback = baseQuiz.questions[index % baseQuiz.questions.length];
        const correctLabel = word.wordsTitle || fallback.targetWord || fallback.options.find((option) => option.correct)?.label;
        const video = sessionVideos[word.id];
        const options = createQuestionOptions({
          word: { ...word, wordsTitle: correctLabel },
          words: orderedQuizWords,
          baseQuiz,
          correctLabel,
          videoMode: Boolean(video),
          seed: sessionSeed,
        });

        return {
          ...fallback,
          id: word.id,
          title: video ? "이 수어는 어떤 뜻일까요?" : `다음 중 어느 수어가 "${correctLabel}"일까요?`,
          targetWord: correctLabel,
          hint: word.wordsDetail || fallback.hint,
          word,
          video,
          options,
          feedback: {
            ...fallback.feedback,
            correct: `"${correctLabel}" 표현을 골랐어요.`,
            incorrect: `정답은 "${correctLabel}"이에요.`,
            reviewTitle: correctLabel,
            reviewDesc: word.wordsDetail || fallback.feedback.reviewDesc,
          },
        };
      }),
    };
  }, [baseQuiz, isBackendQuiz, lessonTitle, orderedQuizWords, routeEduId, sessionSeed, sessionVideos]);

  const currentIndex = Math.max(Number(id) - 1, 0);
  const question = quiz.questions[currentIndex] || quiz.questions[0];
  const hasQuestion = Boolean(question);
  const totalQuestions = Math.max(quiz.questions.length, 1);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [status, setStatus] = useState("solving");
  const [reviewIndex, setReviewIndex] = useState(0);
  const [savedEduWordMapIds, setSavedEduWordMapIds] = useState([]);

  // 세션 자료 조회: 학습 시작 후 단어와 영상을 불러와 문제 세션 구성
  useEffect(() => {
    if (!routeEduId) return;

    let ignore = false;

    const loadSession = async () => {
      setSessionLoading(true);
      setSessionError(null);

      try {
        if (!isGuest && userId && routeEduId) {
          try {
            await startLearn(routeEduId);
            sessionStartedAtRef.current = Date.now();
            sessionCompletedRef.current = false;
            completedSessionResultRef.current = null;
          } catch {
            // 시작 기록 실패가 문제 풀이 흐름을 막지 않도록 처리
          }
        }

        const words = await fetchRandomWordsByLearnId(routeEduId, 5);
        if (ignore) return;

        setSessionSeed(Math.random());
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
        if (!ignore) {
          setSessionError("학습 단어를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.");
        }
      } finally {
        if (!ignore) {
          setSessionLoading(false);
        }
      }
    };

    loadSession();

    return () => {
      ignore = true;
    };
  }, [isGuest, routeEduId, userId]);

  // 퀴즈 초기화: URL이나 문제 목록이 바뀌면 컨텍스트 문제 목록 갱신
  useEffect(() => {
    setQuiz({
      mode: "learn",
      quizId: quiz.id,
      quizType: type,
      questions: quiz.questions,
    });
  }, [quiz, setQuiz, type]);

  // 문제 변경 초기화: 다음 문제로 이동하면 선택 상태 초기화
  useEffect(() => {
    setSelectedOptionId(null);
    setStatus("solving");
  }, [id]);

  useEffect(() => {
    setSavedEduWordMapIds([]);
  }, [isGuest, routeEduId, userId]);

  const selectedOption = question?.options.find((option) => option.id === selectedOptionId) || null;
  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const progressStatus = status === "correct" ? "correct" : status === "incorrect" ? "incorrect" : "solving";
  const isLastQuestion = currentIndex >= quiz.questions.length - 1;
  const isSignalQuiz = type === "signal";
  const reviewQuestions = useMemo(() => {
    if (!question) return [];

    const wrongQuestionIds = state.answers
      .filter((answer) => answer.correct === false)
      .map((answer) => String(answer.questionId));
    const wrongQuestions = quiz.questions.filter((item) => wrongQuestionIds.includes(String(item.id)));
    const randomWrongQuestion = wrongQuestions[Math.floor(Math.random() * wrongQuestions.length)];

    return randomWrongQuestion ? [randomWrongQuestion] : [question];
  }, [question, quiz.questions, state.answers]);
  const reviewQuestion = reviewQuestions[reviewIndex] || reviewQuestions[0];

  // 답안 선택: 사용자가 고른 보기 저장
  const handleSelect = (optionId) => {
    if (status !== "solving") return;

    setSelectedOptionId(optionId);
  };

  // 단어 완료 저장: 문제를 맞힌 단어만 학습 진행으로 기록
  const saveCurrentWord = async () => {
    const eduWordMapId = question?.word?.eduWordMapId;

    if (isGuest || !userId || !eduWordMapId || savedEduWordMapIds.includes(eduWordMapId)) {
      return;
    }

    try {
      await finishLearnWord({ userId, eduWordMapId });
      setSavedEduWordMapIds((prev) => [...prev, eduWordMapId]);
    } catch {
      // 단어 저장 실패가 문제 풀이 흐름을 막지 않도록 처리합
    }
  };

  // 정답 확인: 선택한 보기의 정답 여부 확인 및 세션 진행 기록
  const handleCheck = async () => {
    if (status !== "solving" || !selectedOption) return;

    const isCorrect = Boolean(selectedOption.correct);

    selectAnswer({
      questionId: question.id,
      answerId: selectedOption.id,
      correct: isCorrect,
    });

    setStatus(isCorrect ? "correct" : "incorrect");

    if (!isGuest && userId && routeEduId) {
      try {
        await recordLearnProgress({
          userId,
          eduId: routeEduId,
          isCorrect: isCorrect ? 1 : 0,
        });
      } catch {
        // 학습 세션 진행 기록 실패가 문제 풀이 흐름을 막지 않도록 처리
      }
    }

    if (isCorrect) {
      await saveCurrentWord();
    }
  };

  // 학습 완료: 결과 저장을 시도하고 결과 팝업 표시
  const createLearnResultSummary = (submitted = false, data = null, completedSession = null) => {
    const completedResult = completedSession || completedSessionResultRef.current;
    const answers = state.answers || [];
    const totalCount = Number(completedResult?.totalCount ?? (quiz.questions.length || answers.length || totalQuestions));
    const correctCount = Number(
      completedResult?.correctCount ?? answers.filter((answer) => answer.correct === true || answer.isCorrect === true).length
    );
    const accuracy = Number(completedResult?.accuracy ?? (totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0));
    const wrongItems = quiz.questions
      .map((item) => {
        const answer = answers.find((savedAnswer) => String(savedAnswer.questionId) === String(item.id));
        const selected = item.options?.find((option) => String(option.id) === String(answer?.answerId || answer?.selectedId));
        const correctOption = item.options?.find((option) => option.correct);

        return {
          question: item.title,
          selectedText: selected?.label || "선택한 답이 없어요",
          correctText: correctOption?.label || item.targetWord || "정답 정보가 없어요",
          isCorrect: answer?.correct === true || answer?.isCorrect === true,
        };
      })
      .filter((item) => !item.isCorrect);
    const randomWrongItem = wrongItems[Math.floor(Math.random() * wrongItems.length)] || null;

    return {
      submitted,
      data,
      totalCount,
      correctCount,
      accuracy,
      exp: Number(completedResult?.exp ?? correctCount * 20),
      spentTime: formatSeconds(Number(completedResult?.spentTime ?? getElapsedSeconds())),
      wrongItem: randomWrongItem,
    };
  };

  const handleFinish = async () => {
    if (isGuest || !userId || !canSubmitQuizAnswers(quiz.id, state.answers)) {
      const summary = createLearnResultSummary(false);

      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: false,
        reason: isGuest || !userId ? "guest" : "mock",
        finishedAt: new Date().toISOString(),
      });
      setResultSummary(summary);

      return;
    }

    const answers = mapQuizAnswersForSubmit(state.answers);

    try {
      const result = await submitQuizAnswers({
        quizId: quiz.id,
        userId,
        answers,
      });
      
      const completedSession = routeEduId ? await completeLearnSession() : null;

      const summary = createLearnResultSummary(true, result, completedSession);

      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: true,
        data: result,
        finishedAt: new Date().toISOString(),
      });
      setResultSummary(summary);
    } catch {
      const completedSession = routeEduId ? await completeLearnSession() : null;
      
      const summary = createLearnResultSummary(false, null, completedSession);

      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: false,
        finishedAt: new Date().toISOString(),
      });
      setResultSummary(summary);
    }
  };

  // 다음 문제: 다음 문제로 이동하거나 마지막 문제에서 복습 화면으로 전환합니다.
  const completeLearnSession = async () => {
    if (isGuest || !userId || !routeEduId) {
      return completedSessionResultRef.current;
    }

    if (sessionCompletedRef.current) {
      return completedSessionResultRef.current;
    }

    try {
      const completedSession = await completeEduStart({ userId, eduId: routeEduId, eduStartTime: getElapsedSeconds() });
      completedSessionResultRef.current = completedSession;
      sessionCompletedRef.current = true;
      return completedSession;
    } catch {
      return completedSessionResultRef.current;
    }
  };
  const handleNext = async () => {
    if (isLastQuestion) {
      if (status !== "solving") {
        await completeLearnSession();
      }

      setReviewIndex(0);
      setStatus("review");

      return;
    }

    const nextQuery = routeEduId ? `?eduId=${routeEduId}` : "";
    navigate(`/study/learn/quiz/${type}/questions/${currentIndex + 2}${nextQuery}`);
  };

  // 닫기: 학습 메인 화면으로 이동합니다.
  const handleClose = () => {
    navigate("/study/learn");
  };

  // 복습 다음: 오답 복습을 순서대로 보여주고 마지막에 학습을 종료합니다.
  const handleReviewNext = () => {
    if (reviewQuestions.length > 0 && reviewIndex < reviewQuestions.length - 1) {
      setReviewIndex((prev) => prev + 1);

      return;
    }

    handleFinish();
  };

  const handleResultReplay = () => {
    setResultSummary(null);
    setStatus("solving");
    setSelectedOptionId(null);
    setReviewIndex(0);
    const firstQuery = routeEduId ? `?eduId=${routeEduId}` : "";
    navigate(`/study/learn/quiz/${type}/questions/1${firstQuery}`);
  };

  const resultPopup = resultSummary && (
    <S.LearnResultOverlay>
      <S.LearnResultModal>
        <S.LearnResultCelebrate>🎉</S.LearnResultCelebrate>
        <S.LearnResultTitle>학습 완료!</S.LearnResultTitle>
        <S.LearnResultAccuracy>{resultSummary.accuracy}%</S.LearnResultAccuracy>
        <S.LearnResultSubText>
          {resultSummary.totalCount}문제 중 {resultSummary.correctCount}개 정답
        </S.LearnResultSubText>

        <S.LearnResultStatGrid>
          <div>
            <span>🎯</span>
            <small>정답</small>
            <strong>{resultSummary.correctCount}개</strong>
          </div>
          <div>
            <span>⚡</span>
            <small>EXP</small>
            <strong>+{resultSummary.exp}</strong>
          </div>
          <div>
            <span>⏱️</span>
            <small>시간</small>
            <strong>{resultSummary.spentTime}</strong>
          </div>
        </S.LearnResultStatGrid>

        <S.LearnResultWrongBox>
          <strong>복습 추천 문제</strong>
          {resultSummary.wrongItem ? (
            <S.LearnResultWrongItem>
              <p>Q. {resultSummary.wrongItem.question}</p>
              <span>내 답: {resultSummary.wrongItem.selectedText}</span>
              <em>정답: {resultSummary.wrongItem.correctText}</em>
            </S.LearnResultWrongItem>
          ) : (
            <p>틀린 문제가 없어요.</p>
          )}
        </S.LearnResultWrongBox>

        <S.LearnResultLine />
        <S.LearnResultActions>
          <button type="button" onClick={() => navigate("/study/learn")}>목록으로</button>
          <button type="button" onClick={handleResultReplay}>다시풀기</button>
        </S.LearnResultActions>
      </S.LearnResultModal>
    </S.LearnResultOverlay>
  );

  if (!hasQuestion) {
    const emptyMessage = sessionLoading
      ? "학습 단어를 불러오는 중이에요."
      : sessionError || "등록된 OpenAPI 학습 단어가 없어요. 관리자에서 학습 단어를 연결해 주세요.";

    return (
      <S.LearnQuizWrap>
        <S.LearnQuizShell>
          <S.LearnQuizTop>
            <S.LearnQuizClose type="button" onClick={handleClose} aria-label="퀴즈 닫기">
              ×
            </S.LearnQuizClose>
            <S.LearnQuizProgress aria-label="학습 퀴즈 진행률" $progress={0} $status="solving">
              <span />
            </S.LearnQuizProgress>
            <S.LearnQuizCount>0 / 0</S.LearnQuizCount>
          </S.LearnQuizTop>

          <S.LearnQuizHeader>
            <S.LearnQuizTitle>{emptyMessage}</S.LearnQuizTitle>
          </S.LearnQuizHeader>

          <S.LearnQuizBottom>
            <S.LearnQuizSkip type="button" onClick={handleClose}>
              학습으로 돌아가기
            </S.LearnQuizSkip>
          </S.LearnQuizBottom>
        </S.LearnQuizShell>
        {resultPopup}
      </S.LearnQuizWrap>
    );
  }

  if (status === "review") {
    return (
      <S.LearnQuizWrap>
        <S.LearnQuizShell>
          <LearnQuizReview
            label={isSignalQuiz ? "수신호 배우기" : "수어 배우기"}
            headline={isSignalQuiz ? "수신호를 기억해볼까요?" : "수어를 기억해볼까요?"}
            mediaText={isSignalQuiz ? "수신호 이미지/영상 영역" : "수어 이미지/영상 영역"}
            wordLabel={isSignalQuiz ? "수신호 표현" : "수어 표현"}
            title={reviewQuestion.feedback.reviewTitle}
            desc={reviewQuestion.feedback.reviewDesc}
            videoUrl={reviewQuestion.video?.eduVideoUrl}
            imageUrl={reviewQuestion.word?.wordsImage}
            onSkip={handleFinish}
            onRemember={handleReviewNext}
          />
        </S.LearnQuizShell>
        {resultPopup}
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
            {currentIndex + 1} / {totalQuestions}
          </S.LearnQuizCount>
        </S.LearnQuizTop>

        <S.LearnQuizHeader>
          <S.LearnQuizTitle>{question.title}</S.LearnQuizTitle>
        </S.LearnQuizHeader>

        {(sessionLoading || sessionError || question.video) && (
          <S.LearnSessionIntro>
            {sessionLoading && <S.SessionStatus>학습 자료를 불러오는 중이에요.</S.SessionStatus>}
            {sessionError && <S.SessionStatus>{sessionError}</S.SessionStatus>}
            {question.video && (
              <S.SessionVideoCard>
                <video controls src={question.video.eduVideoUrl}>
                  수어 영상을 재생할 수 없어요.
                </video>
              </S.SessionVideoCard>
            )}
          </S.LearnSessionIntro>
        )}

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
            exp={status === "correct" ? (isBackendQuiz ? 20 : question.exp) : 0}
            message={status === "correct" ? question.feedback.correct : question.feedback.incorrect}
            description={question.word?.wordsDetail || question.hint}
            onNext={handleNext}
          />
        )}
      </S.LearnQuizShell>
      {resultPopup}
    </S.LearnQuizWrap>
  );
};

export default LearnQuizComponent;

