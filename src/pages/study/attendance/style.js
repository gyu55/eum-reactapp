// 출석 스타일
import styled from "styled-components";
import Calendar from "react-calendar";

const summaryTone = {
  streak: { border: "#ffbf66", bg: "#fff7e8", value: "#ff8004" },
  month: { border: "#7ca0ff", bg: "#eef9ff", value: "#4359fc" },
  exp: { border: "#8b82ff", bg: "#f3f0ff", value: "#4359fc" },
  badge: { border: "#ffbf66", bg: "#fff8e8", value: "#ff8004" },
};

export const AttendanceWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 72px 24px 48px;
  background: #f7f8ff;
  color: #1f2430;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 104px 16px 72px;
  }
`;

export const AttendanceHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: min(1204px, 100%);
  margin: 0 auto 12px;

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const AttendanceKicker = styled.p`
  margin: 0 0 10px;
  color: #4359fc;
  font-size: 14px;
  font-weight: 900;
`;

export const AttendanceTitle = styled.h1`
  margin: 0 0 7px;
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.48px;
`;

export const AttendanceDesc = styled.p`
  margin: 0;
  color: #a6a6a6;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

export const AttendanceNotice = styled.p`
  width: min(1204px, 100%);
  margin: 0 auto 14px;
  padding: 10px 16px;
  border: 1px solid #dfe3ff;
  border-radius: 8px;
  background: #f1f3ff;
  color: #4359fc;
  font-size: 14px;
  font-weight: 800;
`;

export const TodayStatus = styled.div`
  display: grid;
  align-content: center;
  min-width: 194px;
  min-height: 58px;
  padding: 0 16px;
  border: 2px solid ${({ $checked }) => ($checked ? "#129d1b" : "#e5e8f2")};
  border-radius: 12px;
  background: ${({ $checked }) => ($checked ? "#f0fdf4" : "#fff")};
  text-align: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(-8px)")};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transition:
    opacity 0.35s ease,
    transform 0.35s ease,
    visibility 0.35s ease;

  strong {
    margin-bottom: 3px;
    color: ${({ $checked }) => ($checked ? "#129d1b" : "#777")};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.28px;
  }

  span {
    color: #aae5ae;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: -0.22px;
  }
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  width: min(1207px, 100%);
  margin: 0 auto 18px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.article`
  min-height: 92px;
  padding: 14px 24px;
  border: 1px solid ${({ $tone }) => summaryTone[$tone]?.border || "#e8ebf4"};
  border-radius: 12px;
  background: ${({ $tone }) => summaryTone[$tone]?.bg || "#fff"};
  box-shadow: none;

  strong,
  span {
    display: block;
  }

  strong {
    margin: 5px 0 5px;
    color: ${({ $tone }) => summaryTone[$tone]?.value || "#4359fc"};
    font-size: 28px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.56px;
  }

  span {
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.24px;
  }
`;

export const SummaryIcon = styled.div`
  display: grid;
  place-items: center;
  width: 34px;
  height: 24px;
  margin: 0;
  border-radius: 0;
  background: transparent;
  font-size: 24px;
  line-height: 1;
`;

export const AttendanceContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 820px) 356px;
  gap: 24px;
  padding-top: 0;
  align-items: start;
  width: min(1204px, 100%);
  margin: 0 auto;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr;
  }
`;

export const CalendarCard = styled.article`
  position: relative;
  min-height: 540px;
  padding: 0;
  border: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: none;
`;

