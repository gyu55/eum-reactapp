// 퀴즈 피드백 공통 컴포넌트: 정답/오답 안내, 해설 표시
import * as S from "./style";

const QuizFeedback = ({ status, title, desc, onNext, buttonText = "계속하기" }) => {

  return (
    <S.QuizFeedbackBox data-status={status}>
      <strong>{title}</strong>
      {desc && <p>{desc}</p>}
      {onNext && (
        <button type="button" onClick={onNext}>
          {buttonText}
        </button>
      )}
    </S.QuizFeedbackBox>
  );
};

export default QuizFeedback;
