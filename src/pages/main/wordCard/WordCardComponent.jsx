import React, { useState } from "react";
import * as S from "./style.js";
import { useNavigate } from "react-router-dom";

const formatTitle = (title) => {
  if (!title) return "";
  for (let i = 6; i < title.length; i++) {
    if (title[i] === "," || title[i] === " ") {
      return title.slice(0, i);
    }
  }
  return title;
};

const WordCardComponent = ({ card }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleVideoClick = () => {
  navigate("/study/search", { 
    state: { keyword: card.title }
  });
  };
  return (
    <S.CardWrap
      $hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleVideoClick}
    >
      <S.Emoji>{card.emoji}</S.Emoji>
      <S.CardTitle $hovered={hovered}>{formatTitle(card.title)}</S.CardTitle>

      {!hovered && card.tag && (
        <S.TagBadge>{card.tag}</S.TagBadge>
      )}

      {hovered && (
        <>
          {card.desc && <S.CardDesc>{card.desc}</S.CardDesc>}
          {card.tag && <S.TagBadge $hovered={hovered}>{card.tag}</S.TagBadge>}
          <S.VideoBtn>▶ 영상으로 보기</S.VideoBtn>
        </>
      )}
    </S.CardWrap>
  );
};

export default WordCardComponent;