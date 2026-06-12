import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";
import { h11Bold, h11Regular } from "../../../../styles/common";

export const PageButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 80px;
`;

const buttonStyle = css`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PageButton = styled.div`
  ${buttonStyle}
  border: 2px solid ${theme.GRAYSCALE[8]};
  ${h11Regular}
`;

export const HighlightButton = styled.div`
  ${buttonStyle}
  border: 2px solid ${theme.PALETTE.primary.main};
  background: ${theme.PALETTE.primary.main};
  ${h11Bold}
  color: ${theme.PALETTE.white};
`;

export const ArrowButton = styled.div`
  ${buttonStyle}
  border: 2px solid ${({ disabled }) =>
    disabled ? theme.GRAYSCALE[6] : theme.GRAYSCALE[8]};
  color: ${({ disabled }) => (disabled ? theme.GRAYSCALE[6] : "inherit")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  ${h11Regular}
`;
