import React from "react";

import {
  AttendanceWrapper,
  AttendanceDayText,
  AttendanceInfoBox,
  AttendanceStrongText,
  AttendanceSubText,
} from "./style";

/*
  출석 정보는 마이페이지 메인 API 연동
*/
const AttendanceCard = ({ attendance }) => {
  // 날짜 포맷 변환
  const formatDate = (date) => {
    if (!date) return "-";

    return date.replaceAll("-", ".");
  };

  return (
    <AttendanceWrapper>
      {/* 현재 연속 출석 */}
      <AttendanceDayText>
        {attendance?.attendanceCount || 0}일🔥
      </AttendanceDayText>

      <AttendanceInfoBox>
        <AttendanceStrongText>
          연속 학습 중!
        </AttendanceStrongText>

        <AttendanceSubText>
          {formatDate(attendance?.attendanceStartDate)} 부터 시작
        </AttendanceSubText>

        <AttendanceSubText>
          역대 최고: {attendance?.maxAttendanceCount || 0}일
        </AttendanceSubText>
      </AttendanceInfoBox>
    </AttendanceWrapper>
  );
};

export default AttendanceCard;