import React, { useState } from "react";
import * as S from "./style";

const STAR_LABELS = ["", "별로예요", "아쉬워요", "보통이에요", "좋아요", "최고예요"];

const StarIcon = ({ active, delay, onClick }) => (
  <S.StarWrap
    $delay={delay}
    $animating={active}
    onClick={onClick}
  >
    <svg width="32" height="30" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      {/* ring */}
      <circle className="star-ring" cx="21" cy="20" r="18" fill="none" />
      {/* 외곽선 */}
      <path
        className="star-stroke"
        d="M20.999 1L14.886 13.478L1 15.49L11.059 25.324L8.654 39L21 32.42L33.345 39L30.96 25.325L41 15.491L27.191 13.478L20.999 1Z"
        fill="none"
        stroke="#d1d5db"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* 채워지는 별 */}
      <path
        className="star-fill"
        d="M20.999 1L14.886 13.478L1 15.49L11.059 25.324L8.654 39L21 32.42L33.345 39L30.96 25.325L41 15.491L27.191 13.478L20.999 1Z"
        fill={active ? "#f5a623" : "none"}
      />
    </svg>
  </S.StarWrap>
);

const StarRating = ({ rating, onChange }) => {
  const [prevRating, setPrevRating] = useState(0);
  const [animTick, setAnimTick] = useState(0);

  const handleClick = (v) => {
    setPrevRating(rating);
    setAnimTick((t) => t + 1);
    onChange(v);
  };

  const getDelay = (starId) => {
    if (starId > prevRating + 1 && starId <= rating) {
      return starId - prevRating - 1;
    }
    return 0;
  };

  return (
    <S.Container>
      <S.StarRow>
        {[1, 2, 3, 4, 5].map((v) => (
          <StarIcon
            key={`${v}-${animTick}`}
            active={v <= rating}
            delay={getDelay(v)}
            onClick={() => handleClick(v)}
          />
        ))}
      </S.StarRow>
      {rating > 0 && <S.RatingText>{STAR_LABELS[rating]}</S.RatingText>}
    </S.Container>
  );
};

export default StarRating;