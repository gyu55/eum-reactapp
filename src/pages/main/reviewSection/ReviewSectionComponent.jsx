import React from "react";
import ReviewCardComponent from "./ReviewCardComponent";
import * as S from "./style.js";

const ReviewSectionComponent = ({ reviews = [] }) => {
  return (
    <S.SectionWrap>
      <S.TitleWrap>
        <S.Title>이음에서 달라진 이야기들</S.Title>
        <S.SubTitle>42,000명이 이음과 함께 수어를 배웠습니다.</S.SubTitle>
      </S.TitleWrap>

      <S.CardRow>
        {reviews.map((review, i) => (
          <ReviewCardComponent key={i} review={review} />
        ))}
      </S.CardRow>
    </S.SectionWrap>
  );
};

export default ReviewSectionComponent;