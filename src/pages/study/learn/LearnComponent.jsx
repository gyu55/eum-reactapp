import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { claimRoadmapReward, startLearn } from "../apis/LearnApi";
import { useLearn } from "../hooks/useLearn";
import { useStudyUser } from "../hooks/useStudyUser";
import { useTodayQuests } from "../hooks/useTodayQuests";
import LearnQuestPanel from "./parts/LearnQuestPanel";
import LearnRoadmapItem from "./parts/LearnRoadmapItem";
import LearnSideMenu from "./parts/LearnSideMenu";
import * as S from "./style";

const SERVICE_READY_MESSAGE = "서비스 준비중입니다.";
const REWARD_EXP = 50;

const REWARD_MODAL_CONTENT = {
  locked: {
    icon: "🔒",
    title: "조금만 더 가면 보상이 열려요!",
    desc: "앞 단계를 완료하면 보상을 받을 수 있어요.",
    button: "확인",
  },
  available: {
    icon: "🎁",
    title: "보상 도착!",
    desc: "학습을 완료했어요. 보상을 받아볼까요?",
    button: "보상 받기",
  },
  received: {
    icon: "✓",
    title: "보상 수령 완료!",
    desc: "이미 지급된 보상이에요.",
    button: "확인",
  },
};

const LearnComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, loading, error } = useLearn();
  const { userId, isGuest } = useStudyUser();
  const quests = useTodayQuests(data.quests);
  const [activeType, setActiveType] = useState(location.state?.activeType || "sign");
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [rewardModalType, setRewardModalType] = useState(null);
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [rewardLoading, setRewardLoading] = useState(false);
  const [showRewardBurst, setShowRewardBurst] = useState(false);
  const roadmap = data.roadmaps[activeType] || data.roadmaps.sign;
  const currentLessons = roadmap.lessons || [];
  const isEmpty = !loading && !error && currentLessons.length === 0;
  const shouldShowRoadmap = !loading && !error && !isEmpty;
  const statusMessage = loading
    ? "학습 정보를 불러오는 중이에요."
    : error || (isEmpty ? "등록된 학습이 아직 없어요. 관리자에서 학습 단어를 등록하면 여기에 표시돼요." : null);

  const visibleLessons = useMemo(() => {
    if (!shouldShowRoadmap) {
      return [];
    }

    const rewardBadgeImage = rewardClaimed ? "/assets/image/learn/giftbox.png" : null;
    const applyRewardBadge = (lesson) =>
      lesson.status === "reward" && rewardBadgeImage
        ? {
            ...lesson,
            badge: "",
            badgeImage: rewardBadgeImage,
          }
        : lesson;

    const baseLessons = roadmap.lessons.slice(0, 5);

    return Array.from({ length: 5 }, (_, index) => {
      const lesson = baseLessons[index];

      if (lesson) {
        return applyRewardBadge(lesson);
      }

      if (index === 3) {
        return applyRewardBadge({
          id: "reward-step",
          title: "보상 이벤트",
          desc: "앞 단계를 완료하면 보상을 받을 수 있어요.",
          status: "reward",
          badge: "🎁",
          buttonText: "🔒",
          to: null,
        });
      }

      return {
        id: `locked-${index + 1}`,
        title: `수어 학습 ${index + 1}`,
        desc: "이전 단계를 완료하면 열려요.",
        status: "locked",
        badge: "🔒",
        buttonText: "🔒",
        to: null,
      };
    });
  }, [roadmap.lessons, rewardClaimed, shouldShowRoadmap]);

  const currentMenus = useMemo(
    () =>
      data.menus.map((menu) => ({
        ...menu,
        active: menu.type ? menu.type === activeType : false,
      })),
    [activeType, data.menus]
  );

  const rewardAvailable = useMemo(() => {
    const rewardIndex = visibleLessons.findIndex((lesson) => lesson.status === "reward");

    if (rewardIndex < 0) {
      return false;
    }

    return visibleLessons.slice(0, rewardIndex).every((lesson) => lesson.status === "done");
  }, [visibleLessons]);

  const rewardEduId = useMemo(() => {
    const rewardIndex = visibleLessons.findIndex((lesson) => lesson.status === "reward");

    if (rewardIndex <= 0) {
      return null;
    }

    const previousLesson = visibleLessons[rewardIndex - 1];

    return Number.isFinite(Number(previousLesson?.id)) ? Number(previousLesson.id) : null;
  }, [visibleLessons]);

  const rewardStorageKey = useMemo(() => {
    if (!userId || !rewardEduId) {
      return null;
    }

    return `roadmapReward:${userId}:${rewardEduId}`;
  }, [rewardEduId, userId]);

  useEffect(() => {
    if (!rewardStorageKey) {
      setRewardClaimed(false);

      return;
    }

    setRewardClaimed(localStorage.getItem(rewardStorageKey) === "received");
  }, [rewardStorageKey]);

  const openRewardModal = () => {
    if (!rewardAvailable) {
      setRewardModalType("locked");

      return;
    }

    setRewardModalType(rewardClaimed ? "received" : "available");
  };

  const handleRewardAction = async () => {
    if (rewardLoading) {
      return;
    }

    if (rewardModalType === "available") {
      if (isGuest || !userId || !rewardEduId) {
        alert("로그인 후 보상을 받을 수 있어요.");

        return;
      }

      setRewardLoading(true);

      try {
        const rewardExp = await claimRoadmapReward({ userId, eduId: rewardEduId });

        setRewardClaimed(true);
        setRewardModalType("received");

        if (rewardStorageKey) {
          localStorage.setItem(rewardStorageKey, "received");
        }

        if (rewardExp > 0) {
          setShowRewardBurst(true);
          window.setTimeout(() => setShowRewardBurst(false), 1200);
        }
      } catch (error) {
        alert(error.message || "보상 수령에 실패했어요.");
      } finally {
        setRewardLoading(false);
      }

      return;
    }

    setRewardModalType(null);
  };

  const handleSelectLesson = (lesson) => {
    if (lesson.status === "reward") {
      openRewardModal();

      return;
    }

    setSelectedLessonId((currentId) => (currentId === lesson.id ? null : lesson.id));
  };

  const handleStartLesson = async (lesson) => {
    if (lesson.status === "reward") {
      openRewardModal();

      return;
    }

    if (lesson.status === "locked") {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    if ((activeType === "sign" || activeType === "signal") && Number.isFinite(Number(lesson.id))) {
      try {
        await startLearn(lesson.id);
      } catch {
        // 시작 기록 저장 실패가 학습 진입을 막지 않도록 처리
      }

      const quizType = activeType === "signal" ? "signal" : "greeting";

      navigate(`/study/learn/quiz/${quizType}/questions/1?eduId=${lesson.id}`, {
        state: {
          eduId: lesson.id,
          lessonTitle: lesson.title,
          activeType,
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

  const rewardModalContent = rewardModalType ? REWARD_MODAL_CONTENT[rewardModalType] : null;

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
              <S.GuidePill type="button" onClick={() => alert(SERVICE_READY_MESSAGE)}>
                📘 {roadmap.chapter.guideLabel}
              </S.GuidePill>
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
                <span>{roadmap.chapter.nextDesc} →</span>
              </S.NextChapter>
            )}
          </S.ChapterPanel>

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
            </S.ProgressArea>
          )}
        </S.MainArea>

        <LearnQuestPanel quests={quests} />
      </S.LearnLayout>

      {rewardModalContent && (
        <S.RewardModalBackdrop onClick={() => setRewardModalType(null)}>
          {showRewardBurst && (
            <S.RewardFireworks aria-hidden="true">
              <span />
              <span />
              <span />
            </S.RewardFireworks>
          )}
          <S.RewardModalCard onClick={(event) => event.stopPropagation()}>
            <S.RewardModalIcon $type={rewardModalType}>{rewardModalContent.icon}</S.RewardModalIcon>
            <S.RewardModalTitle>{rewardModalContent.title}</S.RewardModalTitle>
            <S.RewardModalDesc>{rewardModalContent.desc}</S.RewardModalDesc>

            <S.RewardModalValue>
              <span>학습 보상</span>
              <strong>+{REWARD_EXP} EXP</strong>
            </S.RewardModalValue>

            <S.RewardModalButton type="button" onClick={handleRewardAction} disabled={rewardLoading}>
              {rewardLoading ? "보상 수령 중..." : rewardModalContent.button}
            </S.RewardModalButton>
          </S.RewardModalCard>
        </S.RewardModalBackdrop>
      )}
    </S.LearnWrap>
  );
};

export default LearnComponent;
