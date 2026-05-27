import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import * as S from "./style.js";
import NotificationDropdown from "../notificationDropDown";

const navLinks = [
  { label: "커뮤니티", to: "/community" },
  { label: "학습", to: "/study" },
  { label: "시험", to: "/exam/info" },
  { label: "고객지원", to: "/customservice/notice" },
];

const isDefaultProfile = (profileImage) => {
  return (
    !profileImage ||
    profileImage === "default.jpg" ||
    profileImage === "null"
  );
};

const getProfileImageSrc = (profileImage) => {
  if (isDefaultProfile(profileImage)) {
    return null;
  }

  if (profileImage.startsWith("http") || profileImage.startsWith("blob:")) {
    return profileImage;
  }

  return `http://localhost:10000/private/api/file/display?fileName=${encodeURIComponent(profileImage)}`;
};

const EumLayout = ({
  user,
  notifCount,
  showNotification,
  onNotifToggle,
  onNotifCountChange,
  onLogout,
}) => {
  const [hoveredNav, setHoveredNav] = useState(null);

  // 헤더에 표시할 유저 정보
  const [layoutUser, setLayoutUser] = useState(user);

  // 부모 user 변경 시 헤더 유저 정보 동기화
  useEffect(() => {
    setLayoutUser(user);
  }, [user]);

  // 정보수정 저장/프로필 삭제 후 헤더 즉시 반영
  useEffect(() => {
    const handleUserProfileUpdated = (event) => {
      setLayoutUser((prev) => ({
        ...prev,
        userNickname: event.detail.userNickname,
        userProfile: event.detail.userProfile,
      }));
    };

    window.addEventListener("userProfileUpdated", handleUserProfileUpdated);

    return () => {
      window.removeEventListener("userProfileUpdated", handleUserProfileUpdated);
    };
  }, []);

  // 헤더 프로필 이미지
  const layoutProfileImageSrc = getProfileImageSrc(layoutUser?.userProfile);

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
          {layoutUser ? (
            <S.UserMenuWrap>
              <S.BellWrap>
                <S.BellBtn onClick={onNotifToggle}>
                  <S.BellIcon
                    src={
                      notifCount > 0
                        ? "/assets/image/layout/bellIconActive.svg"
                        : "/assets/image/layout/bellIcon.svg"
                    }
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
                  <S.UserAvatar>
                    {layoutProfileImageSrc && (
                      <img
                        src={layoutProfileImageSrc}
                        alt=""
                        draggable={false}
                        onError={(e) => {
                          e.currentTarget.remove();
                        }}
                      />
                    )}
                  </S.UserAvatar>

                  <S.UserName>
                    {layoutUser.userNickname || layoutUser.userName}
                  </S.UserName>
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