// 체험학습 목록 컴포넌트: 비회원 미리보기 학습 카드 목록
import { useNavigate } from "react-router-dom";
import { experienceItems } from "./data/experienceItems";
import ExperienceCard from "./parts/ExperienceCard";
import * as S from "./style";

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
