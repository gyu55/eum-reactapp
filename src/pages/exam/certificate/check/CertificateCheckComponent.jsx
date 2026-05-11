import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIMARY, styles } from "../../style";

const mockData = [
  { no: "CL-2025-00456", course: "수어통역 기초과정", date: "2025.02.28", status: "발급완료" },
  { no: "CL-2025-00457", course: "수어통역 심화과정", date: "2025.03.15", status: "발급대기" },
];

const inputStyle = {
  border: "1.5px solid #e0e0e0",
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 13,
  color: "#333",
  outline: "none",
};

const CertificateCheckComponent = () => {
  const navigate = useNavigate();
  const [searched, setSearched] = useState(false);

  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 16 }}>수료증 조회</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        <input style={{ ...inputStyle, flex: 2 }} placeholder="이름" />
        <input style={{ ...inputStyle, flex: 2 }} placeholder="생년월일 YYYY-MM-DD" />
        <button onClick={() => setSearched(true)} style={{
          background: PRIMARY, color: "#fff", border: "none", borderRadius: 8,
          padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
        }}>조회하기</button>
      </div>

      {searched && (
        <>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 12, fontSize: 15 }}>조회 결과</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f5f7ff" }}>
                {["수료번호", "과정명", "수료일", "상태", ""].map((col, i) => (
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
                  <td style={{ padding: "12px 14px", fontSize: 13, fontWeight: 700, color: "#111", border: "1px solid #eee", textAlign: "center" }}>{row.no}</td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#555", border: "1px solid #eee" }}>{row.course}</td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "#555", border: "1px solid #eee", textAlign: "center" }}>{row.date}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #eee", textAlign: "center" }}>
                    <span style={{
                      fontSize: 12, fontWeight: 700,
                      color: row.status === "발급완료" ? "#129d1b" : "#e67e22",
                      background: row.status === "발급완료" ? "#e8faf2" : "#fff8f0",
                      borderRadius: 20, padding: "4px 12px",
                    }}>{row.status}</span>
                  </td>
                  <td style={{ padding: "12px 14px", border: "1px solid #eee", textAlign: "center" }}>
                    {row.status === "발급완료" && (
                      <button
                        onClick={() => navigate("/exam/certificate/print")}
                        style={{
                          background: "#fff", color: PRIMARY,
                          border: `1.5px solid ${PRIMARY}`, borderRadius: 8,
                          padding: "5px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                        }}>출력하기</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CertificateCheckComponent;
