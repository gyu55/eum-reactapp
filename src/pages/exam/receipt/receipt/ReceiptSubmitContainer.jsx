import { useState } from "react";
import { PRIMARY, styles } from "../../style";

const rounds = ["2025년 1회 정기시험", "2025년 2회 정기시험", "2025년 3회 정기시험"];
const grades = ["1급", "2급", "3급"];

const inputStyle = {
  width: "100%",
  border: "1.5px solid #e0e0e0",
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 13,
  color: "#333",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = { fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 6, display: "block" };

const ReceiptSubmitContainer = () => {
  const [grade, setGrade] = useState("2급");
  const [round, setRound] = useState("");

  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 6 }}>원서 작성</h2>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>원서를 작성하고 접수 및 결제하세요.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div>
          <label style={labelStyle}>시험 회차 *</label>
          <select value={round} onChange={e => setRound(e.target.value)} style={{ ...inputStyle, background: "#fff" }}>
            <option value="">시험 회차를 선택하세요</option>
            {rounds.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>응시 등급 *</label>
          <div style={{ display: "flex", gap: 8 }}>
            {grades.map(g => (
              <button key={g} onClick={() => setGrade(g)} style={{
                flex: 1,
                padding: "10px 0",
                border: grade === g ? `2px solid ${PRIMARY}` : "1.5px solid #e0e0e0",
                borderRadius: 8,
                background: grade === g ? "#eef0ff" : "#fff",
                color: grade === g ? PRIMARY : "#666",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}>{g}</button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={labelStyle}>이름 *</label>
            <input style={inputStyle} placeholder="홍길동" />
          </div>
          <div>
            <label style={labelStyle}>생년월일 *</label>
            <input style={inputStyle} placeholder="YYYY-MM-DD" />
          </div>
          <div>
            <label style={labelStyle}>연락처 *</label>
            <input style={inputStyle} placeholder="010-0000-0000" />
          </div>
          <div>
            <label style={labelStyle}>이메일 *</label>
            <input style={inputStyle} placeholder="example@email.com" />
          </div>
        </div>

        <div>
          <label style={labelStyle}>증빙서류 첨부 *</label>
          <input type="file" style={{ fontSize: 13, color: "#555" }} />
        </div>

        <button style={{
          background: PRIMARY,
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "13px 0",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          marginTop: 8,
        }}>
          원서접수 및 결제하기
        </button>
      </div>
    </div>
  );
};

export default ReceiptSubmitContainer;
