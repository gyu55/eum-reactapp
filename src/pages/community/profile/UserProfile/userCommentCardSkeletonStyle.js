import styled, { keyframes, css } from "styled-components";
import { BORDER_STYLE, COMMENT, LAYOUT, RADIUS } from "../../constants";
import { Divider } from "../../communityStyle";
import theme from "../../../../styles/theme";

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

const shimmerStyle = css`
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export const Wrapper = styled.div`
  background: ${theme.PALETTE.white};
  width: ${LAYOUT.cardMaxWidth};
  border-radius: ${RADIUS.card};
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  border: ${BORDER_STYLE.original};
`;

export const MidRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const AvatarBlock = styled.div`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: ${RADIUS.smallCard};
  flex-shrink: 0;
  ${shimmerStyle}
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const NicknameBlock = styled.div`
  width: 80px;
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

export const ContentLine = styled.div`
  width: ${({ $width }) => $width || "100%"};
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

export const StateRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateBlock = styled.div`
  width: 100px;
  height: 12px;
  border-radius: 4px;
  margin-left: 52px;
  ${shimmerStyle}
`;

export const ReactionsRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const StatBlock = styled.div`
  width: 36px;
  height: 12px;
  border-radius: 4px;
  ${shimmerStyle}
`;

export { Divider };
