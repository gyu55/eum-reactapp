import React from 'react';
import { Link } from 'react-router-dom';

const CustomServiceTabMenu = () => {
    return (
        <div>
            <p>고객지원</p>
            <Link to={"/customservice/notice"}>공지사항</Link>
            <Link to={"/customservice/inquire"}>1:1 문의</Link>
            <Link to={"/customservice/result"}>문의 결과</Link>
            <Link to={"/customservice/privacy"}>개인정보 처리방침</Link>
        </div> 
    );
};

export default CustomServiceTabMenu;