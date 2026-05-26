import React from "react";
import * as S from "./style.js";
import CategoryCard from "./CategoryCard";
import { TOP_CARDS, BOTTOM_CARDS } from "./constants";

const ContentSection = () => {
  return (
    <S.ContentSection>
      <S.ContentTitle>
        이음에서만 만날 수 있는 <br />
        다양한 콘텐츠를 소개합니다.
      </S.ContentTitle>

      <S.CategoryBand>
        <S.CategoryGrid>
          {[...TOP_CARDS, ...BOTTOM_CARDS].map((card, i) => (
            <CategoryCard key={i} card={card} />
          ))}
        </S.CategoryGrid>
      </S.CategoryBand>
    </S.ContentSection>
  );
};

export default ContentSection;