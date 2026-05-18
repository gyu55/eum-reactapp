import styled from "styled-components";
import theme from "../../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

const S = {};

/* 신청 완료 페이지 */

/* 전체 카드 */
S.CompleteWrapper = styled.div`
  width: 1085px;
  height: 760px;

  margin: 46px auto 0;
  padding-top: 56px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* 완료 아이콘 바깥 원 */
S.CompleteIconOuter = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 999px;
  background: #eef8f1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 완료 아이콘 안쪽 원 */
S.CompleteIconInner = styled.div`
  width: 56px;
  height: 56px;

  border-radius: 999px;
  background: #39b86b;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 완료 제목 */
S.CompleteTitle = styled.h2`
  margin: 18px 0 10px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 완료 설명 */
S.CompleteDesc = styled.p`
  margin: 0 0 34px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 신청 정보 카드 */
S.CompleteInfoCard = styled.div`
  width: 872px;
  height: 188px;

  padding: 14px 24px 24px;
  box-sizing: border-box;

  border: 1px solid #eceef5;
  border-radius: 14px;
  background: #f8f9fc;
`;

/* 카드 제목 */
S.CompleteCardTitle = styled.h3`
  margin: 0 0 20px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 신청 정보 3칸 */
S.CompleteInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 160px 160px 98px;
  column-gap: 42px;

  align-items: start;
`;

/* 정보 묶음 */
S.CompleteInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/* 신청 상태 묶음 */
S.CompleteStatusItem = styled(S.CompleteInfoItem)`
  align-items: center;
`;

/* 정보 제목 */
S.CompleteInfoLabel = styled.p`
  margin: 0 0 9px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 정보 값 */
S.CompleteInfoValue = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 신청 완료 박스 */
S.CompleteStatusBadge = styled.div`
  width: 98px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background: #eef8f1;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 주소 영역 */
S.CompleteAddressBox = styled.div`
  margin-top: 26px;
`;

/* 주소 제목 */
S.CompleteAddressTitle = styled.p`
  margin: 0 0 8px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 주소 내용 */
S.CompleteAddressText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.4;
  color: #000000;
`;

/* 다음 안내 카드 */
S.CompleteNoticeCard = styled.div`
  width: 872px;
  height: 178px;

  margin-top: 22px;
  padding: 24px;
  box-sizing: border-box;

  border: 1px solid #eceef5;
  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 안내 목록 */
S.CompleteNoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

/* 안내 문구 */
S.CompleteNoticeText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 돌아가기 버튼 */
S.CompleteBackButton = styled.button`
  width: 176px;
  height: 46px;

  margin-top: 42px;

  border: none;
  border-radius: 8px;
  background: #4359fc;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #ffffff;

  cursor: pointer;
`;

export default S;