// 달력 전체
export const CalendarFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  .react-calendar {
    width: min(820px, 100%);
    height: 540px;
    border: 1px solid #e6e6e6;
    border-radius: 25px;
    padding: 5% 4%;
    font-family: Pretendard;
    font-size: 14px;
  }

  /* 전체 클릭 비활성화 */
  .react-calendar__tile {
    pointer-events: none;
    position: relative;
    background-color: transparent !important;
  }

  /* 호버 이벤트 제거 */
  .react-calendar__tile:hover {
    background-color: inherit;
    cursor: default;
  }

  .react-calendar__navigation {
    height: 52px;
    padding-bottom: 2%;
    border-bottom: 1px solid #dfdfdf;
  }

  /* 좌우 네비게이션 버튼 색상 설정 (<, >) */
  /* 버튼 폰트 설정 */
  .react-calendar__navigation button {
    background-color: transparent;
    color: #7c97fe;
    font-size: 1rem;
    font-weight: 600;
  }

  .react-calendar__navigation button:disabled {
    color: #c5cad5;
    background: transparent;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background: transparent;
    color: #7c97fe;
    outline: none;
  }

  /* 네비게이션 텍스트 클릭 비활성화 */
  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    pointer-events: none;
    flex-grow: 0 !important;
  }

  /* 년.월 텍스트 색상 설정 */
  .react-calendar__navigation__label__labelText {
    color: #3f3f3f;
    font-size: 16px;
    font-weight: 600;
  }

  .react-calendar__month-view__weekdays {
    margin-top: 6%;
    padding-bottom: 3%;
    border-bottom: 0;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
  }

  /* 기본요일 폰트 */
  .react-calendar__month-view__weekdays__weekday abbr {
    color: #424242;
  }

  /* 일요일에 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday:first-child abbr {
    color: #ff0000;
  }

  /* 토요일에 파란 폰트 */
  .react-calendar__month-view__weekdays__weekday:last-child abbr {
    color: #2e7af2;
  }

  /* 일 날짜 간격 */
  .react-calendar__month-view__days {
    min-height: 276px;
    align-content: flex-start;
  }

  .react-calendar__tile {
    display: grid;
    place-items: center;
    height: 46px;
    padding: 0;
    border-radius: 0;
    color: #424242;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: transparent;
  }

  .react-calendar__month-view__days__day abbr {

    color: #424242;
  }

  /* 일요일 날짜 숫자 */
  .calendar-sunday abbr {
    color: #ff0000;
  }

  /* 토요일 날짜 숫자는 기본색 유지 또는 파란색 */
  .calendar-saturday abbr {
    color: #2e7af2;
  }

  /* 이전 달과 다음 달의 날짜 숫자들의 색상 변경 */
  .react-calendar__month-view__days__day--neighboringMonth abbr {
    color: #bdbdbd !important;
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    position: relative;
    background: none;
  }

  /* 오늘 날짜 원형 스타일 */
  .react-calendar__tile--now::after {
    content: "";
    position: absolute;
    top: 48%;
    left: 50%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #7c97fe;
    transform: translate(-50%, -50%);
  }

  /* 다른 달의 오늘 날짜에는 원형 표시를 숨김 */
  .react-calendar__month-view__days__day--neighboringMonth.react-calendar__tile--now::after {
    display: none;
  }

  .react-calendar__tile--active {
    background: none;
    color: #424242;
  }

  .react-calendar__tile--active abbr {
    color: inherit;
  }

  .react-calendar__tile--now abbr {
    position: relative;
    /* 원형위로뜨는숫자 */
    z-index: 2;
    color: #fff;
  }

  /* 다른 달의 오늘 날짜는 이웃 날짜 색상을 유지 */
  .react-calendar__month-view__days__day--neighboringMonth.react-calendar__tile--now abbr {
    color: #bdbdbd !important;
  }
`;

export const StyledCalendar = styled(Calendar)``;

/* 오늘 버튼 스타일 */
export const CalendarTodayButton = styled.button`
  position: absolute;
  top: 44px;
  right: 58px;
  width: 90px;
  border: 0;
  border-radius: 50px;
  background-color: #7c97fe;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.6rem;
  text-align: center;
  cursor: pointer;
`;

/* 특정 날짜에 점 표시 스타일 */
export const CalendarDot = styled.span`
  position: absolute;
  left: 50%;
  top: calc(50% + 17px);
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background-color: #4359fc;
  transform: translateX(-50%);
`;

export const CardTitle = styled.h2`
  margin: 0 0 18px;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.32px;
`;

export const CalendarWeekHead = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 12px;
  border-bottom: 1px solid #eef1f5;

  span {
    padding-bottom: 12px;
    color: #8a93a3;
    font-size: 13px;
    font-weight: 900;
    text-align: center;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

export const CalendarDay = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 68px;
  border: 1px solid ${({ $today }) => ($today ? "#4359fc" : "#f1f3f8")};
  border-radius: 8px;
  background: ${({ $today }) => ($today ? "#f5f7ff" : "#fff")};

  span {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: ${({ $today }) => ($today ? "#4359fc" : "transparent")};
    color: ${({ $today }) => ($today ? "#fff" : "#2c2c2a")};
    font-size: 14px;
    font-weight: 900;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $checked }) => ($checked ? "#4359fc" : "#d8dde8")};
    transform: translateX(-50%);
  }
`;

/* 출석 미출석 */
export const CalendarLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  margin: 0;
  position: absolute;
  left: 70px;
  bottom: 28px;

  span {
    position: relative;
    padding-left: 16px;
    color: #666;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0;
  }

  span::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4359fc;
    transform: translateY(-50%);
  }

  span:last-child::before {
    background: #d8dde8;
  }
`;

export const SidePanel = styled.aside`
  display: grid;
  gap: 16px;
  width: 356px;
