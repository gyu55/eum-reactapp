import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { PRIMARY, styles } from "../style";
import ExamSidebar from "../ExamSidebar";

const CERT_GREEN = "#4eca80";

const infoCards = [
  { title: "수료증 조회", sub: "이름·생년월일로 조회", path: "/exam/certificate/check" },
  { title: "수료증 출력", sub: "PDF / 인쇄 출력", path: "/exam/certificate/print" },
  { title: "재발급 신청", sub: "기간 만료 후 재신청", path: "/exam/certificate/reissue" },
];

export default function Certificate() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div style={styles.page}>
      <main style={styles.main}>

        <div style={styles.breadcrumb}>
          {["홈", "시험", "수료증"].map((item, i) => (
            <span key={i} style={styles.breadcrumbItem}>
              <span style={styles.breadcrumbLink}>{item}</span>
              <span style={styles.breadcrumbSep}>›</span>
            </span>
          ))}
          <span style={styles.breadcrumbActive}>수료증조회</span>
        </div>

        <div style={styles.contentLayout}>
          <ExamSidebar />

          <div style={styles.contentArea}>

            <div style={styles.heroCard}>
              <div>
                <div style={styles.heroBadge(CERT_GREEN, "#e8faf2", "#a8edcc")}>수료증</div>
                <h1 style={styles.heroTitle}>수료증조회</h1>
                <p style={styles.heroSub}>이수 완료 후 발급된 수료증을 조회하고 출력하세요</p>
              </div>
            </div>

            <div style={{ ...styles.noticeBanner, background: "#f0faf5", border: "1px solid #c3f0d8", color: "#1a6b3a" }}>
              수료증은 과정 종료 후 7영업일 이내에 발급됩니다. 발급 후 180일 이내에 출력하시기 바랍니다.
            </div>

            <div>
              <h2 style={styles.sectionTitle}>수료증조회</h2>
              <div style={styles.infoCardRow}>
                {infoCards.map((card, i) => {
                  const active = location.pathname === card.path;
                  return (
                    <button key={i} style={{
                      ...styles.infoCard,
                      border: active ? `2px solid ${PRIMARY}` : "1.5px solid #eee",
                      background: active ? "#eef0ff" : "#fff",
                    }} onClick={() => navigate(active ? "/exam/certificate" : card.path)}>
                      <div style={styles.infoCardInner}>
                        <div style={{ ...styles.infoCardIcon, background: active ? "#dde1ff" : "#eef0ff" }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="3" y="2" width="14" height="16" rx="2" stroke={PRIMARY} strokeWidth="1.5" fill="none"/>
                            <path d="M6 7H14M6 10H11M6 13H12" stroke={PRIMARY} strokeWidth="1.3" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div>
                          <div style={{ ...styles.infoCardTitle, color: active ? PRIMARY : undefined }}>{card.title}</div>
                          <div style={styles.infoCardSub}>{card.sub}</div>
                        </div>
                      </div>
                      <span style={styles.infoCardArrow(active)}>›</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {outlet}

          </div>
        </div>
      </main>
    </div>
  );
}
