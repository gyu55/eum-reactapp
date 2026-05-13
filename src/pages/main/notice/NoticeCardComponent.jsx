import React from 'react';
import theme from '../../../styles/theme';
import { styles } from '../style';
import { useNavigate } from 'react-router-dom';

const TAG_COLORS = {
  '신규 오픈': theme.PALETTE.primary.main,
  '자격검증': theme.PALETTE.secondary.main,
  '학습 팁': theme.PALETTE.third.main,
  '업데이트': theme.PALETTE.warning.main,
};

const NoticeCard = ({id, tag, title, date }) => {
  const navigate = useNavigate();

  return (
    <div style={{
      width: '100%',
      backgroundColor: styles.backGroundGray,
      borderRadius: '16px',
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      cursor: 'pointer',
      position: 'relative',
      boxSizing: 'border-box',
      
    }}>
      {/* 태그 + 화살표 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          backgroundColor: TAG_COLORS[tag] || theme.PALETTE.primary.main,
          borderRadius: '6px',
          width:'70px',
          height : '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center'
        }}>
          <span style={{
            fontSize: theme.FONT_SIZE.h11,
            fontWeight: theme.FONT_WEIGHT.bold,
            color: theme.PALETTE.white,
          }}>{tag}</span>
        </div>
        <div 
          onClick={() => navigate(`/customService/notice/${id}`)}
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backgroundColor:theme.PALETTE.white
          }}>
          <span style={{ 
            fontSize: theme.FONT_SIZE.h9,
            fontWeight:theme.FONT_WEIGHT.regular , 
            fontLine: theme.FONT_LINE.h9,
            color: styles.noticeGray,}}>↗</span>
        </div>
      </div>

      {/* 제목 */}
      <span style={{
        fontSize: theme.FONT_SIZE.h9,
        fontWeight: theme.FONT_WEIGHT.regular,
        fontLine: theme.FONT_LINE.h9,
        color: theme.PALETTE.black,
      }}>{title}</span>

      {/* 날짜 */}
      <span style={{
        fontSize: theme.FONT_SIZE.h11,
        fontWeight: theme.FONT_WEIGHT.regular,
        fontLine: theme.FONT_LINE.h11,
        color: styles.noticeGray,
      }}>{date}</span>
    </div>
  );
};

export default NoticeCard;