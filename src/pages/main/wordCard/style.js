import styled from "styled-components";
import theme from "../../../styles/theme";

const textGray = "#888888";
const dailyBorderGray = "#EEEFFE";

// style.js - JS state 대신 CSS :hover로 처리
export const CardWrap = styled.div`
  width: 280px;
  height: 200px;
  background-color: ${theme.PALETTE.white};
  border-radius: 20px;
  border: 1px solid ${theme.GRAYSCALE[2]};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;
  overflow: hidden;

  &:hover {
    width: 360px;
    background-color: ${theme.PALETTE.fourth.main};
    border: none;
    transform: scale(1.05);
  }

  &:hover ${() => CardTitle} { color: ${theme.PALETTE.white}; }
  &:hover ${() => CardSub} { color: ${theme.PALETTE.white}; }
  &:hover ${() => TagBadge} { display: none; }
  &:hover ${() => HoverContent} { display: flex; }
`;

export const HoverContent = styled.div`
  display: none;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;


export const Emoji = styled.span`
  font-size: 32px;
`;

export const CardTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${({ $hovered }) => ($hovered ? theme.PALETTE.white : theme.PALETTE.black)};
  /* line-clamp 제거 - formatTitle 함수로 처리 */
`;

export const CardSub = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${({ $hovered }) => ($hovered ? theme.PALETTE.white : textGray)};
`;

export const TagBadge = styled.span`
  display: inline-flex;
  background-color: ${({ $hovered }) => $hovered ? 'rgba(255,255,255,0.3)' : dailyBorderGray};
  border: ${({ $hovered }) => $hovered ? '1px solid #ffffff' : 'none'};
  border-radius: 20px;
  padding: 2px 10px;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.medium};
  color: ${({ $hovered }) => $hovered ? '#ffffff' : theme.PALETTE.primary.main};
  width: fit-content;
`;

export const CardDesc = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  line-height: 1.6;
  flex-shrink: 0;               /* flex: 1 제거, 고정 크기 */
  display: -webkit-box;
  -webkit-line-clamp: 1;        /* 1줄만 표시 후 ... */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;          /* 줄바꿈 방지 */
  max-width: 100%;
  color: ${theme.PALETTE.white};
`;

export const VideoBtn = styled.button`
  margin-top: auto;
  flex-shrink: 0;
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
