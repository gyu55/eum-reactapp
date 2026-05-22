// 학습퀴즈피드백: 정답/오답 결과와 다음 행동 버튼
import * as S from "../style";

const LearnQuizFeedback = ({ status, exp, message, answer, onNext }) => {

  const isCorrect = status === "correct";

  return (
    <S.LearnQuizFeedback $status={status}>
      <S.LearnQuizFeedbackIcon $status={status}>{isCorrect ? "🎉" : "💔"}</S.LearnQuizFeedbackIcon>
      <S.LearnQuizFeedbackText $status={status}>
        <strong>{isCorrect ? "정답이에요!" : "아쉬워요!"}</strong>
        <p>{message}</p>
        <span>{isCorrect ? `+${exp} XP 획득` : `정답: ${answer}`}</span>
      </S.LearnQuizFeedbackText>
      <S.LearnQuizFeedbackActions $status={status}>
        <button type="button" onClick={onNext}>
          계속하기
        </button>
      </S.LearnQuizFeedbackActions>
    </S.LearnQuizFeedback>
  );
};

export default LearnQuizFeedback;
