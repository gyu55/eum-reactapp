import React from 'react';
import MyPageSettingComponent from './MyPageSettingComponent';
import { Outlet } from 'react-router-dom';

const MyPageSettingContainer = () => {
    return (
        <div>
            마이페이지 설정 컨테이너
            <MyPageSettingComponent />
            <Outlet />
        </div>
    );
};

export default MyPageSettingContainer;