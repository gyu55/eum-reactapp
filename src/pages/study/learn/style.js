import styled from "styled-components";

const statusColor = {
  done: "#22c55e",
  active: "#4359fc",
  reward: "#f59e0b",
  locked: "#d7dbe4",
};

export const LearnWrap = styled.section`
  position: relative;
  z-index: 0;
  isolation: isolate;
  width: 100%;
  min-height: 100vh;
  padding: 142px 24px 120px;
  background: #fff;
  color: #2c2c2a;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 104px 16px 72px;
  }
`;

export const LearnLayout = styled.div`
  display: grid;
  grid-template-columns: 156px minmax(0, 760px) 310px;
  gap: 42px;
  align-items: start;
  width: min(1268px, 100%);
  margin: 0 auto;

  > aside {
    width: 310px;
    padding: 22px;
  }

  > aside h2 {
    font-size: 17px;
    margin-bottom: 18px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 130px minmax(0, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const SideMenu = styled.nav`
  display: grid;
  gap: 8px;
  padding: 4px 0;
  border-right: 1px solid #f0f2f7;

  @media (max-width: 760px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    border-right: 0;
    border-bottom: 1px solid #ebedf5;
    padding-bottom: 14px;
  }
`;

export const SideButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 122px;
  height: 38px;
  padding: 0 15px;
  border: 0;
  border-radius: 8px;
  background: ${({ $active }) => ($active ? "#eef1ff" : "transparent")};
  color: ${({ $active }) => ($active ? "#4359fc" : "#777")};
  font-size: 15px;
  font-weight: ${({ $active }) => ($active ? 900 : 700)};
  cursor: pointer;

  span {
    display: inline-flex;
    justify-content: center;
    width: 18px;
    font-size: 14px;
  }

  &:hover {
    background: #f2f4ff;
    color: #4359fc;
  }

  @media (max-width: 760px) {
    justify-content: center;
    width: 100%;
    padding: 0 8px;
    font-size: 12px;
  }
`;

export const MainArea = styled.div`
  min-width: 0;
  position: relative;
`;

export const TopBar = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const StreakBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  background: #fff7ed;
  color: #ff6b00;
  font-size: 15px;
  font-weight: 900;
`;

export const GuideButton = styled.button`
  display: none;
`;

export const ChapterPanel = styled.article`
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 0 1px #edf0f7 inset;
`;

export const ChapterHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  min-height: 64px;
  padding: 0 28px;
  background: #4359fc;
`;

export const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 22px;
  font-weight: 900;
  line-height: 1.3;
`;

export const GuidePill = styled.button`
  height: 32px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  cursor: pointer;
`;

export const StatusText = styled.p`
  margin: 18px 24px 0;
  color: #777;
  font-size: 14px;
  font-weight: 700;
`;

export const RoadmapList = styled.div`
  display: grid;
  gap: 18px;
  padding: 64px 76px 38px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 82px;
    bottom: 54px;
    left: 99px;
    width: 3px;
    background: #e5e9f4;
  }

  @media (max-width: 760px) {
    padding: 34px 20px 28px;

    &::before {
      left: 40px;
    }
  }
`;

export const RoadmapItem = styled.article`
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 18px;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const StepBadge = styled.span`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ $status }) => statusColor[$status] || "#edf0f5"};
  color: ${({ $status }) => ($status === "locked" ? "#aaa" : "#fff")};
  font-size: ${({ $status }) => ($status === "active" ? "20px" : "17px")};
  font-weight: 900;
  box-shadow: ${({ $status }) => ($status === "active" ? "0 8px 18px rgba(67, 89, 252, 0.2)" : "none")};
`;

export const LessonCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-height: ${({ $status }) => ($status === "active" ? "84px" : "72px")};
  padding: 15px 20px;
  border: 1px solid
    ${({ $status }) =>
      $status === "done" ? "#bbf7d0" : $status === "reward" ? "#fde68a" : $status === "locked" ? "#ebedf2" : "#4359fc"};
  border-radius: 8px;
  background: ${({ $status }) =>
    $status === "done" ? "#f0fdf4" : $status === "reward" ? "#fffbeb" : $status === "locked" ? "#f7f7f8" : "#4359fc"};
  color: ${({ $status }) => ($status === "active" ? "#fff" : "#2c2c2a")};
  box-shadow: ${({ $status }) => ($status === "active" ? "0 10px 22px rgba(67, 89, 252, 0.2)" : "none")};

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const LessonText = styled.div`
  min-width: 0;
`;

