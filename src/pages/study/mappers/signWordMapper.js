// 수어 검색 데이터 변환: 백엔드 응답 -> 검색 화면 데이터
export const mapSignWord = (signWord, index = 0) => ({
  id: signWord.id || index + 1,
  word: signWord.signWordTitle,
  meaning: signWord.signWordCategory || "일상생활 수어",
  category: signWord.signWordCategory || "일상생활 수어",
  desc: signWord.signWordDescription || "수어 설명이 준비되지 않았어요.",
  shortDesc: signWord.signWordDescription || "수어 설명이 준비되지 않았어요.",
  example: signWord.signWordExample || "검색한 표현을 일상 대화에서 자연스럽게 사용해보세요.",
  tags: [signWord.signWordCategory || "수어", "검색결과", "한국수어사전"],
  cardImage: signWord.signWordThumbnailUrl,
  videoUrl: signWord.signWordVideoUrl,
  sourceUrl: signWord.signWordSourceUrl,
  motions: [
    {
      id: 1, icon: "👊", label: "동작 ①"
    },
    {
      id: 2, icon: "✋", label: "동작 ②"
    },
    {
      id: 3, icon: "👋", label: "동작 ③"
    },
  ],
});

export const mapSignWords = (signWords = []) => signWords.map(mapSignWord);
