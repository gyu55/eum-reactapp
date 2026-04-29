import React from 'react';
import LoginComponent from './LoginComponent';
import { Outlet } from 'react-router-dom';

const LoginContainer = () => {
  return (
    <div>
      로그인페이지
      <LoginComponent />
      <Outlet />
    </div>
  );
};

export default LoginContainer;