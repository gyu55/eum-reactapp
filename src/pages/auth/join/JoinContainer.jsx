import React from 'react';
import JoinComponent from './JoinComponent';
import { Outlet } from 'react-router-dom';

const JoinContainer = () => {
  return (
    <div>
      회원가입 페이지
      <JoinComponent />
      <Outlet />
    </div>
  );
};

export default JoinContainer;