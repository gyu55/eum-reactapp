// 퀴즈 공통 레이아웃 컴포넌트: 퀴즈 화면의 고정 폭/상하 구조
import * as S from "./style";

const QuizShell = ({ children }) => {

  return <S.QuizShellWrap>{children}</S.QuizShellWrap>;
};

export default QuizShell;
