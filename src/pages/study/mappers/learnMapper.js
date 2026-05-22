// 학습 데이터 변환 담당: 백엔드 학습 응답을 학습 화면 데이터로 변환
export const mapLearnItem = (learn, index = 0) => ({
  id: learn.id || `learn-${index + 1}`,
  title: learn.eduTitle || learn.title || "학습 제목",
  desc: learn.eduDetail || learn.desc || "학습 설명이 준비되지 않았어요.",
  requiredDia: learn.eduDia || 0,
  status: index === 0 ? "active" : "locked",
  badge: index === 0 ? "★" : "★",
  buttonText: index === 0 ? "시작 →" : "잠금",
  to: null,
});

export const mapLearnList = (learnList = []) => learnList.map(mapLearnItem);

export const mergeLearnListToHome = (homeData, learnList = []) => {
  const lessons = mapLearnList(learnList);
  if (lessons.length === 0) return homeData;

  return {
    ...homeData,
    roadmaps: {
      ...homeData.roadmaps,
      sign: {
        ...homeData.roadmaps.sign,
        chapter: {
          ...homeData.roadmaps.sign.chapter,
          title: lessons[0]?.title || homeData.roadmaps.sign.chapter.title,
          progressDesc: `${lessons[0]?.title || "학습"} · 0 / ${lessons.length} 완료`,
          percent: 0,
        },
        lessons,
      },
    },
  };
};
