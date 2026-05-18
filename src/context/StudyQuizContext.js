import { createContext, useState } from "react";

export const StudyQuizContext = createContext({
    
    state: {

        quizzes: [], 
        answers: [],
        loading: false,
        error: null,
        removeQuizzes: []
    },

    actions: {

        getQuizzes: () => {}, // -> back 연결 시 사용
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

    const getQuizzes = async (quizType = "sign") => {

        try {
            setLoading(true);
            setError(null);

            // 나중에 서버 주소로 변경
            // const response = await fetch(`/api/study/chapter/${quizType}`);
            // const data = await response.json();

        // 임시 화면용 데이터
        const signData  = [
            {
                id: 1,
                lessonTitle: "기본 인사 표현",
                title: '다음 중 어느 수어가 "안녕하세요"인가요?',
                image: "",
                exp: 10,
                heart: 5,
                correctText: "안녕하세요",
                feedback: '한 손을 들어 좌우로 흔드는 동작이 "안녕하세요"예요.',
                review: {
                    mediaText: "📌 수어 이미지/영상 슬롯",
                    motion: ["한 손을 들어", "좌우로 흔들어요"],
                    useCase: ["처음 만났을 때,", "헤어질 때도 사용"],
                },
                answers: [
                    { example: "감사합니다", emoji: "🤲", correct: false },
                    { example: "미안해요", emoji: "🙏", correct: false },
                    { example: "안녕하세요", emoji: "👋", correct: true },
                ],
            },
            {
                id: 2,
                lessonTitle: "감정 표현",
                title: '다음 중 어느 수어가 "사랑"인가요?',
                image: "",
                exp: 10,
                heart: 5,
                correctText: "사랑",
                feedback: '두 손을 모아 마음을 표현하는 동작이 "사랑"이에요.',
                review: {
                    mediaText: "📌 수어 이미지/영상 슬롯",
                    motion: ["두 손을 가슴 앞에 모아", "부드럽게 표현해요"],
                    useCase: ["감정을 말할 때,", "가족이나 친구에게 사용"],
                },
                answers: [
                    { example: "사랑", emoji: "🤲", correct: true },
                    { example: "날씨", emoji: "☀️", correct: false },
                    { example: "학교", emoji: "🏫", correct: false },
                ],
            },
        ];

        const sosData = [
            
            {
                id: 1,
                lessonTitle: "응급 수신호",
                title: "이 수신호는 어떤 뜻인가요?",
                image: "",
                exp: 10,
                heart: 5,
                correctText: "의료 응급이에요",
                feedback: "팔꿈치를 굽히고 손을 위로 올리는 동작이 의료 응급 수신호예요.",
                review: {
                    mediaText: "📌 수신호 이미지/영상 슬롯",
                    motion: ["팔꿈치를 굽히고", "손을 위로 올려요"],
                    useCase: ["의료 도움이 필요할 때,", "응급 상황을 알릴 때 사용"],
                },
                answers: [
                    { example: "도움이 필요해요", emoji: "🆘", correct: false },
                    { example: "불이 났어요", emoji: "🔥", correct: false },
                    { example: "의료 응급이에요", emoji: "🏥", correct: true },
                ],
            },
        ];

        const morseData = [
            {
            id: 1,
            lessonTitle: "모스부호",
            title: "이 모스부호는 어떤 의미인가요?",
            image: "",
            exp: 10,
            heart: 5,
            correctText: "SOS",
            feedback: "짧은 신호 3번, 긴 신호 3번, 짧은 신호 3번은 SOS를 뜻해요.",
            review: {
                mediaText: "📌 모스부호 이미지/영상 슬롯",
                motion: ["짧게 세 번", "길게 세 번", "다시 짧게 세 번"],
                useCase: ["구조 요청이 필요할 때,", "빛이나 소리로 신호를 보낼 때 사용"],
            },
            answers: [
                { example: "SOS", emoji: "··· --- ···", correct: true },
                { example: "HELLO", emoji: "···· · ·-·· ·-·· ---", correct: false },
                { example: "LOVE", emoji: "·-·· --- ···- ·", correct: false },
                ],
            },
        ];

        let data = signData;

        if(quizType === "sos"){
            data = sosData;
        }

        if (quizType === "mors" || quizType === "morse") {
            data = morseData;
        }
    

            setQuizzes(data);
        } catch (error) {
            setError("퀴즈를 불러오지 못했어요.");
        } finally {
            setLoading(false);
        }
    };

    const insertQuizzes  = (quizList) => {
        setQuizzes(quizList);
    };

    const insertAnswers = (answer) => {
        setAnswers((prev) => [...prev, answer]);
    };

    const removeAnswers = () => {
        setAnswers([]);
    };


    const value = {

       state: {
        quizzes: quizzes, 
        answers: answers,
        loading: loading,
        error: error
        },

        actions: {

            getQuizzes,
            insertQuizzes,
            // removeQuizzes,
            insertAnswers,
            removeAnswers,

            // getQuizzes: () => {},
            // insertQuizzes: () => {},
            removeQuizzes: () => {},
            // insertAnswers: () => {},
            // removeAnswers: () => {},
        },
    };

    return (

        <StudyQuizContext.Provider value={value}>
            {children}
        </StudyQuizContext.Provider>
    )
}


export default StudyQuizProvider;