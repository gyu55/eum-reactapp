import React from "react";

import {
  AttendanceWrapper,
  AttendanceDayText,
  AttendanceInfoBox,
  AttendanceStrongText,
  AttendanceSubText,
} from "./style";

/*
  출석일, 시작일, 최고 기록은 출석 API 연동 필요
*/
const AttendanceCard = () => {
  return (
    <AttendanceWrapper>
      <AttendanceDayText>1003일🔥</AttendanceDayText>

      <AttendanceInfoBox>
        <AttendanceStrongText>연속 학습 중!</AttendanceStrongText>
        <AttendanceSubText>2025.02.07 부터 시작</AttendanceSubText>
        <AttendanceSubText>역대 최고: 30일</AttendanceSubText>
      </AttendanceInfoBox>
    </AttendanceWrapper>
  );
};

export default AttendanceCard;