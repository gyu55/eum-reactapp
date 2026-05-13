import React from 'react';
import { PRIMARY } from '../style';

const CATEGORY_STYLE = {
  공지:    { color: "#4f6ef7", background: "#eef0fd" },
  업데이트: { color: "#f5a623", background: "#fff8ed" },
  이벤트:  { color: "#6dbf7e", background: "#edf8f0" },
};

const CustomServiceNoticeComponent = ({ notice, isLoading, error, onBack }) => {
  if (isLoading) return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200, color: "#aaa", fontSize: 14 }}>
      불러오는 중...
    </div>
  );
  if (error) return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200, color: "#f55", fontSize: 14 }}>
      {error}
    </div>
  );
  if (!notice) return null;

  const catStyle = CATEGORY_STYLE[notice.category] || {};

  return (
    <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #eee", padding: "28px 32px" }}>
      {/* 카테고리 */}
      <span style={{ display: "inline-block", padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, marginBottom: 12, ...catStyle }}>
        {notice.category}
      </span>

      {/* 제목 */}
      <h2 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.3px" }}>
        {notice.title}
      </h2>

      {/* 작성자 + 날짜 */}
      <div style={{ fontSize: 13, color: "#aaa", marginBottom: 24 }}>
        작성자 : 이음 운영팀 &nbsp;&nbsp; 작성일 : {notice.date}
      </div>

      <div style={{ borderTop: "1.5px solid #f0f0f5", marginBottom: 24 }} />

      {/* 본문 */}
      <div style={{ fontSize: 14, color: "#444", lineHeight: 2, whiteSpace: "pre-line", minHeight: 120 }}>
        {notice.content}
      </div>

      <div style={{ borderTop: "1.5px solid #f0f0f5", marginTop: 24, marginBottom: 20 }} />

      {/* 목록으로 버튼 */}
      <span
        onClick={onBack}
        style={{ fontSize: 14, color: PRIMARY, fontWeight: 600, cursor: "pointer", transition: "opacity 0.15s" }}
        onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
        onMouseLeave={(e) => (e.target.style.opacity = '1')}
      >
        ← 목록으로 돌아가기
      </span>
    </div>
  );
};

export default CustomServiceNoticeComponent;
