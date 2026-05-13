import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../style';
import theme from '../../../styles/theme';

const ContentSection = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.contentSection}>
      <div style={styles.contentTitle}>
        이음에서만 만날 수 있는 <br />
        다양한 콘텐츠를 소개합니다.
      </div>

      {/* 상단 2개 카드 */}
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '80px', gap: '24px' }}>

        {/* 자격검증 */}
        <div style={{
          position: 'relative', width: '648px', height: '342px',
          backgroundColor: theme.PALETTE.white, borderRadius: '30px',
          paddingTop: '61px', paddingLeft: '60px',
          display: 'flex', flexDirection: 'column', gap: '13px',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backgroundColor: theme.PALETTE.secondary.main, borderRadius: '12px',
            width: '74px', height: '24px',
          }}>
            <span style={{
              display: 'flex', alignItems: 'flex', justifyContent: 'flex',
              textAlign: 'center', alignContent: 'center',
              fontSize: theme.FONT_SIZE.h11, color: theme.PALETTE.white, fontWeight: theme.FONT_WEIGHT.bold,
            }}>자격검증</span>
          </div>
          <div style={{ display: 'flex', fontSize: theme.FONT_SIZE.h7, fontWeight: theme.FONT_WEIGHT.bold, gap: '9px' }}>
            수어·수신호 <br /> 자격검증 도전!
          </div>
          <div style={{ display: 'flex', fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.regular, color: theme.GRAYSCALE[7] }}>
            내 실력을 공식으로 <br /> 인증받아보세요
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              backgroundColor: styles.backGroundGray, borderRadius: '10px', width: '153px', height: '29px',
            }}>
              <span style={{ fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.regular, color: styles.textGray, paddingRight: '9px' }}>2회 정기 시험</span>
              <span style={{ color: theme.PALETTE.black, fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.regular }}>|</span>
              <span style={{ color: theme.PALETTE.black, fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.bold, paddingLeft: '9px' }}>접수중</span>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              backgroundColor: styles.backGroundGray, borderRadius: '10px', width: '153px', height: '29px',
            }}>
              <span style={{ color: styles.textGray, fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.regular, paddingRight: '9px' }}>시험일</span>
              <span style={{ color: theme.PALETTE.black, fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.regular }}>|</span>
              <span style={{ color: theme.PALETTE.black, fontSize: theme.FONT_SIZE.h11, fontWeight: theme.FONT_WEIGHT.bold, paddingLeft: '9px' }}>2026.05.05</span>
            </div>
          </div>
          <button style={{
            textAlign: 'left', background: 'none', border: 'none', padding: '0', paddingTop: '23px',
            color: theme.PALETTE.black, fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.bold,
          }} onClick={() => {navigate('/exam/info'); window.scrollTo(0, 0)}}>바로가기 →</button>
          <img src='/assets/image/main/exam.svg' style={{ position: 'absolute', right: '80px', top: '50%', transform: 'translateY(-50%)', width: '160px', height: '160px' }} />
        </div>

        {/* 커뮤니티 */}
        <div style={{
          position: 'relative', width: '648px', height: '342px',
          backgroundColor: theme.PALETTE.white, borderRadius: '30px',
          paddingTop: '61px', paddingLeft: '60px',
          display: 'flex', flexDirection: 'column', gap: '13px',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backgroundColor: theme.PALETTE.primary.main, borderRadius: '12px',
            width: '74px', height: '24px',
          }}>
            <span style={{
              display: 'flex', alignItems: 'flex', justifyContent: 'flex',
              textAlign: 'center', alignContent: 'center',
              fontSize: theme.FONT_SIZE.h11, color: theme.PALETTE.white, fontWeight: theme.FONT_WEIGHT.bold,
            }}>커뮤니티</span>
          </div>
          <div style={{ display: 'flex', fontSize: theme.FONT_SIZE.h7, fontWeight: theme.FONT_WEIGHT.bold, fontLine: theme.FONT_LINE.h7, gap: '9px' }}>
            함께 나누는 <br /> 수어 이야기
          </div>
          <div style={{ display: 'flex', fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.regular, color: theme.GRAYSCALE[7] }}>
            다양한 사람들과 <br /> 소통하고 공유해보세요
          </div>
          <button style={{
            textAlign: 'left', background: 'none', border: 'none', padding: '0', paddingTop: '72px',
            color: theme.PALETTE.black, fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.bold,
          }} onClick={() => {navigate('/community'); ; window.scrollTo(0, 0);}}>바로가기 →</button>
          <img src='/assets/image/main/community.svg' style={{ position: 'absolute', right: '80px', top: '50%', transform: 'translateY(-50%)', width: '160px', height: '160px' }} />
        </div>
      </div>

      {/* 하단 3개 카드 */}
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '24px', gap: '24px' }}>
        {[
          {
            color: theme.PALETTE.fourth.main, label: '수어학습',
            title: '수어 마스터 도전!',
            desc: '눈으로 듣는 새로운 대화법,\n함께 배워봐요.',
            img: '/assets/image/main/study.svg',
            path: '/study', paddingTop: '57px',
          },
          {
            color: theme.PALETTE.red, label: '응급수신호',
            title: '긴급 신호, 지금 익히기!',
            desc: '위험한 순간, 당신의 신호가\n생명을 지킵니다',
            img: '/assets/image/main/emergency.svg',
            path: '/study/chapter/sos', paddingTop: '57px',
          },
          {
            color: theme.PALETTE.third.main, label: '모스부호',
            title: '모스부호 해독 도전!',
            desc: '빛과 점으로 전하는 신호\n함께 풀어봐요',
            img: '/assets/image/main/mors.svg',
            path: '/study/chapter/mors', paddingTop: '55px',
          },
        ].map((card, i) => (
          <div key={i} style={{
            position: 'relative', width: '424px', height: '241px',
            backgroundColor: theme.PALETTE.white, borderRadius: '30px',
            paddingTop: '30px', paddingLeft: '40px',
            display: 'flex', flexDirection: 'column', gap: '7px',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              backgroundColor: card.color, borderRadius: '11px', width: '74px', height: '22px',
            }}>
              <span style={{
                display: 'flex', alignItems: 'flex', justifyContent: 'flex',
                textAlign: 'center', alignContent: 'center',
                fontSize: theme.FONT_SIZE.h11, color: theme.PALETTE.white, fontWeight: theme.FONT_WEIGHT.bold,
              }}>{card.label}</span>
            </div>
            <div style={{ display: 'flex', fontSize: theme.FONT_SIZE.h8, fontWeight: theme.FONT_WEIGHT.bold, fontLine: theme.FONT_LINE.h8 }}>
              {card.title}
            </div>
            <div style={{ display: 'flex', fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.regular, color: theme.GRAYSCALE[7], marginTop: '5px', whiteSpace: 'pre-line' }}>
              {card.desc}
            </div>
            <button style={{
              textAlign: 'left', background: 'none', border: 'none',
              paddingTop: card.paddingTop, color: theme.PALETTE.black,
              fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.bold,
            }} onClick={() =>  { navigate(card.path); window.scrollTo(0, 0); }}>바로가기 →</button>
            <img src={card.img} style={{ position: 'absolute', right: '50px', top: '50%', transform: 'translateY(-50%)', width: '120px', height: '120px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;