import { PRIMARY, styles } from "../../style";

const CERT_GREEN = "#4eca80";

const cert = {
  no: "CL-2025-00456",
  name: "OOO",
  course: "수어통역 기초과정",
  date: "2025년 2월 28일",
};

const CertificatePrintComponent = () => {
  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 6 }}>수료증 출력</h2>
      <p style={{ fontSize: 12, color: "#aaa", marginBottom: 24 }}>수료증을 미리보기 하고 PDF로 출력할 수 있습니다.</p>

      <div style={{
        border: "1.5px solid #d0f0e0",
        borderRadius: 12,
        overflow: "hidden",
        maxWidth: 420,
        margin: "0 auto 24px",
      }}>
        <div style={{
          background: CERT_GREEN,
          color: "#fff",
          textAlign: "center",
          padding: "18px 0 14px",
          letterSpacing: "0.3em",
          fontSize: 20,
          fontWeight: 700,
        }}>수 료 증</div>
        <div style={{ padding: "24px 32px", background: "#fff" }}>
          <div style={{ fontSize: 12, color: "#888", textAlign: "right", marginBottom: 16 }}>제 {cert.no} 호</div>
          <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 11, color: "#aaa" }}>성명</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#111", marginTop: 4 }}>{cert.name}</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#aaa" }}>과정명</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#111", marginTop: 4 }}>{cert.course}</div>
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
            위 사람은 상기 과정을 수료하였음을<br/>증명합니다.
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, color: "#444", marginBottom: 6 }}>{cert.date}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: CERT_GREEN }}>이음</div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button style={{
          background: PRIMARY, color: "#fff", border: "none",
          borderRadius: 8, padding: "12px 40px", fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>PDF 다운로드 및 출력</button>
      </div>
    </div>
  );
};

export default CertificatePrintComponent;
