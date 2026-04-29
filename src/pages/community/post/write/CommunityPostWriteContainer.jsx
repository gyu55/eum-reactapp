import React from 'react';
import CommunityPostWriteComponent from './CommunityPostWriteComponent';
import { Outlet } from 'react-router-dom';

const CommunityPostWriteContainer = () => {
    return (
        <div>
            게시글 작성 컨테이너
            <CommunityPostWriteComponent />
            <Outlet />
        </div>
    );
};

export default CommunityPostWriteContainer;