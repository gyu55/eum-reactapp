import React from 'react';
import StudyQuizProvider from '../../../../context/StudyQuizContext';
import { Outlet, useParams } from 'react-router-dom';

const StudyExperienceQuizContainer = () => {
    const {quiz} = useParams()

    return (
        <div>
            <StudyQuizProvider>
                {quiz} 비회원 Quiz 컨테이너
                <Outlet />
            </StudyQuizProvider>
        </div>
    );
};

export default StudyExperienceQuizContainer;