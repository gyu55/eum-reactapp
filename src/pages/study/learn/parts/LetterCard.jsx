// 글자카드: 자음/모음 한 글자 카드
import * as S from "../style";

const LetterCard = ({ letter, onClick }) => {

  return (
    <S.AlphaLetterCard type="button" onClick={onClick}>
      <strong>{letter}</strong>
      <span />
    </S.AlphaLetterCard>
  );
};

export default LetterCard;
