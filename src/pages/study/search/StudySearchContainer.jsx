import React from 'react';
import { Outlet } from 'react-router-dom';
import StudySearchComponent from './StudySearchComponent';

const StudySearchContainer = () => {
    return (
        <div>
            <StudySearchComponent />
            <Outlet />
        </div>
    );
};

export default StudySearchContainer;