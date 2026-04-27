import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPageLearningComponent from './MyPageLearningComponent';

const MyPageChatContainer = () => {
    return (
        <div>
            마이페이지 학습 컨테이너
            <MyPageLearningComponent />
            <Outlet />
        </div>
    );
};

export default MyPageChatContainer;