import React from 'react';
import { Outlet } from 'react-router-dom';
import StudyQuizProvider from '../../../context/StudyQuizContext';


const StudyExperienceQuizContainer = () => {

    return (
        <StudyQuizProvider>
            <Outlet />
        </StudyQuizProvider>
    );
};

export default StudyExperienceQuizContainer;