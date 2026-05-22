// 퀴즈 훅 담당: 퀴즈 API 호출과 StudyQuizContext 연결
import { useContext } from "react";
import { StudyQuizContext } from "../../../context/StudyQuizContext";

export const useQuiz = () => {

  return useContext(StudyQuizContext);
};