export const LessonTitle = styled.h2`
  margin: 0;
  color: inherit;
  font-size: ${({ $status }) => ($status === "active" ? "18px" : "16px")};
  font-weight: 900;
`;

export const LessonDesc = styled.p`
  margin: 8px 0 0;
  color: inherit;
  opacity: 0.74;
  font-size: 14px;
  line-height: 1.45;
`;

export const LessonButton = styled.button`
  flex: 0 0 auto;
  min-width: 82px;
  height: 34px;
  padding: 0 14px;
  border: 0;
  border-radius: 999px;
  background: ${({ $status }) => ($status === "active" ? "#fff" : $status === "locked" || $status === "reward" ? "#f2f2f2" : "#dcfce7")};
  color: ${({ $status }) => ($status === "active" ? "#4359fc" : $status === "locked" || $status === "reward" ? "#aaa" : "#15803d")};
  font-size: 13px;
  font-weight: 900;
  cursor: pointer;
`;

export const NextChapter = styled.button`
  display: grid;
  align-content: center;
  gap: 7px;
  width: min(520px, calc(100% - 120px));
  min-height: 74px;
  margin: 0 auto 32px;
  padding: 15px 24px;
  border: 1px dashed #cfd6ff;
  border-radius: 8px;
  background: #f8f9ff;
  color: #89c;
  cursor: pointer;

  strong {
    font-size: 15px;
    font-weight: 900;
    line-height: 1.35;
    white-space: nowrap;
  }

  span {
    color: #aaa;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.35;
    white-space: nowrap;
  }

  @media (max-width: 760px) {
    width: calc(100% - 40px);
  }
`;

export const QuestPanel = styled.aside`
  align-self: start;
  margin-top: 0;
  padding: 18px;
  border: 1px solid #e5e8f2;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(44, 52, 92, 0.05);

  @media (max-width: 1100px) {
    grid-column: 2;
  }

  @media (max-width: 760px) {
    grid-column: auto;
  }
`;

export const QuestTitle = styled.h2`
  margin: 0 0 14px;
  color: #2c2c2a;
  font-size: 15px;
  font-weight: 900;
`;

export const QuestItem = styled.div`
  display: grid;
  grid-template-columns: 34px 1fr 32px;
  gap: 10px;
  align-items: center;
  min-height: 52px;
  border-top: 1px solid #eef1f5;

  &:first-of-type {
    border-top: 0;
  }
`;

export const QuestIcon = styled.span`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #eef1ff;
  font-size: 14px;
`;

export const QuestInfo = styled.div`
  min-width: 0;
`;

export const QuestName = styled.strong`
  display: block;
  color: #2c2c2a;
  font-size: 12px;
  font-weight: 900;
  line-height: 1.35;
`;

export const QuestReward = styled.span`
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 7px;
  background: #fff7ed;
  font-size: 12px;
`;

export const QuestMeta = styled.div`
  display: grid;
  gap: 7px;
  justify-items: end;
`;

export const QuestBar = styled.div`
  overflow: hidden;
  height: 5px;
  margin-top: 7px;
  border-radius: 999px;
  background: #edf0f5;

  span {
    display: block;
    width: ${({ $progress }) => $progress || 0}%;
    height: 100%;
    border-radius: inherit;
    background: #4359fc;
  }
`;

export const QuestCount = styled.p`
  margin: 0;
  color: #aaa;
  font-size: 11px;
  font-weight: 800;
  text-align: right;
`;

export const ProgressArea = styled.div`
  display: grid;
  grid-template-columns: 170px minmax(360px, 1fr) 52px 112px;
  align-items: center;
  gap: 24px;
  width: min(1268px, 100%);
  margin: 46px auto 0;
  padding-left: 156px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-left: 0;
  }
`;

export const ProgressText = styled.div`
  min-width: 0;
  align-self: center;
`;

export const ProgressTitle = styled.strong`
  display: block;
  color: #2c2c2a;
  font-size: 14px;
  font-weight: 900;
`;

