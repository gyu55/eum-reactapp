import React, { useState } from 'react';
import theme from '../../../styles/theme';
import { styles } from '../style';

const WordCard = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: hovered ? '360px' : '280px',
        minHeight: '200px',
        backgroundColor: hovered ? theme.PALETTE.fourth.main : theme.PALETTE.white,
        borderRadius: '20px',
        border: hovered ? 'none' : `1px solid ${theme.GRAYSCALE[2]}`,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: '32px' }}>{card.emoji}</span>
      <span style={{
        fontSize: theme.FONT_SIZE.h7,
        fontWeight: theme.FONT_WEIGHT.bold,
        color: hovered ? theme.PALETTE.white : theme.PALETTE.black,
      }}>{card.title}</span>
      <span style={{
        fontSize: theme.FONT_SIZE.h10,
        fontWeight: theme.FONT_WEIGHT.regular,
        color: hovered ? theme.PALETTE.white : styles.textGray,
      }}>{card.sub}</span>

      {!hovered && card.tag && (
        <span style={{
          display: 'inline-flex',
          backgroundColor: styles.dailyBorderGray,
          borderRadius: '20px',
          padding: '2px 10px',
          fontSize: theme.FONT_SIZE.h11,
          fontWeight: theme.FONT_WEIGHT.medium,
          color: theme.PALETTE.primary.main,
          width: 'fit-content',
        }}>{card.tag}</span>
      )}

      {hovered && card.desc && (
        <>
          <span style={{ fontSize: theme.FONT_SIZE.h11, color: theme.PALETTE.white, lineHeight: 1.6 }}>{card.desc}</span>
          <button style={{
            marginTop: 'auto',
            border: `solid 1px ${theme.PALETTE.white}`,
            borderRadius: '20px',
            padding: '6px 14px',
            fontSize: theme.FONT_SIZE.h10,
            fontWeight: theme.FONT_WEIGHT.bold,
            color: theme.PALETTE.white,
            background: 'none',
            cursor: 'pointer',
            width: 'fit-content',
          }}>▶ 영상으로 보기</button>
        </>
      )}
    </div>
  );
};

export default WordCard;
