import React, { useState } from 'react';
import { PRIMARY } from '../style';
import theme from '../../../styles/theme';

const SECTIONS = [
  { id: 1, title: '수집하는 개인정보' },
  { id: 2, title: '수집 및 이용목적' },
  { id: 3, title: '보유 및 이용기간' },
  { id: 4, title: '제 3자 제공' },
  { id: 5, title: '이용자의 권리' },
  { id: 6, title: '개인정보보호 책임자' },
];

const tocItemStyle = (isActive) => ({
  display: 'flex', alignItems: 'center', gap: 10,
  padding: '10px 16px', borderRadius: 8, cursor: 'default',
  background: '#f5f5f7',
  border: '1.5px solid transparent',
  transition: 'all 0.2s ease',
});

const sectionTitleStyle = {
  fontSize: 16, fontWeight: 700, color: '#1a1a2e',
  margin: '0 0 8px', paddingBottom: 12,
  borderBottom: '1.5px solid #f0f0f5',
};

const sectionSubStyle = {
  fontSize: 13, color: '#555', lineHeight: 1.8, margin: '0 0 4px',
};

const thStyle = {
  padding: '10px 16px', background: PRIMARY, color: '#fff',
  fontSize: 13, fontWeight: 600, textAlign: 'center',
};

const tdStyle = (color) => ({
  padding: '10px 16px', fontSize: 13,
  color: color || '#333', textAlign: 'center',
  borderBottom: '1px solid #f0f0f5',
});

const CustomServicePrivacyComponent = () => {
  

  const scrollToSection = (id) => {
    const el = document.getElementById(`privacy-section-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #eee', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 28 }}>

      {/* 목차 */}
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#888', marginBottom: 12 }}>목차</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {SECTIONS.map((sec) => (
            <div key={sec.id}  style={tocItemStyle(false)}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%', background: PRIMARY,
                color: '#fff', fontSize: 11, fontWeight: theme.FONT_WEIGHT.bold,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{sec.id}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#333' }}>{sec.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 1. 수집하는 개인정보 항목 */}
      <div id="privacy-section-1">
        <p style={sectionTitleStyle}>1. 수집하는 개인정보 항목</p>
        <p style={sectionSubStyle}>이음은 서비스 제공을 위해 최소한의 개인정보를 수집합니다.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12 }}>
          <thead>
            <tr>
              <th style={thStyle}>구분</th>
              <th style={thStyle}>수집 항목</th>
              <th style={thStyle}>수집 방법</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle(theme.PALETTE.primary.main)}>필수</td>
              <td style={tdStyle()}>이름, 이메일, 비밀번호</td>
              <td style={tdStyle()}>회원 가입시</td>
            </tr>
            <tr>
              <td style={tdStyle(theme.PALETTE.warning.main)}>선택</td>
              <td style={tdStyle()}>프로필 사진, 학습목표, 관심 분야, 징각 상태</td>
              <td style={tdStyle()}>직접 입력</td>
            </tr>
            <tr>
              <td style={tdStyle(theme.TEXT_COLOR.secondary)}>자동</td>
              <td style={tdStyle()}>접속 IP, 학습 이력, 기기 정보</td>
              <td style={tdStyle()}>자동 수집</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. 개인정보 수집 및 이용목적 */}
      <div id="privacy-section-2">
        <p style={sectionTitleStyle}>2. 개인정보 수집 및 이용목적</p>
        <p style={sectionSubStyle}>수어 학습 서비스 제공, 맞춤형 커리큘럼 추천, 고객 지원, 마케팅(동의 시)에 한해 이용합니다.</p>
      </div>

      {/* 3. 보유 및 이용 기간 */}
      <div id="privacy-section-3">
        <p style={sectionTitleStyle}>3. 보유 및 이용 기간</p>
        <p style={sectionSubStyle}>탈퇴 시 즉시 파기 완료. 전자상거래법에 따라 결제 기록 5년, 분쟁 기록 3년 접속 로그 3개월 보관합니다.</p>
      </div>

      {/* 4. 제 3자 제공 */}
      <div id="privacy-section-4">
        <p style={sectionTitleStyle}>4. 제 3자 제공</p>
        <p style={sectionSubStyle}>별도 동의 없이 제 3자에게 제공하지 않습니다. 결제 대행, 서비스 분석에 한해 최소 항목만 제공합니다.</p>
      </div>

      {/* 5. 이용자의 권리 */}
      <div id="privacy-section-5">
        <p style={sectionTitleStyle}>5. 이용자의 권리</p>
        <p style={sectionSubStyle}>열람 · 정정 · 삭제 · 처리 정지 · 동의 철회 권리를 언제든 행사할 수 있습니다. 요청 후 10일 이내 처리됩니다.</p>
      </div>

      {/* 6. 개인정보보호 책임자 */}
      <div id="privacy-section-6">
        <p style={sectionTitleStyle}>6. 개인정보보호 책임자</p>
        <p style={sectionSubStyle}>홍길동 (CPO) · ium999@gmail.com · 02-1234-1234</p>
        <p style={sectionSubStyle}>신고 · 상담 : 개인정보보호위원회 privacy.go.kr | KISA 118</p>
      </div>

    </div>
  );
};

export default CustomServicePrivacyComponent;
