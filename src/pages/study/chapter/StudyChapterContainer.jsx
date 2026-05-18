import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import StudyChapterComponent from './StudyChapterComponent';
import { OhQuiz } from './style';

// 오 퀴즈화면페이지
const StudyChapterContainer = () => {

    //  이동
    const location = useLocation();

    const isChapterMain = location.pathname === "/study/chapter" || location.pathname === "/study/chapter/";
    const quizList = [
        {
            id: 1,
            title: "역사",
            desc:"수어와 신호의 역사를 알아보세요",
            path: "/study/chapter/history"
        },
        {
            id: 2,
            title: "응급 수신호",
            desc:"수어와 신호의 역사를 알아보세요",
            path: "/study/chapter/sos"
        },
        {
            id: 3,
            title: "모스부호",
            desc:"수어와 신호의 역사를 알아보세요",
            path: "/study/chapter/mors"
        },
        {
            id: 4,
            title: "문화",
            desc:"수어와 신호의 역사를 알아보세요",
            path: "/study/chapter/culture"
        },
        {
            id: 5,
            title: "세계수화",
            desc:"수어와 신호의 역사를 알아보세요",
            path: "/study/chapter/global"
        },
        {
            id: 6,
            title: "세계",
            desc:"수어와 신호의 역사를 알아보세요",
            path: "/study/chapter/global"
        },
    ];

    if (!isChapterMain) {
        return <Outlet />;
    }


    return (
        <OhQuiz>
            <div className="chapterInner">
                <div className="chapterHeader">
                    <p className="subTitle">미리보기 학습</p>
                    <h1>오! 퀴즈</h1>
                    <p className="desc">
                        재미있는 퀴즈로 다양한 언어표현을 배워보세요
                    </p>
                </div>

                <div className="quizList">
                    {quizList.map((quiz) => (
                        <Link className='quizCard' to={quiz.path} key={quiz.id}>
                            <div className="iconBox">{quiz.icon}</div>

                            <div className="cardText">
                                <p className="quizTitle">{quiz.title}</p>
                                <p className="quizDesc">{quiz.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>    
        </OhQuiz>
    );
};

export default StudyChapterContainer;