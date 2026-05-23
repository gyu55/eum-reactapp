import styled from "styled-components";
import theme from "../../../styles/theme";

const backGroundGray = "#F7F7FB";
const textGray = "#888888";

const toneColor = {
  green: "#129d1b",
  blue: "#4359fc",
  yellow: "#ffcb38",
  red: "#f14141",
  purple: "#b63fde",
};
/* ── Section ── */

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.GRAYSCALE[10]};
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

export const CardDesc = styled.p`
  display: flex;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[7]};
  margin-top: ${({ $mt }) => $mt || "0px"};
  white-space: pre-line;
`;

/* ── Info Tag ── */

export const InfoTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backGroundGray};
  border-radius: 10px;
  width: 153px;
  height: 29px;
`;
export const InfoTag2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backGroundGray};
  border-radius: 10px;
  width: 170px;
  height: 29px;
`;

export const InfoTagGray = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${textGray};
  padding-right: 9px;
`;
export const InfoTagGray2 = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${textGray};
  padding-right: 6px;
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
export const InfoTagBold2 = styled.span`
  color: ${theme.PALETTE.black};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  padding-left: 6px;
`;

export const CategoryBand = styled.section`
  width: 100%;
  padding: 0 0 115px 0;
  background: transparent;  
`;

export const CategoryGrid = styled.div`
  width: min(1320px, calc(100% - 48px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
`;

export const CategoryCard = styled.button`
  position: relative;
  min-height: ${({ $large }) => ($large ? "280px" : "241px")};
  grid-column: span ${({ $large }) => ($large ? 3 : 2)};
  padding: ${({ $large }) => ($large ? "50px 60px" : "52px 50px")};
  overflow: hidden;
  border: 0;
  border-radius: 24px;
  background: ${({ theme }) => theme.PALETTE.white};
  box-shadow: 0 18px 45px rgba(32, 44, 98, 0.06);
  text-align: left;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  white-space: pre-line;

  .badge {
    display: inline-flex;
    margin-bottom: ${({ $large }) => ($large ? "28px" : "20px")};
    padding: ${({ $large }) => ($large ? "7px 19px" : "6px 16px")};
    border-radius: 999px;
    background: ${({ $tone }) => toneColor[$tone] || "#4359fc"};
    color: white;
    font-size: ${theme.FONT_SIZE.h11};
    font-weight: ${theme.FONT_WEIGHT.bold};
  }

  strong {
    display: block;
    max-width: 60%;
    margin-bottom: ${({ $large }) => ($large ? "22px" : "14px")};
    color: #1a1a1a;
    font-size: ${({ $large }) => ($large ? theme.FONT_SIZE.h5 : theme.FONT_SIZE.h8)};
    line-height: ${({ $large }) => ($large ? theme.FONT_LINE.h5 : theme.FONT_LINE.h8)};
    font-weight: ${theme.FONT_WEIGHT.bold};
  }

  p {
    max-width: 60%;
    margin: 0 0 ${({ $large }) => ($large ? "50px" : "32px")};
    color: #666;
    font-size: ${theme.FONT_SIZE.h10};
    font-weight: ${theme.FONT_WEIGHT.regular};
  }

  .go {
    color: #1a1a1a;
    font-size: ${theme.FONT_SIZE.h10};
    font-weight: ${theme.FONT_WEIGHT.bold};
  }

  img {
    position: absolute;
    right: ${({ $large }) => ($large ? "60px" : "52px")};
    top: 50%;                          /* ✅ 고정값 제거 */
    transform: translateY(-50%);
    width: ${({ $large }) => ($large ? "160px" : "105px")};
    height: ${({ $large }) => ($large ? "160px" : "110px")};
    padding: ${({ $large }) => ($large ? "10px" : "13px")};
    border-radius: ${({ $large }) => ($large ? "30px" : "45px")};
    object-fit: contain;
    box-sizing: border-box;
    transition: transform 0.25s ease, background-color 0.25s ease;
  }

  &:hover, &:focus-visible {
    transform: translateY(-8px);
    box-shadow: 0 28px 60px rgba(32, 44, 98, 0.12),
                0 12px 30px ${({ $tone }) => `${toneColor[$tone] || "#4359fc"}50`};
  }

  &:hover img, &:focus-visible img {
    transform: translateY(calc(-50% - 5px)) scale(1.06);
  }

  &:focus-visible {
    outline: 3px solid ${theme.PALETTE.primary.main};
    outline-offset: 4px;
  }
`;