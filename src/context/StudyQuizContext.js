import { createContext, useState } from "react";

export const StudyQuizContext = createContext({
    
    state: {

        quizzes: [], 
        answers: [],
        loading: false,
        error:[],
    },

    actions: {

        // getQuizzes: () => {}, -> back 연결 시 사용
        insertQuizzes: () => {},
        removeQuizzes: () => {},
        insertAnswers: () => {},
        removeAnswers: () => {},
    }
});

const StudyQuizProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [quizzes, setQuizzes] = useState([]);

    // [
    //      { id: 1, title: "이규학이 잘하는 것은?", answers: [{example: "맞는 생각", correct: true}, {example: "자는 생각", correct: false},] }
    // ]

    const [answers, setAnswers] = useState([])

    // const getQuizzes = async () => {
    //     const response = await fetch("퀴즈 경로")
    //     if(!response.ok) throw new Error("")
    //     const {success, message, data} = await response.json()
    //     if(success){
    //         setQuizzes(data)
    //     }
    // }

    // getQuizzes()

    const getQuizzes = async (quizType) => {

        try {
            setLoading(true);
            setError(null);

            // 나중에 서버 주소로 변경
            // const response = await fetch(`/api/study/chapter/${quizType}`);
            // const data = await response.json();

            // 임시 화면용 데이터
            const data = [

                {
                    id: 1,
                    title: "이 수어는 무슨 뜻일까요?",
                    image: "/assets/image/quiz1.png",
                    answers: [
                        { example: "안녕하세요", correct: true },
                        { example: "감사합니다", correct: false },
                        { example: "미안합니다", correct: false },
                        { example: "반갑습니다", correct: false },
                    ],
                },
                {
                    id: 2,
                    title: "다음 수어가 의미하는 것은?",
                    image: "/assets/image/quiz2.png",
                    answers: [
                        { example: "사랑", correct: true },
                        { example: "날씨", correct: false },
                        { example: "학교", correct: false },
                        { example: "버스", correct: false },
                    ],
                },
            ];

            setQuizzes(data);

        } catch (error) {
            setError("퀴즈를 불러오지 못했어요.");
        } finally {
            setLoading(false);
        }
    };


    const value = {

       state: {
        quizzes: quizzes, answers: answers
        },
        actions: {

            insertQuizzes: () => {},
            removeQuizzes: () => {},
            insertAnswers: () => {},
            removeAnswers: () => {},
        }
    }

    return (

        <StudyQuizContext.Provider value={value}>
            {children}
        </StudyQuizContext.Provider>
    )
}


export default StudyQuizProvider;