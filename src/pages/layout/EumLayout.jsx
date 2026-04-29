import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import theme from '../../styles/theme';

const Layout = () => {
  return (
    <div>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 300px',
        height: '80px',
        borderBottom: `1px solid ${theme.GRAYSCALE[8]}`,
        backgroundColor: theme.GRAYSCALE[10]
      }}>
        <nav style={{display: 'flex', gap:'112px'}}>
          {/* 로고 */}
          <button>
            <Link to="/">
              <img src= '/assets/image/logo.svg' alt='로고' style={{height:'28px'}}>
              </img>  
            </Link>
          </button>
          <nav style={{ display: 'flex', gap: '37px' }}>

            {/* 학습 페이지 이동 */}
            <button>
              <Link to="/study" style={{
                fontSize: theme.FONT_SIZE.h9, 
                fontWeight: theme.FONT_WEIGHT.bold,
                color: theme.PALETTE.primary.dark,
                textDecoration:'none'
              }}>
                학습
              </Link>
            </button>

            {/* 시험 페이지 이동 */}
            <button>
              <Link to="/exam/info/notice" style={{
                fontSize: theme.FONT_SIZE.h9, 
                fontWeight: theme.FONT_WEIGHT.bold, 
                color: theme.PALETTE.primary.dark,
                textDecoration:'none'
              }}>
                  시험
              </Link>
            </button>

            {/* 커뮤니티 페이지 이동 */}
            <button >
              <Link to="/community" style={{
                fontSize: theme.FONT_SIZE.h9, 
                fontWeight: theme.FONT_WEIGHT.bold, 
                color: theme.PALETTE.primary.dark,
                textDecoration:'none'
              }}>
                커뮤니티
              </Link>
            </button>

            {/* 고객지원 페이지 이동 */}
            <button>
              <Link to="/customservice" style={{
                fontSize: theme.FONT_SIZE.h9, 
                fontWeight: theme.FONT_WEIGHT.bold, 
                color: theme.PALETTE.primary.dark,
                textDecoration:'none'
              }}>
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
          {/* 로그인 페이지 이동 */}
          <button style={{
            border: `solid 1.5px ${theme.TEXT_COLOR.primary}`,
            color: theme.PALETTE.primary.main,
            fontSize: theme.FONT_SIZE.h7,
            fontWeight: theme.FONT_WEIGHT.bold, 
            textAlign:'center',
            padding: '10px 16px',
            borderRadius : '32px',
            letterSpacing: '-0.02em', 
            display : 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Link to="/login" style={{
              fontSize: theme.FONT_SIZE.h9, 
              fontWeight: theme.FONT_WEIGHT.bold, 
              color: theme.PALETTE.primary.main,
              textDecoration:'none'
            }}>
              로그인
            </Link>
          </button>

          {/* 회원가입 페이지 이동 */}
          <button style={{
            backgroundColor : theme.PALETTE.primary.main,
            color: theme.PALETTE.white,
            fontSize: theme.FONT_SIZE.h7,
            fontWeight: theme.FONT_WEIGHT.bold, 
            textAlign:'center',
            padding: '10px 16px',
            borderRadius : '32px',
            letterSpacing: '-0.02em', 
            display : 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            
            <Link to="/join" style={{
              fontSize: theme.FONT_SIZE.h9, 
              fontWeight: theme.FONT_WEIGHT.bold,
              color: theme.PALETTE.white,
              textDecoration:'none',
            }}>
                회원가입
            </Link>
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;
