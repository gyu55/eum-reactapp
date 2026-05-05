import React from 'react';
import MyPageTabMenu from './MyPageTabMenu';
import { Outlet } from 'react-router-dom';
import MyPageComponent from './MyPageComponent';

const MyPageContainer = () => {
    return (
        <div>
            <MyPageComponent />
            <MyPageTabMenu />
            <Outlet />
        </div>
    );
};

export default MyPageContainer;