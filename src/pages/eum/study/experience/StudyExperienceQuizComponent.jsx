import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudyQuizContext } from '../../../../context/StudyQuizContext';

const StudyExperienceQuizComponent = () => {
    const {id, quiz} = useParams()
    const {state, actions} = useContext(StudyQuizContext)
    const {quizzes} = state;

    const foundQuiz = quizzes.find((quiz) => quiz.id === id)
    // context에 값을 저장

    return (
        <div>
            {quiz}, {id}번 문제 컴포넌트
        </div>
    );
};

export default StudyExperienceQuizComponent;