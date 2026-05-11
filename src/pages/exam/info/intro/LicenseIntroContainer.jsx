import { PRIMARY, styles } from "../../style";

const tableData = [
  {
    grade: "1급",
    requirement: "2급 취득 후 2년 이상 경력",
    subjects: "필기 4과목 + 실기 수어통역",
    standard: "필기·실기 각 60점 이상",
  },
  {
    grade: "2급",
    requirement: "3급 취득 후 1년 이상 경력",
    subjects: "필기 3과목 + 실기 수어번역",
    standard: "필기·실기 각 60점 이상",
  },
  {
    grade: "3급",
    requirement: "제한 없음 (만 18세 이상)",
    subjects: "필기 2과목",
    standard: "과목당 40점 이상, 평균 60점",
  },
];

const LicenseIntroContainer = () => {
  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 20 }}>응시 자격 및 시험 과목</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f7ff" }}>
            {["등급", "응시자격", "시험과목", "합격기준"].map((col) => (
              <th key={col} style={{
                padding: "12px 16px",
                fontSize: 13,
                fontWeight: 700,
                color: PRIMARY,
                border: "1px solid #e8eaf0",
                textAlign: "center",
              }}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
              <td style={{ padding: "14px 16px", fontSize: 13, fontWeight: 700, color: PRIMARY, border: "1px solid #eee", textAlign: "center" }}>
                {row.grade}
              </td>
              <td style={{ padding: "14px 16px", fontSize: 13, color: "#444", border: "1px solid #eee" }}>{row.requirement}</td>
              <td style={{ padding: "14px 16px", fontSize: 13, color: "#444", border: "1px solid #eee" }}>{row.subjects}</td>
              <td style={{ padding: "14px 16px", fontSize: 13, color: "#444", border: "1px solid #eee" }}>{row.standard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LicenseIntroContainer;
