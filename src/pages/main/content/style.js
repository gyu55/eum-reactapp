import styled from "styled-components";
import theme from "../../../styles/theme";

const backGroundGray = "#F7F7FB";
const textGray = "#888888";

/* ── Section ── */

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 1000px;
  min-height: 1100px;
  background-color: ${theme.GRAYSCALE[10]};
  margin-top: 80px;
`;

export const ContentTitle = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.02em;
  padding-top: 108px;
  margin-bottom: 84px;
  line-height: ${theme.FONT_LINE.h4};
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

/* ── Card Rows ── */

export const TopCardRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  gap: 24px;
`;

export const BottomCardRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  gap: 24px;
`;

/* ── Large Card (상단 2개) ── */

export const LargeCard = styled.div`
  position: relative;
  width: 648px;
  height: 342px;
  background-color: ${theme.PALETTE.white};
  border-radius: 30px;
  padding-top: 61px;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

/* ── Small Card (하단 3개) ── */

export const SmallCard = styled.div`
  position: relative;
  width: 424px;
  height: 241px;
  background-color: ${theme.PALETTE.white};
  border-radius: 30px;
  padding-top: 30px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

/* ── Card Badge ── */

export const CardBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $color }) => $color};
  border-radius: ${({ $small }) => ($small ? "11px" : "12px")};
  width: 74px;
  height: ${({ $small }) => ($small ? "22px" : "24px")};
`;

export const CardBadgeLabel = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.PALETTE.white};
  font-weight: ${theme.FONT_WEIGHT.bold};
  text-align: center;
`;

/* ── Card Title ── */

export const LargeCardTitle = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  gap: 9px;
`;

export const SmallCardTitle = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: ${theme.FONT_LINE.h8};
`;

/* ── Card Desc ── */

export const CardDesc = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[7]};
  margin-top: ${({ $mt }) => $mt || "0px"};
  white-space: pre-line;
`;

/* ── Info Tag ── */

export const InfoTagRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const InfoTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backGroundGray};
  border-radius: 10px;
  width: 153px;
  height: 29px;
`;

export const InfoTagGray = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${textGray};
  padding-right: 9px;
`;

export const InfoTagSep = styled.span`
  color: ${theme.PALETTE.black};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
`;

export const InfoTagBold = styled.span`
  color: ${theme.PALETTE.black};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  padding-left: 9px;
`;

/* ── Go Button ── */

export const GoBtn = styled.button`
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  padding-top: ${({ $pt }) => $pt || "0px"};
  color: ${theme.PALETTE.black};
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  cursor: pointer;
`;

/* ── Card Image ── */

export const LargeCardImg = styled.img`
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  width: 160px;
  height: 160px;
`;

export const SmallCardImg = styled.img`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  width: 120px;
  height: 120px;
`;
