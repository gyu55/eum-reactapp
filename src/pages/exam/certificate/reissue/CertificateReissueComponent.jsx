import { PRIMARY, styles } from "../../style";

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

const CertificateReissueComponent = () => {
  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 6 }}>수료증 재발급 신청</h2>
      <p style={{ fontSize: 12, color: "#aaa", marginBottom: 24 }}>발급 기간(180일)이 만료된 수료증의 재발급을 신청합니다.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={labelStyle}>수료번호 *</label>
            <input style={inputStyle} placeholder="예: CL-2025-00456" />
          </div>
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
        </div>

        <div>
          <label style={labelStyle}>재발급 사유 *</label>
          <textarea
            style={{ ...inputStyle, height: 80, resize: "vertical" }}
            placeholder="사유를 입력하세요 (예: 출력 기간 만료, 분실 등)"
          />
        </div>

        <div style={{ fontSize: 13, color: PRIMARY, fontWeight: 600 }}>
          재발급 수수료: 5,000원
          <span style={{ fontSize: 12, color: "#888", fontWeight: 400, marginLeft: 8 }}>
            (재발급 후 180일간 출력 가능)
          </span>
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
        }}>
          재발급 신청하기
        </button>
      </div>
    </div>
  );
};

export default CertificateReissueComponent;
