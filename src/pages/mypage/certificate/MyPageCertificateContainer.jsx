import React from 'react';
import MyPageCertificateComponent from './MyPageCertificateComponent';
import { Outlet } from 'react-router-dom';

const MyPageCertificateContainer = () => {
    return (
        <div>
            마이페이지 자격증 컨테이너
            <MyPageCertificateComponent />
            <Outlet />
        </div>
    );
};

export default MyPageCertificateContainer;