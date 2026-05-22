// 퀴즈 API 담당: 퀴즈 목록, 문제 조회, 답안 제출 요청
const BASE_URL = "http://localhost:10000";

// 비회원 퀴즈
export const fetchExperienceQuiz = async (quizType) => {
  const response = await fetch(`${BASE_URL}/api/study/experience/quizzes/${quizType}`);

  if (!response.ok)
    throw new Error("체험 퀴즈 조회 실패");

  const result = await response.json();
  if (!result.success)
    throw new Error(result.message);

  return result.data;
};


export const fetchQuizQuestions = async (quizId) => {
  const response = await fetch(`${BASE_URL}/api/quizzes/${quizId}/questions`);

  if (!response.ok)
    throw new Error("퀴즈 문제 조회 실패");

  const result = await response.json();
  if (!result.success)
    throw new Error(result.message);

  return result.data;
};

export const fetchQuizChoices = async (questionId) => {
  const response = await fetch(`${BASE_URL}/api/quiz-questions/${questionId}/choices`);

  if (!response.ok)
    throw new Error("퀴즈 보기 조회 실패");

  const result = await response.json();
  if (!result.success)
    throw new Error(result.message);

  return result.data;
};

export const submitQuizAnswers = async ({ quizId, userId, answers }) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(`${BASE_URL}/api/quizzes/${quizId}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, answers }),
      signal: controller.signal,
    });

    if (!response.ok)
      throw new Error("퀴즈 제출 실패");

    const result = await response.json();
    if (!result.success)
      throw new Error(result.message);

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};
