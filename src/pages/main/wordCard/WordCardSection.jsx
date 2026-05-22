import React from "react";
import WordCard from "./WordCardComponent";
import * as S from "./style.js";

const WORD_CARDS = [
  { emoji: "🙏", title: "감사합니다", sub: "Thank you",            desc: "두 손을 모아 공손하게 감사의 뜻을 전합니다",          tag: "예의표현" },
  { emoji: "👋", title: "안녕하세요", sub: "Hello / Good morning", desc: "한 손을 들어 가볍게 흔들며 인사합니다",               tag: "인사" },
  { emoji: "👍", title: "사랑해",    sub: "I love you",            desc: "엄지, 검지, 소지를 펴고 흔드는 동작으로 표현합니다", tag: "애정표현" },
];

const WordCardSection = () => {
  return (
    <S.SectionWrap id="word-card-section">
      <S.SectionTitleRow>
        <S.TitleStart>매일 새로운</S.TitleStart>
        <S.TitleHighlight>수어 단어</S.TitleHighlight>
        <S.TitleEnd>하나씩</S.TitleEnd>
      </S.SectionTitleRow>

      <S.CardRow>
        {WORD_CARDS.map((card, i) => (
          <WordCard key={i} card={card} />
        ))}
      </S.CardRow>
    </S.SectionWrap>
  );
};

export default WordCardSection;
