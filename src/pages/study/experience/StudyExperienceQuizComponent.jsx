import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudyQuizContext } from '../../../context/StudyQuizContext';
import { QuizPage } from './style';

// 문제화면 
const StudyExperienceQuizComponent = () => {
    const { id, quiz } = useParams();
    const { state } = useContext(StudyQuizContext);
    const { quizzes, loading, error } = state;
    

    const foundQuiz = quizzes.find((item) => item.id === Number(id));

        console.log("id:", id);
        console.log("quizzes:", quizzes);
        console.log("foundQuiz:", foundQuiz);

    if (loading) {
        return <p>문제를 불러오는 중...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!foundQuiz) {
        return <p>문제를 찾을 수 없어요.</p>;
    }


    return (
        <QuizPage>
            <div className="quizInner">
                <div className="quizTop">
                <p className="quizCategory">{quiz}</p>
                <p className="quizCount">{id} / {quizzes.length}</p>
                </div>

                <div className="progressBar">
                <div
                    className="progressFill"
                    style={{
                    width: `${(Number(id) / quizzes.length) * 100}%`,
                    }}
                />
                </div>

                <div className="questionBox">
                <p className="questionTitle">
                    {foundQuiz.title}
                </p>

                <div className="imageBox">
                    {foundQuiz.image ? (
                    <img src={foundQuiz.image} alt={foundQuiz.title} />
                    ) : (
                    '이미지'
                    )}
                </div>
                </div>

                <div className="answerList">
                {foundQuiz.answers.map((answer, index) => (
                    <button className="answerItem" key={index}>
                    <span className="answerAlpha">
                        {String.fromCharCode(65 + index)}
                    </span>
                    <span className="answerText">
                        {answer.example}
                    </span>
                    </button>
                ))}
                </div>

                <div className="quizBottom">
                <button className="prevBtn">이전</button>
                <button className="nextBtn">다음</button>
                </div>
            </div>
    </QuizPage>
  );
};

export default StudyExperienceQuizComponent;