import React from 'react';
import { Link } from 'react-router-dom';

const MyPageTabMenu = () => {
    return (
        <div>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/mypage/learning">학습</Link>
            <Link to="/mypage/certificate">자격증</Link>
            <Link to="/mypage/setting">설정</Link>
        </div>
    );
};

export default MyPageTabMenu;