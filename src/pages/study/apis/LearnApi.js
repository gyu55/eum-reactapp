// 학습 API 모음: 학습 목록, 단어, 영상, 진행 기록, 보상 요청을 처리합니다.
const BASE_URL = "http://localhost:10000";

const requestJson = async (url, options = {}, errorMessage = "요청 처리에 실패했습니다.") => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(url, {
      ...options,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};

// 학습 목록 조회
export const fetchLearnList = async () =>
  requestJson(`${BASE_URL}/api/edus`, {}, "학습 목록 조회에 실패했습니다.");

// 학습별 단어 목록 조회
export const fetchWordsByLearnId = async (learnId) =>
  requestJson(`${BASE_URL}/api/words/edu/${learnId}`, {}, "학습 단어 조회에 실패했습니다.");

// 학습별 랜덤 단어 목록 조회
export const fetchRandomWordsByLearnId = async (learnId, limit = 5) =>
  requestJson(`${BASE_URL}/api/words/edu/${learnId}/random?limit=${limit}`, {}, "학습 랜덤 단어 조회에 실패했습니다.");

// 학습 영상 조회
export const fetchEduVideoById = async (eduVideoId) =>
  requestJson(`${BASE_URL}/api/edu-videos/${eduVideoId}`, {}, "학습 영상 조회에 실패했습니다.");

// 학습별 전체 단어 개수 조회
export const fetchLearnTotalWordCount = async (learnId) =>
  requestJson(`${BASE_URL}/api/word-studies/edus/${learnId}/total-count`, {}, "학습 전체 단어 개수 조회에 실패했습니다.");

// 학습별 완료 단어 개수 조회
export const fetchLearnCompletedWordCount = async ({ userId, learnId }) =>
  requestJson(`${BASE_URL}/api/word-studies/users/${userId}/edus/${learnId}/completed-count`, {}, "학습 완료 단어 개수 조회에 실패했습니다.");

// 오늘 완료한 단어 개수 조회
export const fetchTodayCompletedWordCount = async (userId) =>
  requestJson(`${BASE_URL}/api/word-studies/users/${userId}/today-completed-count`, {}, "오늘 완료 단어 개수 조회에 실패했습니다.");

// 학습 시작 기록 등록
export const startLearn = async (learnId) =>
  requestJson(
    BASE_URL + "/private/api/edu-starts/edus/" + learnId,
    {
      method: "POST",
      credentials: "include",
    },
    "학습 시작 기록 등록에 실패했습니다."
  );

// 학습 단어 완료 처리
export const finishLearnWord = async ({ userId, eduWordMapId }) =>
  requestJson(
    `${BASE_URL}/api/word-studies`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, eduWordMapId }),
    },
    "단어 학습 완료 처리에 실패했습니다."
  );

// 학습 완료 여부 조회
export const getEduStartCompleted = ({ userId, eduId }) =>
  requestJson(
    `${BASE_URL}/private/api/edu-starts/users/${userId}/edus/${eduId}/completed`,
    {},
    "학습 세션 완료 여부 조회에 실패했습니다."
  );

// 학습 세션 완료 처리
export const completeEduStart = ({ userId, eduId, eduStartTime = 0 }) =>
  requestJson(
    `${BASE_URL}/private/api/edu-starts/users/${userId}/edus/${eduId}/complete?eduStartTime=${eduStartTime}`,
    {
      method: "PATCH",
    },
    "학습 세션 완료 처리에 실패했습니다."
  );

// 학습 세션 문제 풀이 결과 반영
export const recordLearnProgress = ({ userId, eduId, questionNumber, isCorrect }) =>
  requestJson(
    `${BASE_URL}/private/api/edu-starts/users/${userId}/edus/${eduId}/progress`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionNumber, isCorrect }),
    },
    "학습 세션 진행 기록 반영에 실패했습니다."
  );

// 학습 로드맵 보상 수령
export const claimRoadmapReward = ({ userId, eduId }) =>
  requestJson(
    `${BASE_URL}/private/api/edu-starts/users/${userId}/edus/${eduId}/roadmap-reward`,
    {
      method: "POST",
    },
    "학습 로드맵 보상 수령에 실패했습니다."
  );
