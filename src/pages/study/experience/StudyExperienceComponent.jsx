// 체험학습 목록 컴포넌트: 비회원 미리보기 학습 카드 목록
import { useNavigate } from "react-router-dom";
import ExperienceCard from "./parts/ExperienceCard";
import * as S from "./style";

// 비회원이 바로 체험할 수 있는 학습 카드 목록
const experienceItems = [
  {
    label: "수어",
    title: "기본 인사 수어",
    desc: "처음 만나는 상황에서 자주 쓰는 인사 표현을 배워요.",
    count: "5문제 체험",
    image: "/assets/image/signLearn.png",
    tone: "yellow",
    quiz: "sign",
  },
  {
    label: "응급",
    title: "응급 수신호",
    desc: "도움이 필요한 순간을 알리는 기본 신호를 확인해요.",
    count: "5문제 체험",
    image: "/assets/image/emergency.png",
    tone: "red",
    quiz: "sos",
  },
  {
    label: "모스",
    title: "모스부호 입문",
    desc: "점과 선으로 간단한 메시지를 읽는 방법을 체험해요.",
    count: "5문제 체험",
    image: "/assets/image/mors.png",
    tone: "purple",
    quiz: "morse",
  },
];

const StudyExperienceComponent = () => {
  const navigate = useNavigate();

  // 선택한 체험 퀴즈 첫 문제로 이동
  const handleStart = (item) => {
    navigate(`/study/experience/${item.quiz}/questions/1`);
  };

  return (
    <S.ExperienceWrap>
      <S.ExperienceHero>
        <span>무료 체험</span>
        <h1>회원가입 없이 먼저 배워보세요</h1>
        <p>짧은 문제로 수어, 응급 수신호, 모스부호의 기본 흐름을 가볍게 경험할 수 있어요.</p>
      </S.ExperienceHero>

      <S.ExperienceGrid>
        {experienceItems.map((item) => (
          <ExperienceCard key={item.quiz} item={item} onStart={handleStart} />
        ))}
      </S.ExperienceGrid>

      <S.ExperienceNotice>
        <strong>체험 후에는?</strong>
        <p>회원가입을 하면 정식 퀴즈, 출석 보상, 학습 기록 저장 기능을 이어서 사용할 수 있어요.</p>
      </S.ExperienceNotice>
    </S.ExperienceWrap>
  );
};

export default StudyExperienceComponent;
