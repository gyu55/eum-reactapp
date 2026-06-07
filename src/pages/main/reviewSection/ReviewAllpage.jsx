import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCardComponent from "./ReviewCardComponent";
import { REVIEWS } from "./constants";
import * as S from "./style.js";

const ReviewAllPage = () => {
  const [reviews, setReviews] = useState(REVIEWS);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/reviews/all")
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setReviews([...data, ...REVIEWS]);
        }
      })
      .catch(() => {});
  }, []);

  return (
  <S.PageWrap>
    <S.PageInner>
      <S.PageHeader>
        <S.BackButton onClick={() => navigate(-1)}>◀</S.BackButton>
        <S.PageTitle>이음 후기 모음</S.PageTitle>
      </S.PageHeader>
      <S.ReviewGrid>
        {reviews.map((review, i) => (
          <ReviewCardComponent key={i} review={review} index={i} variant="grid" />
        ))}
      </S.ReviewGrid>
    </S.PageInner>
  </S.PageWrap>
);
};

export default ReviewAllPage;