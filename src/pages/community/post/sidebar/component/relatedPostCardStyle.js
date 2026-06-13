import styled from "styled-components";
import theme from "../../../../../styles/theme";
import { FONT_FAMILY, SURFACE } from "../../../constants";

const { GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-top: 1px solid ${GRAYSCALE[8]};
  background: ${SURFACE.card};
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const PostTitle = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  word-break: keep-all;
`;

export const PostDesc = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: ${FONT_SIZE.h11};
    color: ${GRAYSCALE[9]};
  }

  span {
    font-family: ${FONT_FAMILY};
    font-weight: ${FONT_WEIGHT.regular};
    font-size: ${FONT_SIZE.h11};
    color: ${TEXT_COLOR.basic};
    white-space: nowrap;
  }
`;
