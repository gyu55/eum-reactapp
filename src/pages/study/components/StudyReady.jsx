// 준비중 공통 컴포넌트: 아직 구현 전인 study 화면의 안내 UI를 담당
import * as S from "./style";

const StudyReady = ({ title = "서비스 준비중", desc = "곧 학습 콘텐츠가 추가될 예정입니다." }) => {

  return (
    <S.ReadyWrap>
      <S.ReadyCard>
        <S.ReadyBadge>READY</S.ReadyBadge>
        <S.ReadyTitle>{title}</S.ReadyTitle>
        <S.ReadyDesc>{desc}</S.ReadyDesc>
      </S.ReadyCard>
    </S.ReadyWrap>
  );
};

export default StudyReady;
