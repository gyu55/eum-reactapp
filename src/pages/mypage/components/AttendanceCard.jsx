import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

/* 카드 전체 */
const Wrapper = styled.div`
  width: 312px;
  height: 90px;
  padding: 0 22px;

  display: flex;
  align-items: center;

  border-radius: 16px;
  background: ${PALETTE.primary.main};
`;

/* 출석일 */
const DayText = styled.div`
  width: 170px;
  flex-shrink: 0;

  font-size: 34px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${PALETTE.white};
  white-space: nowrap;
`;

/* 오른쪽 텍스트 */
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StrongText = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.white};
  white-space: nowrap;
`;

const SubText = styled.span`
  font-size: 11px;
  font-weight: ${FONT_WEIGHT.regular};
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
`;

/*
  - 1003일, 시작일, 최고 기록은 백엔드 출석 API 연동 필요
*/
const AttendanceCard = () => {
  return (
    <Wrapper>
      <DayText>1003일🔥</DayText>

      <InfoBox>
        <StrongText>연속 학습 중!</StrongText>
        <SubText>2025.02.07 부터 시작</SubText>
        <SubText>역대 최고: 30일</SubText>
      </InfoBox>
    </Wrapper>
  );
};

export default AttendanceCard;