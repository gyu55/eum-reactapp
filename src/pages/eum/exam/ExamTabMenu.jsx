import React from 'react';
import { Link } from 'react-router-dom';

const ExamTabMenu = () => {
    return (
        <div>
            <p>자격증</p>
            <Link to={"/exam/info/notice"}>시험정보</Link>
            <Link to={"/exam/receipt/info"}>원서접수</Link>
            <Link to={"/exam/results"}>합격자발표</Link>
            <Link to={"/exam/update"}>자격증갱신</Link>
            <p>수료증</p>
            <Link to={"/exam/certificate"}>수료증조회</Link>
        </div>
    );
};

export default ExamTabMenu;