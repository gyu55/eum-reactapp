import React from 'react';
import StudyExperienceQuizComponent from './StudyExperienceQuizComponent';
import { Link, Outlet } from 'react-router-dom';

const StudyExperienceContainer = () => {
    return (
        <div>
            체험 컨테이너
            <Link to="/study/experience/mors/1">모스부호1</Link>
            <Link to="/study/experience/mors/2">모스부호2</Link>
            <Link to="/study/experience/sos/2">수신호1</Link>
            <Link to="/study/experience/sos/2">수신호2</Link>
            <Link to="/study/experience/culture/1">문화1</Link>
            <Link to="/study/experience/culture/2">문화2</Link>
            <Outlet />
        </div>
    );
};

export default StudyExperienceContainer;