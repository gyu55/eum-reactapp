import { useEffect, useState } from "react";
import { LearnPage as S } from "./style";
import { useNavigate } from "react-router-dom";


// 임시데이터
const learnData = {
  streak: 7,
  sideMenus: [
    { id: "learn", icon: "韓", label: "학습", active: true },
    { id: "letter", icon: "♟", label: "문자", active: false },
    { id: "signal", icon: "🚨", label: "수신호", active: false },
    { id: "profile", icon: "👤", label: "프로필", active: false },
    { id: "more", icon: "⋯", label: "더 보기", active: false },
  ],
  chapter: {
    title: "인사말 배워보기",
    guideLabel: "📖 가이드북",
    progressTitle: "챕터 진행도",
    progressDesc: "인사말 배워보기 · 1 / 4 완료",
    percent: 25,
    exp: 120,
  },
  lessons: [
    {
      id: 1,
      status: "done",
      icon: "✓",
      title: "안녕하세요 배우기",
      desc: "기본 인사말을 손으로 표현해요",
      buttonText: "완료",
    },
    {
      id: 2,
      status: "done",
      icon: "✓",
      title: "감사합니다 배우기",
      desc: "고마움을 전하는 수어 표현",
      buttonText: "완료",
    },
    {
      id: 3,
      status: "active",
      icon: "⭐",
      title: "미안합니다 배우기",
      desc: "사과와 양해를 구하는 표현",
      buttonText: "시작 →",
      quizType: "sign",
      quizId: 1,
    },
    {
      id: 4,
      status: "active",
      icon: "🚨",
      title: "응급수신호 배우기",
      desc: "위험 상황을 알리는 기본 신호",
      buttonText: "시작 →",
      quizType: "sos",
      quizId: 1,
    },
    {
      id: 5,
      status: "locked",
      icon: "⭐",
      title: "자신의 출신지 말하기",
      desc: "앞 단계를 완료하면 열려요",
      buttonText: "🔒 잠금",
    },
  ],
  nextChapter: {
    title: "다음 챕터 · 숫자 표현 배우기",
    desc: "이 챕터를 완료하면 잠금이 해제돼요 →",
  },
  quests: [
    { id: 1, icon: "⚡", title: "10 EXP 획득하기", current: 0, total: 10 },
    { id: 2, icon: "🤟", title: "레슨 2개에서 연속 5개 정답", current: 0, total: 2 },
    { id: 3, icon: "⏱️", title: "10분 동안 학습하기", current: 0, total: 10 },
  ],
};

const loadLearnData = async () => {
  // 백엔드 연결 시 이 부분 수정
  // const response = await fetch("/api/study/learn");
  // const data = await response.json();
  return learnData;
};

const LearnComponent = ({ onStartQuiz, onChangeView }) => {
  const [data, setData] = useState(learnData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const showLearnData = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await loadLearnData();
        setData(result);
      } catch (error) {
        setError("학습 정보를 불러오지 못했어요.");
      } finally {
        setLoading(false);
      }
    };

    showLearnData();
  }, []);

  return (
    <S.Page>
      <S.ContentWrap>
        <S.SideMenu>
          {data.sideMenus.map((menu) => (
            <S.SideButton 
              key={menu.id} 
              type="button" 
              $active={menu.active}
              onClick={() => {
                if(menu.id === "letter"){
                  onChangeView?.("alphabet");
                  return;
                }
                if (menu.id === "signal") {
                  onStartQuiz?.("sos", 1);
                  return;
                }
                if (menu.id === "profile") {
                  navigate("/mypage");
                }
              }}
            >
              <span>{menu.icon}</span>
              {menu.label}
            </S.SideButton>
          ))}
        </S.SideMenu>

        <S.Main>
          <S.TopLine>
            <S.Streak>
              <span>🔥</span>
              {data.streak}
            </S.Streak>
          </S.TopLine>

          <S.ChapterHeader>
            <strong>{data.chapter.title}</strong>
            <button type="button">{data.chapter.guideLabel}</button>
          </S.ChapterHeader>

          {loading && <S.StatusText>학습 정보를 불러오는 중이에요.</S.StatusText>}
          {error && <S.StatusText>{error}</S.StatusText>}

          <S.RoadMap>
            {data.lessons.map((lesson) => (
              <S.LessonItem key={lesson.id} $status={lesson.status}>
                <S.LessonCircle $status={lesson.status}>{lesson.icon}</S.LessonCircle>
                <S.LessonCard $status={lesson.status}>
                  <div>
                    <S.LessonTitle $status={lesson.status}>{lesson.title}</S.LessonTitle>
                    <S.LessonDesc $status={lesson.status}>{lesson.desc}</S.LessonDesc>
                  </div>

                  {lesson.quizType ? (
                    <S.LessonStartButton
                      type="button"
                      onClick={() => onStartQuiz?.(lesson.quizType, lesson.quizId)}
                    >
                      {lesson.buttonText}
                    </S.LessonStartButton>
                  ) : (
                    <S.LessonButton type="button" $status={lesson.status}>
                      {lesson.buttonText}
                    </S.LessonButton>
                  )}
                </S.LessonCard>
              </S.LessonItem>
            ))}
          </S.RoadMap>

          <S.NextChapter type="button">
            <strong>{data.nextChapter.title}</strong>
            <span>{data.nextChapter.desc}</span>
          </S.NextChapter>
        </S.Main>

        <S.QuestPanel>
          <S.QuestTitle>오늘의 퀘스트</S.QuestTitle>

          {data.quests.map((quest) => (
            <S.QuestItem key={quest.id}>
              <S.QuestIcon>{quest.icon}</S.QuestIcon>
              <div>
                <S.QuestName>{quest.title}</S.QuestName>
                <S.QuestBar>
                  <span style={{ width: `${(quest.current / quest.total) * 100}%` }} />
                </S.QuestBar>
              </div>
              <S.QuestCount>
                {quest.current} / {quest.total}
              </S.QuestCount>
              <S.RewardIcon>🎁</S.RewardIcon>
            </S.QuestItem>
          ))}
        </S.QuestPanel>
      </S.ContentWrap>

      <S.ProgressArea>
        <div>
          <S.ProgressTitle>{data.chapter.progressTitle}</S.ProgressTitle>
          <S.ProgressDesc>{data.chapter.progressDesc}</S.ProgressDesc>
        </div>

        <S.ProgressBar>
          <span style={{ width: `${data.chapter.percent}%` }} />
        </S.ProgressBar>

        <S.Percent>{data.chapter.percent}%</S.Percent>

        <S.ExpBox>
          <span>획득 EXP</span>
          <strong>+{data.chapter.exp}</strong>
        </S.ExpBox>
      </S.ProgressArea>
    </S.Page>
  );
};


export default LearnComponent;
