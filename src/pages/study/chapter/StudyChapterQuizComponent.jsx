import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuizFeedback from "../components/QuizFeedback";
import QuizOptionCard from "../components/QuizOptionCard";
import QuizProgress from "../components/QuizProgress";
import QuizShell from "../components/QuizShell";
import { fetchQuizQuestions, startQuiz, submitQuizAnswers, updateQuizProgress } from "../apis/QuizApi";
import { StudyQuizContext } from "../../../context/StudyQuizContext";
import { canSubmitQuizAnswers, mapQuizAnswersForSubmit } from "../mappers/quizMapper";
import { useStudyUser } from "../hooks/useStudyUser";
import { chapterQuizMeta } from "./data/chapterQuizMeta";
import * as S from "./style";

const optionLabels = ["A", "B", "C", "D", "E"];

const mapBackendChapterQuestions = (questions = [], fallbackExplanations = []) =>
  questions.map((question, index) => ({
    id: question.id,
    question: question.quizQuestionDetail,
    options: (question.choices || []).map((choice, choiceIndex) => ({
      id: choice.id,
      label: optionLabels[choiceIndex] || String(choice.quizChoiceNumber || choiceIndex + 1),
      text: choice.quizChoiceDetail,
      correct: choice.quizChoiceIsCorrect === 1,
    })),
    explanation: fallbackExplanations[index] || "문제 해설을 확인해보세요.",
  }));

