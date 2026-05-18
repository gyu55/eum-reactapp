import styled from "styled-components";
import theme from "../../../styles/theme";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";


// 출석체크 화면_style

// 크기
const fontSize = (key) => ({theme}) => theme.FONT_SIZE[key];
// 굵기
const fontWeight = (key) => ({theme}) => theme.FONT_WEIGHT[key];
// 행간
const lineHeight = (key) => ({theme}) => theme.FONT_LINE[key];
// 색
const textColor = (key) => ({theme}) => theme.PALETTE[key];


// 출석체크_화면
 
// 전체
export const AttendWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  /* background: #f8f9ff; */
  padding: 120px 0 180px;
  box-sizing: border-box;
`;

// Title
export const AttendTitle = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .checkAttendance{
    display: flex;
    flex-direction: column;
    gap: 8px;

    .checkDesc1{
      color: ${textColor("black")};
      font-size: ${fontSize("h6")};
      font-weight: ${fontWeight("bold")};
    }
    .checkDesc2{
      color: #a6a6a6;
      font-size: ${fontSize("h9")};
      font-weight: ${fontWeight("light")};
    }
  }

  .checkComplete{
    width: 194px;
    height: 58px;
    padding-top: 1%;
    border-radius: 18px;
    border: 2px solid #129D1B;
    box-sizing: border-box;
    text-align: center;

    .completeDesc1{
      color: #129D1B;
      font-size: ${fontSize("h10")};
      font-weight: ${fontWeight("bold")};
    }
    .completeDesc2{
      color: #AAE5AE;
      font-size: ${fontSize("h11")};
      font-weight: ${fontWeight("regular")};
    }
  }
`;

