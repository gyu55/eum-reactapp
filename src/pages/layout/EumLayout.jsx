import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import * as S from "./style.js";
import NotificationDropdown from "./NotificationDropdown";
import useAuthStore from "../../store/authStore.js";

const navLinks = [
  { label: "커뮤니티", to: "/community" },
  { label: "학습",    to: "/study" },
  { label: "시험",    to: "/exam/info/notice" },
  { label: "고객지원", to: "/customservice/notice" },
];

const EumLayout = () => {
  const [hoveredNav, setHoveredNav]             = useState(null);
  const [user, setUser]                         = useState(null);
  const [notifCount, setNotifCount]             = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const setAuthUser        = useAuthStore((state) => state.setUser);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  useEffect(() => {
    fetch("http://localhost:10000/private/api/users/me", { credentials: "include" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => { 
        if (data?.success) {
        setUser(data.data);
        setAuthUser(data.data);      // 추가
        setIsAuthenticated(true);    // 추가
      }
    })
      .catch(() => {});
  }, []);

  // ── 종 알림 백엔드 연동 시 아래 주석 해제 ──────────────────────────────
  // useEffect(() => {
  //   if (!user) return;
  //   const fetchNotifCount = async () => {
  //     try {
  //       const res = await fetch("http://localhost:10000/api/notifications/unread", {
  //         credentials: "include",
  //       });
  //       const data = await res.json();
  //       setNotifCount(data.count);
  //     } catch {}
  //   };
  //   fetchNotifCount();
  // }, [user]);
  // ───────────────────────────────────────────────────────────────

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:10000/logout", { method: "POST", credentials: "include" });
    } catch {}
    setUser(null);
    setAuthUser(null);
    setIsAuthenticated(false);
    window.location.href = "/";
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <S.Header>
        <S.LogoNav>
          <button>
            <Link to="/">
              <img src="/assets/image/layout/logo.svg" alt="logo" style={{ height: "28px" }} />
            </Link>
          </button>

          <S.MainNav>
            {navLinks.map((link) => (
              <button key={link.label}>
                <Link
                  to={link.to}
                  style={{ textDecoration: "none" }}
                  onMouseEnter={() => setHoveredNav(link.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <S.ContentNav $hovered={hoveredNav === link.label}>
                    {link.label}
                  </S.ContentNav>
                </Link>
              </button>
            ))}
          </S.MainNav>
        </S.LogoNav>

        <S.RightNav>
          {user ? (
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <S.UserChip>
                <S.UserAvatar src={user.userProfile} alt="프로필" />
                <S.UserName>{user.userNickname || user.userName}</S.UserName>
              </S.UserChip>

              {/* 종 버튼 */}
              <div style={{ position: "relative" }}>
                <button
                  style={{ paddingTop: "5px" }}
                  onClick={() => setShowNotification((prev) => !prev)}
                >
                  <img
                    src={notifCount > 0
                      ? "/assets/image/layout/bellIconActive.svg"
                      : "/assets/image/layout/bellIcon.svg"}
                    style={{ width: "44px", height: "44px", display: "flex", alignItems: "center" }}
                  />
                </button>
                {showNotification && (
                  <NotificationDropdown
                    onClose={() => setShowNotification(false)}
                    onCountChange={setNotifCount}
                  />
                )}
              </div>

              <Link to="/mypage" style={{ textDecoration: "none" }}>
                <S.RightBorderBtn>
                  <S.RightBorderBtnLabel>마이페이지</S.RightBorderBtnLabel>
                </S.RightBorderBtn>
              </Link>
              <S.RightBgBtn onClick={handleLogout}>
                <S.RightBgBtnLabel>로그아웃</S.RightBgBtnLabel>
              </S.RightBgBtn>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <S.RightBorderBtn>
                  <S.RightBorderBtnLabel>로그인</S.RightBorderBtnLabel>
                </S.RightBorderBtn>
              </Link>
              <Link to="/join" style={{ textDecoration: "none" }}>
                <S.RightBgBtn>
                  <S.RightBgBtnLabel>회원가입</S.RightBgBtnLabel>
                </S.RightBgBtn>
              </Link>
            </div>
          )}
        </S.RightNav>
      </S.Header>

      <S.Main>
        <Outlet />
      </S.Main>

      <S.Footer>
        <S.FooterInner>
          <S.FooterContent>
            <S.FooterTop>
              <S.FooterPolicy>개인정보처리방침 | 서비스 이용약관</S.FooterPolicy>
              <S.FooterSocial>
                <img src="/assets/image/layout/youtube.svg"   style={{ width: "40px" }} />
                <img src="/assets/image/layout/naver.svg"     style={{ width: "40px" }} />
                <img src="/assets/image/layout/instagram.svg" style={{ width: "40px" }} />
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
