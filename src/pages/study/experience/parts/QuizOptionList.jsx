import React from "react";
import { QuizPage as S } from "../style";

const optionKeys = ["A", "B", "C", "D"];

const QuizOptionList = ({ answers, selected, status, onSelect }) => {
  return (
    <S.Options>
      {answers.map((answer, index) => (
        <S.Option
          key={answer.example}
          type="button"
          $active={selected === index}
          $correct={status !== "solving" && answer.correct}
          $wrong={status === "incorrect" && selected === index && !answer.correct}
          onClick={() => status === "solving" && onSelect(index)}
        >
          <S.OptionKey>{optionKeys[index]}</S.OptionKey>
          <span>{answer.example}</span>
        </S.Option>
      ))}
    </S.Options>
  );
};

export default QuizOptionList;
