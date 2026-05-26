import React from "react";
import * as S from "./style.js";

const ReviewCard = ({ review }) => {
  return (
    <S.ReviewCard>
      <S.StarRow>
        {[...Array(5)].map((_, j) => (
          <img key={j} src="/assets/image/main/starIcon.svg" alt="star" />
        ))}
      </S.StarRow>
      <S.ReviewText>{review.text}</S.ReviewText>
      <S.ProfileRow>
        <S.ProfileImg src={review.img} alt={review.name} />
        <S.ProfileInfo>
          <S.ProfileName>{review.name}</S.ProfileName>
          <S.ProfileSub>{review.sub}</S.ProfileSub>
        </S.ProfileInfo>
      </S.ProfileRow>
    </S.ReviewCard>
  );
};

export default ReviewCard;