export const ProgressDesc = styled.p`
  margin: 8px 0 0;
  color: #888;
  font-size: 13px;
  line-height: 1.45;
`;

export const ProgressBar = styled.div`
  overflow: hidden;
  height: 9px;
  border-radius: 999px;
  background: #e9edff;

  span {
    display: block;
    width: ${({ $progress }) => $progress || 0}%;
    height: 100%;
    border-radius: inherit;
    background: #4359fc;
  }
`;

export const Percent = styled.strong`
  align-self: center;
  color: #4359fc;
  font-size: 14px;
  font-weight: 900;
`;

export const ExpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 104px;
  min-height: 74px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #f2f4ff;

  span {
    color: #888;
    font-size: 12px;
    font-weight: 800;
  }

  strong {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    white-space: nowrap;
    color: #4359fc;
    font-size: 25px;
    line-height: 1;
    font-weight: 900;
  }
`;

export const ExpIcon = styled.span`
  color: #ff8a00 !important;
  font-size: 22px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
`;

export const AlphaWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 142px 24px 120px;
  background: #fff;
  color: #2c2c2a;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 104px 16px 72px;
  }
`;

export const AlphaLayout = styled.div`
  display: grid;
  grid-template-columns: 156px minmax(0, 760px) 310px;
  gap: 42px;
  align-items: start;
  width: min(1268px, 100%);
  margin: 0 auto;

  ${SideButton} {
    width: 122px;
    height: 38px;
    font-size: 15px;

    span {
      font-size: 14px;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 130px minmax(0, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const AlphaMain = styled.main`
  min-width: 0;
  padding: 56px 44px 68px;
  border: 1px solid #edf0f7;
  border-radius: 8px;
  background: #fff;
  text-align: center;
`;

export const AlphaHeader = styled.header`
  margin-bottom: 48px;
`;

export const AlphaTitle = styled.h1`
  margin: 0 0 14px;
  color: #1f2430;
  font-size: 32px;
  font-weight: 900;
  line-height: 1.35;
`;

export const AlphaDesc = styled.p`
  width: min(540px, 100%);
  margin: 0 auto 28px;
  color: #777f8e;
  font-size: 16px;
  line-height: 1.65;
`;

export const AlphaStartButton = styled.button`
  width: min(430px, 100%);
  height: 50px;
  border: 0;
  border-radius: 8px;
  background: #4359fc;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: #3545f5;
  }
`;

export const AlphaSection = styled.section`
  margin-top: 46px;
`;

export const AlphaSectionTitle = styled.h2`
  margin: 0 0 24px;
  color: #1f2430;
  font-size: 22px;
  font-weight: 900;
`;

export const AlphaLetterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 86px);
  justify-content: center;
  gap: 18px 24px;

  @media (max-width: 520px) {
    grid-template-columns: repeat(3, 86px);
  }
`;

export const AlphaLetterCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
  width: 86px;
  height: 86px;
  border: 1px solid #dedede;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;

  strong {
    color: #1f2430;
    font-size: 36px;
    font-weight: 900;
    line-height: 1;
  }

  span {
    width: 40px;
    height: 2px;
    border-radius: 999px;
    background: #d9d9d9;
  }

  &:hover {
    border-color: #4359fc;
    background: #f8f9ff;
    box-shadow: 0 10px 22px rgba(67, 89, 252, 0.12);

    strong {
      color: #4359fc;
    }

    span {
      background: #4359fc;
    }
  }
`;

export const AlphaQuestPanel = styled(QuestPanel)`
  margin-top: 0;
  width: 310px;

  ${QuestTitle} {
    font-size: 17px;
    margin-bottom: 18px;
  }

  ${QuestItem} {
    min-height: 60px;
  }

  ${QuestIcon} {
    width: 34px;
    height: 34px;
    font-size: 16px;
  }

  ${QuestName} {
    font-size: 13px;
  }
`;

export const AlphaPopupDim = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(37, 38, 61, 0.56);
`;

export const AlphaPopupCard = styled.aside`
  position: relative;
  width: 360px;
  min-height: 560px;
  padding: 40px 28px 30px;
  border-radius: 18px;
  background: #fff;
  text-align: center;
  box-shadow: 0 24px 54px rgba(23, 31, 77, 0.22);
`;

