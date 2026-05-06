import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import theme from '../../styles/theme';
import { styles } from './style';


const AuthLayout = () => {
  const handleLogout = () => {
    console.log('로그아웃');
  };

  return (
    <div>
      <header style={styles.header}>
        {/* 로고 */}
        <button>
          <Link to="/">
            <img src= '/assets/image/logo.svg' alt='logo' style={{height:'28px'}} />
          </Link>
        </button>
        <nav style={{ display: 'flex', gap: '37px' }}>
          
          {/* 학습 페이지 이동 */}
          <button>
            <Link to="/study" style={styles.contentNav}>
              학습
            </Link>
          </button>

          {/* 시험 페이지 이동 */}
          <button>
            <Link to="/exam/info/notice" style={styles.contentNav}>
                시험
            </Link>
          </button>

          {/* 커뮤니티 페이지 이동 */}
          <button >
            <Link to="/community" style={styles.contentNav}>
              커뮤니티
            </Link>
          </button>

          {/* 고객지원 페이지 이동 */}
          <button>
            <Link to="/customservice" style={styles.contentNav}>
              고객지원
            </Link>
          </button>
        </nav>

        <nav style={{
            marginLeft: 'auto', 
            display: 'flex', 
            gap: '12px',
            alignItems:'center'
          }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <button style={styles.rightNav}>
              <Link to="/mypage" style={styles.rigthBorderNav}>마이페이지</Link>
            </button>
              <button style={styles.rigthBackGroundNav} onClick={handleLogout}>로그아웃</button>
          </div>
        </nav>
      </header>
      <main style={{ marginTop: '80px' }}>
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default AuthLayout;
