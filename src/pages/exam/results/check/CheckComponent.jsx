import { useState } from "react";
import { PRIMARY, styles } from "../../style";

const rounds = ["2025년 1회 정기시험", "2025년 2회 정기시험"];

const inputStyle = {
  border: "1.5px solid #e0e0e0",
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 13,
  color: "#333",
  outline: "none",
};

const CheckComponent = () => {
  const [round, setRound] = useState("2025년 1회 정기시험");
  const [examNumber, setExamNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    setResult({
      passed: true,
      round: "2025년 1회 정기시험",
      grade: "2급",
      examNumber: "2025-01-00001",
      written: 78,
      practical: 82,
      total: 80,
    });
  };

  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 16 }}>합격 여부 조회</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        <select value={round} onChange={e => setRound(e.target.value)} style={{ ...inputStyle, flex: 2, background: "#fff" }}>
          {rounds.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <input
          style={{ ...inputStyle, flex: 2 }}
          placeholder="수험번호 예: 2025-01-00001"
          value={examNumber}
          onChange={e => setExamNumber(e.target.value)}
        />
        <button onClick={handleSearch} style={{
          background: PRIMARY, color: "#fff", border: "none", borderRadius: 8,
          padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
        }}>조회하기</button>
      </div>

      {result && (
        <div style={{
          border: `1.5px solid ${result.passed ? "#27ae60" : "#e74c3c"}`,
          borderRadius: 12,
          padding: "24px 28px",
          background: result.passed ? "#f0faf5" : "#fff5f5",
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: result.passed ? "#27ae60" : "#e74c3c", marginBottom: 12 }}>
            {result.passed ? "축하합니다! 합격입니다." : "아쉽게도 불합격입니다."}
          </div>
          <div style={{ fontSize: 13, color: "#444", marginBottom: 4 }}>
            {result.round} · {result.grade} · 수험번호 {result.examNumber}
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
            {[
              { label: "필기", score: result.written },
              { label: "실기", score: result.practical },
              { label: "종합", score: result.total },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#888" }}>{s.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: PRIMARY, marginTop: 4 }}>{s.score}점</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#888", marginTop: 14 }}>합격 기준: 60점 이상</div>
          <div style={{ fontSize: 12, color: "#555", marginTop: 8 }}>※ 합격증은 합격증 메뉴에서 출력 가능합니다.</div>
        </div>
      )}
    </div>
  );
};

export default CheckComponent;
