import React, { useContext, useEffect, useMemo, useState } from "react";
import LearnQuizFeedback from "./parts/LearnQuizFeedback";
import LearnQuizOptionCard from "./parts/LearnQuizOptionCard";
import LearnQuizReview from "./parts/LearnQuizReview";
import { LearnQuizPage as S } from "./style";
import { StudyQuizContext } from "../../../context/StudyQuizContext";

const LearnQuizComponent = ({ quizType, quizId, onClose, onFinish }) => {
  const quiz = quizType;
  const id = quizId;
  const {
    state: { quizzes, loading, error },
    actions: { getQuizzes, insertAnswers, removeAnswers },
  } = useContext(StudyQuizContext);

  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("solving");

  useEffect(() => {
    removeAnswers();
    getQuizzes(quiz);
    setSelected(null);
    setStatus("solving");
  }, [quiz]);

  useEffect(() => {
    setSelected(null);
    setStatus("solving");
  }, [id]);

  const foundQuiz = useMemo(
    () => quizzes.find((item) => item.id === Number(id)),
    [quizzes, id]
  );

  if (loading) {
    return (
      <S.Page>
        <S.Shell>
          <S.Message>문제를 불러오는 중이에요.</S.Message>
        </S.Shell>
      </S.Page>
    );
  }

  if (error) {
    return (
      <S.Page>
        <S.Shell>
          <S.Message>{error}</S.Message>
        </S.Shell>
      </S.Page>
    );
  }

  if (!foundQuiz && quizzes.length === 0) {
    return (
      <S.Page>
        <S.Shell>
          <S.Message>문제를 준비하는 중이에요.</S.Message>
        </S.Shell>
      </S.Page>
    );
  }

  if (!foundQuiz) {
    return (
      <S.Page>
        <S.Shell>
          <S.Message>문제를 찾을 수 없어요.</S.Message>
        </S.Shell>
      </S.Page>
    );
  }

  const correctIndex = foundQuiz.answers.findIndex((answer) => answer.correct);
  const selectedAnswer = selected === null ? null : foundQuiz.answers[selected];
  const isCorrect = status === "correct";
  const isIncorrect = status === "incorrect";
  const progressColor = isCorrect ? "green" : isIncorrect ? "red" : "blue";

  const handleCheck = () => {
    if (selected === null) return;

    const correct = Boolean(selectedAnswer?.correct);

    insertAnswers({
      quizType: quiz,
      quizId: foundQuiz.id,
      selected,
      correct,
    });

    setStatus(correct ? "correct" : "incorrect");
  };

  const handleNext = () => {
    if (isIncorrect) {
      setStatus("review");
      return;
    }

    onFinish?.();
  };

  const handleSkip = () => {
    onClose?.();
  };

  if (status === "review") {
    return (
      <LearnQuizReview
        quiz={foundQuiz}
        progress={50}
        onClose={handleSkip}
        onSkip={handleSkip}
        onRemember={onFinish}
      />
    );
  }

  return (
    <S.Page>
      <S.Shell>
        <S.Top>
          <S.CloseButton type="button" onClick={handleSkip}>
            ×
          </S.CloseButton>
          <S.Progress $color={progressColor} $value={25}>
            <span />
          </S.Progress>
        </S.Top>

        <S.Divider />

        <S.Question>{foundQuiz.title}</S.Question>

        <S.OptionGrid>
          {foundQuiz.answers.map((answer, index) => (
            <LearnQuizOptionCard
              key={answer.example}
              answer={answer}
              index={index}
              selected={selected === index}
              correct={correctIndex === index}
              status={status}
              onClick={() => status === "solving" && setSelected(index)}
            />
          ))}
        </S.OptionGrid>

        {status !== "solving" && (
          <LearnQuizFeedback
            status={status}
            exp={foundQuiz.exp}
            desc={foundQuiz.feedback}
            answer={foundQuiz.correctText}
            onNext={handleNext}
          />
        )}

        {status === "solving" && (
          <>
            <S.Divider />
            <S.Bottom>
              <S.SkipButton type="button" onClick={handleSkip}>
                건너뛰기
              </S.SkipButton>
              <S.CheckButton type="button" disabled={selected === null} onClick={handleCheck}>
                확인
              </S.CheckButton>
            </S.Bottom>
          </>
        )}
      </S.Shell>
    </S.Page>
  );
};

export default LearnQuizComponent;
