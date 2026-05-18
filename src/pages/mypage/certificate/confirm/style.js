import styled from "styled-components";
import theme from "../../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

const S = {};

/* 실물 신청 페이지 CSS */

/* 전체 영역 */
S.ConfirmWrapper = styled.div`
  margin-top: 16px;
`;

/* 상단 안내 문구 */
S.ConfirmTopDesc = styled.p`
  margin: 0 0 14px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 공통 섹션 */
S.ConfirmSection = styled.section`
  margin-top: ${({ $first }) => ($first ? "0" : "18px")};
`;

/* 섹션 제목 */
S.ConfirmSectionTitle = styled.h3`
  margin: 0 0 5px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 섹션 설명 */
S.ConfirmSectionDesc = styled.p`
  margin: 0 0 10px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 공통 카드 */
S.ConfirmCardBox = styled.div`
  width: 1040px;

  padding: 22px 24px;
  box-sizing: border-box;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 선택 자격증 카드 */
S.SelectedCertificateCard = styled(S.ConfirmCardBox)`
  height: 112px;
`;

/* 신청자 정보 카드 */
S.ApplicantCard = styled(S.ConfirmCardBox)`
  height: 112px;
`;

/* 수령 정보 카드 */
S.DeliveryCard = styled(S.ConfirmCardBox)`
  min-height: 238px;
`;

/* 입력 줄 */
S.InputRow = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns || "1fr 1fr"};
  gap: 24px;

  width: 100%;
`;

/* 필드 */
S.Field = styled.div`
  display: flex;
  flex-direction: column;
`;

/* 라벨 */
S.Label = styled.label`
  margin-bottom: 8px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 입력 박스 */
S.Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 14px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 8px;
  background: #ffffff;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #111111;

  &::placeholder {
    color: #666666;
  }

  &:focus {
    outline: none;
  }
`;

/* 셀렉트 */
S.Select = styled.select`
  width: 100%;
  height: 44px;

  padding: 0 36px 0 14px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 8px;
  background: #ffffff;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #111111;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%239CA3AF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 12px 7px;

  &:focus {
    outline: none;
  }
`;

/* 주소 검색 줄 */
S.AddressSearchRow = styled.div`
  display: grid;
  grid-template-columns: 216px 216px 110px;
  gap: 24px;

  align-items: end;
  width: 100%;
`;

/* 주소 검색 버튼 */
S.AddressButton = styled.button`
  width: 110px;
  height: 44px;

  border: 1px solid #4359fc;
  border-radius: 8px;
  background: #ffffff;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  cursor: pointer;
`;

/* 주소 입력 영역 */
S.AddressField = styled.div`
  margin-top: 18px;
`;

/* 신청 전 확인사항 카드 */
S.NoticeCard = styled.div`
  width: 1040px;
  height: 124px;

  padding: 22px 24px;
  box-sizing: border-box;

  border: 1px solid #ffd6d0;
  border-radius: 14px;
  background: #fff8f0;
`;

/* 확인사항 문구 */
S.NoticeText = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  & + & {
    margin-top: 12px;
  }
`;

/* 동의 카드 */
S.AgreeCard = styled.div`
  width: 1040px;
  height: 78px;

  padding: 0 24px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  border-radius: 14px;
  background: ${PALETTE.white};
`;

/* 동의 줄 */
S.AgreeRow = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 0;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* 체크박스 */
S.AgreeInput = styled.input`
  width: 18px;
  height: 18px;

  margin: 0;
  flex-shrink: 0;

  accent-color: #4359fc;
`;

/* 하단 버튼 영역 */
S.ButtonArea = styled.div`
  width: 1040px;
  margin-top: 12px;

  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

/* 취소 버튼 */
S.CancelButton = styled.button`
  width: 80px;
  height: 44px;

  border: 1px solid #dddddd;
  border-radius: 8px;
  background: #ffffff;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #666666;

  cursor: pointer;
`;

/* 신청 완료 버튼 */
S.SubmitButton = styled.button`
  width: 88px;
  height: 44px;

  border: none;
  border-radius: 8px;
  background: #4359fc;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #ffffff;

  cursor: pointer;
`;

export default S;