export const AlphaPopupClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: 0;
  background: transparent;
  color: #c3c7d0;
  font-size: 24px;
  cursor: pointer;
`;

export const AlphaPopupLetter = styled.div`
  color: #4359fc;
  font-size: 96px;
  font-weight: 900;
  line-height: 1;
`;

export const AlphaPopupName = styled.h2`
  margin: 10px 0 7px;
  color: #1f2430;
  font-size: 21px;
  font-weight: 900;
`;

export const AlphaPopupSound = styled.p`
  margin: 0 0 14px;
  color: #999;
  font-size: 16px;
  font-weight: 700;
`;

export const AlphaPopupDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 20px;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #d8defe;
  }

  span:first-child {
    background: #4359fc;
  }
`;

export const AlphaHandBox = styled.div`
  display: grid;
  place-items: center;
  width: 284px;
  height: 148px;
  margin: 0 auto 16px;
  border-radius: 10px;
  background: #eef1ff;

  img {
    width: 156px;
    height: 146px;
    object-fit: contain;
  }
`;

export const AlphaPopupCaption = styled.p`
  margin: 0 0 12px;
  color: #888;
  font-size: 15px;
`;

export const AlphaPopupInfo = styled.div`
  width: 284px;
  margin: 0 auto 26px;
  padding: 13px 14px;
  border: 1px solid #4359fc;
  border-radius: 6px;
  text-align: center;

  p {
    margin: 0 0 6px;
    color: #555b68;
    font-size: 14px;
    line-height: 1.4;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AlphaPopupActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 284px;
  margin: 0 auto;

  button {
    border: 0;
    background: transparent;
    color: #1f2430;
    font-size: 16px;
    font-weight: 900;
    cursor: pointer;
  }
`;

export const LearnQuizWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 160px 24px 96px;
  background: #fff;
  color: #2c2c2a;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 92px 16px 72px;
  }
`;

export const LearnQuizShell = styled.div`
  width: min(1320px, 100%);
  margin: 0 auto;
`;

export const LearnQuizTop = styled.div`
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) 60px;
  gap: 24px;
  align-items: center;
  width: min(1120px, 100%);
  margin: 0 auto;
`;

export const LearnQuizClose = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #aaa;
  font-size: 22px;
  font-weight: 900;
  cursor: pointer;
`;

export const LearnQuizProgress = styled.div`
  overflow: hidden;
  height: 14px;
  border-radius: 999px;
  background: #eeeeee;

  span {
    display: block;
    width: ${({ $progress }) => $progress || 0}%;
    height: 100%;
    border-radius: inherit;
    background: ${({ $status }) =>
      $status === "correct" ? "#58cc02" : $status === "incorrect" ? "#f14141" : $status === "review" ? "#ce82ff" : "#4359fc"};
    transition: width 0.2s ease, background 0.2s ease;
  }
`;

export const LearnQuizCount = styled.strong`
  color: #4359fc;
  font-size: 15px;
  font-weight: 900;
  text-align: right;
`;

export const LearnSessionIntro = styled.section`
  width: min(880px, 100%);
  margin: 46px auto 0;
`;

export const SessionStatus = styled.p`
  margin: 0 0 18px;
  padding: 13px 16px;
  border-radius: 8px;
  background: #f8f9ff;
  color: #4359fc;
  font-size: 14px;
  font-weight: 800;
`;

