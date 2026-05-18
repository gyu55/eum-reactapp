import styled from "styled-components";

const PRIMARY = "#4359fc";
const BLACK = "#2c2c2a";
const GREY = "#888";
const LIGHT = "#f7f7fb";
const LINE = "#ebedf4";
const GREEN = "#16c56f";
const GREEN_TEXT = "#15803d";
const ORANGE = "#f6ad36";

const statusStyle = {
  done: {
    circle: GREEN,
    cardBg: "#f5fffa",
    border: "#86efac",
    title: GREEN_TEXT,
    desc: "#888",
    buttonBg: "#e7fff0",
    button: GREEN_TEXT,
  },
  active: {
    circle: PRIMARY,
    cardBg: PRIMARY,
    border: PRIMARY,
    title: "#fff",
    desc: "rgba(255,255,255,0.75)",
    buttonBg: "#fff",
    button: PRIMARY,
  },
  reward: {
    circle: "#ffd98a",
    cardBg: "#fff9e9",
    border: "#ffe3a8",
    title: "#d97706",
    desc: "#888",
    buttonBg: "#fff7dc",
    button: "#aaa",
  },
  locked: {
    circle: "#f1f1f1",
    cardBg: "#f7f7f7",
    border: "#f0f0f0",
    title: "#bbb",
    desc: "#ccc",
    buttonBg: "#fff",
    button: "#aaa",
  },
};

