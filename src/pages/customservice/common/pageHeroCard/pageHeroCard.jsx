import React from "react";
import * as S from "./style";

const PageHeroCard = ({ badge, title, sub, iconSrc }) => {
  return (
    <S.HeroCard>
      <div>
        <S.HeroBadge>{badge}</S.HeroBadge>
        <S.HeroTitle>{title}</S.HeroTitle>
        <S.HeroSub>{sub}</S.HeroSub>
      </div>
      <S.HeroIllust>
        <img src={iconSrc} alt="" style={{ width: "80px" }} />
      </S.HeroIllust>
    </S.HeroCard>
  );
};

export default PageHeroCard;