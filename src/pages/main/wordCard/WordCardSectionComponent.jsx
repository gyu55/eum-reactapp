import React from 'react';
import theme from '../../../styles/theme';
import WordCard from './WordCardComponent';

const WORD_CARDS = [
  { emoji: '🙏', title: '감사합니다', sub: 'Thank you', desc: '두 손을 모아 공손하게 감사의 뜻을 전합니다', tag: '예의표현' },
  { emoji: '👋', title: '안녕하세요', sub: 'Hello / Good morning', desc: '한 손을 들어 가볍게 흔들며 인사합니다', tag: '인사' },
  { emoji: '👍', title: '사랑해', sub: 'I love you', desc: '엄지, 검지, 소지를 펴고 흔드는 동작으로 표현합니다', tag: '애정표현' },
];

const WordCardSection = () => {
  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        gap: '3px',
      }}>
        <span style={{
          fontSize: theme.FONT_SIZE.h5,
          fontWeight: theme.FONT_WEIGHT.bold,
          alignSelf: 'flex-start',
          paddingLeft: '370px',
        }}>매일 새로운</span>
        <span style={{
          fontSize: theme.FONT_SIZE.h5,
          fontWeight: theme.FONT_WEIGHT.bold,
          color: theme.PALETTE.primary.main,
        }}>수어 단어</span>
        <span style={{
          fontSize: theme.FONT_SIZE.h5,
          fontWeight: theme.FONT_WEIGHT.bold,
        }}>하나씩</span>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        marginTop: '5vh',
      }}>
        {WORD_CARDS.map((card, index) => (
          <WordCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default WordCardSection;