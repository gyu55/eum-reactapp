import React from 'react';
import StudySearchComponent from './StudySearchComponent';
import { Outlet } from 'react-router-dom';

const StudySearchContainer = () => {
    return (
        <div>
            <StudySearchComponent />
            <Outlet />
        </div>
    );
};

export default StudySearchContainer;