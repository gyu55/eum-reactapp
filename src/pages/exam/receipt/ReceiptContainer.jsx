import React from 'react';
import { Outlet } from 'react-router-dom';
import ReceiptTebMenu from './ReceiptTebMenu';

const ReceiptContainer = () => {
    return (
        <div>
            원서 접수 컨테이너
            <ReceiptTebMenu />
            <Outlet />
        </div>
    );
};

export default ReceiptContainer;