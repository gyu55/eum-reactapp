import React from 'react';
import CommunityChatComponent from './CommunityChatComponent';
import { Outlet } from 'react-router-dom';

const CommunityChatContainer = () => {
    return (
        <div>
            커뮤니티 컨테이너
            <CommunityChatComponent />
            <Outlet />
        </div>
    );
};

export default CommunityChatContainer;