// 체험 퀴즈 컨테이너: URL 파라미터 기반 비회원 퀴즈 데이터 연결
import { Outlet } from "react-router-dom";
import StudyQuizProvider from "../../../context/StudyQuizContext";

const StudyExperienceQuizContainer = () => {

  return (
    <StudyQuizProvider>
      <Outlet />
    </StudyQuizProvider>
  );
};

export default StudyExperienceQuizContainer;