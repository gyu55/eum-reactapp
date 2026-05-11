import React, { useState } from "react";
import { PRIMARY, styles } from "../../style";

const mockData = [
  {
    no: "RN-2025-00012",
    type: "갱신",
    date: "2025.03.15",
    status: "처리중",
    expected: "2025.03.25 (예정)",
    detail: "처리 진행: 서류검토 완료 → 갱신 등록 중 → 자격증 발송 (예정)",
  },
];

const inputStyle = {
  border: "1.5px solid #e0e0e0",
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 13,
  color: "#333",
  outline: "none",
};

const UpdateCheckComponent = () => {
  const [searched, setSearched] = useState(true);

  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 16 }}>신청 현황 조회</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        <input style={{ ...inputStyle, flex: 2 }} placeholder="자격증 번호 예: SL-2023-001234" />
        <input style={{ ...inputStyle, flex: 1 }} placeholder="성명" />
        <button onClick={() => setSearched(true)} style={{
          background: PRIMARY, color: "#fff", border: "none", borderRadius: 8,
          padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
        }}>조회하기</button>
      </div>

      {searched && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f5f7ff" }}>
              {["신청번호", "유형", "신청일", "상태", "예상 완료일"].map((col) => (
                <th key={col} style={{
                  padding: "11px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: PRIMARY,
                  border: "1px solid #e8eaf0",
                  textAlign: "center",
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, i) => (
              <React.Fragment key={i}>
                <tr>
                  <td style={{ padding: "12px 14px", fontSize: 13, fontWeight: 700, color: "#111", border: "1px solid #eee", textAlign: "center" }}>{row.no}</td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#555", border: "1px solid #eee", textAlign: "center" }}>{row.type}</td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#555", border: "1px solid #eee", textAlign: "center" }}>{row.date}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #eee", textAlign: "center" }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700,
                      color: "#e67e22", background: "#fff8f0",
                      borderRadius: 20, padding: "4px 12px",
                    }}>{row.status}</span>
                  </td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#555", border: "1px solid #eee", textAlign: "center" }}>{row.expected}</td>
                </tr>
                <tr>
                  <td colSpan={5} style={{ padding: "10px 14px", borderBottom: "1px solid #eee", background: "#fafafa" }}>
                    <div style={{ fontSize: 12, color: PRIMARY }}>{row.detail}</div>
                    <div style={{ fontSize: 11, color: "#999", marginTop: 4 }}>배송조회는 발송 후 문자로 안내드립니다.</div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UpdateCheckComponent;
