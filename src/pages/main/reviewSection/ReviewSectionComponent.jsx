import React from "react";
import * as S from "./style.js";

const REVIEWS = [
  {
    text: '"농인 친구가 생겼을 때\n 정말 소통하고 싶었는데,\n 이음 덕분에 이제 제법 대화할 수 있게 됐어요."',
    name: "김지연",
    sub: "초급 수료 · 직장인",
    img: "/assets/image/main/dummyUserProfileImg1.svg",
  },
  {
    text: '"수어 통역사 자격증을 준비하면서\n 이음을 알게 됐어요.\n 한 번에 합격했습니다!"',
    name: "박정우",
    sub: "자격증 취득 · 대학생",
    img: "/assets/image/main/dummyUserProfileImg2.svg",
  },
  {
    text: '"매일 퀴즈로\n 습관을 만들 수 있어서 좋아요.\n 수어가 즐거운 일상이 됐습니다."',
    name: "이수아",
    sub: "입문 수료 · 주부",
    img: "/assets/image/main/dummyUserProfileImg3.svg",
  },
];

const ReviewSection = () => {
  return (
    <S.SectionWrap>
      <S.TitleWrap>
        <S.Title>이음에서 달라진 이야기들</S.Title>
        <S.SubTitle>42,000명이 이음과 함께 수어를 배웠습니다.</S.SubTitle>
      </S.TitleWrap>

      <S.CardRow>
        {REVIEWS.map((review, i) => (
          <S.ReviewCard key={i}>
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
        ))}
      </S.CardRow>
    </S.SectionWrap>
  );
};

export default ReviewSection;
