export const PRIMARY = "#4359fc";
export const DARK_BLUE = "#0014a9";
export const TEXT_BLACK = "#333";
export const GRAY = "#999";
export const LIGHT_GRAY = "#f5f5f7";

export const statusStyle = (status) => {
  if (status === "완료") return { color: GRAY, bg: "#f0f0f0", border: "#e0e0e0" };
  if (status === "접수중") return { color: "#3545ff", bg: "#eef0ff", border: "#c5caff" };
  return { color: "#6b7aff", bg: "#f0f1ff", border: "#d4d7ff" };
};

export const styles = {
  page: {
    fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif",
    minHeight: "100vh",
    background: LIGHT_GRAY,
    color: TEXT_BLACK,
  },

  // Header
  header: {
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerInner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 40px",
    height: 68,
    display: "flex",
    alignItems: "center",
    gap: 48,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    flexShrink: 0,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 700,
    color: PRIMARY,
    letterSpacing: "-0.5px",
  },
  nav: {
    display: "flex",
    gap: 36,
    flex: 1,
  },
  navBtn: (isActive) => ({
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 700,
    color: isActive ? PRIMARY : DARK_BLUE,
    padding: "4px 0",
    borderBottom: isActive ? `2px solid ${PRIMARY}` : "2px solid transparent",
    letterSpacing: "-0.2px",
  }),
  authBtns: {
    display: "flex",
    gap: 10,
    flexShrink: 0,
  },
  loginBtn: {
    background: "#fff",
    border: "1.5px solid #d0d3f5",
    borderRadius: 8,
    padding: "7px 18px",
    fontSize: 13,
    fontWeight: 700,
    color: PRIMARY,
    cursor: "pointer",
  },
  signupBtn: {
    background: PRIMARY,
    border: "none",
    borderRadius: 8,
    padding: "7px 18px",
    fontSize: 13,
    fontWeight: 700,
    color: "#fff",
    cursor: "pointer",
  },

  // Main
  main: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "28px 40px 80px",
  },

  // Breadcrumb
  breadcrumb: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    fontSize: 12,
    marginBottom: 24,
  },
  breadcrumbItem: {
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
  breadcrumbLink: {
    color: GRAY,
    cursor: "pointer",
  },
  breadcrumbSep: {
    color: "#d9d9d9",
  },
  breadcrumbActive: {
    color: PRIMARY,
    fontWeight: 700,
  },

  // Layout
  contentLayout: {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
  },

  // Sidebar
  sidebar: {
    width: 200,
    flexShrink: 0,
    background: "#fff",
    borderRadius: 14,
    border: "1px solid #eee",
    padding: "20px 0",
    position: "sticky",
    top: 88,
  },
  sidebarCategory: {
    fontSize: 12,
    fontWeight: 700,
    color: "#aaa",
    padding: "12px 20px 6px",
    letterSpacing: "0.2px",
  },
  sidebarItem: (isActive) => ({
    display: "block",
    width: "100%",
    textAlign: "left",
    background: isActive ? "#eef0ff" : "none",
    border: "none",
    borderLeft: isActive ? `3px solid ${PRIMARY}` : "3px solid transparent",
    padding: "9px 20px",
    fontSize: 13,
    fontWeight: isActive ? 700 : 400,
    color: isActive ? PRIMARY : TEXT_BLACK,
    cursor: "pointer",
    transition: "all 0.15s",
  }),

  // Content Area
  contentArea: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  // Hero Card
  heroCard: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 16,
    padding: "28px 36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  },
  heroBadge: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 700,
    color: PRIMARY,
    background: "#eef0ff",
    border: "1px solid #c5caff",
    borderRadius: 20,
    padding: "3px 12px",
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: TEXT_BLACK,
    margin: "0 0 8px",
    letterSpacing: "-0.5px",
  },
  heroSub: {
    fontSize: 12,
    color: GRAY,
    margin: 0,
  },
  heroIllust: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #eef0ff 0%, #dde1ff 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // Notice Banner
  noticeBanner: {
    background: "#fffbe6",
    border: "1px solid #ffe58f",
    borderRadius: 12,
    padding: "13px 20px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 12,
    fontWeight: 500,
    color: DARK_BLUE,
  },

  // Section Titles
  sectionTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: "#111",
    margin: "0 0 14px",
    letterSpacing: "-0.3px",
  },
  sectionTitleSm: {
    fontSize: 15,
    fontWeight: 700,
    color: "#111",
    margin: "0 0 14px",
    letterSpacing: "-0.3px",
  },

  // Info Cards
  infoCardRow: {
    display: "flex",
    gap: 14,
  },
  infoCard: {
    flex: 1,
    background: "#fff",
    border: "1.5px solid #eee",
    borderRadius: 12,
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    transition: "border-color 0.15s",
    textAlign: "left",
  },
  infoCardInner: {
    display: "flex",
    gap: 14,
    alignItems: "center",
  },
  infoCardIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    background: "#eef0ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  infoCardTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: TEXT_BLACK,
  },
  infoCardSub: {
    fontSize: 11,
    color: GRAY,
    marginTop: 2,
  },
  infoCardArrow: {
    fontSize: 18,
    color: "#ccc",
  },

  // Exam Card Row
  examCardRow: {
    display: "flex",
    gap: 14,
  },

  // StatusBadge
  statusBadge: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 700,
    borderRadius: 20,
    padding: "2px 10px",
    lineHeight: 1.6,
  },

  // ExamCard
  examCard: (isActive) => ({
    flex: "1 1 0",
    minWidth: 0,
    border: isActive ? `2px solid ${PRIMARY}` : "1.5px solid #e8e8ec",
    borderRadius: 14,
    padding: "18px 20px 20px",
    background: "#fff",
    position: "relative",
    transition: "box-shadow 0.2s",
    boxShadow: isActive ? "0 4px 20px rgba(67,89,252,0.12)" : "none",
  }),
  examCardBadgeRow: {
    marginBottom: 10,
  },
  examCardRound: (status) => ({
    fontSize: 15,
    fontWeight: 700,
    color: status === "완료" ? GRAY : TEXT_BLACK,
    marginBottom: 14,
  }),
  examCardPeriodLabel: (status) => ({
    fontSize: 10,
    color: status === "완료" ? "#bbb" : "#888",
    marginBottom: 3,
    fontWeight: 400,
  }),
  examCardPeriodValue: (status) => ({
    fontSize: 11,
    color: status === "완료" ? "#bbb" : "#444",
    marginBottom: 14,
  }),
  examCardDateBox: (isActive, status) => ({
    borderRadius: 8,
    background: isActive ? PRIMARY : (status === "완료" ? "#f0f0f0" : "#eef0ff"),
    padding: "9px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  }),
  examDateInner: {
    flex: 1,
  },
  examCardDateLabel: (isActive, status) => ({
    fontSize: 10,
    color: isActive ? "rgba(255,255,255,0.75)" : (status === "완료" ? GRAY : PRIMARY),
    marginBottom: 2,
    textAlign: "center",
  }),
  examCardDateValue: (isActive, status) => ({
    fontSize: 13,
    fontWeight: 700,
    color: isActive ? "#fff" : (status === "완료" ? GRAY : PRIMARY),
    textAlign: "center",
    letterSpacing: "-0.3px",
  }),
  examCardDdaySection: {
    borderLeft: "1px solid rgba(255,255,255,0.3)",
    paddingLeft: 12,
    minWidth: 44,
  },
  examCardDdayLabel: {
    fontSize: 9,
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    marginBottom: 2,
  },
  examCardDdayValue: {
    fontSize: 13,
    fontWeight: 700,
    color: "#fff",
    textAlign: "center",
  },

  // Footer
  footer: {
    background: "#4157ff",
    padding: "40px 0",
  },
  footerInner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 40px",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  footerLinks: {
    display: "flex",
    gap: 24,
    marginBottom: 24,
  },
  footerLinkItem: {
    display: "flex",
    gap: 24,
    alignItems: "center",
  },
  footerLinkBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
  },
  footerDivider: {
    color: "#42464c",
    width: 1,
    height: 12,
    display: "inline-block",
    background: "#42464c",
  },
  footerInfoTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "-0.3px",
    marginBottom: 10,
  },
  footerInfoText: {
    fontSize: 12,
    color: "rgba(255,255,255,0.75)",
    lineHeight: 2.0,
    display: "flex",
    flexWrap: "wrap",
    gap: "0 28px",
    maxWidth: 600,
  },
  footerSocialBtns: {
    display: "flex",
    gap: 10,
    flexShrink: 0,
  },
  footerSocialBtn: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid #33373c",
    background: "none",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
