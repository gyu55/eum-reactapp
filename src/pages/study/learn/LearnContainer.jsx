import React from 'react';
import LearnComponent from './LearnComponent';
import { Outlet } from 'react-router-dom';

const LearnContainer = () => {
    return (
        <div>
            <LearnComponent />
            <Outlet />
        </div>
    );
};

export default LearnContainer;