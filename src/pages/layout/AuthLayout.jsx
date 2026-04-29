import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  const handleLogout = () => {
    console.log('로그아웃');
  };

  return (
    <div>
      <header>
        <nav style={{ display: 'flex', gap: '16px' }}>
          <Link to="/">홈</Link>
          <Link to="/exam">시험</Link>
          <Link to="/learn">학습</Link>
          <Link to="/community">커뮤니티</Link>
          <Link to="/mypage">마이페이지</Link>
          <button onClick={handleLogout}>로그아웃</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default AuthLayout;
