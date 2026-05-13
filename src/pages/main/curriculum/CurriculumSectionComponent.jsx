import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../../styles/theme';
import { styles } from '../style';

const STEPS = [
  { step: 1, label: '입문',   count: '8강',  active: true },
  { step: 2, label: '초급',   count: '12강', active: false },
  { step: 3, label: '중급',   count: '12강', active: false },
  { step: 4, label: '고급',   count: '18강', active: false },
  { step: 5, label: '자격증', count: '도전', active: false },
];

const CURRICULUM = [
  { step: 1, label: '입문', count: '8강',  color: theme.PALETTE.primary.main, items: ['수어란 무엇인가', '기본 손모양 익히기', '인사 표현', '감정 표현', '숫자와 날짜', '색깔과 사물', '가족 표현', '복습 및 테스트'] },
  { step: 2, label: '초급', count: '12강', color: '#6dbf7e', items: ['일상 대화 1', '일상 대화 2', '장소 표현', '교통 표현', '음식 표현', '쇼핑 표현', '날씨 표현', '직업 표현', '취미 표현', '학교 표현', '병원 표현', '복습 및 테스트'] },
  { step: 3, label: '중급', count: '12강', color: '#f5a623', items: ['복합 문장 구성', '시제 표현', '의문문 표현', '부정 표현', '감정 심화', '상황별 대화 1', '상황별 대화 2', '뉴스 수어', '공식 수어', '지역 수어', '수어 문화', '복습 및 테스트'] },
  { step: 4, label: '고급', count: '18강', items: ['고급 문법 1', '고급 문법 2', '통역 기초 1', '통역 기초 2', '의료 수어', '법률 수어', '교육 수어', '복지 수어', '비즈니스 수어 1', '비즈니스 수어 2', '방송 수어', '공공 수어 1', '공공 수어 2', '수어 토론', '수어 발표', '수어 인터뷰', '종합 실습', '복습 및 테스트'], color: '#e57373' },
  { step: 5, label: '자격증', count: '도전', color: theme.PALETTE.primary.main, items: ['자격증 소개', '시험 유형 분석', '기출 문제 풀이 1', '기출 문제 풀이 2', '실기 준비 1', '실기 준비 2', '모의 시험', '최종 점검'] },
];

const CurriculumModal = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const current = CURRICULUM[activeStep];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'rgba(0,0,0,0.5)', zIndex: 1000,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 24, padding: '36px 40px',
          width: 700, maxHeight: '80vh', overflowY: 'auto',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        }}
      >
        {/* 헤더 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e' }}>커리큘럼 전체 보기</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#aaa' }}>✕</button>
        </div>

        {/* 스텝 탭 */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {CURRICULUM.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                padding: '8px 20px', borderRadius: 20, border: 'none',
                background: activeStep === i ? theme.PALETTE.primary.main : '#f2f3f8',
                color: activeStep === i ? '#fff' : '#555',
                fontWeight: activeStep === i ? 700 : 500,
                fontSize: 13, cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              {c.step}단계 · {c.label}
            </button>
          ))}
        </div>

        {/* 강의 목록 */}
        <div style={{ background: '#f8f9ff', borderRadius: 16, padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: '50%',
              background: current.color, color: '#fff', fontSize: 14, fontWeight: 700,
            }}>{current.step}</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#1a1a2e' }}>{current.label}</span>
            <span style={{ fontSize: 13, color: '#aaa' }}>총 {current.count}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {current.items.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 16px', background: '#fff', borderRadius: 10,
                fontSize: 14, color: '#333',
              }}>
                <span style={{ color: current.color, fontWeight: 700, fontSize: 13, minWidth: 28 }}>{i + 1}강</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CurriculumSection = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '110px' }}>
      {showModal && <CurriculumModal onClose={() => setShowModal(false)} />}

      <span style={{
        fontSize: theme.FONT_SIZE.h5, fontWeight: theme.FONT_WEIGHT.bold,
        alignSelf: 'flex-start', paddingLeft: '370px', marginBottom: '71px',
      }}>💎 커리큘럼</span>

      {/* 스텝 */}
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '670px', marginBottom: '25px' }}>
        {STEPS.map((s, i) => (
          <React.Fragment key={s.step}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: s.active ? theme.PALETTE.primary.main : styles.curriculumGray,
                width: '61px', height: '61px', borderRadius: '50%',
                color: s.active ? theme.PALETTE.white : styles.textGray,
                fontSize: theme.FONT_SIZE.h7, fontWeight: theme.FONT_WEIGHT.medium,
              }}>{s.step}</div>
              <span style={{ fontSize: theme.FONT_SIZE.h7, fontWeight: theme.FONT_WEIGHT.medium, color: s.active ? theme.PALETTE.primary.main : styles.textGray }}>{s.label}</span>
              <span style={{ fontSize: theme.FONT_SIZE.h9, fontWeight: theme.FONT_WEIGHT.regular, color: styles.textGray }}>{s.count}</span>
            </div>
            {i < STEPS.length - 1 && <div style={styles.curriculumLine} />}
          </React.Fragment>
        ))}
      </div>

      {/* 소개 박스 */}
      <div style={{
        width: '1096px', height: '355px', borderRadius: '50px',
        border: `solid 1px ${theme.PALETTE.primary.main}`,
        marginBottom: '150px', paddingTop: '35px', paddingLeft: '66px', paddingBottom: '40px',
        display: 'flex', flexDirection: 'column',
      }}>
        <span style={{ fontSize: theme.FONT_SIZE.h7, fontWeight: theme.FONT_WEIGHT.medium, marginBottom: '14px' }}>이음 커리큘럼 소개</span>
        <span style={{ marginBottom: '10px', fontSize: theme.FONT_SIZE.h4, fontWeight: theme.FONT_WEIGHT.bold, color: theme.TEXT_COLOR.primary }}>입문부터 자격증까지</span>
        <span style={{ marginBottom: '5px', fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.regular }}>총 5단계 · 50강 · 평균 수료 기간 6개월</span>
        <div style={{ display: 'flex', gap: '9px', fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.medium, color: theme.GRAYSCALE[7] }}>
          {['#무료시작', '#단계별학습', '#라이브참여', '#자격증', '#커뮤니티'].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '20px', alignSelf: 'center', marginTop: 'auto' }}>
          <div style={{ width: '200px', height: '60px', borderRadius: '40px', backgroundColor: theme.PALETTE.primary.main, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button style={{ color: theme.PALETTE.white, fontSize: theme.FONT_SIZE.h8, fontWeight: theme.FONT_WEIGHT.bold, background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => { navigate('/study/experience'); window.scrollTo(0, 0); }}>무료로 시작하기 →</button>
          </div>
          <div style={{ width: '200px', height: '60px', borderRadius: '40px', border: `solid 1px ${theme.PALETTE.primary.main}`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button
              onClick={() => setShowModal(true)}
              style={{ color: theme.PALETTE.primary.main, fontSize: theme.FONT_SIZE.h8, fontWeight: theme.FONT_WEIGHT.medium, background: 'none', border: 'none', cursor: 'pointer' }}>
              커리큘럼 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
