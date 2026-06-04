import React from "react";

import S from "./style";

const AttendanceCard = ({ attendance }) => {
  const attendanceCount = attendance?.attendanceCount || 0;

  const getDigitType = (count) => {
    if (count >= 1000) return "large";
    if (count >= 10) return "medium";
    return "small";
  };

  return (
    <S.AttendanceWrapper>
      <S.AttendanceDayText $digitType={getDigitType(attendanceCount)}>
        {attendanceCount}일째🔥
      </S.AttendanceDayText>

      <S.AttendanceInfoBox>
        <S.AttendanceStrongText>연속 학습 중!</S.AttendanceStrongText>

        <S.AttendanceSubText>
          {attendance?.attendanceStartDate || "-"} 부터 시작
        </S.AttendanceSubText>

        <S.AttendanceSubText>
          내 최고: {attendance?.maxAttendanceCount || 0}일
        </S.AttendanceSubText>
      </S.AttendanceInfoBox>
    </S.AttendanceWrapper>
  );
};

export default AttendanceCard;