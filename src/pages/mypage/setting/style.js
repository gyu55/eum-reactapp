import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, FONT_WEIGHT } = theme;

const S = {};

/* 설정 페이지 CSS */

/* 전체 영역 */
S.SettingWrapper = styled.div`
  margin-top: 26px;
`;

/* 제목 영역 */
S.SettingHeader = styled.div`
  margin-bottom: 14px;
`;

/* 페이지 제목 */
S.SettingTitle = styled.h2`
  margin: 0 0 6px;

  font-size: 16px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 페이지 설명 */
S.SettingDesc = styled.p`
  margin: 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #a6a6a6;
`;

/* 설정 카드 */
S.SettingCard = styled.div`
  width: 1132px;
  min-height: 1013px;

  padding: 32px;
  box-sizing: border-box;

  border-radius: 18px;
  background: ${PALETTE.white};
`;

/* 설정 묶음 */
S.SettingSection = styled.section`
  & + & {
    margin-top: 28px;
  }
`;

/* 서브 제목 */
S.SectionTitle = styled.h3`
  margin: 0 0 14px;

  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 내부 설정 박스 */
S.SettingItem = styled.div`
  width: 1068px;
  height: 58px;

  padding: 0 18px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  background: #F9FAFC;

  & + & {
    margin-top: 10px;
  }
`;

/* 왼쪽 내용 */
S.ItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

/* 이모티콘 */
S.ItemIcon = styled.span`
  width: 24px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  line-height: 1;
`;

/* 새 메시지 자동 스크롤 아이콘 */
S.ScrollArrowIcon = styled.span`
  width: 10px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 17px;
  font-weight: 400;
  line-height: 1;

  color: #4359fc;

  transform: scaleY(1.35);
`;

/* 멘션 아이콘 */
S.MentionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 400;
  line-height: 1;

  color: #4359fc;
`;

/* 텍스트 묶음 */
S.ItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

/* 항목 제목 */
S.ItemTitle = styled.p`
  margin: 0;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: #000000;
`;

/* 항목 설명 */
S.ItemDesc = styled.p`
  margin: 0;

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;
`;

/* ON/OFF 버튼 */
S.ToggleButton = styled.button`
  width: 48px;
  height: 28px;

  padding: 4px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: ${({ $active }) =>
    $active ? "flex-end" : "flex-start"};

  border-radius: 999px;
  background: ${({ $active }) =>
    $active ? "#4359fc" : "#e8ebf2"};

  transition: background 0.35s ease;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

/* ON/OFF 내부 원 */
S.ToggleCircle = styled.span`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background: #ffffff;

  transition: transform 0.35s ease;
`;

/* 공개/비공개 버튼 영역 */
S.PostButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

/* 공개/비공개 버튼 */
S.PostRangeButton = styled.button`
  width: 88px;
  height: 38px;

  border-radius: 8px;

  border: 1px solid
    ${({ $active }) =>
      $active ? "#4359FC" : "#E3E7F0"};

  background: ${({ $active }) =>
    $active ? "#4359FC" : "#F3F5FA"};

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};

  color: ${({ $active }) =>
    $active ? "#FFFFFF" : "#000000"};

  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    color 0.35s ease;

  &:focus {
    outline: none;
  }
`;

/* 하단 버튼 영역 */
S.ButtonArea = styled.div`
  margin-top: 32px;

  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

/* 취소 버튼 */
S.CancelButton = styled.button`
  width: 84px;
  height: 44px;

  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #000000;

  &:focus {
    outline: none;
  }
`;

/* 저장 버튼 */
S.SaveButton = styled.button`
  width: 100px;
  height: 44px;

  border-radius: 8px;
  background: #4359fc;

  font-size: 12px;
  font-weight: ${FONT_WEIGHT.regular};
  color: #ffffff;

  &:focus {
    outline: none;
  }
`;

export default S;