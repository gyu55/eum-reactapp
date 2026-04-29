import React from 'react';
import ExamInfoTabMenu from './ExamInfoTabMenu';
import { Outlet } from 'react-router-dom';

const ExamInfoContainer = () => {
    return (
        <div>
            시험 정보 컨테이너
            <ExamInfoTabMenu />
            <Outlet />
        </div>
    );
};

export default ExamInfoContainer;