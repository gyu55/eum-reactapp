// 퀴즈 보기 공통 컴포넌트: 객관식 보기 버튼 UI를 담당
import * as S from "./style";

const QuizOptionCard = ({ label, children, selected, status, onClick }) => {

  return (
    <S.QuizOptionButton type="button" data-selected={selected} data-status={status} onClick={onClick}>
      <strong>{label}</strong>
      <span>{children}</span>
    </S.QuizOptionButton>
  );
};

export default QuizOptionCard;
