import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import theme from '../../styles/theme';
import { styles } from './style';

const Layout = () => {
  return (
    <div>
      <div>
        <header style={styles.header}>
          <nav style={styles.logoNav}>
            {/* 로고 */}
            <button>
              <Link to="/">
                <img src= '/assets/image/logo.svg' alt='logo' style={{height:'28px'}}>
                </img>  
              </Link>
            </button>
            <nav style={{ display: 'flex', gap: '37px' }}>
              
              {/* 학습 페이지 이동 */}
              <button>
                <Link to="/study" style={styles.studyNav}>
                  학습
                </Link>
              </button>

              {/* 시험 페이지 이동 */}
              <button>
                <Link to="/exam/info/notice" style={styles.examNav}>
                    시험
                </Link>
              </button>

              {/* 커뮤니티 페이지 이동 */}
              <button >
                <Link to="/community" style={styles.communityNav}>
                  커뮤니티
                </Link>
              </button>

              {/* 고객지원 페이지 이동 */}
              <button>
                <Link to="/customservice" style={styles.customserviceNav}>
                  고객지원
                </Link>
              </button>
            </nav>
          </nav>

        
          <nav style={{
            marginLeft: 'auto', 
            display: 'flex', 
            gap: '12px',
            alignItems:'center'
          }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              {/* 로그인 페이지 이동 */}
              <button style={styles.loginNav}>
                <Link to="/login" style={styles.login}>
                  로그인
                </Link>
              </button>

              {/* 회원가입 페이지 이동 */}
              <button style={styles.joinNav}>
                
                <Link to="/join" style={styles.join}>
                    회원가입
                </Link>
              </button>
            </div>
          </nav>
        </header>
      </div>

      <main style={{ marginTop: '80px' }}>
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;
