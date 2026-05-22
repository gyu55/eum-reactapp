// 퀴즈 진행바 공통 컴포넌트: 문제 진행률 표시를 담당
import * as S from "./style";

const QuizProgress = ({ current = 1, total = 1 }) => {
  const percent = total > 0 ? (current / total) * 100 : 0;

  return (
    <S.QuizProgressBar $percent={percent} aria-label={`퀴즈 진행률 ${current} / ${total}`}>
      <span />
    </S.QuizProgressBar>
  );
};

export default QuizProgress;
