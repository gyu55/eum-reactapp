import React from 'react';
import NoticeCard from './NoticeCardComponent';
import theme from '../../../styles/theme';

const NOTICES = [
  {id:1, tag: '신규 오픈', title: '이음 커뮤니티 채팅방이 새롭게 열렸어요!', date: '2026.03.28'},
  {id:2, tag: '자격검증', title: '2026년 상반기 수어 능력 자격 검증 시험 일정 안내', date: '2026.03.20' },
  {id:3, tag: '학습 팁', title: '수어를 빠르게 익히는 3가지 방법', date: '2026.03.28' },
  {id:4, tag: '업데이트', title: '수어 학습 콘텐츠 개편 및 신규 단어 추가 안내', date: '2026.03.10' },
];

const NoticeSection = () => {
  return (
    <div style={{ paddingTop: '80px', paddingLeft: '370px', paddingRight: '370px' }}>
      {/* 제목 */}
      <div style={{
        display:'flex',
        flexDirection:'row',
        gap:'7px'
        }}>
        <span>
          <img src="/assets/image/main/noticeIcon.svg" />
        </span>
        <span style={{
          fontSize: theme.FONT_SIZE.h5,
          fontWeight: theme.FONT_WEIGHT.bold,
          fontLine : '36px',
          display: 'block',
          marginBottom: '32px',
        }}>알려드려요</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
      }}>
        {NOTICES.map((notice, i) => (
          <NoticeCard key={i} {...notice} />
        ))}
      </div>
    </div>
  );
};

export default NoticeSection;