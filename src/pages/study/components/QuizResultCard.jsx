// 퀴즈 결과 공통 컴포넌트: 정확도, 정답 수, EXP, 소요시간 표시
import * as S from "./style";

const QuizResultCard = ({ title = "퀴즈 완료!", accuracy, correctCount, exp, elapsedTime }) => {

  return (
    <S.QuizResult>
      <h2>{title}</h2>
      <p>정확도: {accuracy ?? 0}%</p>
      <p>정답: {correctCount ?? 0}개</p>
      <p>EXP: +{exp ?? 0}</p>
      <p>시간: {elapsedTime || "0분"}</p>
    </S.QuizResult>
  );
};

export default QuizResultCard;
