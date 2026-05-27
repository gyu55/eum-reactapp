import React from "react";

import {
  AttendanceWrapper,
  AttendanceDayText,
  AttendanceInfoBox,
  AttendanceStrongText,
  AttendanceSubText,
} from "./style";

const AttendanceCard = ({ attendance }) => {
  const attendanceCount = attendance?.attendanceCount || 0;

  const getDigitType = (count) => {
    if (count >= 1000) return "large";
    if (count >= 10) return "medium";
    return "small";
  };

  return (
    <AttendanceWrapper>
      <AttendanceDayText $digitType={getDigitType(attendanceCount)}>
        {attendanceCount}일🔥
      </AttendanceDayText>

      <AttendanceInfoBox>
        <AttendanceStrongText>연속 학습 중!</AttendanceStrongText>

        <AttendanceSubText>
          {attendance?.attendanceStartDate || "-"} 부터 시작
        </AttendanceSubText>

        <AttendanceSubText>
          역대 최고: {attendance?.maxAttendanceCount || 0}일
        </AttendanceSubText>
      </AttendanceInfoBox>
    </AttendanceWrapper>
  );
};

export default AttendanceCard;