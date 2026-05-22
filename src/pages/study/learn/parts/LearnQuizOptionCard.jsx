// 학습퀴즈보기카드: 선택지 하나의 선택/정답/오답 상태
import * as S from "../style";

const LearnQuizOptionCard = ({ option, index, selected, revealed, correct, onClick }) => {

  const state = revealed && correct ? "correct" : revealed && selected && !correct ? "wrong" : selected ? "selected" : "default";

  return (
    <S.LearnQuizOption type="button" $state={state} aria-pressed={selected} onClick={onClick} disabled={revealed}>
      <S.LearnQuizOptionIcon className="optionIcon">{option.icon}</S.LearnQuizOptionIcon>
      <S.LearnQuizOptionText className="optionText">
        <strong>{option.label}</strong>
        <span>{option.desc}</span>
      </S.LearnQuizOptionText>
      <S.LearnQuizOptionNumber className="optionNumber">{index + 1}</S.LearnQuizOptionNumber>
    </S.LearnQuizOption>
  );
};

export default LearnQuizOptionCard;
