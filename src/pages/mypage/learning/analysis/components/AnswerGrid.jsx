import React from "react";

import S from "../style";

const AnswerGrid = ({ answers = [] }) => {
  const safeAnswers = Array.isArray(answers) ? answers : [];
  const columnCount = Math.min(Math.max(safeAnswers.length, 1), 9);

  return (
    <S.AnswerGridBox
      style={{ "--answer-column-count": columnCount }}
    >
      {safeAnswers.map((answer, index) => (
        <S.AnswerCell key={`${answer}-${index}`}>
          <S.AnswerNumber>{index + 1}</S.AnswerNumber>
          <S.AnswerMark $correct={answer === "O"}>{answer}</S.AnswerMark>
        </S.AnswerCell>
      ))}
    </S.AnswerGridBox>
  );
};

export default AnswerGrid;