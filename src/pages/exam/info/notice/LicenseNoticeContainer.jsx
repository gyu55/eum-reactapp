import { styles } from "../../style";

const overviewItems = [
  { label: "시험 유형", value: "국가공인 자격검정시험" },
  { label: "시행 기관", value: "한국농아인협회" },
  { label: "시험 횟수", value: "연 4회 (분기별 시행)" },
  { label: "응시 수수료", value: "1급 50,000원 / 2급 40,000원 / 3급 30,000원" },
];

const LicenseNoticeContainer = () => {
  return (
    <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "28px 32px" }}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 8 }}>시험 목적</h2>
      <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, marginBottom: 28 }}>
        수어통역사 자격시험은 농인과 청인 간의 원활한 의사소통을 지원할 수 있는
        전문 수어통역사를 양성하고 자질을 검증하기 위해 시행됩니다.
        자격 취득을 통해 복지, 의료, 교육 등 다양한 분야에서 전문적인 수어통역 서비스를 제공할 수 있습니다.
      </p>

      <h2 style={{ ...styles.sectionTitle, marginBottom: 16 }}>시험 개요</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {overviewItems.map((item, i) => (
          <div key={i} style={{
            background: "#f5f7ff",
            borderRadius: 10,
            padding: "16px 20px",
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#888", marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#222" }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseNoticeContainer;
