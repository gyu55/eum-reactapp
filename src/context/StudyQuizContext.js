// 퀴즈 컨텍스트 담당: study 내부 퀴즈 진행 상태와 답안을 공유
import { createContext, useMemo, useState } from "react";

export const StudyQuizContext = createContext({
  state: {
    mode: "guest",
    quizId: null,
    quizType: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    result: null,
    loading: false,
    error: null,
  },
  actions: {
    setQuiz: () => {},
    setLoading: () => {},
    setError: () => {},
    selectAnswer: () => {},
    goNext: () => {},
    setResult: () => {},
    resetQuiz: () => {},
  },
});

const initialState = {
  mode: "guest",
  quizId: null,
  quizType: null,
  questions: [],
  currentIndex: 0,
  answers: [],
  result: null,
  loading: false,
  error: null,
};

const StudyQuizProvider = ({ children }) => {
  const [quizState, setQuizState] = useState(initialState);

  const actions = useMemo(
    () => ({
      setQuiz: ({ mode = "guest", quizId, quizType, questions }) => {
        setQuizState({
          ...initialState,
          mode,
          quizId,
          quizType,
          questions: questions || [],
        });
      },
      setLoading: (loading) => {
        setQuizState((prev) => ({ ...prev, loading }));
      },
      setError: (error) => {
        setQuizState((prev) => ({ ...prev, error }));
      },
      selectAnswer: (answer) => {
        setQuizState((prev) => ({
          ...prev,
          answers: [
            ...prev.answers.filter((item) => item.questionId !== answer.questionId),
            answer,
          ],
        }));
      },
      goNext: () => {
        setQuizState((prev) => ({
          ...prev,
          currentIndex: Math.min(prev.currentIndex + 1, Math.max(prev.questions.length - 1, 0)),
        }));
      },
      setResult: (result) => {
        setQuizState((prev) => ({ ...prev, result }));
      },
      resetQuiz: () => {
        setQuizState(initialState);
      },
    }),
    []
  );

  const value = useMemo(() => ({ state: quizState, actions }), [quizState, actions]);

  return <StudyQuizContext.Provider value={value}>{children}</StudyQuizContext.Provider>;
};

export default StudyQuizProvider;
