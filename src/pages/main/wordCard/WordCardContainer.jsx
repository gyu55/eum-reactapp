import React from "react";
import WordCardComponent from "./WordCardComponent.jsx";
import * as S from "./style.js";
import { WORD_CARDS } from "./constants";

const WordCardSection = () => {
  return (
    <S.SectionWrap>
      <S.SectionTitleRow>
        <S.TitleStart>매일 새로운</S.TitleStart>
        <S.TitleHighlight>수어 단어</S.TitleHighlight>
        <S.TitleEnd>하나씩</S.TitleEnd>
      </S.SectionTitleRow>

      <S.CardRow>
        {WORD_CARDS.map((card, i) => (
          <WordCardComponent key={i} card={card} />
        ))}
      </S.CardRow>
    </S.SectionWrap>
  );
};

export default WordCardSection;