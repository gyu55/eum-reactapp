// 수어 검색 API: 검색어 기반 수어 단어 조회 요청
const BASE_URL = "http://localhost:10000";

export const fetchSignWords = async (keyword, pageNo = 1, numOfRows = 10) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(
      `${BASE_URL}/api/sign-words?keyword=${encodeURIComponent(keyword)}&pageNo=${pageNo}&numOfRows=${numOfRows}`,
      { signal: controller.signal }
    );

    if (!response.ok)
      throw new Error("수어 검색 실패");

    const result = await response.json();
    if (!result.success)
      throw new Error(result.message);

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};
