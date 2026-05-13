import React from 'react';
import { PRIMARY } from '../style';

const CATEGORY_STYLE = {
  공지:    { color: "#4f6ef7", background: "#eef0fd" },
  업데이트: { color: "#f5a623", background: "#fff8ed" },
  이벤트:  { color: "#6dbf7e", background: "#edf8f0" },
};

const NoticeRow = ({ notice, onNoticeClick }) => {
  const catStyle = CATEGORY_STYLE[notice.category] || {};
  return (
    <tr
      onClick={() => onNoticeClick(notice)}
      style={{ borderBottom: "1px solid #f5f5f8", cursor: "pointer", transition: "background 0.12s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f7f8fd")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <td style={{ padding: "13px 12px", textAlign: "center", fontSize: 13, color: "#aaa", fontWeight: 500 }}>
        {notice.pinned ? <span style={{ color: PRIMARY, fontSize: 16 }}>●</span> : notice.id}
      </td>
      <td style={{ padding: "13px 12px", textAlign: "center" }}>
        <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700, ...catStyle }}>
          {notice.category}
        </span>
      </td>
      <td style={{ padding: "13px 12px", fontSize: 14, color: "#1a1a2e", fontWeight: notice.pinned ? 600 : 400 }}>
        {notice.title}
      </td>
      <td style={{ padding: "13px 12px", textAlign: "center", fontSize: 13, color: "#aaa" }}>
        {notice.date}
      </td>
    </tr>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const base = { width: 32, height: 32, borderRadius: 8, border: "none", fontSize: 13, cursor: "pointer", transition: "all 0.15s" };
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 28 }}>
      <button onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        style={{ ...base, border: "1.5px solid #e0e0ea", background: "#fff", color: "#888" }}>&lt;</button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button key={p} onClick={() => onPageChange(p)} style={{
          ...base,
          background: currentPage === p ? PRIMARY : "#fff",
          color: currentPage === p ? "#fff" : "#555",
          fontWeight: currentPage === p ? 700 : 400,
          boxShadow: currentPage === p ? "0 2px 8px rgba(58,93,245,0.25)" : "none",
        }}>{p}</button>
      ))}
      <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        style={{ ...base, border: "1.5px solid #e0e0ea", background: "#fff", color: "#888" }}>&gt;</button>
    </div>
  );
};

const CustomServiceNoticeListComponent = ({
  notices = [],
  tabs = [],
  activeTab,
  currentPage,
  totalPages,
  isLoading,
  error,
  onTabChange,
  onPageChange,
  onNoticeClick,
}) => {
  if (isLoading) return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200, color: "#aaa", fontSize: 14 }}>불러오는 중...</div>;
  if (error)     return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200, color: "#f55", fontSize: 14 }}>{error}</div>;

  return (
    <div style={{ background: "#fff", borderRadius: 14, padding: "24px 28px", border: "1px solid #eee" }}>
      {/* 탭 */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {tabs.map((tab) => (
          <button key={tab} onClick={() => onTabChange(tab)} style={{
            padding: "7px 18px", borderRadius: 20, border: "none",
            background: activeTab === tab ? PRIMARY : "#f2f3f8",
            color: activeTab === tab ? "#fff" : "#555",
            fontWeight: activeTab === tab ? 700 : 500,
            fontSize: 13, cursor: "pointer", transition: "all 0.15s",
          }}>{tab}</button>
        ))}
      </div>

      {/* 테이블 */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #f0f0f5" }}>
            {["번호", "분류", "제목", "작성일"].map((h) => (
              <th key={h} style={{ padding: "10px 12px", textAlign: h === "제목" ? "left" : "center", fontSize: 13, color: "#888", fontWeight: 600 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => <NoticeRow key={notice.id} notice={notice} onNoticeClick={onNoticeClick} />)}
        </tbody>
      </table>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default CustomServiceNoticeListComponent;
