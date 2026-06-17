import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../styles/theme";

/* ── Header ── */

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10.5vw;
  height: 80px;
  border-bottom: 1px solid ${theme.GRAYSCALE[8]};
  background-color: ${theme.GRAYSCALE[10]};
  z-index: 2;
  min-width: 320px; 
`;

export const LogoNav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(24px, 5vw, 112px);
`;

export const MainNav = styled.nav`
  position: absolute;          /* ← 추가 */
  left: 50%;                   /* ← 추가 */
  transform: translateX(-50%); /* ← 추가 */
  display: flex;
  gap: 4vw;                   /* 기존 유지 */
`;

export const ContentNav = styled.span`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
  text-decoration: none;
  border-bottom: 3px solid ${({ $hovered }) => ($hovered ? theme.PALETTE.primary.main : "transparent")};
  padding-bottom: 29px;
  transition: border-color 0.15s;
  white-space: nowrap;
`;

export const RightNav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-shrink: 0;
`;

export const RightBorderBtn = styled.div`
  border: solid 1.5px ${theme.TEXT_COLOR.primary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 32px;
  text-decoration: none;
`;

export const RightBorderBtnLabel = styled.span`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
  text-decoration: none;
`;

export const RightBgBtn = styled.button`
  background-color: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  text-align: center;
  padding: 10px 16px;
  border-radius: 10px;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  box-sizing: border-box;  
  flex-shrink: 0;          
  align-items: center;
  width: 88px;
  height: 32px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  min-width: 88px;
`;

export const RightBgBtnLabel = styled.span`
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  text-decoration: none;
`;

/* ── User (로그인 상태) ── */

export const UserChip = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${theme.PALETTE.primary.extraLight};
  border-radius: 20px;
  padding: 4px 14px 4px 4px;
  cursor: pointer;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 999px;
  overflow: hidden;
  background: #d9d9d9;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const UserName = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
  white-space: nowrap;
`;

/* ── Main ── */

export const Main = styled.main`
  margin-top: 80px;
`;

/* ── Footer ── */

export const Footer = styled.footer``;

export const FooterInner = styled.div`
  height: 250px;
  background-color: ${theme.PALETTE.primary.main};
  display: flex;
  justify-content: center;
`;

export const FooterContent = styled.div`
  width: 105vh;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterPolicy = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.medium};
  color: ${theme.PALETTE.white};
  margin-top: 13px;
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const FooterInfoTitle = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  margin-top: 57px;
`;

export const FooterInfoRow = styled.div`
  display: flex;
  gap: 40px;
  margin-top: ${({ $mt }) => $mt || "8px"};
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.PALETTE.white};
`;

/* ── Styled Link ── */
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

/* ── Nav Link Button ── */
export const NavLinkBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

/* ── Bell ── */
export const BellWrap = styled.div`
  position: relative;
`;

export const BellBtn = styled.button`
  padding-top: 5px;
`;

export const BellIcon = styled.img`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
`;

/* ── Logo ── */
export const LogoBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 28px;
`;

/* ── User Menu ── */
export const UserMenuWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const GuestMenuWrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

/* ── Footer Social Icons ── */
export const FooterSocialIcon = styled.img`
  width: 40px;
`;