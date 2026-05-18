import React from "react";
import { LearnQuizPage as S } from "../style";

const LearnQuizFeedback = ({ status, exp = 10, desc, answer, onNext }) => {
  const isCorrect = status === "correct";

  return (
    <S.Feedback $status={status}>
      <S.FeedbackIcon>{isCorrect ? "🎉" : "💔"}</S.FeedbackIcon>

      <div>
        <S.FeedbackTitle $status={status}>
          {isCorrect ? "정답이에요!" : "아쉬워요!"}
        </S.FeedbackTitle>
        <S.FeedbackDesc $status={status}>
          {isCorrect ? desc : `정답은 "${answer}" — ${desc}`}
        </S.FeedbackDesc>
        {isCorrect && <S.FeedbackReward>❤️ +{exp} XP 🎯</S.FeedbackReward>}
      </div>

      <S.FeedbackButton type="button" $status={status} onClick={onNext}>
        계속하기
      </S.FeedbackButton>
    </S.Feedback>
  );
};

export default LearnQuizFeedback;
