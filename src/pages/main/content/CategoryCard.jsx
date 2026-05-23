import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";

const CategoryCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <S.CategoryCard
      type="button"
      $large={card.large}
      $tone={card.tone}
      onClick={() => { navigate(card.path); window.scrollTo(0, 0); }}
    >
      <span className="badge">{card.label}</span>
      <strong>{card.title}</strong>
      <p>{card.desc}</p>
      <span className="go">바로가기 →</span>
      <img src={card.img} alt={`${card.label} 아이콘`} />
    </S.CategoryCard>
  );
};

export default CategoryCard;