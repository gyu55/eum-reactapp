// 학습 API: 학습 목록, 단어, 학습 완료 요청
const BASE_URL = "http://localhost:10000";

// 학습 목록
export const fetchLearnList = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(`${BASE_URL}/api/edus`, { signal: controller.signal });
    if (!response.ok)
      throw new Error("학습 목록 조회 실패");

    const result = await response.json();
    if (!result.success)
      throw new Error(result.message);

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};

// 학습 단어조회
export const fetchWordsByLearnId = async (learnId) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(`${BASE_URL}/api/words/edu/${learnId}`, { signal: controller.signal });
    if (!response.ok)
      throw new Error("학습 단어 조회 실패");

    const result = await response.json();
    if (!result.success)
      throw new Error(result.message);

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};

// 학습 영상 조회
export const fetchEduVideoById = async (eduVideoId) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(`${BASE_URL}/api/edu-videos/${eduVideoId}`, { signal: controller.signal });
    if (!response.ok)
      throw new Error("학습 영상 조회 실패");

    const result = await response.json();
    if (!result.success)
      throw new Error(result.message);

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};

// 학습 완료
export const finishLearnWord = async ({ userId, eduWordMapId }) => {
  const response = await fetch(`${BASE_URL}/api/word-studies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, eduWordMapId }),
  });
  if (!response.ok)
    throw new Error("단어 학습 완료 실패");

  const result = await response.json();
  if (!result.success)
    throw new Error(result.message);

  return result.data;
};
