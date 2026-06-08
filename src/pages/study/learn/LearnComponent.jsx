import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { startLearn } from "../apis/LearnApi";
import { useLearn } from "../hooks/useLearn";
import { useTodayQuests } from "../hooks/useTodayQuests";
import LearnQuestPanel from "./parts/LearnQuestPanel";
import LearnRoadmapItem from "./parts/LearnRoadmapItem";
import LearnSideMenu from "./parts/LearnSideMenu";
import * as S from "./style";

const SERVICE_READY_MESSAGE = "서비스 준비중입니다.";

const LearnComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, loading, error } = useLearn();
  const quests = useTodayQuests(data.quests);
  const [activeType, setActiveType] = useState(location.state?.activeType || "sign");
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const roadmap = data.roadmaps[activeType] || data.roadmaps.sign;
  const isSignView = activeType === "sign";
  const signLessons = data.roadmaps.sign?.lessons || [];
  const isEmpty = isSignView && !loading && !error && signLessons.length === 0;
  const shouldShowRoadmap = !isSignView || (!loading && !error && !isEmpty);
  const statusMessage = isSignView
    ? loading
      ? "학습 정보를 불러오는 중이에요."
      : error || (isEmpty ? "등록된 학습이 아직 없어요. 관리자에서 학습 단어를 등록하면 여기에 표시돼요." : null)
    : null;

  const visibleLessons = useMemo(() => {
    if (!shouldShowRoadmap) {
      return [];
    }

    const baseLessons = roadmap.lessons.slice(0, 5);

    return Array.from({ length: 5 }, (_, index) => {
      const lesson = baseLessons[index];

      if (lesson) {
        return lesson;
      }

      return {
        id: `locked-${index + 1}`,
        title: `수어 학습 ${index + 1}`,
        desc: "앞 단계를 완료하면 열려요.",
        status: "locked",
        badge: "★",
        buttonText: "잠금",
        to: null,
      };
    });
  }, [roadmap.lessons, shouldShowRoadmap]);

  const currentMenus = useMemo(
    () =>
      data.menus.map((menu) => ({
        ...menu,
        active: menu.type ? menu.type === activeType : false,
      })),
    [activeType, data.menus]
  );

  const handleSelectLesson = (lesson) => {
    setSelectedLessonId((currentId) => (currentId === lesson.id ? null : lesson.id));
  };

  const handleStartLesson = async (lesson) => {
    if (lesson.status === "locked" || lesson.status === "reward") {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    if (activeType === "sign" && Number.isFinite(Number(lesson.id))) {
      try {
        await startLearn(lesson.id);
      } catch {
        // 시작 기록 저장 실패가 학습 진입을 막지 않도록 둔다
      }

      navigate(`/study/learn/quiz/greeting/questions/1?eduId=${lesson.id}`, {
        state: {
          eduId: lesson.id,
          lessonTitle: lesson.title,
        },
      });

      return;
    }

    if (!lesson.to) {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    navigate(lesson.to);
  };

  const handleMenu = (menu) => {
    if (menu.type) {
      setActiveType(menu.type);
      setSelectedLessonId(null);

      return;
    }

    if (!menu.to) {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    navigate(menu.to);
  };

  const handleSelectLearningType = (menu) => {
    if (!menu.type) return;

    setActiveType(menu.type);
    setSelectedLessonId(null);
  };

  return (
    <S.LearnWrap>
      <S.LearnLayout>
        <LearnSideMenu menus={currentMenus} onMenu={handleMenu} onSelectType={handleSelectLearningType} />

        <S.MainArea>
          <S.TopBar>
            <S.GuideButton type="button" onClick={() => alert(SERVICE_READY_MESSAGE)}>
              {roadmap.chapter.guideLabel}
            </S.GuideButton>
          </S.TopBar>

          <S.ChapterPanel>
            <S.ChapterHead>
              <S.Title>{roadmap.chapter.title}</S.Title>
              <S.GuidePill type="button" onClick={() => alert(SERVICE_READY_MESSAGE)}>{"📘"} {roadmap.chapter.guideLabel}</S.GuidePill>
            </S.ChapterHead>

            {statusMessage && <S.StatusText>{statusMessage}</S.StatusText>}

            {shouldShowRoadmap && (
              <S.RoadmapStage>
                <S.RoadmapPath aria-hidden="true" viewBox="0 0 592 680" preserveAspectRatio="none">
                  <path d="M260 118 C300 144 332 164 332 226 C332 272 296 292 296 356 C296 418 260 444 260 510 C260 570 332 590 332 634" />
                </S.RoadmapPath>
                <S.RoadmapList>
                  {visibleLessons.map((lesson, index) => (
                    <LearnRoadmapItem
                      key={lesson.id}
                      lesson={lesson}
                      index={index}
                      selected={selectedLessonId === lesson.id}
                      onSelect={handleSelectLesson}
                      onStart={handleStartLesson}
                    />
                  ))}
                </S.RoadmapList>
                <S.RoadmapMascot aria-hidden="true">
                  <span className="eye left" />
                  <span className="eye right" />
                  <span className="smile" />
                  <span className="arm left" />
                  <span className="arm right" />
                  <span className="foot left" />
                  <span className="foot right" />
                </S.RoadmapMascot>
              </S.RoadmapStage>
            )}

            {shouldShowRoadmap && (
              <S.NextChapter type="button" onClick={() => alert(SERVICE_READY_MESSAGE)}>
                <strong>{roadmap.chapter.nextTitle}</strong>
                <span>{roadmap.chapter.nextDesc} {"→"}</span>
              </S.NextChapter>
            )}
          </S.ChapterPanel>
        </S.MainArea>

        <LearnQuestPanel quests={quests} />
      </S.LearnLayout>

      {shouldShowRoadmap && (
        <S.ProgressArea>
          <S.ProgressText>
            <S.ProgressTitle>{roadmap.chapter.progressTitle}</S.ProgressTitle>
            <S.ProgressDesc>{roadmap.chapter.progressDesc}</S.ProgressDesc>
          </S.ProgressText>
          <S.ProgressBar $progress={roadmap.chapter.percent} aria-label="학습 진행률">
            <span />
          </S.ProgressBar>
          <S.Percent>{roadmap.chapter.percent}%</S.Percent>
          <S.ExpBox>
            <span>{"획득 EXP"}</span>
            <strong>
              <S.ExpIcon>{"⚡"}</S.ExpIcon>
              {roadmap.chapter.exp}
            </strong>
          </S.ExpBox>
        </S.ProgressArea>
      )}
    </S.LearnWrap>
  );
};

export default LearnComponent;
