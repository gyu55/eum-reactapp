import React, { useState } from "react";
import * as S from "./style.js";

const WordCardComponent = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <S.CardWrap
      $hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <S.Emoji>{card.emoji}</S.Emoji>
      <S.CardTitle $hovered={hovered}>{card.title}</S.CardTitle>
      <S.CardSub $hovered={hovered}>{card.sub}</S.CardSub>

      {!hovered && card.tag && (
        <S.TagBadge>{card.tag}</S.TagBadge>
      )}

      {hovered && card.desc && (
        <>
          <S.CardDesc>{card.desc}</S.CardDesc>
          <S.VideoBtn>▶ 영상으로 보기</S.VideoBtn>
        </>
      )}
    </S.CardWrap>
  );
};

export default WordCardComponent;
