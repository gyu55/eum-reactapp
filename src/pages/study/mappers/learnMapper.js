// 학습 데이터 변환 담당: 백엔드 학습 응답을 학습 화면 데이터로 변환
export const mapLearnItem = (learn, index = 0, progress = {}) => {
  const totalCount = Number(progress.totalCount || 0);
  const completedCount = Number(progress.completedCount || 0);
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isCompleted = totalCount > 0 && completedCount >= totalCount;

  return {
    id: learn.id || `learn-${index + 1}`,
    title: learn.eduTitle || learn.title || "학습 제목",
    desc: learn.eduDetail || learn.desc || "학습 설명이 준비되지 않았어요.",
    requiredDia: learn.eduDia || 0,
    status: isCompleted ? "done" : index === 0 ? "active" : "locked",
    badge: isCompleted ? "✓" : "★",
    buttonText: isCompleted ? "복습" : index === 0 ? "시작 →" : "잠금",
    totalCount,
    completedCount,
    percent,
    to: null,
  };
};

export const mapLearnList = (learnList = [], progressList = []) =>
  learnList.map((learn, index) => {
    const progress = progressList.find((item) => item.learnId === learn.id);
    return mapLearnItem(learn, index, progress);
  });

export const mergeLearnListToHome = (homeData, learnList = [], progressList = []) => {
  const lessons = mapLearnList(learnList, progressList);
  if (lessons.length === 0) return homeData;
  const totalCount = lessons.reduce((sum, lesson) => sum + lesson.totalCount, 0);
  const completedCount = lessons.reduce((sum, lesson) => sum + lesson.completedCount, 0);
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return {
    ...homeData,
    roadmaps: {
      ...homeData.roadmaps,
      sign: {
        ...homeData.roadmaps.sign,
        chapter: {
          ...homeData.roadmaps.sign.chapter,
          title: lessons[0]?.title || homeData.roadmaps.sign.chapter.title,
          progressDesc: `${lessons[0]?.title || "학습"} · ${completedCount} / ${totalCount || lessons.length} 완료`,
          percent,
        },
        lessons,
      },
    },
  };
};
