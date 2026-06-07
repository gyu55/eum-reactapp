// 오!퀴즈 문제 컴포넌트: 로그인 퀴즈 문제 풀이와 정답/오답 상태
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuizFeedback from "../components/QuizFeedback";
import QuizOptionCard from "../components/QuizOptionCard";
import QuizProgress from "../components/QuizProgress";
import QuizShell from "../components/QuizShell";
import { fetchQuizQuestions, submitQuizAnswers } from "../apis/QuizApi";
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
  const chapter = chapterQuizMeta.find((item) => item.id === quiz);
  const backendQuizId = chapter?.backendQuizId;
  const currentIndex = Math.max(Number(id || 1) - 1, 0);
  const currentQuestion = questions[currentIndex];
  const isQuestionMode = Boolean(id);

  // 백엔드 퀴즈 문제와 보기 목록 조회
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

  // 현재 정규 퀴즈 데이터 -> context
  useEffect(() => {
    if (!chapter || questions.length === 0) return;

    actions.setQuiz({
      mode: "member",
      quizId: backendQuizId,
      quizType: "chapter",
      questions,
    });
  }, [actions, backendQuizId, chapter, questions]);

  // 문제 번호가 바뀔 때 선택된 보기 초기화
  useEffect(() => {
    setSelectedOption(null);
  }, [id, quiz]);

  // 현재 문제가 마지막 문제인지 계산하는 값
  const isLastQuestion = useMemo(
    () => currentIndex >= (questions.length || 1) - 1,
    [currentIndex, questions.length]
  );

  // 첫 번째 정규 퀴즈 문제로 이동
  const handleStartQuiz = () => {
    if (questionLoading) return;

    if (questionError || questions.length === 0) {
      alert("퀴즈 문제를 불러온 뒤 다시 시도해주세요.");

      return;
    }

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
    if (!chapter || !backendQuizId) return;

    if (isGuest || !userId || !canSubmitQuizAnswers(backendQuizId, state.answers, questions.length)) {

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

    try {
      const result = await submitQuizAnswers({
        quizId: backendQuizId,
        userId,
        answers,
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
          <h1>{questionLoading ? "퀴즈 문제를 불러오는 중입니다." : questionError || "문제를 찾을 수 없습니다."}</h1>
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
              {currentIndex + 1} / {questions.length}
            </strong>
          </div>
          <em>+{chapter.exp} EXP</em>
        </S.ChapterQuestionHeader>

        <S.ChapterQuestionCard>
          <QuizProgress current={currentIndex + 1} total={questions.length} />

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