const StudyChapterQuizComponent = () => {
  const navigate = useNavigate();
  const { quiz, id } = useParams();
  const { state, actions } = useContext(StudyQuizContext);
  const { userId, isGuest } = useStudyUser();
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [questionError, setQuestionError] = useState(null);
  const startedQuizRef = useRef(null);
  const quizStartedAtRef = useRef(Date.now());
  const progressedQuestionIdsRef = useRef(new Set());
  const chapter = chapterQuizMeta.find((item) => item.id === quiz);
  const backendQuizId = chapter?.backendQuizId;
  const currentIndex = Math.max(Number(id || 1) - 1, 0);
  const currentQuestion = questions[currentIndex];
  const correctOption = currentQuestion?.options.find((option) => option.correct);
  const isQuestionMode = Boolean(id);

  useEffect(() => {
    if (!backendQuizId) return;

    let ignore = false;

    const loadQuestions = async () => {
      setQuestionLoading(true);
      setQuestionError(null);

      try {
        const data = await fetchQuizQuestions(backendQuizId);

        if (!ignore) {
          setQuestions(mapBackendChapterQuestions(data, chapter?.explanations));
        }
      } catch {
        if (!ignore) {
          setQuestionError("퀴즈 문제를 불러오지 못했습니다.");
          setQuestions([]);
        }
      } finally {
        if (!ignore) {
          setQuestionLoading(false);
        }
      }
    };

    loadQuestions();

    return () => {
      ignore = true;
    };
  }, [backendQuizId, chapter?.explanations]);

  useEffect(() => {
    if (!isQuestionMode || isGuest || !userId || !backendQuizId) return;
    if (Number(id || 1) !== 1) return;

    const startKey = `${userId}-${backendQuizId}`;
    if (startedQuizRef.current === startKey) return;

    startedQuizRef.current = startKey;
    startQuiz({ quizId: backendQuizId, userId }).catch(() => {
      startedQuizRef.current = null;
    });
  }, [backendQuizId, id, isGuest, isQuestionMode, userId]);

  useEffect(() => {
    if (!chapter || questions.length === 0) return;

    actions.setQuiz({
      mode: "member",
      quizId: backendQuizId,
      quizType: "chapter",
      questions,
    });
  }, [actions, backendQuizId, chapter, questions]);

  useEffect(() => {
    setSelectedOption(null);

    if (Number(id || 1) === 1) {
      quizStartedAtRef.current = Date.now();
    }
  }, [id, quiz]);

  const isLastQuestion = useMemo(
    () => currentIndex >= (questions.length || 1) - 1,
    [currentIndex, questions.length]
  );

  const handleStartQuiz = () => {
    if (questionLoading) return;

    if (questionError || questions.length === 0) {
      alert("퀴즈 문제를 불러오는 중입니다. 다시 시도해주세요.");

      return;
    }

    quizStartedAtRef.current = Date.now();
    navigate(`/study/chapter/${quiz}/questions/1`);
  };

  const handleSelectOption = (option) => {
    if (selectedOption || !currentQuestion) return;

    setSelectedOption(option);

    actions.selectAnswer({
      questionId: currentQuestion.id,
      selectedId: option.id,
      isCorrect: option.correct,
    });
  };

  const recordCurrentQuestionProgress = async () => {
    if (isGuest || !userId || !backendQuizId || !currentQuestion) return;
    if (progressedQuestionIdsRef.current.has(currentQuestion.id)) return;

    progressedQuestionIdsRef.current.add(currentQuestion.id);

    try {
      await updateQuizProgress({
        quizId: backendQuizId,
        userId,
        totalCount: questions.length,
        isCorrect: selectedOption?.correct ? 1 : 0,
      });
    } catch {
      progressedQuestionIdsRef.current.delete(currentQuestion.id);
    }
  };

  const submitChapterQuiz = async () => {
    if (!chapter || !backendQuizId) return;

    if (isGuest || !userId || state.answers.length === 0 || !canSubmitQuizAnswers(backendQuizId, state.answers, state.answers.length)) {
      actions.setResult({
        quizId: backendQuizId,
        completed: true,
        submitted: false,
        reason: isGuest || !userId ? "guest" : "mock",
        questions,
        answers: state.answers,
        finishedAt: new Date().toISOString(),
      });

      return;
    }

    const answers = mapQuizAnswersForSubmit(state.answers);
    const quizAttemptTime = Math.max(
      1,
      Math.round((Date.now() - quizStartedAtRef.current) / 1000)
    );

    try {
      const result = await submitQuizAnswers({
        quizId: backendQuizId,
        userId,
        answers,
        quizAttemptTime,
      });

      actions.setResult({
        quizId: backendQuizId,
        completed: true,
        submitted: true,
        data: result,
        questions,
        answers: state.answers,
        finishedAt: new Date().toISOString(),
      });
    } catch {
      actions.setResult({
        quizId: backendQuizId,
        completed: true,
        submitted: false,
        questions,
        answers: state.answers,
        finishedAt: new Date().toISOString(),
      });
    }
  };

  const handleNextQuestion = async () => {
    await recordCurrentQuestionProgress();

    if (isLastQuestion) {
      await submitChapterQuiz();
      navigate(`/study/chapter/${quiz}/result`);
      return;
    }

    navigate(`/study/chapter/${quiz}/questions/${currentIndex + 2}`);
  };

  const handleConfirm = () => {
    if (!selectedOption) {
      alert("답을 먼저 선택해주세요.");

      return;
    }

    handleNextQuestion();
  };

  if (!chapter) {
    return (
      <S.ChapterReadyWrap>
        <S.ChapterReadyCard>
          <h1>퀴즈를 찾을 수 없습니다.</h1>
          <button type="button" onClick={() => navigate("/study/chapter")}>
            목록으로 돌아가기
          </button>
        </S.ChapterReadyCard>
      </S.ChapterReadyWrap>
    );
  }

  if (isQuestionMode && !currentQuestion) {
    return (
      <QuizShell>
        <S.ChapterQuestionCard>
          <h1>{questionLoading ? "문제 불러오는 중" : questionError || "문제를 찾을 수 없습니다."}</h1>
          <button type="button" onClick={() => navigate("/study/chapter")}>
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
          <button type="button" onClick={() => navigate("/study/chapter")}>
            ←
          </button>
          <div>
            <span>{chapter.title}</span>
          </div>
        </S.ChapterQuestionHeader>

        <S.ChapterQuestionCard>
          <S.ChapterProgressLine>
            <QuizProgress current={currentIndex + 1} total={questions.length} />
            <S.ChapterProgressCount>
              {currentIndex + 1} / {questions.length}
            </S.ChapterProgressCount>
          </S.ChapterProgressLine>

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
              title={selectedOption.correct ? "정답이에요!" : "아쉬워요!"}
              answer={!selectedOption.correct ? `정답은 "${correctOption?.text || "정답"}"이에요.` : undefined}
              desc={currentQuestion.explanation}
              onNext={handleNextQuestion}
              buttonText={isLastQuestion ? "결과 보기" : "다음 문제"}
            />
          )}

          {!selectedOption && (
            <S.ChapterBottomBar>
              <button type="button" onClick={handleNextQuestion}>
                건너뛰기
              </button>
              <button type="button" onClick={handleConfirm}>
                {isLastQuestion ? "결과 보기" : "확인"}
              </button>
            </S.ChapterBottomBar>
          )}
        </S.ChapterQuestionCard>
      </QuizShell>
    );
  }

  return (
    <S.ChapterReadyWrap>
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
          {questionLoading ? "문제 불러오는 중" : "퀴즈 시작하기"}
        </button>
        {questionError && <p>{questionError}</p>}
      </S.ChapterReadyCard>
    </S.ChapterReadyWrap>
  );
};

export default StudyChapterQuizComponent;