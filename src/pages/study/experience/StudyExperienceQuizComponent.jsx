import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudyQuizContext } from '../../../context/StudyQuizContext';
import { QuizPage } from './style';

// 문제화면 
const StudyExperienceQuizComponent = () => {
    const {id, quiz} = useParams()
    const {state, actions} = useContext(StudyQuizContext)
    const {quizzes} = state;

    const foundQuiz = quizzes.find((quiz) => quiz.id === id)
    // context에 값을 저장

    return (
        <QuizPage>
            <div className="quizInner">
                <div className="quizTop">
                    <p className="quizCategory">{quiz}</p>
                    <p className="quizCount">{id} / 5</p>
                </div>

                <div className="progressBar">
                    <div className="progressFill" />
                </div>

                <div className="questionBox">
                    <p className="questionTitle">
                        이 수어는 무슨 뜻일까요?
                    </p>

                    <div className="imageBox">
                        이미지
                    </div>
                </div>

                <div className="answerList">
                    <button className="answerItem">
                        <span className="answerAlpha">A</span>
                        <span className="answerText">안녕하세요</span>
                    </button>

                    <button className="answerItem">
                        <span className="answerAlpha">B</span>
                        <span className="answerText">감사합니다</span>
                    </button>

                    <button className="answerItem">
                        <span className="answerAlpha">C</span>
                        <span className="answerText">미안합니다</span>
                    </button>

                    <button className="answerItem">
                        <span className="answerAlpha">D</span>
                        <span className="answerText">반갑습니다</span>
                    </button>
                </div>

                <div className="quizBottom">
                    <button className="prevBtn">이전</button>
                    <button className="nextBtn">다음</button>
                </div>
            </div>
        </QuizPage>
    )
};

export default StudyExperienceQuizComponent;