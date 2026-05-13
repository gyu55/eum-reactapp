import React, { useState, useRef, useEffect } from 'react';

const STATUS_STYLE = {
  '답변완료': { color: '#fff', background: '#4f6ef7' },
  '처리중':   { color: '#fff', background: '#f5a623' },
};

const AccordionItem = ({ result }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const statusStyle = STATUS_STYLE[result.status] || {};

  return (
    <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
      {/* 헤더 행 */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '14px 18px', cursor: 'pointer',
          background: isOpen ? '#f7f8fd' : '#fff',
          transition: 'background 0.15s',
        }}
      >
        <span style={{
          display: 'inline-block', padding: '4px 12px', borderRadius: 20,
          fontSize: 12, fontWeight: 700, flexShrink: 0, ...statusStyle,
        }}>
          {result.status}
        </span>
        <span style={{ flex: 1, fontSize: 14, color: '#1a1a2e', fontWeight: 500 }}>{result.title}</span>
        <span style={{ fontSize: 13, color: '#aaa', flexShrink: 0 }}>{result.date}</span>
        <span style={{
          fontSize: 16, color: '#aaa', flexShrink: 0,
          display: 'inline-block',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }}>→</span>
      </div>

      {/* 펼쳐지는 Q&A */}
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div style={{ borderTop: '1px solid #f0f0f5', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 13, color: '#444', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700, color: '#3a5df5' }}>Q. </span>
            {result.question}
          </div>
          {result.answer ? (
            <div style={{ fontSize: 13, color: '#444', lineHeight: 1.6 }}>
              <span style={{ fontWeight: 700, color: '#3a5df5' }}>A. </span>
              {result.answer}
            </div>
          ) : (
            <div style={{ fontSize: 13, color: '#aaa' }}>답변 준비 중입니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

const CustomServiceResultComponent = ({ results = [], isLoading, error }) => {
  if (isLoading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200, color: '#aaa', fontSize: 14 }}>
      불러오는 중...
    </div>
  );
  if (error) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200, color: '#f55', fontSize: 14 }}>
      {error}
    </div>
  );
  if (results.length === 0) return (
    <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #eee', padding: '60px 0', textAlign: 'center' }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: '#555', marginBottom: 6 }}>문의 내역이 없습니다.</div>
      <div style={{ fontSize: 13, color: '#aaa' }}>1:1 문의를 통해 궁금한 점을 남겨주세요.</div>
    </div>
  );

  return (
    <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #eee', padding: '24px 28px' }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', marginBottom: 16 }}>내 문의 목록</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {results.map((result) => (
          <AccordionItem key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default CustomServiceResultComponent;
