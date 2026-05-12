import styled, { css } from "styled-components";
import {
  LAYOUT,
  POST,
  RADIUS,
  SURFACE,
  TAG_ON_PRIMARY,
  PALETTE_EXT,
  ACCESSIBILITY,
} from "../../constants";
import {
  h11Regular,
  h7Bold,
  h11Bold,
  h12Bold,
  h10Regular,
  h9Bold,
  h8Bold,
} from "../../../../styles/common";
import T from "../../communityTextStyle";
import { flexStartColumn } from "../../communityStyle";
import theme from "../../../../styles/theme";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE } = theme;

// ── 공통 CSS 믹스인 ──

const flexColumn12 = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BreadcrumbBar = styled.div`
  width: 1320px;
  height: ${LAYOUT.breadcrumbHeight};
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;

export const Crumb = styled.span`
  ${h11Regular}
  color: ${({ current }) => (current ? TEXT_COLOR.basic : GRAYSCALE[9])};
  white-space: nowrap;
  cursor: ${({ current }) => (current ? "default" : "pointer")};
`;

export const CrumbSep = styled.span`
  ${h11Regular}
  color: ${GRAYSCALE[9]};
`;

/* ── Header ── */
export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${PALETTE.primary.main};
  padding: 15px ${POST.horizontalPadding};
  border-radius: ${RADIUS.card} ${RADIUS.card} 0 0;
`;

// 게시글에 보여 줄 카테고리
export const CategoryTag = styled.span`
  background: ${TAG_ON_PRIMARY.bg};
  border: 1px solid ${TAG_ON_PRIMARY.border};
  color: ${PALETTE.white};
  ${h11Bold}
  padding: 4px 16px;
  border-radius: ${RADIUS.pill};
  white-space: nowrap;
`;

export const BreadcrumbPath = styled(T.H11Regular)`
  margin: 0;
  white-space: nowrap;
`;

/* ── Body wrapper ── */
// 전체 하얀 카드 형태로 감싸는 개념
export const PostBodyWrapper = styled.div`
  ${flexColumn12}
  background: ${SURFACE.card};
  border-radius: 0 0 ${RADIUS.card} ${RADIUS.card};
  padding: 44px ${POST.horizontalPadding};
  width: 100%;
`;

// 간격 하는 개념
export const PostContentWrapper = styled.div`
  ${flexColumn12}
`;

/* ── Title ── */
export const PostTitle = styled.h1`
  ${h7Bold}
  color: ${TEXT_COLOR.basic};
  margin: 0;
  word-break: keep-all;
`;

/* ── Author row ── */
export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 44px;
`;

export const AuthorAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: ${RADIUS.sm};
  object-fit: cover;
  flex-shrink: 0;
`;

export const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AuthorName = styled(T.H9Bold)`
  margin: 0;
  white-space: nowrap;
`;

export const AuthorSubRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

// 레벨 보여주는 뱃지
export const LevelBadge = styled.span`
  background: ${PALETTE.primary.extraLight};
  color: ${PALETTE.primary.main};
  ${h12Bold}
  padding: 2px 6px;
  border-radius: ${RADIUS.pill};
  white-space: nowrap;
`;

export const MetaText = styled.span`
  ${h11Regular}
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.24px;
  white-space: nowrap;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${GRAYSCALE[8]};
`;

/* ── Post body text ── */
// 게시글 내용 몸체 감싸는 부분
export const BodyText = styled.div`
  ${flexStartColumn}
  gap: 20px; // 각 요소 간 간격 (column)
  width: 100%;
`;

export const Paragraph = styled(T.H10Regular)`
  /* line-height: 22px; */
  margin: 0;
`;

// 형광펜 친 거처럼 하이라이트 해주는 개념
export const HighlightWord = styled.span`
  background: ${PALETTE.primary.extraLight};
  color: ${PALETTE.primary.main};
  border-radius: 4px;
  padding: 1px 2px;
`;

// 최대 강조
export const BlockQuote = styled.div`
  width: 100%;
  border-left: 6px solid ${PALETTE_EXT.primaryMid}; // 왼쪽 강조
  background: ${PALETTE.primary.extraLight};
  border-radius: 4px;
  padding: 9px 13px;
  color: ${TEXT_COLOR.basic};
  ${h10Regular}
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const ImageBox = styled.div`
  width: 100%;
  max-width: 547px;
  background: ${PALETTE.primary.extraLight};
  border: 2px dashed ${PALETTE_EXT.primaryMid};
  border-radius: ${RADIUS.section};
  padding: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 38px;
  box-sizing: border-box;
`;

export const EmojiItem = styled.span`
  font-size: 52px;
  flex-shrink: 0;
`;

export const ImageCaption = styled(T.H11Regular)`
  line-height: 20px;
  text-align: center;
  margin: 0;
`;

/* ── Tags ── */
// 태그들을 감쌀 row
export const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding-top: 12px;
`;

// 각각의 태그
export const Tag = styled.span`
  background: ${SURFACE.card};
  border: 1px solid ${GRAYSCALE[8]};
  color: ${TEXT_COLOR.basic};
  ${h9Bold}
  padding: 16px 30px;
  border-radius: ${RADIUS.pill};
  white-space: nowrap;
  cursor: pointer;
`;

/* ── Accessibility Tools ── */
export const AccessibilityBox = styled.div`
  width: 100%;
  border: 1px solid ${PALETTE.secondary.main};
  border-radius: ${RADIUS.section};
  background: ${ACCESSIBILITY.gradient};
  height: 120px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const AccessibilityLabel = styled(T.H8Bold)`
  position: absolute;
  left: 35px;
  white-space: nowrap;
  margin: 0;
`;

export const AccessBtn = styled.button`
  position: absolute;
  top: 36px;
  left: ${({ pos }) => pos};
  padding: 14px 80px;
  border-radius: ${RADIUS.input};
  ${h9Bold}
  cursor: pointer;
  white-space: nowrap;
  background: ${({ variant }) =>
    variant === "blue" ? PALETTE.primary.main : ACCESSIBILITY.readBg};
  color: ${({ variant }) =>
    variant === "blue" ? PALETTE.white : PALETTE.secondary.main};
  border: ${({ variant }) =>
    variant === "blue" ? "none" : `1px solid ${ACCESSIBILITY.readColor}`};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

/* ── Like / Share / Report ── */
export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 275px;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    font-size: ${FONT_SIZE.h9};
    color: ${({ liked }) => (liked ? PALETTE.red : TEXT_COLOR.basic)};
    transition: color 0.2s;
  }

  span {
    color: ${TEXT_COLOR.basic};
    ${h8Bold}
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${RADIUS.button};
  background: ${SURFACE.card};
  border: 2px solid ${({ danger }) => (danger ? PALETTE.red : GRAYSCALE[8])};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ danger }) =>
      danger ? PALETTE_EXT.redHover : GRAYSCALE[9]};
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  svg {
    font-size: ${FONT_SIZE.h9};
    color: ${({ danger }) => (danger ? PALETTE.red : TEXT_COLOR.basic)};
  }
`;
