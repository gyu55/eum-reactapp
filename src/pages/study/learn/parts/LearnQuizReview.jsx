// 학습퀴즈복습카드: 오답 후 핵심 설명 -> 다시 보여줌
import * as S from "../style";

const LearnQuizReview = ({
  label = "📖 수어 배우기",
  headline = "이 수어를 기억해봐요!",
  mediaText = "수어 이미지/영상 슬롯",
  wordLabel = "수어 표현",
  title,
  desc,
  action,
  situation,
  onSkip,
  onRemember,
}) => {
  return (
    <S.LearnReviewCard>
      <S.LearnReviewIntro>
        <S.LearnReviewLabel>{label}</S.LearnReviewLabel>
        <S.LearnReviewTitle>{headline}</S.LearnReviewTitle>
        <S.LearnReviewDesc>{desc}</S.LearnReviewDesc>
      </S.LearnReviewIntro>

      <S.LearnReviewContent>
        <S.LearnReviewMedia>📌 {mediaText}</S.LearnReviewMedia>
        <S.LearnReviewInfo>
          <span>{wordLabel}</span>
          <S.LearnReviewWord>{title}</S.LearnReviewWord>
          <span>동작</span>
          <p>{action}</p>
          <span>사용 상황</span>
          <p>{situation}</p>
        </S.LearnReviewInfo>
        <S.LearnReviewControls>
          <button type="button">▶ 재생</button>
          <button type="button">0.5× 느리게</button>
          <button type="button">반복 재생</button>
        </S.LearnReviewControls>
      </S.LearnReviewContent>

      <S.LearnReviewActions>
        <S.LearnReviewSkip type="button" onClick={onSkip}>
          건너뛰기
        </S.LearnReviewSkip>
        <S.LearnReviewButton type="button" onClick={onRemember}>
          기억했어요! →
        </S.LearnReviewButton>
      </S.LearnReviewActions>
    </S.LearnReviewCard>
  );
};

export default LearnQuizReview;
