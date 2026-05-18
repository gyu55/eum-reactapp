import styled from "styled-components";
import theme from "../../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

const S = {};

/* 실물 자격증 신청 가이드 CSS */

/* 전체 영역 */
S.GuideWrapper = styled.div`
  margin-top: 16px;
  padding-left: 5px;
`;

/* 상단 제목 영역 */
S.GuideHeader = styled.div`
  margin-top: 16px;
  margin-bottom: 5px;
`;

/* 페이지 제목 */
S.GuideTitle = styled.h2`
  margin: 0 0 5px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 페이지 설명 */
S.GuideDesc = styled.p`
  margin: 0 0 10px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 신청 절차 카드 CSS */

/* 신청 절차 카드 */
S.GuideStepCardBox = styled.div`
  width: 1040px;
  height: 168px;

  margin-top: 5px;
  padding: 18px 0 18px 22px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 신청 절차 제목 */
S.GuideStepTitle = styled.h3`
  margin: 0 0 20px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;

  color: #000000;
`;

/* 신청 절차 목록 */
S.GuideStepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

/* 신청 절차 문구 */
S.GuideStepItem = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #000000;
`;

/* 자격증 신청 예시 카드 CSS */

/* 예시 섹션 */
S.GuideExampleSection = styled.section`
  margin-top: 25px;
`;

/* 예시 제목 */
S.GuideExampleTitle = styled.h3`
  margin: 0 0 5px;
  padding-left: 5px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;

  color: #000000;
`;

/* 예시 설명 */
S.GuideExampleDesc = styled.p`
  margin: 0 0 10px;
  padding-left: 5px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #a6a6a6;
`;

/* 예시 카드 */
S.GuideExampleCardBox = styled.div`
  width: 1040px;
  height: 470px;

  padding: 22px 30px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 내부 예시 박스 */
S.GuideExampleInnerBox = styled.div`
  position: relative;

  width: 972px;
  height: 360px;

  padding: 24px 24px 0;
  box-sizing: border-box;

  border-radius: 14px;
  background: #f8f9fc;
`;

/* 내부 제목 */
S.GuideExampleInnerTitle = styled.h4`
  margin: 0 0 5px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1;

  color: #000000;
`;

/* 내부 설명 */
S.GuideExampleInnerDesc = styled.p`
  margin: 0 0 18px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #a6a6a6;
`;

/* 예시 표 */
S.GuideExampleTable = styled.div`
  width: 100%;
`;

/* 예시 헤더 */
S.GuideExampleHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px 130px 100px;
  align-items: center;

  height: 44px;

  border-top: 1px solid #eceef5;
  border-bottom: 1px solid #eceef5;
`;

/* 헤더 텍스트 */
S.GuideExampleHeaderText = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #000000;
  text-align: center;

  &:first-child {
    text-align: left;
  }
`;

/* 예시 행 */
S.GuideExampleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px 130px 100px;
  align-items: center;

  height: 54px;

  border-bottom: 1px solid #eceef5;
`;

/* 예시 텍스트 */
S.GuideExampleText = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #000000;
  text-align: center;

  &:first-child {
    text-align: left;
  }
`;

/* 상태 버튼 */
S.GuideExampleStatusButton = styled.button`
  width: 80px;
  height: 30px;

  justify-self: center;

  border: none;
  border-radius: 8px;
  background: #e4e7ef;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};

  color: #000000;
`;

/* 신청 버튼 외곽 */
S.GuideExampleApplyBox = styled.div`
  width: ${({ $active }) => ($active ? "88px" : "80px")};
  height: ${({ $active }) => ($active ? "40px" : "30px")};

  padding: ${({ $active }) => ($active ? "3px 2px" : "0")};
  box-sizing: border-box;

  justify-self: center;

  border: ${({ $active }) =>
    $active ? "2px solid #4359fc" : "none"};

  border-radius: ${({ $active }) => ($active ? "8px" : "8px")};
`;

/* 신청 버튼 */
S.GuideExampleApplyButton = styled.button`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 6px;

  background: ${({ $active }) =>
    $active ? "#4359fc" : "#e4e7ef"};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};

  color: ${({ $active }) =>
    $active ? "#ffffff" : "#000000"};
`;

/* 신청 버튼 안내 박스 */
S.GuideExamplePointBox = styled.div`
  position: absolute;
  top: 18px;
  right: 26px;

  width: 189px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background: #fff8f0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #b36b00;
  white-space: nowrap;
`;

/* 신청 버튼 안내 문구 */
S.GuideExamplePointText = styled.span`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #b36b00;
`;

/* 빨간 화살표 */
S.GuideExampleArrow = styled.div`
  position: absolute;
  top: 56px;
  right: 118px;

  width: 2px;
  height: 72px;

  background: #ff6b5f;

  transform: rotate(-32deg);
  transform-origin: top center;

  &::after {
    content: "";

    position: absolute;
    bottom: -2px;
    left: -4px;

    width: 9px;
    height: 9px;

    border-right: 2px solid #ff6b5f;
    border-bottom: 2px solid #ff6b5f;

    transform: rotate(45deg);
  }
`;

/* 하단 안내 */
S.GuideExampleNotice = styled.p`
  margin: 14px 0 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1;

  color: #000000;
`;

/* 신청 상태 안내 CSS */

/* 상태 안내 섹션 */
S.GuideStatusSection = styled.section`
  margin-top: 25px;
`;

/* 상태 안내 제목 */
S.GuideStatusTitle = styled.h3`
  margin: 0 0 10px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 상태 안내 카드 */
S.GuideStatusCardBox = styled.div`
  width: 1040px;
  height: 156px;

  padding: 24px 0 39px 32px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 상태 안내 문구 */
S.GuideStatusText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  & + & {
    margin-top: 23px;
  }
`;

/* 돌아가기 버튼 */
S.GuideBackButton = styled.button`
  width: 206px;
  height: 48px;

  margin-top: 26px;
  margin-left: 834px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1.4px solid #4359fc;
  border-radius: 8px;
  background: transparent;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  cursor: pointer;
`;

export default S;