import React, { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import * as S from "./style.js";
import NotificationDropdown from "../notificationDropDown";

const navLinks = [
  { label: "커뮤니티", to: "/community" },
  { label: "학습",    to: "/study" },
  { label: "시험",    to: "/exam/info" },
  { label: "고객지원", to: "/customservice/notice" },
];

const EumLayout = ({
  user,
  notifCount,
  showNotification,
  onNotifToggle,
  onNotifCountChange,
  onLogout,
}) => {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <div>
      <S.Header>
        <S.LogoNav>
          <S.LogoBtn>
            <S.StyledLink to="/">
              <S.LogoImg src="/assets/image/layout/logo.svg" alt="logo" />
            </S.StyledLink>
          </S.LogoBtn>

          <S.MainNav>
            {navLinks.map((link) => (
              <S.NavLinkBtn key={link.label}>
                <S.StyledLink
                  to={link.to}
                  onMouseEnter={() => setHoveredNav(link.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <S.ContentNav $hovered={hoveredNav === link.label}>
                    {link.label}
                  </S.ContentNav>
                </S.StyledLink>
              </S.NavLinkBtn>
            ))}
          </S.MainNav>
        </S.LogoNav>

        <S.RightNav>
          {user ? (
            <S.UserMenuWrap>
              <S.BellWrap>
                <S.BellBtn onClick={onNotifToggle}>
                  <S.BellIcon
                    src={notifCount > 0
                      ? "/assets/image/layout/bellIconActive.svg"
                      : "/assets/image/layout/bellIcon.svg"}
                  />
                </S.BellBtn>
                {showNotification && (
                  <NotificationDropdown
                    onClose={onNotifToggle}
                    onCountChange={onNotifCountChange}
                  />
                )}
              </S.BellWrap>

              <S.StyledLink to="/mypage">
                <S.UserChip>
                  <S.UserAvatar src={user.userProfile} alt="프로필" />
                  <S.UserName>{user.userNickname || user.userName}</S.UserName>
                </S.UserChip>
              </S.StyledLink>

              <S.RightBgBtn onClick={onLogout}>
                <S.RightBgBtnLabel>로그아웃</S.RightBgBtnLabel>
              </S.RightBgBtn>
            </S.UserMenuWrap>
          ) : (
            <S.GuestMenuWrap>
              <S.StyledLink to="/login">
                <S.RightBorderBtn>
                  <S.RightBorderBtnLabel>로그인</S.RightBorderBtnLabel>
                </S.RightBorderBtn>
              </S.StyledLink>
              <S.StyledLink to="/join">
                <S.RightBgBtn>
                  <S.RightBgBtnLabel>회원가입</S.RightBgBtnLabel>
                </S.RightBgBtn>
              </S.StyledLink>
            </S.GuestMenuWrap>
          )}
        </S.RightNav>
      </S.Header>

      <ScrollRestoration />
      <S.Main>
        <Outlet />
      </S.Main>

      <S.Footer>
        <S.FooterInner>
          <S.FooterContent>
            <S.FooterTop>
              <S.FooterPolicy>개인정보처리방침 | 서비스 이용약관</S.FooterPolicy>
              <S.FooterSocial>
                <S.FooterSocialIcon src="/assets/image/layout/youtube.svg" alt="youtube" />
                <S.FooterSocialIcon src="/assets/image/layout/naver.svg" alt="naver" />
                <S.FooterSocialIcon src="/assets/image/layout/instagram.svg" alt="instagram" />
              </S.FooterSocial>
            </S.FooterTop>
            <S.FooterInfoTitle>INFO.</S.FooterInfoTitle>
            <S.FooterInfoRow>
              <span>주식회사 이음</span>
              <span>대표 : 노규호 외 4명</span>
              <span>사업자등록번호 : 123-45-67890</span>
            </S.FooterInfoRow>
            <S.FooterInfoRow $mt="4px">
              <span>주소 : 서울특별시 마포구 백범로 130</span>
              <span>광고·제휴문의 : code-kine@gmail.com</span>
            </S.FooterInfoRow>
          </S.FooterContent>
        </S.FooterInner>
      </S.Footer>
    </div>
  );
};

export default EumLayout;