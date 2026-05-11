import styled from "styled-components";
import theme from "../../../../../styles/theme";
import { h10Bold, h11Bold, h11Regular } from "../../../../../styles/common";

// 커뮤니티 규칙 및 포스트 가이드 들 스타일
export const SideCard = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* box-shadow: 0 8px 24px rgba(67, 89, 252, 0.12); */
`;

export const SideCardTitle = styled.p`
  margin: 0;
  ${h10Bold}
  color: ${theme.TEXT_COLOR.basic};
`;

export const SideDivider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid ${theme.GRAYSCALE[8]};
  width: 100%;
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const NoticeItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const NumberBadge = styled.div`
  width: 20px;
  height: 20px;
  background: ${theme.PALETTE.primary.main};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  span {
    ${h11Bold}
    color: ${theme.PALETTE.white};
    text-align: center;
  }
`;

export const NoticeText = styled.p`
  margin: 0;
  ${h11Regular}
  color: ${theme.GRAYSCALE[9]};
`;
