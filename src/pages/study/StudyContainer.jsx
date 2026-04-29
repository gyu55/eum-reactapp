import React from 'react';
import StudyComponent from './StudyComponent';
import { Outlet } from 'react-router-dom';

const StudyContainer = () => {
    return (
        <>
            <StudyComponent />
            <Outlet />
        </>
    );
};

export default StudyContainer;