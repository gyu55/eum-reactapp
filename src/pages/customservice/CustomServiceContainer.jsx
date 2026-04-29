import React from 'react';
import CustomServiceTabMenu from './CustomServiceTabMenu';
import { Outlet } from 'react-router-dom';

const CustomServiceContainer = () => {
    return (
        <div>
            <CustomServiceTabMenu />
            <Outlet />
        </div>
    );
};

export default CustomServiceContainer;