`;

export const WeeklyCard = styled.article`
  width: 356px;
  min-height: 190px;
  padding: 20px 24px;
  border: 1.5px solid #e6e6e6;
  border-radius: 20px;
  background: #fff;
  box-shadow: none;
`;

export const WeekList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 18px;
`;

export const WeekItem = styled.div`
  display: grid;
  justify-items: center;
  gap: 9px;

  span {
    color: ${({ $status }) => ($status === "today" || $status === "current" ? "#4359fc" : "#a6a6a6")};
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.2px;
  }

  strong {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ $status }) => ($status === "done" || $status === "today" ? "#4359fc" : "#eef1f5")};
    color: #fff;
    font-size: ${({ $status }) => ($status === "today" ? "10px" : "12px")};
    font-weight: ${({ $status }) => ($status === "today" ? 700 : 400)};
  }
`;

export const WeeklyProgressText = styled.p`
  margin: 0 0 12px;
  color: #a6a6a6;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;

  strong {
    color: #4359fc;
  }
`;

export const WeeklyProgressBar = styled.div`
  overflow: hidden;
  height: 8px;
  border-radius: 999px;
  background: #eef1f5;

  span {
    display: block;
    width: ${({ $progress }) => $progress || 0}%;
    height: 100%;
    border-radius: inherit;
    background: #4359fc;
  }
`;

export const RewardCard = styled.article`
  width: 356px;
  min-height: 300px;
  padding: 24px 30px;
  border: 1.5px solid #e6e6e6;
  border-radius: 20px;
  background: #fff;
  box-shadow: none;
`;

export const RewardList = styled.div`
  display: grid;
  gap: 18px;
  padding-top: 14px;
  border-top: 1px solid #eeeeee;
`;

export const RewardItem = styled.article`
  display: grid;
  grid-template-columns: 45px minmax(0, 1fr) 56px;
  gap: 12px;
  align-items: center;

  strong {
    display: block;
    margin-bottom: 5px;
    color: ${({ $status }) => ($status === "receive" ? "#ff8004" : $status === "locked" ? "#c8c8c8" : "#1a1a1a")};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.28px;
  }

  span {
    color: ${({ $status }) => ($status === "locked" ? "#c8c8c8" : "#a6a6a6")};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.24px;
  }

  button {
    height: 28px;
    border: 0;
    border-radius: 999px;
    background: ${({ $status }) => ($status === "receive" ? "#fff1d8" : $status === "locked" ? "transparent" : "#eef1ff")};
    color: ${({ $status }) => ($status === "receive" ? "#ff8004" : $status === "locked" ? "#777" : "#4359fc")};
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const RewardDay = styled.div`
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #eef1ff;
  color: #4359fc;
  font-size: 9px;
  font-weight: 700;
`;

export const AttendancePopupWrap = styled.div`
  position: fixed;
  inset: 0;
  /* z-index: 1000; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.35);
  font-family: Pretendard, sans-serif;

  .popup {
    position: relative;
    width: min(430px, 100%);
    padding: 42px 36px 34px;
    border-radius: 30px;
    background: ${({ theme }) => theme.PALETTE.white};
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
    text-align: center;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 22px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #777;
    font-size: 24px;
    line-height: 1;
  }

  .fire {
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 22px;
    border-radius: 50%;
    background: #fff2dc;
    font-size: 44px;
  }

  h2 {
    margin: 0 0 10px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    line-height: ${({ theme }) => theme.FONT_LINE.h6};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }

  .date {
    margin: 0 0 26px;
    color: #777;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  }

  .rewards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 26px;

    div {
      padding: 20px 14px;
      border-radius: 18px;
      background: #f7f7fb;
    }

    span,
    small,
    strong {
      display: block;
    }

    span {
      margin-bottom: 10px;
      font-size: 28px;
      line-height: 1;
    }

    small {
      margin-bottom: 8px;
      color: #777;
      font-size: ${({ theme }) => theme.FONT_SIZE.h12};
    }

    strong {
      color: #1a1a1a;
      font-size: ${({ theme }) => theme.FONT_SIZE.h10};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }
  }

  .notice {
    margin: 0 0 12px;
    color: #1a1a1a;
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  }

  .bar {
    height: 10px;
    overflow: hidden;
    margin-bottom: 28px;
    border-radius: 999px;
    background: #ececf2;

    span {
      display: block;
      width: 50%;
      height: 100%;
      border-radius: inherit;
      background: ${({ theme }) => theme.PALETTE.primary.main};
    }
  }

  .detail {
    width: 100%;
    height: 54px;
    border-radius: 15px;
    background: ${({ theme }) => theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;
