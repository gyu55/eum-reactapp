// 상태 메시지 공통 컴포넌트: 로딩, 에러, 빈 데이터 안내
import * as S from "./style";

const StudyStatusMessage = ({ children }) => {

  return <S.StatusMessage role="status">{children}</S.StatusMessage>;
};

export default StudyStatusMessage;
