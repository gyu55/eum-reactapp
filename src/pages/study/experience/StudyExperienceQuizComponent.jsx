import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import QuizCompleteCard from "./parts/QuizCompleteCard";
import QuizOptionList from "./parts/QuizOptionList";
import { QuizPage as S } from "./style";
import { StudyQuizContext } from "../../../context/StudyQuizContext";

// 문제 풀이 화면
const StudyExperienceQuizComponent = () => {
  
  const { id, quiz } = useParams();
  const {
    state: { quizzes, answers, loading, error },
    actions: { getQuizzes, insertAnswers, removeAnswers },
  } = useContext(StudyQuizContext);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("solving");

  const foundQuiz = useMemo(
    () => quizzes.find((item) => item.id === Number(id)),
    [quizzes, id]
  );

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

  if (!foundQuiz) {
    return (
      <S.Page>
        <S.Shell>
          <S.Message>문제를 찾을 수 없어요.</S.Message>
        </S.Shell>
      </S.Page>
    );
  }

  const currentIndex = quizzes.findIndex((item) => item.id === foundQuiz.id);
  const totalCount = Math.max(quizzes.length, 1);
  const progress = `${((currentIndex + 1) / totalCount) * 100}%`;
  const correctCount = answers.filter((answer) => answer.correct).length;
  const accuracy = Math.round((correctCount / totalCount) * 100);
  const rewardExp = status === "solving" ? foundQuiz.exp || 10 : 20;

  const handleCheckAnswer = () => {
    if (selected === null) return;

    const isCorrect = Boolean(foundQuiz.answers[selected]?.correct);

    insertAnswers({
      quizType: quiz,
      quizId: foundQuiz.id,
      selected,
      correct: isCorrect,
    });

    setStatus(isCorrect ? "correct" : "incorrect");
  };

  const handleConfirm = () => {
    setStatus("done");
  };

  const handleSkip = () => {
    insertAnswers({
      quizType: quiz,
      quizId: foundQuiz.id,
      selected: null,
      correct: false,
    });
    setStatus("done");
  };

  if (status === "done") {
    return (
      <S.Page>
        <QuizCompleteCard accuracy={accuracy} />
      </S.Page>
    );
  }

  const feedbackText =
    status === "correct" ? "정답이에요!" : status === "incorrect" ? "아쉬워요!" : "";

  return (
    <S.Page>
      <S.Shell>
        <S.LessonTitle>{foundQuiz.lessonTitle || "기본 인사 표현"}</S.LessonTitle>

        <S.Top>
          <S.Back to="/study/experience">‹</S.Back>
          <S.Progress $value={progress}>
            <span />
          </S.Progress>
          <S.Count>
            {currentIndex + 1} / {totalCount}
          </S.Count>
          <S.Exp>⚡ {rewardExp}</S.Exp>
          {status === "solving" && <S.Heart>❤️ {foundQuiz.heart || 5}</S.Heart>}
        </S.Top>

        <S.Divider />
        <S.Question>{foundQuiz.title}</S.Question>
        <S.ImageSlot>
          {foundQuiz.image ? <img src={foundQuiz.image} alt={foundQuiz.title} /> : foundQuiz.emoji}
        </S.ImageSlot>

        <QuizOptionList
          answers={foundQuiz.answers}
          selected={selected}
          status={status}
          onSelect={setSelected}
        />

        {feedbackText && <S.Feedback $status={status}>{feedbackText}</S.Feedback>}

        <S.Bottom>
          <S.GhostButton type="button" onClick={handleSkip}>
            건너뛰기
          </S.GhostButton>
          <S.PrimaryButton
            type="button"
            onClick={status === "solving" ? handleCheckAnswer : handleConfirm}
            disabled={status === "solving" && selected === null}
          >
            확인
          </S.PrimaryButton>
        </S.Bottom>
      </S.Shell>
    </S.Page>
  );
};

export default StudyExperienceQuizComponent;
