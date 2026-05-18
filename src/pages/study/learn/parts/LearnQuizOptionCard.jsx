import React from "react";
import { LearnQuizPage as S } from "../style";

const getOptionStatus = ({ status, selected, correct }) => {
  if (status === "solving") return selected ? "selected" : "default";
  if (correct) return "correct";
  if (selected) return "wrong";
  return "default";
};

const LearnQuizOptionCard = ({ answer, index, selected, correct, status, onClick }) => {
  const optionStatus = getOptionStatus({ status, selected, correct });
  const showNumber = status !== "solving";

  return (
    <S.OptionButton type="button" $status={optionStatus} onClick={onClick}>
      <S.OptionImage $status={optionStatus}>{answer.emoji}</S.OptionImage>
      <S.OptionText $status={optionStatus}>{answer.example}</S.OptionText>
      {showNumber && <S.OptionNumber $status={optionStatus}>{index + 1}</S.OptionNumber>}
    </S.OptionButton>
  );
};

export default LearnQuizOptionCard;