export const SessionVideoCard = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 20px;
  align-items: center;
  padding: 18px;
  border: 1px solid #e1e5ef;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 10px 26px rgba(44, 52, 92, 0.06);

  span {
    display: block;
    margin-bottom: 8px;
    color: #4359fc;
    font-size: 13px;
    font-weight: 900;
  }

  strong {
    display: block;
    color: #1f2430;
    font-size: 20px;
    font-weight: 900;
    line-height: 1.35;
  }

  p {
    margin: 10px 0 0;
    color: #777f8e;
    font-size: 14px;
    line-height: 1.55;
  }

  video {
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: 10px;
    background: #eef1ff;
    object-fit: cover;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const LearnQuizHeader = styled.header`
  width: min(1120px, 100%);
  margin: 46px auto 38px;
  text-align: left;
`;

export const LearnQuizKicker = styled.p`
  margin: 0 0 14px;
  color: #4359fc;
  font-size: 15px;
  font-weight: 900;
`;

export const LearnQuizTitle = styled.h1`
  margin: 0;
  color: #3c3c3c;
  font-size: 30px;
  font-weight: 900;
  line-height: 40px;
`;

export const LearnQuizHint = styled.p`
  margin: 17px auto 0;
  color: #777f8e;
  font-size: 16px;
  line-height: 1.6;
`;

export const LearnQuizTarget = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  min-height: 54px;
  margin-top: 28px;
  padding: 0 34px;
  border-radius: 999px;
  background: #eef1ff;
  color: #4359fc;
  font-size: 23px;
  font-weight: 900;
`;

export const LearnQuizOptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  justify-content: space-between;
  gap: 60px;
  width: min(880px, 100%);
  margin: 0 auto 56px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const optionTone = {
  default: {
    border: "#e1e5ef",
    bg: "#fff",
    iconBg: "#f1f3ff",
    text: "#2c2c2a",
    meta: "#888",
    numberBg: "#f2f2f2",
    number: "#888",
  },
  selected: {
    border: "#4359fc",
    bg: "#dff5ff",
    iconBg: "#c8ddff",
    text: "#4359fc",
    meta: "#5b6cff",
    numberBg: "#4359fc",
    number: "#fff",
  },
  correct: {
    border: "#58cc02",
    bg: "#d9ffc6",
    iconBg: "#b9f47e",
    text: "#58cc02",
    meta: "#58cc02",
    numberBg: "#58cc02",
    number: "#fff",
  },
  wrong: {
    border: "#f14141",
    bg: "#ffe8e8",
    iconBg: "#ffc7c7",
    text: "#f14141",
    meta: "#f14141",
    numberBg: "#f14141",
    number: "#fff",
  },
};

export const LearnQuizOptionIcon = styled.div`
  display: grid;
  place-items: center;
  height: 116px;
  margin-bottom: 24px;
  border: 1px dashed #cbd5ff;
  border-radius: 10px;
  background: #f1f3ff;
  font-size: 48px;
`;

export const LearnQuizOptionText = styled.div`
  display: grid;
  gap: 8px;

  strong {
    color: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  }

  span {
    display: none;
  }
`;

export const LearnQuizOptionNumber = styled.span`
  position: absolute;
  right: 12px;
  bottom: 14px;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 7px;
  background: #f2f2f2;
  color: #888;
  font-size: 13px;
  font-weight: 900;
`;

export const LearnQuizOption = styled.button`
  position: relative;
  width: 240px;
  height: 210px;
  overflow: hidden;
  padding: 20px 24px 22px;
  border: 2px solid ${({ $state }) => optionTone[$state]?.border};
  border-radius: 14px;
  background: ${({ $state }) => optionTone[$state]?.bg};
  text-align: left;
  cursor: pointer;
  box-shadow: none;
  transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(67, 89, 252, 0.12);
  }

  &:disabled {
    cursor: default;
  }

  .optionIcon {
    background: ${({ $state }) => optionTone[$state]?.iconBg};
  }

  .optionText {
    strong {
      color: ${({ $state }) => optionTone[$state]?.text};
      font-weight: ${({ $state }) => ($state === "default" ? 400 : 900)};
    }

    span {
      color: ${({ $state }) => optionTone[$state]?.meta};
    }
  }

  .optionNumber {
    background: ${({ $state }) => optionTone[$state]?.numberBg};
    color: ${({ $state }) => optionTone[$state]?.number};
  }
`;

export const LearnQuizBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1320px, 100%);
  margin: 0 auto;
  padding: 34px 120px 0;
  border-top: 1px solid #e6e6e6;
`;

export const LearnQuizSkip = styled.button`
  border: 0;
  background: transparent;
  color: #c0c0c0;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
`;

export const LearnQuizCheck = styled.button`
  min-width: auto;
  height: auto;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #4359fc;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    background: transparent;
    color: #aaa;
    cursor: default;
  }
`;

