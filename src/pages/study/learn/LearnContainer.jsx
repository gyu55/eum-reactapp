import React from 'react';
import LearnComponent from './LearnComponent';
import { Outlet, useParams } from 'react-router-dom';
import StudyQuizProvider from '../../../context/StudyQuizContext';

const LearnContainer = () => {
    const {quiz} = useParams()

    return (
        <div>
            <LearnComponent />
                {/* <StudyQuizProvider>
                    {quiz} 비회원 Quiz 컨테이너1
                    <Outlet />
                </StudyQuizProvider> */}
        </div>
    );
};

export default LearnContainer;