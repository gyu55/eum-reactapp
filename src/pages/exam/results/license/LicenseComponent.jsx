import { useState } from "react";
import { PRIMARY, styles } from "../../style";

const inputStyle = {
  border: "1.5px solid #e0e0e0",
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 13,
  color: "#333",
  outline: "none",
};

const LicenseComponent = () => {
  const [cert, setCert] = useState(null);

  const handleSearch = () => {
    setCert({
      no: "제2025-01-0001호",
      name: "OOO",
      birth: "0000.00.00",
      grade: "2급",
      date: "2025년 3월 20일",
    });
  };

  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 16 }}>합격증 조회</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        <input style={{ ...inputStyle, flex: 2 }} placeholder="수험번호 예: 2025-01-00001" />
        <input style={{ ...inputStyle, flex: 1 }} placeholder="생년월일 YYYYMMDD" />
        <button onClick={handleSearch} style={{
          background: PRIMARY, color: "#fff", border: "none", borderRadius: 8,
          padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
        }}>조회하기</button>
      </div>

      {cert && (
        <div>
          <div style={{
            border: "1.5px solid #e0e4ff",
            borderRadius: 12,
            overflow: "hidden",
            maxWidth: 420,
            margin: "0 auto",
          }}>
            <div style={{
              background: PRIMARY,
              color: "#fff",
              textAlign: "center",
              padding: "20px 0 16px",
              letterSpacing: "0.3em",
              fontSize: 22,
              fontWeight: 700,
            }}>합 격 증</div>
            <div style={{ padding: "24px 32px", background: "#fff" }}>
              <div style={{ fontSize: 12, color: "#888", textAlign: "right", marginBottom: 16 }}>{cert.no}</div>
              <div style={{ display: "flex", gap: 32, marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#aaa" }}>성명</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#111", marginTop: 4 }}>{cert.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#aaa" }}>생년월일</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#111", marginTop: 4 }}>{cert.birth}</div>
                </div>
              </div>
              <div style={{
                fontSize: 13,
                color: "#333",
                lineHeight: 1.9,
                textAlign: "center",
                padding: "16px 0",
                borderTop: "1px solid #eee",
                borderBottom: "1px solid #eee",
                marginBottom: 16,
              }}>
                위 사람은 수어통역사 자격시험 {cert.grade}에<br/>합격하였음을 증명합니다.
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 13, color: "#444", marginBottom: 6 }}>{cert.date}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: PRIMARY }}>이음</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button style={{
              background: PRIMARY, color: "#fff", border: "none",
              borderRadius: 8, padding: "12px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}>합격증 출력 (PDF)</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LicenseComponent;
