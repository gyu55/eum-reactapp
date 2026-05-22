// 학습 홈 API 담당: 홈 카드, 추천 단어, 추천 영상 조회 요청
const BASE_URL = "http://localhost:10000";

export const fetchStudyHome = async () => {
  const response = await fetch(`${BASE_URL}/api/study/home`);
  if (!response.ok)
    throw new Error("학습 홈 조회 실패");

  const result = await response.json();
  if (!result.success)
    throw new Error(result.message);

  return result.data;
};