export const LearnPage = {
  Page: styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    padding: 300px 0 210px;
    background: #fff;
    color: ${BLACK};
    font-family: Pretendard, sans-serif;
  `,

  ContentWrap: styled.div`
    width: 1320px;
    min-height: 720px;
    display: grid;
    grid-template-columns: 180px 640px 300px;
    gap: 40px;
    margin: 0 auto;
  `,

  SideMenu: styled.aside`
    padding: 80px 0 0;
    border-right: 1px solid #e1e1e8;
  `,

  SideButton: styled.button`
    width: 135px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 13px;
    padding: 0 18px;
    border: 0;
    border-radius: 8px;
    background: ${({ $active }) => ($active ? "#eef1ff" : "transparent")};
    color: ${({ $active }) => ($active ? PRIMARY : "#777")};
    font-size: 15px;
    font-weight: ${({ $active }) => ($active ? 700 : 400)};
    text-align: left;
    cursor: pointer;

    span {
      width: 18px;
      text-align: center;
      font-size: 13px;
    }
  `,

  Main: styled.main`
    position: relative;
    padding: 20px 0 0;
    border-right: 1px solid #e1e1e8;
  `,

  TopLine: styled.div`
    height: 58px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 36px;
    border-bottom: 1px solid #e5e5ec;
  `,

  Streak: styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #ff6b00;
    font-size: 15px;
    font-weight: 700;

    span {
      font-size: 18px;
    }
  `,

  ChapterHeader: styled.div`
    width: 520px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 22px 0 78px 20px;
    padding: 0 24px 0 32px;
    border-radius: 12px;
    background: ${PRIMARY};
    box-sizing: border-box;

    strong {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.4px;
    }

    button {
      width: 94px;
      height: 26px;
      border: 0;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.28);
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }
  `,

  StatusText: styled.p`
    margin: -50px 0 36px 112px;
    color: ${GREY};
    font-size: 13px;
  `,

  RoadMap: styled.div`
    position: relative;
    width: 430px;
    display: grid;
    gap: 20px;
    margin-left: 130px;

    &::before {
      content: "";
      position: absolute;
      left: 20px;
      top: 20px;
      bottom: 20px;
      width: 3px;
      background: #d9dee9;
      border-radius: 999px;
    }
  `,

  LessonItem: styled.article`
    position: relative;
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 16px;
    align-items: center;
  `,

  LessonCircle: styled.div`
    position: relative;
    z-index: 1;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${({ $status }) => statusStyle[$status]?.circle};
    color: ${({ $status }) => ($status === "done" || $status === "active" ? "#fff" : BLACK)};
    font-size: ${({ $status }) => ($status === "active" ? "18px" : "16px")};
    font-weight: 700;
    box-shadow: ${({ $status }) => ($status === "active" ? "0 0 0 8px rgba(67, 89, 252, 0.12)" : "none")};
  `,

  LessonCard: styled.div`
    width: 330px;
    min-height: 62px;
    display: grid;
    grid-template-columns: 1fr 70px;
    gap: 14px;
    align-items: center;
    padding: 13px 16px;
    border: 1px solid ${({ $status }) => statusStyle[$status]?.border};
    border-radius: 12px;
    background: ${({ $status }) => statusStyle[$status]?.cardBg};
    box-sizing: border-box;
  `,

  LessonTitle: styled.h3`
    margin: 0;
    color: ${({ $status }) => statusStyle[$status]?.title};
    font-size: ${({ $status }) => ($status === "active" ? "16px" : "14px")};
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.28px;
  `,

  LessonDesc: styled.p`
    margin: 8px 0 0;
    color: ${({ $status }) => statusStyle[$status]?.desc};
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.24px;
  `,

  LessonButton: styled.button`
    width: 62px;
    height: 25px;
    border: 0;
    border-radius: 999px;
    background: ${({ $status }) => statusStyle[$status]?.buttonBg};
    color: ${({ $status }) => statusStyle[$status]?.button};
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
  `,

  LessonStartButton: styled.button`
    width: 62px;
    height: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 999px;
    background: #fff;
    color: ${PRIMARY};
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  `,

  NextChapter: styled.button`
    width: 360px;
    height: 52px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin: 82px auto 0;
    border: 1px dashed #bbc8ff;
    border-radius: 12px;
    background: #f3f5ff;
    cursor: pointer;

    strong {
      color: #89c;
      font-size: 13px;
      font-weight: 700;
    }

    span {
      color: #aaa;
      font-size: 11px;
    }
  `,

  QuestPanel: styled.aside`
    width: 292px;
    height: fit-content;
    margin-top: 102px;
    padding: 20px 18px 18px;
    border: 1px solid ${LINE};
    border-radius: 12px;
    background: #fff;
    box-sizing: border-box;
  `,

  QuestTitle: styled.h2`
    margin: 0 0 18px;
    color: ${BLACK};
    font-size: 16px;
    font-weight: 700;
  `,

  QuestItem: styled.div`
    display: grid;
    grid-template-columns: 34px 1fr 42px 32px;
    gap: 10px;
    align-items: center;
    min-height: 54px;
    padding: 8px 0;
    border-top: 1px solid ${LINE};

    &:first-of-type {
      border-top: 0;
    }
  `,

  QuestIcon: styled.div`
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #fff3cc;
    font-size: 16px;
  `,

  QuestName: styled.p`
    margin: 0 0 8px;
    color: ${BLACK};
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
  `,

  QuestBar: styled.div`
    height: 5px;
    overflow: hidden;
    border-radius: 999px;
    background: #f0f0f0;

    span {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: ${ORANGE};
    }
  `,

  QuestCount: styled.span`
    color: #aaa;
    font-size: 11px;
    text-align: right;
  `,

  RewardIcon: styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #fff5de;
    font-size: 15px;
  `,

  ProgressArea: styled.div`
    width: 1040px;
    display: grid;
    grid-template-columns: 180px 1fr 48px 95px;
    gap: 22px;
    align-items: center;
    margin: 72px auto 0;
  `,

  ProgressTitle: styled.p`
    margin: 0 0 7px;
    color: ${BLACK};
    font-size: 13px;
    font-weight: 700;
  `,

  ProgressDesc: styled.p`
    margin: 0;
    color: ${GREY};
    font-size: 12px;
  `,

  ProgressBar: styled.div`
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e9ecff;

    span {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: ${PRIMARY};
    }
  `,

  Percent: styled.p`
    margin: 0;
    color: ${PRIMARY};
    font-size: 13px;
    font-weight: 700;
  `,

  ExpBox: styled.div`
    width: 95px;
    height: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #eef1ff;

    span {
      color: ${GREY};
      font-size: 11px;
      margin-bottom: 5px;
    }

    strong {
      color: ${PRIMARY};
      font-size: 22px;
      font-weight: 700;
      line-height: 1;
    }
  `,
};

const quizColor = {
  blue: PRIMARY,
  green: "#58cc02",
  red: "#f14141",
  purple: "#ce82ff",
};

const optionStyle = {
  default: {
    border: "#e1e1e8",
    bg: "#fff",
    imageBg: "#f1f3ff",
    imageBorder: "#cbd5ff",
    text: "#3c3c3c",
    numberBg: "#f2f2f2",
    numberText: "#888",
  },
  selected: {
    border: PRIMARY,
    bg: "#dff5ff",
    imageBg: "#c8ddff",
    imageBorder: "#6684ff",
    text: PRIMARY,
    numberBg: PRIMARY,
    numberText: "#fff",
  },
  correct: {
    border: "#58cc02",
    bg: "#d9ffc6",
    imageBg: "#b9f47e",
    imageBorder: "#58cc02",
    text: "#58cc02",
    numberBg: "#58cc02",
    numberText: "#fff",
  },
  wrong: {
    border: "#f14141",
    bg: "#ffe8e8",
    imageBg: "#ffc7c7",
    imageBorder: "#f14141",
    text: "#f14141",
    numberBg: "#f14141",
    numberText: "#fff",
  },
};

export const LearnQuizPage = {
  Page: styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    padding: 210px 0 220px;
    background: #fff;
    color: #3c3c3c;
    font-family: Pretendard, sans-serif;
  `,

  Shell: styled.div`
    width: 1320px;
    margin: 0 auto;
  `,

  Message: styled.p`
    margin: 0;
    padding: 120px 0;
    color: ${GREY};
    font-size: 18px;
    text-align: center;
  `,

  Top: styled.div`
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 24px;
    align-items: center;
    width: 1120px;
    margin: 0 auto;
  `,

  CloseButton: styled.button`
    width: 40px;
    height: 40px;
    border: 0;
    background: transparent;
    color: #aaa;
    font-size: 22px;
    cursor: pointer;
  `,

  Progress: styled.div`
    height: 14px;
    overflow: hidden;
    border-radius: 999px;
    background: #eeeeee;

    span {
      display: block;
      width: ${({ $value }) => `${$value}%`};
      height: 100%;
      border-radius: inherit;
      background: ${({ $color }) => quizColor[$color] || PRIMARY};
    }
  `,

  Divider: styled.div`
    width: 1320px;
    height: 1px;
    margin: 32px auto 0;
    background: #e6e6e6;
  `,

  Question: styled.h1`
    width: 1120px;
    margin: 64px auto 38px;
    color: #3c3c3c;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
  `,

  OptionGrid: styled.div`
    width: 880px;
    display: grid;
    grid-template-columns: repeat(3, 240px);
    justify-content: space-between;
    gap: 60px;
    margin: 0 auto 56px;
  `,

  OptionButton: styled.button`
    position: relative;
    width: 240px;
    height: 210px;
    overflow: hidden;
    padding: 20px 24px 22px;
    border: 2px solid ${({ $status }) => optionStyle[$status]?.border};
    border-radius: 14px;
    background: ${({ $status }) => optionStyle[$status]?.bg};
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
  `,

  OptionImage: styled.div`
    width: 184px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    border: 1px dashed ${({ $status }) => optionStyle[$status]?.imageBorder};
    border-radius: 8px;
    background: ${({ $status }) => optionStyle[$status]?.imageBg};
    font-size: 48px;
  `,

  OptionText: styled.p`
    margin: 0;
    color: ${({ $status }) => optionStyle[$status]?.text};
    font-size: 16px;
    font-weight: ${({ $status }) => ($status === "default" ? 400 : 700)};
    line-height: 1;
  `,

  OptionNumber: styled.span`
    position: absolute;
    right: 12px;
    bottom: 14px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    background: ${({ $status }) => optionStyle[$status]?.numberBg};
    color: ${({ $status }) => optionStyle[$status]?.numberText};
    font-size: 13px;
    font-weight: 700;
  `,

  Bottom: styled.div`
    width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 34px auto 0;
  `,

  SkipButton: styled.button`
    border: 0;
    background: transparent;
    color: #c0c0c0;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  `,

  CheckButton: styled.button`
    border: 0;
    background: transparent;
    color: ${PRIMARY};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    &:disabled {
      color: #c0c0c0;
      cursor: default;
    }
  `,

  Feedback: styled.div`
    width: 1320px;
    min-height: 160px;
    display: grid;
    grid-template-columns: 44px 1fr 180px;
    gap: 20px;
    align-items: center;
    margin: 72px auto 0;
    padding: 34px 56px;
    background: ${({ $status }) => ($status === "correct" ? "#d9ffc6" : "#ffe8e8")};
    box-sizing: border-box;
  `,

  FeedbackIcon: styled.div`
    font-size: 28px;
  `,

  FeedbackTitle: styled.h2`
    margin: 0 0 14px;
    color: ${({ $status }) => ($status === "correct" ? "#58cc02" : "#f14141")};
    font-size: 22px;
    font-weight: 700;
  `,

  FeedbackDesc: styled.p`
    margin: 0 0 14px;
    color: ${({ $status }) => ($status === "correct" ? "#3c8800" : "#f25050")};
    font-size: 15px;
    font-weight: ${({ $status }) => ($status === "correct" ? 400 : 600)};
  `,

  FeedbackReward: styled.p`
    margin: 0;
    color: #1a1a1a;
    font-size: 13px;
    font-weight: 700;
  `,

  FeedbackButton: styled.button`
    width: ${({ $status }) => ($status === "correct" ? "120px" : "170px")};
    height: 58px;
    justify-self: end;
    border: 0;
    border-radius: ${({ $status }) => ($status === "correct" ? "0" : "12px")};
    background: ${({ $status }) => ($status === "correct" ? "transparent" : "#f14141")};
    color: ${({ $status }) => ($status === "correct" ? "#1a1a1a" : "#fff")};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  `,

  ReviewIntro: styled.div`
    width: 1120px;
    margin: 34px auto 28px;
  `,

  ReviewLabel: styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 10px;
    color: #ce82ff;
    font-size: 15px;
    font-weight: 700;

    span {
      width: 30px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #ce82ff;
      font-size: 15px;
    }
  `,

  ReviewTitle: styled.h1`
    margin: 0 0 14px;
    color: #3c3c3c;
    font-size: 30px;
    font-weight: 700;
  `,

  ReviewDesc: styled.p`
    margin: 0;
    color: #888;
    font-size: 16px;
  `,

  ReviewCard: styled.div`
    position: relative;
    width: 800px;
    min-height: 430px;
    display: grid;
    grid-template-columns: 430px 1fr;
    gap: 46px;
    margin: 0 auto 24px;
    padding: 26px 40px 76px;
    border: 1px solid #d8d8d8;
    border-radius: 18px;
    background: #fff;
    box-sizing: border-box;
  `,

  ReviewMedia: styled.div`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #aebdff;
    border-radius: 12px;
    background: #eef1ff;
    color: #aaa;
    font-size: 13px;
  `,

  ReviewInfo: styled.div`
    padding-top: 22px;
  `,

  ReviewSmallTitle: styled.p`
    margin: 0 0 10px;
    color: #888;
    font-size: 14px;
  `,

  ReviewWord: styled.h2`
    margin: 0 0 34px;
    color: ${PRIMARY};
    font-size: 36px;
    font-weight: 700;
  `,

  ReviewLine: styled.div`
    width: 1px;
    height: 28px;
    margin: -18px 0 18px;
    background: #d9d9d9;
  `,

  ReviewText: styled.p`
    margin: 0 0 9px;
    color: #3c3c3c;
    font-size: 14px;
  `,

  ReviewControls: styled.div`
    position: absolute;
    left: 40px;
    bottom: 32px;
    display: flex;
    gap: 12px;
  `,

  PlayButton: styled.button`
    width: 130px;
    height: 34px;
    border: 0;
    border-radius: 999px;
    background: ${PRIMARY};
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  `,

  ControlButton: styled.button`
    width: 130px;
    height: 34px;
    border: 1px solid #c9d1ff;
    border-radius: 999px;
    background: #f6f8ff;
    color: ${PRIMARY};
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  `,

  SkipOutlineButton: styled.button`
    width: 220px;
    height: 56px;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    background: #fff;
    color: #aaa;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  `,

  RememberButton: styled.button`
    width: 220px;
    height: 56px;
    border: 0;
    border-radius: 12px;
    background: ${PRIMARY};
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  `,
};

