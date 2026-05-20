const BASE_URL = "http://localhost:10000";

// 문화공공데이터 수어 검색
export const fetchSignWords = async (keyword, pageNo = 1, numOfRows = 10) => {
  const response = await fetch(
    `${BASE_URL}/api/sign-words?keyword=${encodeURIComponent(keyword)}&pageNo=${pageNo}&numOfRows=${numOfRows}`
  );

  if (!response.ok) {
    throw new Error("수어 검색 실패");
  }

  const result = await response.json();
  console.log("수어 검색 응답", result);

  if (!result.success) {
    throw new Error(result.message);
  }

  return result.data;
};
