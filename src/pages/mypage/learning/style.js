import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

const S = {};

/* 학습 페이지 레이아웃 */

/* 전체 영역 */
S.LearningLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  margin-top: 26px;
`;

/* 왼쪽 영역 */
S.LearningLeftArea = styled.div`
  width: 988px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 오른쪽 영역 */
S.LearningRightArea = styled.div`
  width: 312px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 학습 목록 CSS */

/* 섹션 */
S.LearningSection = styled.section`
  margin-top: 0;
`;

/* 제목 */
S.LearningTitle = styled.h3`
  margin: 0 0 10px;
  padding-left: 3px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 카드 */
S.LearningCardBox = styled.div`
  width: 981px;
  height: 228px;

  padding: 24px 26px 14px 28px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};

  display: flex;
  flex-direction: column;
`;

/* 학습현황 헤더 */
S.LearningHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 130px;
  align-items: center;

  padding-bottom: 8px;
  border-bottom: 1px solid #eceef5;
`;

/* 학습결과 헤더 */
S.LearningResultHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 110px 90px;
  align-items: center;

  padding-bottom: 8px;
  border-bottom: 1px solid #eceef5;
`;

/* 헤더 텍스트 */
S.LearningHeaderText = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #9ca3af;

  text-align: center;

  &:first-child {
    text-align: left;
  }
`;

/* 학습현황 행 */
S.LearningRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 130px;
  align-items: center;

  height: 31px;
  border-bottom: 1px solid #eceef5;
`;

/* 학습결과 행 */
S.LearningResultRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 110px 90px;
  align-items: center;

  height: 31px;
  border-bottom: 1px solid #eceef5;
`;

/* 행 텍스트 */
S.LearningText = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};

  text-align: center;

  /* 제목 */
  &:first-child {
    text-align: left;
    color: #333333;
  }

  /* 진행도, 시간, 정답률 */
  &:not(:first-child) {
    font-size: 12px;
    color: #9ca3af;
  }
`;

/* 더보기 */
S.LearningMoreButton = styled.button`
  margin: auto auto 0;

  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;
`;

/* 학습요약 카드 CSS */

/* 학습요약 카드 */
S.StudySummaryCardBox = styled.div`
  width: 312px;
  height: 150px;

  padding: 18px 18px 14px;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 학습요약 제목 */
S.StudySummaryTitle = styled.p`
  margin: 0;
  padding-bottom: 10px;

  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;

  color: #000000;
`;

/* 학습요약 목록 */
S.StudySummaryList = styled.div`
  height: 94px;

  padding: 10px 6px 10px 14px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: 1px solid #e5e7eb;
`;

/* 학습요약 항목 */
S.StudySummaryItem = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* 학습요약 라벨 */
S.StudySummaryLabel = styled.p`
  margin: 0;

  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #333333;
`;

/* 학습요약 값 */
S.StudySummaryValue = styled.p`
  margin: 0;

  min-width: 70px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;
  text-align: right;

  color: #4359fc;
`;

export default S;