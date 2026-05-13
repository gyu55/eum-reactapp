import React, { useState, useEffect } from 'react';
import { styles } from '../style';
import CustomServiceResultComponent from './CustomServiceResultComponent';

// ─── 더미 데이터 (백엔드 연동 전까지만 사용) ──────────────
const DUMMY_RESULTS = [
  {
    id: 1,
    title: '수어 단어 영상이 재생되지 않아요',
    date: '2026.05.05',
    status: '답변완료',
    question: '수어 단어 영상이 재생되지 않아요. 크롬 브라우저에서 계속 로딩만 됩니다.',
    answer: '브라우저 캐시 초기화 및 재접속 후 재시도 해주세요. 지속 시 ium999@gmail.com으로 연락주시면 개별 확인 도와드리겠습니다.',
  },
  {
    id: 2,
    title: '커리큘럼 레벨 변경이 가능한가요?',
    date: '2026.05.05',
    status: '처리중',
    question: '현재 중급 과정을 수강 중인데 초급으로 변경이 가능한지 궁금합니다.',
    answer: null,
  },
];

// ─── Container ───────────────────────────────────────────
const CustomServiceResultContainer = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // TODO: 백엔드 연동 시 실제 fetch로 교체
    // const res = await fetch('/api/inquiries');
    // const data = await res.json();
    setResults(DUMMY_RESULTS);
    setIsLoading(false);
  }, []);

  const totalCount    = results.length;
  const doneCount     = results.filter((r) => r.status === '답변완료').length;
  const pendingCount  = results.filter((r) => r.status === '처리중').length;

  return (
    <>
      {/* 히어로 카드 */}
      <div style={styles.heroCard}>
        <div>
          <div style={styles.heroBadge()}>고객지원</div>
          <h1 style={styles.heroTitle}>문의 결과</h1>
          <p style={styles.heroSub}>접수하신 문의 내역과 답변을 확인하세요.</p>
        </div>
        <div style={styles.heroIllust}>
          <span style={{ display:'flex' }}>
            <img src="/assets/image/customService/customServiceResultIcon.svg" alt="" />
          </span>
        </div>
      </div>

      {/* 통계 카드 */}
      <div style={{ display: 'flex', gap: 14 }}>
        {[
          { label: '전체 문의', count: totalCount },
          { label: '답변 완료', count: doneCount },
          { label: '처리 중',   count: pendingCount },
        ].map((stat) => (
          <div key={stat.label} style={{
            flex: 1, background: '#fff', borderRadius: 14, border: '1px solid #eee',
            padding: '24px 0', textAlign: 'center',
          }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#3a5df5', marginBottom: 6 }}>{stat.count}</div>
            <div style={{ fontSize: 13, color: '#888' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* 문의 목록 */}
      <CustomServiceResultComponent
        results={results}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default CustomServiceResultContainer;
