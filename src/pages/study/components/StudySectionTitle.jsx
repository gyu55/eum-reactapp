// 섹션 제목 공통 컴포넌트: study 화면의 제목과 설명 표시
import * as S from "./style";

const StudySectionTitle = ({ title, desc }) => {

  return (
    <S.SectionTitle>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </S.SectionTitle>
  );
};

export default StudySectionTitle;
