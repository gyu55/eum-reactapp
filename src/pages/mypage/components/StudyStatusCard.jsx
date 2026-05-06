import React from "react";
import styled from "styled-components";
import Card from "./Card";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

/* 카드 전체 */
const Wrapper = styled(Card)`
  width: 312px;
  height: 181px;
  padding: 18px 20px 36px;
`;

/* 제목 */
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 밑줄 */
const Divider = styled.div`
  height: 1px;
  margin-top: 8px;
  background: #f3f4f6;
`;

/* 리스트 */
const List = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

const Percent = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/* 진행 바 */
const ProgressBar = styled.div`
  width: 256px;
  height: 7px;
  margin-top: 8px;
  border-radius: 999px;
  background: ${GRAYSCALE[8]};
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  background: ${PALETTE.primary.main};
`;

/*
  학습 단계별 진행률은 백엔드 학습 API 연동 필요
*/
const studyList = [
  { label: "수어 기초", percent: 100 },
  { label: "수어 중급", percent: 68 },
  { label: "수어 고급", percent: 12 },
];

const StudyStatusCard = () => {
  return (
    <Wrapper>
      <Title>📚 학습 현황</Title>
      <Divider />

      <List>
        {studyList.map((item) => (
          <div key={item.label}>
            <Row>
              <Label>{item.label}</Label>
              <Percent>{item.percent}%</Percent>
            </Row>

            <ProgressBar>
              <ProgressFill $percent={item.percent} />
            </ProgressBar>
          </div>
        ))}
      </List>
    </Wrapper>
  );
};

export default StudyStatusCard;