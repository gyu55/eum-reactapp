// 문자학습팝업: 선택한 글자의 이름, 소리, 설명 나옴
import * as S from "../style";

const LearnAlphabetPopup = ({ letter, onClose, onPrev, onNext }) => {
  return (
    <S.AlphaPopupDim>
      <S.AlphaPopupCard>
        <S.AlphaPopupClose type="button" onClick={onClose} aria-label="닫기">
          ×
        </S.AlphaPopupClose>
        <S.AlphaPopupLetter>{letter.letter}</S.AlphaPopupLetter>
        <S.AlphaPopupName>{letter.name}</S.AlphaPopupName>
        <S.AlphaPopupSound>{letter.sound}</S.AlphaPopupSound>
        <S.AlphaPopupDots>
          <span />
          <span />
          <span />
        </S.AlphaPopupDots>
        <S.AlphaHandBox>
          <img src={letter.imageUrl} alt={`${letter.name} 손 모양`} />
        </S.AlphaHandBox>
        <S.AlphaPopupCaption>손 모양 미리보기</S.AlphaPopupCaption>
        <S.AlphaPopupInfo>
          {letter.desc.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </S.AlphaPopupInfo>
        <S.AlphaPopupActions>
          <button type="button" onClick={onPrev}>
            이전
          </button>
          <button type="button" onClick={onNext}>
            다음
          </button>
        </S.AlphaPopupActions>
      </S.AlphaPopupCard>
    </S.AlphaPopupDim>
  );
};

export default LearnAlphabetPopup;
