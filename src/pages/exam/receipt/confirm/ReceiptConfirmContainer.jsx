import { useState } from "react";
import { PRIMARY, styles } from "../../style";

const mockData = [
  { num: "2025-02-00001", grade: "2급", examDate: "2025.06.14", appliedAt: "2025.05.13", status: "접수완료" },
];

const inputStyle = {
  border: "1.5px solid #e0e0e0",
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 13,
  color: "#333",
  outline: "none",
};

const ReceiptConfirmContainer = () => {
  const [searched, setSearched] = useState(true);

  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 16 }}>접수 내역 조회</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        <input style={{ ...inputStyle, flex: 2 }} placeholder="수험번호 예: 2025-02-00001" />
        <input style={{ ...inputStyle, flex: 1 }} placeholder="생년월일 YYYYMMDD" />
        <button onClick={() => setSearched(true)} style={{
          background: PRIMARY, color: "#fff", border: "none", borderRadius: 8,
          padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
        }}>조회하기</button>
      </div>

      {searched && (
        <>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 12, fontSize: 15 }}>접수 내역</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f5f7ff" }}>
                {["수험번호", "등급", "시험일", "접수일", "상태", ""].map((col, i) => (
                  <th key={i} style={{
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
                <tr key={i}>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#333", border: "1px solid #eee", textAlign: "center" }}>{row.num}</td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#333", border: "1px solid #eee", textAlign: "center" }}>{row.grade}</td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#555", border: "1px solid #eee", textAlign: "center" }}>{row.examDate}</td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#555", border: "1px solid #eee", textAlign: "center" }}>{row.appliedAt}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #eee", textAlign: "center" }}>
                    <span style={{
                      fontSize: 12, fontWeight: 700,
                      color: "#27ae60", background: "#e8faf2",
                      borderRadius: 20, padding: "4px 12px",
                    }}>{row.status}</span>
                  </td>
                  <td style={{ padding: "12px 14px", border: "1px solid #eee", textAlign: "center" }}>
                    <button style={{
                      background: "#fff", color: "#e74c3c",
                      border: "1.5px solid #e74c3c", borderRadius: 8,
                      padding: "5px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                    }}>접수취소</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: 12, color: "#888", marginTop: 12 }}>
            ※ 취소 신청 후 환불은 3~5 영업일 이내 처리됩니다.
          </div>
        </>
      )}
    </div>
  );
};

export default ReceiptConfirmContainer;
