import React from 'react';
import theme from '../../../styles/theme';
import { styles } from '../style';

const REVIEWS = [
  {
    text: '"농인 친구가 생겼을 때\n 정말 소통하고 싶었는데,\n 이음 덕분에 이제 제법 대화할 수 있게 됐어요."',
    name: '김지연',
    sub: '초급 수료 · 직장인',
    img: '/assets/image/main/dummyUserProfileImg1.svg',
  },
  {
    text: '"수어 통역사 자격증을 준비하면서\n 이음을 알게 됐어요.\n 한 번에 합격했습니다!"',
    name: '박정우',
    sub: '자격증 취득 · 대학생',
    img: '/assets/image/main/dummyUserProfileImg2.svg',
  },
  {
    text: '"매일 퀴즈로\n 습관을 만들 수 있어서 좋아요.\n 수어가 즐거운 일상이 됐습니다."',
    name: '이수아',
    sub: '입문 수료 · 주부',
    img: '/assets/image/main/dummyUserProfileImg3.svg',
  },
];

const ReviewSection = () => {
  return (
    <div style={{
      width: '100%',
      backgroundColor: styles.backGroundGray,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '80px 40px 80px',
    }}>
      {/* 타이틀 */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
        <span style={{
          fontSize: theme.FONT_SIZE.h3,
          fontWeight: theme.FONT_WEIGHT.bold,
        }}>이음에서 달라진 이야기들</span>
        <span style={{
          fontSize: theme.FONT_SIZE.h9,
          fontWeight: theme.FONT_WEIGHT.light,
          color: styles.textGray,
          marginTop: '16px',
        }}>42,000명이 이음과 함께 수어를 배웠습니다.</span>
      </div>

      {/* 카드 목록 */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        {REVIEWS.map((review, i) => (
          <div key={i} style={{
            width: '340px',
            backgroundColor: theme.PALETTE.white,
            borderRadius: '20px',
            padding: '28px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            textAlign: 'left',
          }}>
            {/* 별점 */}
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, j) => (
                <img key={j} src="/assets/image/main/starIcon.svg" alt="star" />
              ))}
            </div>

            {/* 리뷰 텍스트 */}
            <span style={{
              fontSize: theme.FONT_SIZE.h10,
              fontWeight: theme.FONT_WEIGHT.regular,
              whiteSpace: 'pre-line',
              lineHeight: 1.7,
              color: theme.PALETTE.black,
            }}>{review.text}</span>

            {/* 프로필 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto', paddingTop: '12px' }}>
              <img style={{ width: '40px', height: '40px', borderRadius: '12px', objectFit: 'cover' }} src={review.img} alt={review.name} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.bold }}>{review.name}</span>
                <span style={{ fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.regular, color: styles.textGray }}>{review.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
