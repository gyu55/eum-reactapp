import styled from "styled-components";
import { PRIMARY, GRAY, TEXT_BLACK, LIGHT_GRAY } from "./style";
import theme from "../../styles/theme";

/* ── Layout ── */
export const Page = styled.div`
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  min-height: 100vh;
  background: ${LIGHT_GRAY};
  color: ${TEXT_BLACK};
`;

export const Main = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 28px 40px 80px;
`;

export const Breadcrumb = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const BreadcrumbLink = styled.span`
  color: ${GRAY};
`;

export const BreadcrumbSep = styled.span`
  color: #d9d9d9;
`;

export const BreadcrumbActive = styled.span`
  color: ${PRIMARY};
  font-weight: 700;
`;

export const ContentLayout = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

export const ContentArea = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* ── Sidebar ── */
export const Sidebar = styled.aside`
  width: 200px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 20px 0;
  position: sticky;
  top: 88px;
`;

/* ── TabMenu ── */
export const TabMenuWrap = styled.div`
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
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: 700;
  color: #aaa;
  padding: 12px 20px 6px;
  letter-spacing: 0.2px;
`;

export const SidebarNavLink = styled.div`
  a {
    display: block;
    width: 100%;
    text-align: left;
    background: ${({ $active }) => ($active ? "#eef0ff" : "none")};
    border: none;
    border-left: 3px solid transparent;
    padding: 9px 20px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${({ $active }) => ($active ? 700 : 400)};
    color: ${({ $active }) => ($active ? PRIMARY : TEXT_BLACK)};
    cursor: pointer;
    transition: all 0.5s ease;
    text-decoration: none;
  }
`;