export const LearnAlphabetPage = {
  Page: styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    padding: 140px 0 220px;
    background: #fff;
    color: #1a1a1a;
    font-family: Pretendard, sans-serif;
  `,

  Layout: styled.div`
    width: 1320px;
    min-height: 1760px;
    display: grid;
    grid-template-columns: 180px 680px 310px;
    gap: 60px;
    margin: 0 auto;
  `,

  SideMenu: styled.aside`
    padding-top: 72px;
    border-right: 1px solid #e6e6e6;
  `,

  SideButton: styled.button`
    width: 135px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 13px;
    padding: 0 18px;
    border: 0;
    border-radius: 8px;
    background: ${({ $active }) => ($active ? "#eef1ff" : "transparent")};
    color: ${({ $active }) => ($active ? PRIMARY : "#777")};
    font-size: 15px;
    font-weight: ${({ $active }) => ($active ? 700 : 400)};
    cursor: pointer;

    span {
      width: 18px;
      font-size: 13px;
      text-align: center;
    }
  `,

  Main: styled.main`
    padding-top: 46px;
    border-right: 1px solid #e6e6e6;
    text-align: center;
  `,

  Title: styled.h1`
    margin: 0 0 12px;
    color: #1a1a1a;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.56px;
  `,

  Desc: styled.p`
    margin: 0 0 20px;
    color: #888;
    font-size: 15px;
  `,

  StartButton: styled.button`
    width: 410px;
    height: 42px;
    margin-bottom: 42px;
    border: 0;
    border-radius: 8px;
    background: ${PRIMARY};
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  `,

  Section: styled.section`
    margin-bottom: 42px;
  `,

  SectionTitle: styled.h2`
    margin: 0 0 20px;
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 700;
  `,

  LetterGrid: styled.div`
    width: 360px;
    display: grid;
    grid-template-columns: repeat(4, 72px);
    gap: 12px 18px;
    justify-content: center;
    margin: 0 auto;
  `,

  LetterCard: styled.button`
    width: 72px;
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border: 1px solid #dedede;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;

    strong {
      color: #1a1a1a;
      font-size: 30px;
      font-weight: 700;
      line-height: 1;
    }

    span {
      width: 34px;
      height: 2px;
      border-radius: 999px;
      background: #d9d9d9;
    }
  `,

  QuestPanel: styled.aside`
    width: 300px;
    height: fit-content;
    margin-top: 70px;
    padding: 20px 18px;
    border: 1px solid #dedede;
    border-radius: 12px;
    background: #fff;
    box-sizing: border-box;
  `,

  QuestHead: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;

    strong {
      color: #2c2c2a;
      font-size: 16px;
      font-weight: 700;
    }
  `,

  QuestItem: styled.div`
    display: grid;
    grid-template-columns: 34px 1fr 42px 28px;
    gap: 10px;
    align-items: center;
    min-height: 58px;
    border-top: 1px solid #f0f0f0;

    &:first-of-type {
      border-top: 0;
    }
  `,

  QuestIcon: styled.div`
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #fff3cc;
    font-size: 16px;
  `,

  QuestName: styled.p`
    margin: 0 0 7px;
    color: #2c2c2a;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
  `,

  QuestBar: styled.div`
    height: 5px;
    overflow: hidden;
    border-radius: 999px;
    background: #f0f0f0;

    span {
      display: block;
      height: 100%;
      background: ${ORANGE};
    }
  `,

  QuestCount: styled.span`
    color: #999;
    font-size: 11px;
    text-align: right;
  `,

  QuestReward: styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #fff5de;
    font-size: 15px;
  `,

  PopupDim: styled.div`
    position: fixed;
    inset: 0;
    z-index: 20;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 220px;
    background: rgba(37, 38, 61, 0.56);
  `,

  PopupCard: styled.div`
    position: relative;
    width: 248px;
    min-height: 405px;
    padding: 28px 20px 22px;
    border-radius: 16px;
    background: #fff;
    text-align: center;
    box-sizing: border-box;
  `,

  PopupClose: styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    border: 0;
    background: transparent;
    color: #ccc;
    font-size: 20px;
    cursor: pointer;
  `,

  PopupLetter: styled.div`
    color: ${PRIMARY};
    font-size: 72px;
    font-weight: 700;
    line-height: 1;
  `,

  PopupName: styled.h2`
    margin: 8px 0 6px;
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 700;
  `,

  PopupSound: styled.p`
    margin: 0 0 12px;
    color: #999;
    font-size: 13px;
  `,

  PopupDots: styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 16px;

    span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${PRIMARY};
    }

    span:not(:first-child) {
      background: #d8defe;
    }
  `,

  HandBox: styled.div`
    width: 204px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 14px;
    border-radius: 8px;
    background: #eef1ff;

    img {
      max-width: 115px;
      max-height: 108px;
      object-fit: contain;
    }
  `,

  PopupCaption: styled.p`
    margin: 0 0 8px;
    color: #888;
    font-size: 13px;
  `,

  PopupInfo: styled.div`
    width: 204px;
    margin: 0 auto 22px;
    padding: 8px 10px;
    border: 1px solid ${PRIMARY};
    border-radius: 4px;
    box-sizing: border-box;

    p {
      margin: 0 0 4px;
      color: #555;
      font-size: 12px;
      line-height: 1.35;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,

  PopupActions: styled.div`
    display: flex;
    justify-content: space-between;

    button {
      border: 0;
      background: transparent;
      color: #1a1a1a;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }
  `,
};
