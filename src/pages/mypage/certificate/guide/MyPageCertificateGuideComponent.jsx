import React from 'react';
import { Link } from 'react-router-dom';

const MyPageCertificateGuideComponent = () => {
    return (
        <div>
            자격증 신청가이드 페이지
            <Link to="/mypage/certificate">돌아가기</Link>
        </div>
    );
};

export default MyPageCertificateGuideComponent;