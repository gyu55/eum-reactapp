import styled from "styled-components";

// ── Color tokens ──────────────────────────────────────────
export const PRIMARY    = "#4359fc";
export const DARK_BLUE  = "#0014a9";
export const TEXT_BLACK = "#333";
export const GRAY       = "#999";
export const LIGHT_GRAY = "#f5f5f7";

// ── Layout plain objects (ExamContainer 전용) ─────────────
export const styles = {
  page: {
    fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif",
    minHeight: "100vh",
    background: LIGHT_GRAY,
    color: TEXT_BLACK,
  },
  main: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "28px 40px 300px",
  },
  breadcrumb: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    fontSize: 12,
    marginBottom: 24,
  },
  breadcrumbItem:   { display: "flex", gap: 6, alignItems: "center" },
  breadcrumbLink:   { color: GRAY, cursor: "pointer" },
  breadcrumbSep:    { color: "#d9d9d9" },
  breadcrumbActive: { color: PRIMARY, fontWeight: 700 },
  contentLayout: {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
    minHeight: "calc(100vh - 200px)",
  },
  contentArea: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
};

// ── Hero ──────────────────────────────────────────────────
export const HeroCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const HeroBadge = styled.div`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: ${({ $color }) => $color || PRIMARY};
  background: ${({ $bg }) => $bg || "#eef0ff"};
  border: 1px solid ${({ $border }) => $border || "#c5caff"};
  border-radius: 20px;
  padding: 3px 12px;
  margin-bottom: 12px;
`;

export const HeroTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${TEXT_BLACK};
  margin: 0 0 8px;
  letter-spacing: -0.5px;
`;

export const HeroSub = styled.p`
  font-size: 12px;
  color: ${GRAY};
  margin: 0;
`;

export const HeroIllust = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #F7F7FB;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ── Notice Banner ─────────────────────────────────────────
export const NoticeBanner = styled.div`
  background: ${({ $bg }) => $bg || "#fffbe6"};
  border: 1px solid ${({ $border }) => $border || "#ffe58f"};
  border-radius: 12px;
  padding: 13px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ $color }) => $color || DARK_BLUE};
`;

// ── Info Cards ────────────────────────────────────────────
export const SectionTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #111;
  margin: 0 0 14px;
  letter-spacing: -0.3px;
`;

export const InfoCardRow = styled.div`
  display: flex;
  gap: 14px;
`;

export const InfoCard = styled.button`
  flex: 1;
  background: ${({ $active }) => ($active ? "#eef0ff" : "#fff")};
  border: ${({ $active }) => ($active ? `2px solid ${PRIMARY}` : "1.5px solid #eee")};
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  text-align: left;
`;

export const InfoCardInner = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const InfoCardIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${({ $active }) => ($active ? "#dde1ff" : "#eef0ff")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const InfoCardTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? PRIMARY : TEXT_BLACK)};
`;

export const InfoCardSub = styled.div`
  font-size: 11px;
  color: ${GRAY};
  margin-top: 2px;
`;

export const InfoCardArrow = styled.span`
  font-size: 18px;
  color: ${({ $active }) => ($active ? PRIMARY : "#ccc")};
`;

// ── Sidebar ───────────────────────────────────────────────
export const SidebarAside = styled.aside`
  width: 200px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 20px 0;
  position: sticky;
  top: 88px;
`;

export const SidebarInner = styled.div`
  position: relative;
`;

export const SlidingBar = styled.div`
  position: absolute;
  left: 0;
  top: ${({ $top }) => $top}px;
  height: ${({ $height }) => $height}px;
  width: 3px;
  background: ${PRIMARY};
  border-radius: 2px;
  transition: top 0.25s ease, height 0.25s ease;
`;

export const SidebarCategory = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #aaa;
  padding: 12px 20px 6px;
  letter-spacing: 0.2px;
`;

export const SidebarItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: ${({ $active }) => ($active ? "#eef0ff" : "none")};
  border: none;
  border-left: 3px solid transparent;
  padding: 9px 20px;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ $active }) => ($active ? PRIMARY : TEXT_BLACK)};
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
`;
