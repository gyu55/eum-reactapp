import styled from "styled-components";
import theme from "../../../styles/theme";

const textGray = "#888888";
const dailyBorderGray = "#EEEFFE";

export const CardWrap = styled.div`
  width: ${({ $hovered }) => ($hovered ? "360px" : "280px")};
  height: 200px;
  background-color: ${({ $hovered }) => ($hovered ? theme.PALETTE.fourth.main : theme.PALETTE.white)};
  border-radius: 20px;
  border: ${({ $hovered }) => ($hovered ? "none" : `1px solid ${theme.GRAYSCALE[2]}`)};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: all 0.3s ease;
  transform: scale(1.05);
  cursor: pointer;
  flex-shrink: 0;
`;

export const Emoji = styled.span`
  font-size: 32px;
`;

export const CardTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${({ $hovered }) => ($hovered ? theme.PALETTE.white : theme.PALETTE.black)};
`;

export const CardSub = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${({ $hovered }) => ($hovered ? theme.PALETTE.white : textGray)};
`;

export const TagBadge = styled.span`
  display: inline-flex;
  background-color: ${dailyBorderGray};
  border-radius: 20px;
  padding: 2px 10px;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.medium};
  color: ${theme.PALETTE.primary.main};
  width: fit-content;
`;

export const CardDesc = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.PALETTE.white};
  line-height: 1.6;
`;

export const VideoBtn = styled.button`
  margin-top: auto;
  border: solid 1px ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 6px 14px;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  background: none;
  cursor: pointer;
  width: fit-content;
`;

/* ── WordCard Section ── */

export const SectionWrap = styled.div``;

export const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  padding-top: 110px;
  gap: 3px;
`;

export const TitleStart = styled.span`
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  align-self: flex-start;
  padding-left: 370px;
`;

export const TitleHighlight = styled.span`
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
`;

export const TitleEnd = styled.span`
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 5vh;
`;
