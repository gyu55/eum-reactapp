import { useState } from "react";
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

const RenewComponent = () => {
  const [type, setType] = useState("renew");

  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 6 }}>자격증 갱신 / 재발급 신청</h2>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>자격증 갱신으로 재발급을 신청할 수 있습니다.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div>
          <label style={labelStyle}>신청 유형 *</label>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { value: "renew", label: "갱신 (유효기간 연장)" },
              { value: "reissue", label: "재발급 (분실/훼손)" },
            ].map((opt) => (
              <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input
                  type="radio"
                  name="type"
                  value={opt.value}
                  checked={type === opt.value}
                  onChange={() => setType(opt.value)}
                  style={{ accentColor: PRIMARY }}
                />
                <span style={{ fontSize: 13, color: type === opt.value ? PRIMARY : "#666", fontWeight: type === opt.value ? 600 : 400 }}>
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={labelStyle}>자격증 번호 *</label>
            <input style={inputStyle} placeholder="예: SL-2023-001234" />
          </div>
          <div>
            <label style={labelStyle}>성명 *</label>
            <input style={inputStyle} placeholder="홍길동" />
          </div>
          <div>
            <label style={labelStyle}>연락처 *</label>
            <input style={inputStyle} placeholder="010-0000-0000" />
          </div>
          <div>
            <label style={labelStyle}>배송 주소 *</label>
            <input style={inputStyle} placeholder="우편번호 검색" />
          </div>
        </div>

        <div style={{ fontSize: 13, color: PRIMARY, fontWeight: 600 }}>
          갱신 수수료: 10,000원 | 재발급 수수료: 20,000원
          <div style={{ fontSize: 12, color: "#999", fontWeight: 400, marginTop: 4 }}>
            결제는 카드/계좌이체/가상계좌로 가능합니다.
          </div>
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
          갱신 신청 및 결제하기
        </button>
      </div>
    </div>
  );
};

export default RenewComponent;
