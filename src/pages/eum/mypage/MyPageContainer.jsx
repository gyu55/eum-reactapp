import React from 'react';
import MyPageTabMenu from './MyPageTabMenu';
import { Outlet } from 'react-router-dom';

const MyPageContainer = () => {
    return (
        <div>
            마이페이지 컨테이너
            <MyPageTabMenu />
            <Outlet />
        </div>
    );
};

export default MyPageContainer;