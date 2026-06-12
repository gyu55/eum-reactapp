import styled from "styled-components";
import theme from "../../../styles/theme";
import {
  hoverStyle,
  sideCardStyle,
  sideComponentStyle,
  sideHeaderStyle,
} from "../communityStyle";
import { h10Bold } from "../../../styles/common";
import { BORDER_STYLE } from "../constants";

export const Card = styled.div`
  background: ${theme.PALETTE.white};
  display: flex;
  flex-direction: column;
  ${sideCardStyle}
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.p`
  ${sideHeaderStyle}
  ${h10Bold}
  color: ${theme.TEXT_COLOR.basic};
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: ${theme.GRAYSCALE[10]};
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  border: ${BORDER_STYLE.original};
  ${sideComponentStyle}
  ${hoverStyle}
`;

export const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const Tag = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 5px;
  background: ${theme.PALETTE.primary.main};
  border-radius: 4px;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  line-height: ${theme.FONT_LINE.h12};
  white-space: nowrap;
`;

export const NoticeTitle = styled.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
  line-height: ${theme.FONT_LINE.h11};
`;

export const DateText = styled.p`
  margin: 0;
  flex-shrink: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
  line-height: ${theme.FONT_LINE.h12};
  text-align: right;
  white-space: nowrap;
`;

export const MoreLink = styled.p`
  margin: 0;
  text-align: center;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[7]};
  cursor: pointer;
  &:hover {
    color: ${theme.TEXT_COLOR.basic};
  }
`;
