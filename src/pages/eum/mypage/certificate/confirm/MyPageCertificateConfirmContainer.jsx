import React from 'react';
import MyPageCertificateConfirmComponent from './MyPageCertificateConfirmComponent';
import { Outlet } from 'react-router-dom';

const MyPageCertificateConfirmContainer = () => {
    return (
        <div>
            마이페이지 자격증 신청 컨테이너
            <MyPageCertificateConfirmComponent />
            <Outlet />
        </div>
    );
};

export default MyPageCertificateConfirmContainer;