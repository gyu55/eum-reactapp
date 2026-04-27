import React from 'react';
import { Link } from 'react-router-dom';

const MyPageLearningComponent = () => {
    return (
        <div>
            학습현황
            <Link to="/study">학습페이지로 이동(이동예시 바꿔서 쓸 것)</Link>
        </div>
    );
};

export default MyPageLearningComponent;