import React from "react";
import { LearnAlphabetPage as S } from "../style";

// 임시(figma) 
const handImage = "https://www.figma.com/api/mcp/asset/6a86b333-4feb-4790-aa5f-d60095a27f7a";

const LearnAlphabetPopup = ({ letter, onClose, onPrev, onNext }) => {
  return (
    <S.PopupDim>
      <S.PopupCard>
        <S.PopupClose type="button" onClick={onClose}>
          ×
        </S.PopupClose>

        <S.PopupLetter>{letter.letter}</S.PopupLetter>
        <S.PopupName>{letter.name}</S.PopupName>
        <S.PopupSound>{letter.sound}</S.PopupSound>

        <S.PopupDots>
          <span />
          <span />
          <span />
          <span />
          <span />
        </S.PopupDots>

        <S.HandBox>
          <img src={handImage} alt={`${letter.name} 수어 표현`} />
        </S.HandBox>

        <S.PopupCaption>수어로 표현하면</S.PopupCaption>
        <S.PopupInfo>
          {letter.desc.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </S.PopupInfo>

        <S.PopupActions>
          <button type="button" onClick={onPrev}>
            ← 이전
          </button>
          <button type="button" onClick={onNext}>
            다음 →
          </button>
        </S.PopupActions>
      </S.PopupCard>
    </S.PopupDim>
  );
};

export default LearnAlphabetPopup;
