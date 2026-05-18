import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ExperienceCard from "./parts/ExperienceCard";
import { NonUser } from "./style";

// 임시데이터
const learnTrialList = [    
    {
        id: 1,
        level: 3,
        title: "이 수어는 무슨 뜻일까요?",
        desc: "손 모양으로 단어를 맞혀 보세요",
        img: "👋",
        color: "#fff0ec",
        link: "/study/experience/sign/1",
    },
    {
        id: 2,
        level: 3,
        title: "두 손으로 표현하는 감정",
        desc: "일상 생활 수어 표현을 배워보세요",
        img: "🤲",
        color: "#f5f0ff",
        link: "/study/experience/sign/2",
    },
    {
        id: 3,
        level: 4,
        title: "복합 수어 표현에 도전!",
        desc: "여러 단어를 연결해 문장을 만들어요",
        img: "🏥",
        color: "#edf6ff",
        link: "/study/experience/sos/1",
    },
    {
        id: 4,
        level: 1,
        title: "숫자 수어를 알아보세요",
        desc: "1부터 10까지 숫자를 세어 보세요",
        img: "✌️",
        color: "#f0fbf0",
        link: "/study/experience/sign/3",
    },
    {
        id: 5,
        level: 2,
        title: "모스부호 기초",
        desc: "짧고 긴 신호로 의미를 읽어 보세요",
        img: "···",
        color: "#fffbec",
        link: "/study/experience/morse/1",
    },
    {
        id: 6,
        level: 3,
        title: "응급 상황 표현",
        desc: "도움이 필요한 상황을 수어로 표현해요",
        img: "🆘",
        color: "#f3eeff",
        link: "/study/experience/sos/1",
    },
];

const loadList = async () => {
    // const { data } = await fetch("/api/study/experience");
    return learnTrialList;
};


// 비회원 체험학습 화면
const StudyExperienceComponent = () => {

    const [trialList, setTrialList] = useState(learnTrialList);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {

        const showList = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await loadList();
                setTrialList(data);

            } catch (error) {
                setError("체험학습 목록을 불러오지 못했어요.");
            } finally {
                setLoading(false);
            }
        };

        showList();

    }, []);


    return (
        <NonUser.Wrapper>
            <NonUser.Inner>
                <NonUser.SectionTitle>미리보기 학습</NonUser.SectionTitle>
                {loading && <NonUser.StatusText>목록을 불러오는 중이에요.</NonUser.StatusText>}
                {error && <NonUser.StatusText>{error}</NonUser.StatusText>}

                <NonUser.CardGrid>
                {trialList.map((item) => (
                    <ExperienceCard key={item.id} item={item} />
                ))}
                </NonUser.CardGrid>

                <NonUser.QuizLink to="/study/experience/sign/1">퀴즈 풀기 →</NonUser.QuizLink>
            </NonUser.Inner>
        </NonUser.Wrapper>
    );
};

export default StudyExperienceComponent;
