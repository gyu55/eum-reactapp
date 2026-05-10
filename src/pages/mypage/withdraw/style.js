import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

/* 틸퇴시 유의사항 CSS */

/* 전체 영역 */
export const WithdrawWrapper = styled.div`
  margin-top: 18px;
`;

/* 안내 문구 */
export const WithdrawIntroText = styled.p`
  margin: 0;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #777777;
`;

/* 섹션 영역 */
export const WithdrawSection = styled.section`
  margin-top: 50px;
`;

/* 섹션 제목 */
export const WithdrawSectionTitle = styled.h3`
  margin: 0 0 18px 14px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 탈퇴 유의사항 카드 */
export const WithdrawNoticeCard = styled.div`
  width: 780px;
  height: 172px;
  padding: 31px 16px;
  box-sizing: border-box;

  border: 1px solid #ffd6d0;
  border-radius: 12px;
  background: #fff6f4;
`;

/* 유의사항 목록 */
export const WithdrawNoticeList = styled.ul`
  margin: 0;
  padding-left: 0;

  list-style: none;
`;

/* 유의사항 문구 */
export const WithdrawNoticeItem = styled.li`
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #555555;

  & + & {
    margin-top: 16px;
  }
`;

/* 탈퇴사유 선택 CSS */

/* 탈퇴 사유 섹션 */
export const WithdrawReasonSection = styled.section`
  margin-top: 23px;
`;

/* 탈퇴 사유 제목 */
export const WithdrawReasonTitle = styled.h3`
  margin: 0 0 5px 14px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 탈퇴 사유 설명 */
export const WithdrawReasonDesc = styled.p`
  margin: 0 0 6px 14px;

  font-size: 10px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 탈퇴 사유 카드 */
export const WithdrawReasonCardBox = styled.div`
  width: 780px;
  height: 179px;
  padding: 28px 17px 43px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 12px;
  background: ${PALETTE.white};
`;

/* 사유 목록 */
export const ReasonList = styled.div`
  margin-top: 0;

  display: grid;
  grid-template-columns: 220px 1fr;
  column-gap: 117px;
  align-items: start;
`;

/* 사유 열 */
export const ReasonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 사유 항목 */
export const ReasonItem = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #555555;
  cursor: pointer;
`;

/* 라디오 숨김 */
export const ReasonRadio = styled.input`
  display: none;
`;

/* 라디오 원 */
export const ReasonCircle = styled.span`
  width: 19px;
  height: 19px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #4359fc;
  border-radius: 50%;
  background: ${({ $checked }) => ($checked ? "#4359fc" : PALETTE.white)};
`;

/* 기타 줄 */
export const OtherReasonRow = styled.div`
  display: flex;
  align-items: center;
`;

/* 기타 입력 */
export const OtherReasonInput = styled.input`
  width: 300px;
  height: 40px;
  margin-left: 53px;
  padding: 0 14px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 10px;
  background: ${PALETTE.white};

  font-family: "Pretendard";
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #666666;

  outline: none;

  &::placeholder {
    color: #666666;
  }

  &:focus {
    border-color: #e6e2f2;
  }
`;

/* 최종 확인 CSS */

/* 최종 확인 섹션 */
export const ConfirmWithdrawSection = styled.section`
  margin-top: 25px;
`;

/* 최종 확인 제목 */
export const ConfirmWithdrawTitle = styled.h3`
  margin: 0 0 7px 14px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #333333;
`;

/* 최종 확인 카드 */
export const ConfirmWithdrawCardBox = styled.div`
  width: 780px;
  height: 178px;
  padding: 26px 22px 21px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 12px;
  background: ${PALETTE.white};
`;

/* 확인 체크 영역 */
export const ConfirmCheckRow = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #333333;
  cursor: pointer;
`;

/* 체크박스 숨김 */
export const ConfirmCheckInput = styled.input`
  display: none;
`;

/* 체크박스 */
export const ConfirmCheckBox = styled.span`
  width: 22px;
  height: 22px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #4359fc;
  border-radius: 4px;
  background: ${({ $checked }) => ($checked ? "#4359fc" : PALETTE.white)};
`;

/* 비밀번호 영역 */
export const ConfirmPasswordArea = styled.div`
  margin-top: 23px;
`;

/* 비밀번호 라벨 */
export const ConfirmPasswordLabel = styled.label`
  display: block;
  margin-bottom: 16px;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #333333;
`;

/* 비밀번호 입력 */
export const ConfirmPasswordInput = styled.input`
  width: 720px;
  height: 44px;
  padding: 0 14px;
  box-sizing: border-box;

  border: 1px solid #e6e2f2;
  border-radius: 10px;
  background: ${PALETTE.white};

  font-family: "Pretendard";
  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #777777;

  outline: none;

  &::placeholder {
    color: #777777;
  }

  &:focus {
    border-color: #e6e2f2;
  }
`;

/* WithdrawActionButtons CSS */

/* 하단 버튼 영역 */
export const WithdrawActionArea = styled.div`
  width: 780px;
  margin-top: 5px;

  display: flex;
  justify-content: flex-end;
  gap: 17px;
`;

/* 취소 버튼 */
export const WithdrawCancelButton = styled.button`
  width: 90px;
  height: 44px;

  border: 1px solid #dddddd;
  border-radius: 10px;
  background: ${PALETTE.white};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #666666;
`;

/* 회원 탈퇴 버튼 */
export const WithdrawSubmitButton = styled.button`
  width: 120px;
  height: 44px;

  border: none;
  border-radius: 10px;
  background: #f04e45;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${PALETTE.white};
`;