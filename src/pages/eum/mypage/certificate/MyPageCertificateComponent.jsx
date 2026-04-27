import React from 'react';
import { Link } from 'react-router-dom';

const MyPageCertificateComponent = () => {
    return (
        <div>
            자격증 신청페이지
            <Link to="/mypage/certificate/confirm">신청하기</Link>
            <Link to="/mypage/certificate/guide">신청가이드</Link>
        </div>
    );
};

export default MyPageCertificateComponent;