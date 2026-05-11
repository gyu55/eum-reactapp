// styles/theme.js (팀장 org 파일)를 보완하는 로컬 UI 토큰
// theme.js에 이미 있는 값은 여기에 중복 정의하지 않는다.

import theme from "../../styles/theme";

// 외곽선 내부 사이즈
const borderWidth = 2;

// 좌우 패딩 전체
const sidePadding = 20;

// 원하는 내부 패딩
const innerPadding = 8;

// 계산된 외부 패딩
const outerPadding = sidePadding - (borderWidth + innerPadding);

export const FONT_FAMILY = "'pretendard', sans-serif";

// theme.FONT_SIZE에 없는 중간 크기
export const FONT_SIZE_EXT = {
  h8_5: "18px", // lg  (h8=20px 과 h9=16px 사이)
  h9_5: "15px", // mdLg (h9=16px 과 h10=14px 사이)
  h10_5: "13px", // smMd (h10=14px 과 h11=12px 사이)
};

// 배경 색상 (semantic naming)
export const SURFACE = {
  page: "#F0F2F5",
  card: "#FFFFFF",
  section: "#F9FAFB",
};

// 반투명 오버레이 (primary 배경 위에서 사용)
export const ALPHA = {
  white15: "rgba(255, 255, 255, 0.15)",
  white30: "rgba(255, 255, 255, 0.30)",
  white70: "rgba(255, 255, 255, 0.70)",
};

// primary 배경 위 태그 UI 토큰
export const TAG_ON_PRIMARY = {
  bg: "rgba(255, 255, 255, 0.20)",
  border: "rgba(255, 255, 255, 0.30)",
  text: "rgba(255, 255, 255, 0.75)",
};

// 접근성 버튼 전용 토큰
export const ACCESSIBILITY = {
  readColor: "#4DC953",
  readBg: "#E8F9E9",
  gradient: "linear-gradient(90deg, #EEF1FF 34%, #E8F9E9 100%)",
};

// org theme.PALETTE에 없는 추가 브랜드 색상
export const PALETTE_EXT = {
  primaryMid: "#7B8FFF", // 카드 그래디언트 내부 (light·main 사이)
  primaryFooter: "#4157FF", // 푸터 배경
  secondaryBg: "#E8F9E9", // 라이브/secondary 배경
  redHover: "#C41010", // danger 호버
};

// 보더 반경
export const RADIUS = {
  pill: "100px",
  card: "20px",
  section: "16px", // 섹션 컨테이너 (AccessibilityBox, ImageBox 등)
  button: "12px",
  input: "8px",
  smallCard: "8px",
  sm: "10px",
};

// 외곽선 기본 스타일
export const BORDER_STYLE = {
  original: borderWidth + "px solid transparent",
};

// 그림자
export const SHADOW = {
  card: "0 8px 24px rgba(67, 89, 252, 0.12)",
  cardHover: "0 8px 24px rgba(67, 89, 252, 0.18)",
  float: "0 8px 24px rgba(67, 89, 252, 0.35)",
  floatHover: "0 12px 32px rgba(67, 89, 252, 0.45)",
};

// 레이아웃 (1320px 12컬럼 그리드)
export const LAYOUT = {
  headerHeight: "79px",
  breadcrumbHeight: "40px",
  sidebarWidth: "312px",
  cardMaxWidth: "984px",
  contentWidth: "1320px",
  gridGap: "24px",
};

// 게시글 상세 UI 전용 토큰
export const POST = {
  horizontalPadding: "52px", // PostHeader, PostBodyWrapper 수평 패딩
};

// 댓글 UI 전용 크기 토큰
export const COMMENT = {
  avatarSize: "40px", // Avatar, DefaultAvatar, ReportButton 공통 크기
  replyIndent: "56px", // 답글 들여쓰기 (CommentItemWrapper padding-left)
  rightAreaWidth: "74px", // 시간+신고버튼 영역 고정 너비
  itemGap: "12px", // 댓글 내 요소 간 기본 간격 (Body, ReactionsRow)
};

// ─── 채팅 패널 디자인 토큰 (chat/themeOriginal.js에서 이전) ──────────────────

export const colors = {
  primary: theme.PALETTE.primary.main,
  primaryDark: theme.PALETTE.primary.dark,
  primaryLight: theme.PALETTE.primary.extraLight,
  primaryMid: "rgba(67, 89, 252, 0.4)",
  gradientMain: theme.GRADIENT.deepBlue,
  textWhite: theme.PALETTE.white,
  textMain: theme.TEXT_COLOR.basic,
  textSub: theme.GRAYSCALE[9],
  bgCard: "#FFFFFF",
  bgSection: theme.GRAYSCALE[10],
  bgPage: theme.GRAYSCALE[10],
  bgPopupOverlay: "rgba(0, 0, 0, 0.45)",
  border: theme.GRAYSCALE[8],
  live: theme.PALETTE.secondary.main,
  liveBg: theme.PALETTE.secondary.light,
  red: theme.PALETTE.red,
  danger: theme.PALETTE.red,
  dangerOverlay: "rgba(255, 80, 80, 0.5)",
  overlayWhite15: "rgba(255, 255, 255, 0.15)",
  tagOnPrimary: "rgba(255, 255, 255, 0.15)",
  tagOnPrimaryBorder: "rgba(255, 255, 255, 0.30)",
  accessibilitySign: theme.PALETTE.third.main,
  accessibilityRead: theme.PALETTE.warning.main,
};

export const fonts = {
  family: "'pretendard', sans-serif",
  weight: {
    light: theme.FONT_WEIGHT.light,
    regular: theme.FONT_WEIGHT.regular,
    medium: theme.FONT_WEIGHT.medium,
    bold: theme.FONT_WEIGHT.bold,
  },
  size: {
    xs: theme.FONT_SIZE.h12,
    sm: theme.FONT_SIZE.h11,
    md: theme.FONT_SIZE.h10,
    base: theme.FONT_SIZE.h9,
    xl: theme.FONT_SIZE.h7,
  },
};

// RADIUS(커뮤니티 레이아웃용)와 구분되는 채팅 패널 전용 반경값 — sm이 다름 (6px vs 10px)
export const radius = {
  card: "20px",
  pill: "100px",
  button: "12px",
  input: "8px",
  sm: "6px",
};

// SHADOW(primary 색조 그림자)와 구분되는 채팅 패널 전용 중립 그림자
export const shadows = {
  float: "0 8px 24px rgba(0, 0, 0, 0.12)",
};

// 사이드 채팅 패널 내부 뷰 타입
export const TYPE = {
  LIST: "list",
  REQUEST: "request",
  ROOM: "room",
};
