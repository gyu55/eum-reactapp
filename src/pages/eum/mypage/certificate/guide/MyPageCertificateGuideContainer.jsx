import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPageCertificateGuideComponent from './MyPageCertificateGuideComponent';

const MyPageCertificateGuideContainer = () => {
    return (
        <div>
            <MyPageCertificateGuideComponent />
            <Outlet />
        </div>
    );
};

export default MyPageCertificateGuideContainer;