// 알림
export const AttendNotice = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto 50px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  .straight,
  .month,
  .exp,
  .badge{
    height: 132px;
    border: 1.5px solid #e6e6e6;
    border-radius: 20px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;

    .noticeIcon{
      margin: 0 0 10px;
      font-size: 28px;
      line-height: 1;
    }

    .noticeDay{
      margin: 0 0 8px;
      color: #4359fc;
      font-size: 28px;
      font-weight: 900;
      line-height: 1;
    }
    
    .noticeText{
      margin: 0;
      color: #666;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

// 달력 전체
export const StyledCalendarWrapper = styled.div`
  
  /* // width: 820px;
  // height: 549px;
  /* display: flex; */
  // justify-content: center;
  // position: relative;
  /* margin: auto; */
  // margin-top: 50px; */

  width: min(1250px, calc(100% - 48px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 820px 330px;
  gap: 30px;
  align-items: start;
  

  .react-calendar {
    width: 820px;
    height: 600px;
    border: 1px solid #e6e6e6;
    border-radius: 25px;
    padding: 7% 4%;
  }

  /* 전체 클릭 비활성화 */
  .react-calendar__tile {
    pointer-events: none; /* 클릭 비활성화 */
    position: relative;
    background-color: transparent !important;
  }

  /* 호버 이벤트 제거 */
  .react-calendar__tile:hover {
    background-color: inherit;
    cursor: default; /* 마우스 커서도 기본으로 변경 */
  }

  .react-calendar__navigation {
    border-bottom: 1px solid #DFDFDF;
    padding-bottom: 2%;
    height: 57px;
  }

  /* 2024.09 텍스트 색상 설정 */
  .react-calendar__navigation__label__labelText {
    color: #3F3F3F;
  }

  /* 좌우 네비게이션 버튼 색상 설정 (<, >) */
  .react-calendar__navigation__arrow {
    background-color: transparent;
    color: #7C97FE;
  }

  /* 버튼 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 600;
    font-size: 1rem;
  }

  /* 네비게이션 버튼 호버 이벤트 제거 */
  .react-calendar__navigation button:hover {
    background-color: transparent; /* 기본 배경 제거 */
    color: #7C97FE; /* 호버 시 텍스트 색상 설정 (기본 색상 유지) */
  }

  /* 네비게이션 텍스트 호버 이벤트 제거 */
  .react-calendar__navigation__label__labelText:hover {
    color: #3F3F3F; /* 호버 시 색상 유지 */
  }

  /* 네비게이션 텍스트 클릭 비활성화 */
  .react-calendar__navigation__label {
    pointer-events: none; /* 클릭 이벤트 비활성화 */
  }

  /* 네비게이션 버튼 클릭 시 배경색 변경 방지 */
  .react-calendar__navigation button:active {
    background-color: transparent; /* 배경색 투명으로 설정 */
  }

  /* 네비게이션 버튼 포커스 상태 스타일 */
  .react-calendar__navigation button:focus {
    background-color: transparent; /* 배경색 투명으로 설정 */
    outline: none; /* 기본 테두리 제거 */
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 700;
  }

  /* 기본요일 폰트 */
  .react-calendar__month-view__weekdays__weekday abbr {
    color: #424242;
  }

  /* 일요일에 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: #FF0000;
  }

  /* 토요일에 파란 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="토요일"] {
    color: #2E7AF2;
  }

  /* 일요일 날짜 숫자 */
  .react-calendar__month-view__days__day--weekend:nth-child(7n + 1) abbr {
    color: #ff0000;
  }

  /* 토요일 날짜 숫자는 기본색 유지 또는 파란색 */
  .react-calendar__month-view__days__day--weekend:nth-child(7n) abbr {
    color: #2E7AF2;
  }

  .react-calendar__month-view__days__day abbr {
    color: #424242;
  }

  /* 이전 달과 다음 달의 날짜 숫자들의 색상 변경 */
  .react-calendar__month-view__days__day--neighboringMonth{
    abbr {
      color: #BDBDBD !important;
    }
  } 

  .react-calendar__tile--active {
    background: none;
    color: #424242;
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    position: relative; /* 원형 위치 조정에 필요 */
    z-index: 1;
    abbr {
      color: white;
      position: relative;
      z-index: 2;
    }
  }

  /* 오늘 날짜 원형 스타일 */
  .react-calendar__tile--now::after {
    content: ''; /* 내용 추가 */
    position: absolute; /* 절대 위치 */
    top: 50%; /* 수직 중앙 정렬 */
    left: 50%; /* 수평 중앙 정렬 */
    width: 30px; /* 원형 너비 조정 */
    height: 30px; /* 원형 높이 조정 */
    border-radius: 50%; /* 원형 유지 */
    background-color: #7C97FE; /* 원형 배경색 */
    transform: translate(-50%, -50%); /* 중앙 정렬 */
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    background-color: white;
    padding: 0;
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 17px;
  }
  padding: 28px 22px;
`;

// CalendarWrapper
export const CalendarWrap = styled.div`
  position: relative;
  background: #fff;
  border-radius: 20px;
  box-sizing: border-box;
`;

export const StyledCalendar = styled(Calendar)``;

/* 오늘 버튼 스타일 */
export const StyledDate = styled.div`
  position: absolute;
  top: 60px; 
  right: 58px; 
  background-color: #7C97FE;
  color: white;
  width: 90px;
  text-align: center;
  line-height: 1.6rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  /* z-index: 1; 버튼이 다른 요소 위에 나타나도록 설정 */
`;

// 출석 미출석
export const AttendIS = styled.div`
  position: absolute;
  left: 90px;
  bottom: 58px;

  display: flex;
  align-items: center;
  gap: 34px;

  .in{
    position: relative;
    display: inline-flex;
    align-items: center;
    padding-left: 18px;

    font-size: 14px;
    font-weight: 600;

    color: #666;
  }

  .out{
    position: relative;

    display: inline-flex;
    align-items: center;

    padding-left: 18px;

    font-size: 14px;
    font-weight: 600;

    color: #c9c9c9;
  }

  
  .in::before,
  .out::before {
    content: "";
    position: absolute;
    left: 0;

    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  .in::before {
    background: #4359fc;
  }


`;

/* 특정 날짜에 점 표시 스타일 */
export const StyledDot = styled.div`
  background-color: #4359FC;
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 70%; /* 이 값을 조정하여 날짜 바로 아래에 위치시킵니다 */
  left: 50%;
  transform: translateX(-50%); /* 수평 중앙 정렬 유지 */
`;

//SideWrap
export const SideWrap = styled.div`
  display: grid;
  gap: 20px;
`;

// 이번주
export const HeadsUp = styled.div`
  width: 356px;
  height: 225px;
  padding: 30px 26px;
  box-sizing: border-box;

  background: #fff;
  border: 1.5px solid #e6e6e6;
  border-radius: 22px;

  .weekTitle{
    margin: 0 0 18px;
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 900;
  }

  .weekList{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    margin-bottom: 32px;

    .weekItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 9px;
    }

    .day{
      margin: 0;
      color: #aaa;
      font-size: 13px;
      font-weight: 700;
    }

    .todayText{
      color: #4359fc;
    }

    .circle{
      width: 32px;
      height: 32px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #eeeeee;
      color: #fff;
      font-size: 12px;
      font-weight: 900;
    }

    .circle.check{
      background: #4359fc;
      font-size: 18px;
    }

    .circle.today{
      background: #4359fc;
      font-size: 11px;
    }

    .circle.empty{
      background: #eeeeee;
    }
  }

  .weekText{
    margin: 0 0 14px;
    color: #aaa;
    font-size: 14px;

    .weekText span{
      color: #999;
    }

  }

  .progressBar{
    width: 100%;
    height: 8px;
    border-radius: 999px;
    background: #f0f0f0;
    overflow: hidden;

    .progressFill{
      width: 43%;
      height: 100%;
      border-radius: 999px;
      background: #4359fc;

    }
  }

`;

// 출석보상
export const AttendReward = styled.div`
  width: 356px;
  height: 355px;
  padding: 28px 30px;
  box-sizing: border-box;

  background: #fff;
  border: 1.5px solid #e6e6e6;
  border-radius: 22px;

  .rewardTitle{
    margin: 0 0 28px;
    padding-bottom: 5%;

    border-bottom: 1px solid #eeeeee;

    color: #1a1a1a;
    font-size: 16px;
    font-weight: 700;
  }

  .rewardList {
    display: flex;
    flex-direction: column;
    gap: 27px;

    .rewardItem {
      display: grid;
      grid-template-columns: 44px 1fr 66px;
      align-items: center;
      column-gap: 10px;
    }

    .dayCircle {
      width: 32px;
      height: 32px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 10px;
    }

    .rewardText {
      min-width: 0;
    }

    .rewardName {
      margin: 0 0 6px;

      color: #1a1a1a;
      font-size: 12px;
      font-weight: 900;
    }

    .rewardDesc {
      margin: 0;

      color: #aaa;
      font-size: 12px;
      font-weight: 600;
    }

    .rewardButton {
      width: 52px;
      height: 24px;

      border: 0;
      border-radius: 999px;

      font-size: 10px;
      font-weight: 900;
      cursor: pointer;
    }

    .lockIcon {
      width: 55px;
      text-align: center;
      font-size: 16px;
    }

    .done .dayCircle {
      background: #eef0ff;
      color: #4359fc;
    }

    .done .complete {
      background: #eef0ff;
      color: #4359fc;
    }

    .receive .dayCircle {
      background: #fff1d8;
      color: #ff7a00;
    }

    .receive .rewardName {
      color: #ff7a00;
    }

    .receive .receiveButton {
      background: #fff1d8;
      color: #ff7a00;
    }

    .locked .dayCircle {
      background: #f1f1f1;
      color: #c8c8c8;
    }

    .locked .rewardName,
    .locked .rewardDesc {
      color: #c8c8c8;
    }
  }
`;


// ================================================================


// 출석체크 PopUp 화면

export const AttendPopUpWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.35);

  .attendancePopup::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 208px;

    background: #ff8004;
    z-index: 0;
  }

  .attendancePopup{
    position: relative;

    width: 440px;
    padding: 42px 34px 34px;
    box-sizing: border-box;

    background: #fff;
    border-radius: 28px;
    text-align: center;

    overflow: hidden;

    .closeBtn{
      position: absolute;
      top: 22px;
      right: 28px;
      z-index: 3;

      border: 0;
      background: transparent;
      color: #fff;

      font-size: 30px;
      font-weight: 300;
      line-height: 1;
      cursor: pointer;
    }

    .popupHeader{
      position: relative;
      z-index: 1;

      height: 160px;
      color: #fff;

      display: flex;
      flex-direction: column;
      align-items: center;

      .fireIcon {
        margin: 8px 0 20px;
        font-size: 46px;
        line-height: 1;
      }

      .popupHeader h1 {
        margin: 0 0 8px;

        font-size: 26px;
        font-weight: 900;
      }

      .date {
        margin: 0;

        font-size: 15px;
        font-weight: 500;
      }
    }

    .rewardBoxWrap{
      position: relative;
      z-index: 1;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 22px;

      margin: 28px 0 68px;

      .rewardBox {
        height: 106px;
        padding: 18px 10px;
        box-sizing: border-box;

        background: transparent;
        border: 1.5px solid #7157ff;
        border-radius: 14px;

        .rewardIcon {
          margin: 0 0 8px;
          font-size: 24px;
          line-height: 1;
        }

        .rewardLabel {
          margin: 0 0 4px;

          color: #b8aaaa;
          font-size: 13px;
          font-weight: 600;
        }

        .rewardPoint {
          margin: 0;

          color: #4359fc;
          font-size: 22px;
          font-weight: 900;
        }
      }
    }

    .attendNotice{
      margin: 0 0 12px;

      color: #8b7d7d;
      font-size: 15px;
      font-weight: 500;
    }

    .attendNotice span{
      color: #ff7a00;
      font-weight: 900;
    }

    .attendNoticeBar{
      width: 376px;
      height: 7px;
      margin: 0 auto 42px;

      background: #f7e7e6;
      border-radius: 999px;
      overflow: hidden;

      .barFill {
        width: 50%;
        height: 100%;

        background: #ff8004;
        border-radius: 999px;
      }
    }

    .detailBtn {
      border: 0;
      background: transparent;
      color: #1f1717;

      font-size: 22px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;