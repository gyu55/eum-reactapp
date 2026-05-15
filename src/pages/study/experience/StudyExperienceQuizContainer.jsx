import React, { useContext, useEffect } from 'react';
import StudyQuizProvider, { StudyQuizContext } from '../../../context/StudyQuizContext';
import { Outlet, useParams } from 'react-router-dom';

const StudyExperienceQuizContent  = () => {

    const { quiz } = useParams();
    const { actions } = useContext(StudyQuizContext);

    useEffect(() => {
    actions.getQuizzes(quiz);
    }, [quiz]);

    return <Outlet />;
};

const StudyExperienceQuizContainer = () => {

    return (
        <div>
            <StudyQuizProvider>
                <StudyExperienceQuizContent />
                {/* {quiz} 비회원 Quiz 컨테이너
                <Outlet /> */}
            </StudyQuizProvider>
        </div>
    );
};

export default StudyExperienceQuizContainer;