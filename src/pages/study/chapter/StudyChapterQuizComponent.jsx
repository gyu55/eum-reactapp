// 오!퀴즈 문제 컴포넌트: 로그인 퀴즈 문제 풀이와 정답/오답 상태
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuizFeedback from "../components/QuizFeedback";
import QuizOptionCard from "../components/QuizOptionCard";
import QuizProgress from "../components/QuizProgress";
import QuizShell from "../components/QuizShell";
import { submitQuizAnswers } from "../apis/QuizApi";
import { StudyQuizContext } from "../../../context/StudyQuizContext";
import { canSubmitQuizAnswers, mapQuizAnswersForSubmit } from "../mappers/quizMapper";
import { useStudyUser } from "../hooks/useStudyUser";
import { chapterQuizMock } from "./data/chapterQuizMock";
import * as S from "./style";

const StudyChapterQuizComponent = () => {
  const navigate = useNavigate();
  const { quiz, id } = useParams();
  const { state, actions } = useContext(StudyQuizContext);
  const { userId, isGuest } = useStudyUser();
  const [selectedOption, setSelectedOption] = useState(null);
  const chapter = chapterQuizMock.find((item) => item.id === quiz);
  const currentIndex = Math.max(Number(id || 1) - 1, 0);
  const currentQuestion = chapter?.questions?.[currentIndex];
  const isQuestionMode = Boolean(id);

  // 현재 정규 퀴즈 데이터 -> context
  useEffect(() => {
    if (!chapter) return;

    actions.setQuiz({
      mode: "member",
      quizId: chapter.id,
      quizType: "chapter",
      questions: chapter.questions,
    });
  }, [actions, chapter]);

  // 문제 번호가 바뀔 때 선택된 보기 초기화
  useEffect(() => {
    setSelectedOption(null);
  }, [id, quiz]);

  // 현재 문제가 마지막 문제인지 계산하는 값
  const isLastQuestion = useMemo(
    () => currentIndex >= (chapter?.questions?.length || 1) - 1,
    [chapter, currentIndex]
  );

  // 첫 번째 정규 퀴즈 문제로 이동
  const handleStartQuiz = () => {
    navigate(`/study/chapter/${quiz}/questions/1`);
  };

  // 보기를 선택했을 때 답안을 저장
  const handleSelectOption = (option) => {

    if (selectedOption || !currentQuestion) return;

    setSelectedOption(option);

    actions.selectAnswer({
      questionId: currentQuestion.id,
      selectedId: option.id,
      isCorrect: option.correct,
    });
  };

  // 퀴즈 제출: 마지막 문제 이후 백엔드에 답안을 저장
  const submitChapterQuiz = async () => {
    if (!chapter) return;

    if (isGuest || !userId || !canSubmitQuizAnswers(chapter.id, state.answers)) {

      actions.setResult({
        quizId: chapter.id,
        completed: true,
        submitted: false,
        reason: isGuest || !userId ? "guest" : "mock",
        finishedAt: new Date().toISOString(),
      });

      return;
    }

    const answers = mapQuizAnswersForSubmit(state.answers);

    try {
      const result = await submitQuizAnswers({
        quizId: chapter.id,
        userId,
        answers,
      });

      actions.setResult({
        quizId: chapter.id,
        completed: true,
        submitted: true,
        data: result,
        finishedAt: new Date().toISOString(),
      });
    } catch {
      actions.setResult({
        quizId: chapter.id,
        completed: true,
        submitted: false,
        finishedAt: new Date().toISOString(),
      });
    }
  };

  // 다음 문제 또는 결과 화면으로 이동
  const handleNextQuestion = async () => {
    if (isLastQuestion) {
      await submitChapterQuiz();
      navigate(`/study/chapter/${quiz}/result`);
      return;
    }

    navigate(`/study/chapter/${quiz}/questions/${currentIndex + 2}`);
  };

  // 선택 없이 확인했을 때 안내
  const handleConfirm = () => {
    if (!selectedOption) {
      alert("답을 먼저 선택해주세요.");

      return;
    }

    handleNextQuestion();
  };

  if (!chapter) {
    return (
      <S.ChapterWrap>
        <S.ChapterReadyCard>
          <h1>퀴즈를 찾을 수 없습니다.</h1>
          <button type="button" onClick={() => navigate("/study/chapter")}>
            목록으로 돌아가기
          </button>
        </S.ChapterReadyCard>
      </S.ChapterWrap>
    );
  }

  if (isQuestionMode && !currentQuestion) {
    return (
      <QuizShell>
        <S.ChapterQuestionCard>
          <h1>문제를 찾을 수 없습니다.</h1>
          <button type="button" onClick={() => navigate(`/study/chapter/${quiz}`)}>
            퀴즈 안내로 돌아가기
          </button>
        </S.ChapterQuestionCard>
      </QuizShell>
    );
  }

  if (isQuestionMode) {
    return (
      <QuizShell>
        <S.ChapterQuestionHeader>
          <button type="button" onClick={() => navigate(`/study/chapter/${quiz}`)}>
            ←
          </button>
          <div>
            <span>{chapter.title}</span>
            <strong>
              {currentIndex + 1} / {chapter.questions.length}
            </strong>
          </div>
          <em>+{chapter.exp} EXP</em>
        </S.ChapterQuestionHeader>

        <S.ChapterQuestionCard>
          <QuizProgress current={currentIndex + 1} total={chapter.questions.length} />

          <S.ChapterQuestionInfo>
            <span>{chapter.label} 퀴즈</span>
            <h1>{currentQuestion.question}</h1>
          </S.ChapterQuestionInfo>

          <S.ChapterOptionList>
            {currentQuestion.options.map((option) => (
              <QuizOptionCard
                key={option.id}
                label={option.label}
                selected={selectedOption?.id === option.id}
                status={selectedOption?.id === option.id ? (option.correct ? "correct" : "wrong") : undefined}
                onClick={() => handleSelectOption(option)}
              >
                {option.text}
              </QuizOptionCard>
            ))}
          </S.ChapterOptionList>

          {selectedOption && (
            <QuizFeedback
              status={selectedOption.correct ? "correct" : "wrong"}
              title={selectedOption.correct ? "정답이에요!" : "오답이에요"}
              desc={currentQuestion.explanation}
              onNext={handleNextQuestion}
              buttonText={isLastQuestion ? "결과 보기" : "다음 문제"}
            />
          )}

          <S.ChapterBottomBar>
            <button type="button" onClick={handleNextQuestion}>
              건너뛰기
            </button>
            <button type="button" onClick={handleConfirm}>
              {isLastQuestion ? "결과 보기" : "확인"}
            </button>
          </S.ChapterBottomBar>
        </S.ChapterQuestionCard>
      </QuizShell>
    );
  }

  return (
    <S.ChapterWrap>
      <S.ChapterReadyCard>
        <span>{chapter.label}</span>
        <img src={chapter.image} alt={`${chapter.title} 아이콘`} />
        <h1>{chapter.title}</h1>
        <p>{chapter.desc}</p>
        <S.ChapterMeta>
          <span>{chapter.level}</span>
          <span>{chapter.questionCount}문제</span>
          <span>+{chapter.exp} EXP</span>
        </S.ChapterMeta>
        <button type="button" onClick={handleStartQuiz}>
          퀴즈 시작하기
        </button>
      </S.ChapterReadyCard>
    </S.ChapterWrap>
  );
};

export default StudyChapterQuizComponent;