import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";
import {
  flexBetweenRow,
  h11Medium,
  h11Regular,
  h12Bold,
  h5Bold,
  h8Medium,
  h9Bold,
} from "../../../../styles/common";
import {
  communityBorderRadius,
  communityWidthStyle,
  flexBetweenTopRow,
  hoverStyle,
} from "../../communityStyle";
import { BORDER_STYLE, RADIUS } from "../../constants";

const noWrap = css`
  white-space: nowrap;
`;

const grayText = css`
  color: ${theme.GRAYSCALE[9]};
`;

export const Card = styled.div`
  background: ${theme.PALETTE.white};
  ${communityBorderRadius}
  ${communityWidthStyle}
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: ${BORDER_STYLE.original};
  ${hoverStyle}
`;

export const TagAndTimeRow = styled.span`
  ${flexBetweenRow}
  width: 100%;
`;

export const Tag = styled.span`
  background: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  ${h12Bold}
  border-radius: ${RADIUS.pill};
  padding: 2px 8px;
  ${noWrap}
`;

export const TimeText = styled.p`
  ${h11Medium}
  ${grayText}
  margin: 0;
  ${noWrap}
`;

export const ContentAndTitleRow = styled.div`
  ${flexBetweenTopRow}
  margin-top: 16px;
  gap: 28px;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 9px;
`;

export const Title = styled.p`
  ${h5Bold}
  margin: 0;
  word-break: keep-all;
`;

export const Description = styled.p`
  ${h8Medium}
  ${grayText}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Thumbnail = styled.div`
  width: 96px;
  height: 96px;
  border-radius: ${RADIUS.card};
  background: ${theme.GRAYSCALE[0]};
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostMetaRow = styled.div`
  ${flexBetweenRow}
  margin-top: 36px;
`;

export const AvatarAndAuthorRow = styled.div`
  ${flexBetweenRow}
  gap: 8px;
`;

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorName = styled.span`
  ${h9Bold}
  color: ${theme.TEXT_COLOR.basic};
  ${noWrap}
`;

export const PostStateRow = styled.div`
  ${flexBetweenRow}
  gap: 12px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    ${h11Medium}
    ${grayText}
  }

  span {
    ${h11Regular}
    color: ${theme.TEXT_COLOR.basic};
    ${noWrap}
  }
`;
