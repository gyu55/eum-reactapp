import React, { useState } from 'react';
import LearnComponent from './LearnComponent';
import { Outlet, useLocation } from 'react-router-dom';
import StudyQuizProvider from '../../../context/StudyQuizContext';
import LearnQuizComponent from './LearnQuizComponent';
import LearnAlphabetComponent from './LearnAlphabetComponent';


const LearnContainer = () => {
    // const location = useLocation();

    // const isLearnMain =
    //     location.pathname === "/study/learn" ||
    //     location.pathname === "/study/learn/";
    const [view, setView] = useState("learn");
    const [learnQuiz, setLearnQuiz] = useState(null);

    const openQuiz = (quizType, quizId) => {
        setLearnQuiz({ quizType, quizId });
    };

    const closeQuiz = () => {
        setLearnQuiz(null);
    };
    
    // if (!isLearnMain) {

    //     return (
    //         <StudyQuizProvider>
    //             <Outlet />
    //         </StudyQuizProvider>
    //     );
    // }


    return (
        <StudyQuizProvider>
        {learnQuiz ? (
            <LearnQuizComponent
            quizType={learnQuiz.quizType}
            quizId={learnQuiz.quizId}
            onClose={closeQuiz}
            onFinish={closeQuiz}
            />
        ) : view === "alphabet" ? (
            <LearnAlphabetComponent onChangeView={setView} />
        ) : (
            <LearnComponent onStartQuiz={openQuiz} onChangeView={setView} />
        )}
        </StudyQuizProvider>
    );
};


export default LearnContainer;