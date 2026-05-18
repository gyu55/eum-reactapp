import styled, { css } from "styled-components";
import theme from "../../../styles/theme";
import {
  ACCESSIBILITY,
  COMMENT,
  FONT_FAMILY,
  FONT_SIZE_EXT,
  RADIUS,
  SURFACE,
} from "../constants";
import { h11Regular, h12Bold, h5Bold } from "../../../styles/common";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

// ── 공통 CSS 믹스인 ──

const avatarBase = css`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const bodyTextBase = css`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.28px;
  line-height: 22px;
`;

const commentBtnBase = css`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  letter-spacing: -0.24px;
  cursor: pointer;
  white-space: nowrap;
  border-radius: ${RADIUS.sm};
`;

// ── CommentItem ──

export const CommentItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 0;
  background: ${SURFACE.card};
  padding-left: ${({ isReply }) => (isReply ? COMMENT.replyIndent : "0")};
`;

export const LeftArea = styled.div`
  display: flex;
  gap: 19px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`;

export const Avatar = styled.div`
  ${avatarBase}
  background: ${SURFACE.section};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DefaultAvatar = styled.div`
  ${avatarBase}
  background: ${PALETTE.primary.extraLight};
  font-size: ${FONT_SIZE_EXT.h8_5};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${COMMENT.itemGap};
  flex: 1;
  min-width: 0;
`;

export const AuthorName = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${({ isAuthor }) =>
    isAuthor ? PALETTE.primary.main : TEXT_COLOR.basic};
  margin: 0;
`;

export const CommentText = styled.div`
  ${bodyTextBase}

  p {
    margin: 0;
  }
`;

export const ReactionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${COMMENT.itemGap};
`;

export const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  svg {
    font-size: ${FONT_SIZE.h11};
    color: ${({ active }) => (active ? PALETTE.primary.main : GRAYSCALE[9])};
  }

  span {
    font-family: ${FONT_FAMILY};
    font-weight: ${FONT_WEIGHT.regular};
    font-size: ${FONT_SIZE.h11};
    color: ${TEXT_COLOR.basic};
    white-space: nowrap;
  }
`;

export const AccessibilityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const AccessBtn = styled.button`
  ${commentBtnBase}
  padding: 6px 16px;
  background: ${({ variant }) =>
    variant === "blue" ? PALETTE.primary.extraLight : ACCESSIBILITY.readBg};
  color: ${({ variant }) =>
    variant === "blue" ? PALETTE.primary.main : ACCESSIBILITY.readColor};
  border: 1px solid
    ${({ variant }) =>
      variant === "blue" ? PALETTE.primary.main : ACCESSIBILITY.readColor};
`;

export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  width: ${COMMENT.rightAreaWidth};
`;

export const TimeText = styled.p`
  color: ${GRAYSCALE[9]};
  ${h11Regular}
  margin: 0;
  text-align: right;
`;

export const ReportButton = styled.button`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: ${RADIUS.button};
  background: ${SURFACE.card};
  /* border: 2px solid ${PALETTE.red}; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  padding: 0;

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;

// ── CommentSection ──

export const CommentSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CommentTitle = styled.h2`
  ${h5Bold}
  color: ${TEXT_COLOR.basic};
  margin: 0;
`;

export const CountBadge = styled.span`
  background: ${PALETTE.primary.main};
  color: ${PALETTE.white};
  ${h12Bold}
  border-radius: ${RADIUS.pill};
  padding: 4px 8px;
  white-space: nowrap;
`;

export const TextArea = styled.textarea`
  ${bodyTextBase}
  width: 100%;
  height: 97px;
  border: 1px solid ${PALETTE.primary.main};
  border-radius: ${RADIUS.input};
  padding: 16px 24px;
  resize: none;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${PALETTE.primary.dark};
  }
`;

export const SubmitRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const SubmitButton = styled.button`
  ${commentBtnBase}
  background: ${PALETTE.primary.main};
  color: ${PALETTE.white};
  padding: 8px 30px;
  border: none;
  transition: background 0.2s ease;

  &:hover {
    background: ${PALETTE.primary.dark};
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
