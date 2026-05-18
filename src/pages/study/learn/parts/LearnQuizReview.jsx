import React from "react";
import { LearnQuizPage as S } from "../style";

const LearnQuizReview = ({ quiz, progress, onClose, onSkip, onRemember }) => {
  const review = quiz.review;

  return (
    <S.Page>
      <S.Shell>
        <S.Top>
          <S.CloseButton type="button" onClick={onClose}>
            ×
          </S.CloseButton>
          <S.Progress $color="purple" $value={progress}>
            <span />
          </S.Progress>
        </S.Top>

        <S.Divider />

        <S.ReviewIntro>
          <S.ReviewLabel>
            <span>📖</span>
            수어 배우기
          </S.ReviewLabel>
          <S.ReviewTitle>이 수어를 기억해봐요!</S.ReviewTitle>
          <S.ReviewDesc>카드를 보고 동작을 따라해보세요. 이후 퀴즈가 나와요!</S.ReviewDesc>
        </S.ReviewIntro>

        <S.ReviewCard>
          <S.ReviewMedia>{review?.mediaText || "📌 수어 이미지/영상 슬롯"}</S.ReviewMedia>

          <S.ReviewInfo>
            <S.ReviewSmallTitle>수어 표현</S.ReviewSmallTitle>
            <S.ReviewWord>{quiz.correctText}</S.ReviewWord>

            <S.ReviewLine />

            <S.ReviewSmallTitle>동작</S.ReviewSmallTitle>
            <S.ReviewText>{review?.motion?.[0]}</S.ReviewText>
            <S.ReviewText>{review?.motion?.[1]}</S.ReviewText>

            <S.ReviewSmallTitle>사용 상황</S.ReviewSmallTitle>
            <S.ReviewText>{review?.useCase?.[0]}</S.ReviewText>
            <S.ReviewText>{review?.useCase?.[1]}</S.ReviewText>
          </S.ReviewInfo>

          <S.ReviewControls>
            <S.PlayButton type="button">▶ 재생</S.PlayButton>
            <S.ControlButton type="button">0.5× 느리게</S.ControlButton>
            <S.ControlButton type="button">반복 재생</S.ControlButton>
          </S.ReviewControls>
        </S.ReviewCard>

        <S.Divider />

        <S.Bottom>
          <S.SkipOutlineButton type="button" onClick={onSkip}>
            건너뛰기
          </S.SkipOutlineButton>
          <S.RememberButton type="button" onClick={onRemember}>
            기억했어요! →
          </S.RememberButton>
        </S.Bottom>
      </S.Shell>
    </S.Page>
  );
};

export default LearnQuizReview;