export const LearnQuizFeedback = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr 180px;
  gap: 20px;
  align-items: center;
  width: min(1320px, 100%);
  min-height: 160px;
  margin: 72px auto 0;
  padding: 34px 56px;
  border-radius: 0;
  background: ${({ $status }) => ($status === "correct" ? "#d9ffc6" : "#ffe8e8")};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const LearnQuizFeedbackIcon = styled.div`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  background: transparent;
  color: #1a1a1a;
  font-size: 28px;
  font-weight: 900;
`;

export const LearnQuizFeedbackText = styled.div`
  strong {
    display: block;
    margin-bottom: 14px;
    color: ${({ $status }) => ($status === "correct" ? "#58cc02" : "#f14141")};
    font-size: 22px;
    font-weight: 900;
  }

  p {
    margin: 0 0 14px;
    color: #555b68;
    font-size: 15px;
    line-height: 1.55;
  }

  span {
    color: #1f2430;
    font-size: 13px;
    font-weight: 900;
  }
`;

export const LearnQuizFeedbackActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  button {
    width: ${({ $status }) => ($status === "correct" ? "120px" : "170px")};
    height: 58px;
    border: 0;
    border-radius: ${({ $status }) => ($status === "correct" ? "0" : "12px")};
    background: ${({ $status }) => ($status === "correct" ? "transparent" : "#f14141")};
    color: ${({ $status }) => ($status === "correct" ? "#1a1a1a" : "#fff")};
    font-size: 16px;
    font-weight: 900;
    cursor: pointer;
  }

  .review {
    background: #fff;
    color: #4359fc;
  }
`;

export const LearnReviewCard = styled.article`
  width: min(1320px, 100%);
  margin: 0 auto;
  padding-top: 20px;
`;

export const LearnReviewLabel = styled.p`
  margin: 0 0 12px;
  color: #ce82ff;
  font-size: 15px;
  font-weight: 900;
`;

export const LearnReviewIntro = styled.header`
  width: min(900px, 100%);
  margin: 44px auto 22px;
  text-align: left;
`;

export const LearnReviewTitle = styled.h1`
  margin: 0 0 14px;
  color: #3c3c3c;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.35;
`;

export const LearnReviewDesc = styled.p`
  margin: 0;
  color: #888;
  font-size: 16px;
  line-height: 1.55;
`;

export const LearnReviewContent = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(320px, 430px) minmax(220px, 1fr);
  gap: 46px;
  width: min(800px, 100%);
  min-height: 430px;
  margin: 0 auto 24px;
  padding: 26px 40px 76px;
  border: 1px solid #d8d8d8;
  border-radius: 18px;
  background: #fff;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const LearnReviewMedia = styled.div`
  display: grid;
  place-items: center;
  height: 300px;
  border: 1px dashed #aebdff;
  border-radius: 12px;
  background: #eef1ff;
  color: #aaa;
  font-size: 13px;
`;

export const LearnReviewInfo = styled.div`
  padding-top: 22px;
  white-space: pre-line;

  span {
    display: block;
    margin-bottom: 10px;
    color: #888;
    font-size: 14px;
    line-height: 1;
  }

  p {
    margin: 0 0 20px;
    color: #3c3c3c;
    font-size: 14px;
    line-height: 1.45;
  }
`;

export const LearnReviewWord = styled.h2`
  margin: 0 0 34px;
  color: #4359fc;
  font-size: 36px;
  font-weight: 900;
`;

export const LearnReviewControls = styled.div`
  position: absolute;
  left: 40px;
  bottom: 32px;
  display: flex;
  gap: 12px;

  button {
    min-width: 130px;
    height: 34px;
    border: 1px solid #c9d1ff;
    border-radius: 999px;
    background: #f6f8ff;
    color: #4359fc;
    font-size: 12px;
    font-weight: 900;
    cursor: pointer;

    &:first-child {
      border: 0;
      background: #4359fc;
      color: #fff;
      font-size: 13px;
    }
  }
`;

export const LearnReviewButton = styled.button`
  width: 220px;
  height: 56px;
  border: 0;
  border-radius: 12px;
  background: #4359fc;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
`;

export const LearnReviewActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1320px, 100%);
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid #e6e6e6;
`;

export const LearnReviewSkip = styled.button`
  width: 220px;
  height: 56px;
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  background: #fff;
  color: #aaa;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
`;
