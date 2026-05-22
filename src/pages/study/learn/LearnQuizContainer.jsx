// 학습 퀴즈 컨테이너: 학습 퀴즈 파라미터와 퀴즈 컨텍스트 연결
import { Outlet } from "react-router-dom";
import StudyQuizProvider from "../../../context/StudyQuizContext";

const LearnQuizContainer = () => {

  return (
    <StudyQuizProvider>
      <Outlet />
    </StudyQuizProvider>
  );
};

export default LearnQuizContainer;