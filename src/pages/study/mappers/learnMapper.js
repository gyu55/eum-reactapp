// 학습 데이터 변환: 백엔드 학습 목록과 진행 상태를 화면용 로드맵 데이터로 변환
const SESSION_COMPLETE_COUNT = 5;

const isSignalLearn = (learn) => {
  const title = learn.eduTitle || learn.title || "";

  return title.includes("수신호");
};

export const mapLearnItem = (learn, index = 0, progress = {}) => {
  const totalCount = Number(progress.totalCount || 0);
  const completedCount = Number(progress.completedCount || 0);
  const percent = Math.min(Math.round((completedCount / SESSION_COMPLETE_COUNT) * 100), 100);
  const isCompleted = Boolean(progress.sessionCompleted) || completedCount >= SESSION_COMPLETE_COUNT;

  return {
    id: learn.id || `learn-${index + 1}`,
    title: learn.eduTitle || learn.title || "학습 제목",
    desc: learn.eduDetail || learn.desc || "학습 설명이 준비되지 않았어요.",
    requiredDia: learn.eduDia || 0,
    status: isCompleted ? "done" : "locked",
    badge: isCompleted ? "✓" : "🔒",
    buttonText: isCompleted ? "복습" : "🔒",
    totalCount,
    completedCount,
    percent,
    to: null,
  };
};

export const mapLearnList = (learnList = [], progressList = []) => {
  const mapped = learnList.map((learn, index) => {
    const progress = progressList.find((item) => Number(item.learnId) === Number(learn.id));

    return mapLearnItem(learn, index, progress);
  });

  return mapped.map((lesson, index) => {
    if (lesson.status === "done") {
      return lesson;
    }

    const prevLesson = mapped[index - 1];
    const isFirstLesson = index === 0;
    const isPrevCompleted = prevLesson?.status === "done";
    const isOpen = isFirstLesson || isPrevCompleted;

    if (index === 3) {
      return {
        ...lesson,
        status: "reward",
        badge: "🎁",
        buttonText: "🔒",
      };
    }

    return {
      ...lesson,
      status: isOpen ? "active" : "locked",
      badge: isOpen ? "★" : "🔒",
      buttonText: isOpen ? "시작" : "🔒",
    };
  });
};

const getRoadmapSummary = (lessons = [], fallbackTitle = "학습") => {
  const totalCount = lessons.reduce((sum, lesson) => sum + lesson.totalCount, 0);
  const completedCount = lessons.reduce((sum, lesson) => sum + lesson.completedCount, 0);
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const currentLesson = lessons.find((lesson) => lesson.status === "active") || lessons[0];

  return {
    percent,
    title: currentLesson?.title || fallbackTitle,
  };
};

export const mergeLearnListToHome = (homeData, learnList = [], progressList = []) => {
  const signLessons = mapLearnList(learnList.filter((learn) => !isSignalLearn(learn)), progressList);
  const signalLessons = mapLearnList(learnList.filter(isSignalLearn), progressList);

  if (signLessons.length === 0 && signalLessons.length === 0) {
    return homeData;
  }

  const signSummary = getRoadmapSummary(signLessons, homeData.roadmaps.sign.chapter.title);
  const signalSummary = getRoadmapSummary(signalLessons, homeData.roadmaps.signal.chapter.title);

  return {
    ...homeData,
    roadmaps: {
      ...homeData.roadmaps,
      sign: {
        ...homeData.roadmaps.sign,
        chapter: {
          ...homeData.roadmaps.sign.chapter,
          title: signSummary.title,
          progressDesc: `${signSummary.title} · ${SESSION_COMPLETE_COUNT}문제 완료`,
          percent: signSummary.percent,
        },
        lessons: signLessons,
      },
      signal: {
        ...homeData.roadmaps.signal,
        chapter: {
          ...homeData.roadmaps.signal.chapter,
          title: signalSummary.title,
          progressDesc: `${signalSummary.title} · ${SESSION_COMPLETE_COUNT}문제 완료`,
          percent: signalSummary.percent,
        },
        lessons: signalLessons,
      },
    },
  };
};
