import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import theme from '../../styles/theme';
import { styles } from './style';

const navLinks = [
  { label: '학습',    to: '/study' },
  { label: '시험',    to: '/exam/info/notice' },
  { label: '커뮤니티', to: '/community' },
  { label: '고객지원', to: '/customservice/notice' },
];

const EumLayout = () => {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <div>
      <div>
        <header style={styles.header}>
          <nav style={styles.logoNav}>
            {/* 로고 */}
            <button>
              <Link to="/">
                <img src='/assets/image/layout/logo.svg' alt='logo' style={{ height: '28px' }} />
              </Link>
            </button>

            <nav style={{ display: 'flex', gap: '37px' }}>
              {navLinks.map((link) => (
                <button key={link.label}>
                  <Link
                    to={link.to}
                    style={{
                      ...styles.contentNav,
                      borderBottom: hoveredNav === link.label
                        ? `3px solid ${theme.PALETTE.primary.main}`
                        : '3px solid transparent',
                      paddingBottom: '29px',
                      transition: 'border-color 0.15s',
                    }}
                    onMouseEnter={() => setHoveredNav(link.label)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    {link.label}
                  </Link>
                </button>
              ))}
            </nav>
          </nav>

          <nav style={{ marginLeft: 'auto', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <button style={styles.rightNav}>
              <Link to="/mypage" style={styles.rigthBorderNav}>마이페이지</Link>
            </button>
              <button style={styles.rigthBackGroundNav} onClick={handleLogout}>로그아웃</button>
            </div>
          </nav>
        </header>
      </div>

      <main style={{ marginTop: '80px' }}>
        <Outlet />
      </main>

      <footer>
        <div style={{
          height: '290px',
          backgroundColor: theme.PALETTE.primary.main,
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '105vh',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '70px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                fontSize: theme.FONT_SIZE.h9,
                fontWeight: theme.FONT_WEIGHT.medium,
                color: theme.PALETTE.white,
                marginTop: '13px'
              }}>
                개인정보처리방침 | 서비스 이용약관
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <img src='/assets/image/layout/youtube.svg' style={{ width: '44px' }} />
                <img src='/assets/image/layout/naver.svg' style={{ width: '44px' }} />
                <img src='/assets/image/layout/instagram.svg' style={{ width: '44px' }} />
              </div>
            </div>
            <span style={{
              fontSize: theme.FONT_SIZE.h9,
              fontWeight: theme.FONT_WEIGHT.bold,
              color: theme.PALETTE.white,
              marginTop: '57px'
            }}>INFO.</span>
            <div style={{
              display: 'flex', gap: '40px', marginTop: '8px',
              fontSize: theme.FONT_SIZE.h9, fontWeight: theme.FONT_WEIGHT.regular, color: theme.PALETTE.white,
            }}>
              <span>주식회사 이음</span>
              <span>대표 : 노규호 외 4명</span>
              <span>사업자등록번호 : 123-45-67890</span>
            </div>
            <div style={{
              display: 'flex', gap: '40px', marginTop: '4px',
              fontSize: theme.FONT_SIZE.h9, fontWeight: theme.FONT_WEIGHT.regular, color: theme.PALETTE.white,
            }}>
              <span>주소 : 서울특별시 마포구 백범로 130</span>
              <span>광고·제휴문의 : code-kine@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EumLayout;
