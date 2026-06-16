import styled from "styled-components";
import theme from "../../../styles/theme";

const backGroundGray = "#F7F7FB";
const noticeGray = "#aaa";

export const CardWrap = styled.div`
  width: 100%;
  background-color: ${backGroundGray};
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagBadge = styled.div`
  background-color: ${({ $color }) => $color};
  border-radius: 6px;
  width: 70px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TagLabel = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
`;

export const LinkBtn = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.PALETTE.white};
`;

export const LinkIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.regular};
  line-height: ${theme.FONT_LINE.h9};
  color: ${noticeGray};

`;

export const CardTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.regular};
  line-height: ${theme.FONT_LINE.h9};
  color: ${theme.PALETTE.black};
`;

export const CardDate = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  line-height: ${theme.FONT_LINE.h11};
  color: ${noticeGray};
`;

/* ── Notice Section ── */

export const SectionWrap = styled.div`
  padding-top: 80px;
  padding-left: 370px;
  padding-right: 370px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

export const SectionTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: 36px;
  display: block;
  margin-bottom: 32px;
`;

export const NoticeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const StyledArrow = styled.img`
  width: 16px;
  height: 16px;
`;