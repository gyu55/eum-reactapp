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
      height: '61.85vh',
      backgroundColor: styles.backGroundGray,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '12.04vh',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '2.04vh' }}>
        <span style={{
          fontSize: theme.FONT_SIZE.h3,
          fontWeight: theme.FONT_WEIGHT.bold,
        }}>이음에서 달라진 이야기들</span>
        <span style={{
          fontSize: theme.FONT_SIZE.h9,
          fontWeight: theme.FONT_WEIGHT.light,
          color: styles.textGray,
          marginTop: '2.04vh',
        }}>42,000명이 이음과 함께 수어를 배웠습니다.</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25vw', marginTop: '4.91vh' }}>
        {REVIEWS.map((review, i) => (
          <div key={i} style={{
            width: '22.08vw',
            height: '24.07vh',
            backgroundColor: theme.PALETTE.white,
            borderRadius: '20px',
          }}>
            <div style={{ textAlign: 'left', marginTop: '3.7vh', marginLeft: '2.08vw' }}>
              {[...Array(5)].map((_, j) => (
                <img key={j} src="/assets/image/main/starIcon.svg" alt="star" />
              ))}
            </div>
            <span style={{
              display: 'flex',
              fontSize: theme.FONT_SIZE.h10,
              fontWeight: theme.FONT_WEIGHT.regular,
              textAlign: 'left',
              marginTop: '1.39vh',
              marginLeft: '2.08vw',
              whiteSpace: 'pre-line',
            }}>{review.text}</span>
            <div style={{ display: 'flex', marginTop: '4vh', marginLeft: '2.08vw', gap: '15px' }}>
              <img style={{ width: '2.19vw', height: 'auto' }} src={review.img} alt={review.name} />
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginTop: '3px' }}>
                <span style={{ fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.bold }}>{review.name}</span>
                <span style={{ fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.regular }}>{review.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;