// styles/theme.js (팀장 org 파일)를 보완하는 로컬 UI 토큰
// theme.js에 이미 있는 값은 여기에 중복 정의하지 않는다.

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
  button: "12px",
  input: "8px",
  sm: "10px",
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
