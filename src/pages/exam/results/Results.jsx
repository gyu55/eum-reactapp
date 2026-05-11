import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { PRIMARY, styles } from "../style";
import ExamSidebar from "../ExamSidebar";

const infoCards = [
  { title: "합격자조회", sub: "수험번호로 결과 확인", path: "/exam/results/check" },
  { title: "합격증", sub: "합격증 출력 및 발급", path: "/exam/results/license" },
];

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div style={styles.page}>
      <main style={styles.main}>

        <div style={styles.breadcrumb}>
          {["홈", "시험", "자격증"].map((item, i) => (
            <span key={i} style={styles.breadcrumbItem}>
              <span style={styles.breadcrumbLink}>{item}</span>
              <span style={styles.breadcrumbSep}>›</span>
            </span>
          ))}
          <span style={styles.breadcrumbActive}>합격자발표</span>
        </div>

        <div style={styles.contentLayout}>
          <ExamSidebar />

          <div style={styles.contentArea}>

            <div style={styles.heroCard}>
              <div>
                <div style={styles.heroBadge()}>자격증</div>
                <h1 style={styles.heroTitle}>합격자발표</h1>
                <p style={styles.heroSub}>합격 여부를 확인하고 합격증을 발급받으세요</p>
              </div>
              <div style={styles.heroIllust}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="15" r="8" stroke={PRIMARY} strokeWidth="1.8" fill="none"/>
                  <path d="M14 35L20 27L26 35" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M17 15L19 17L23 13" stroke={PRIMARY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div style={styles.noticeBanner}>
              <span style={{ fontSize: 16 }}>📢</span>
              2025년 1회 합격자가 발표되었습니다. 수험번호와 생년월일로 합격 여부를 확인하세요.
            </div>

            <div>
              <h2 style={styles.sectionTitle}>합격자발표</h2>
              <div style={styles.infoCardRow}>
                {infoCards.map((card, i) => {
                  const active = location.pathname === card.path;
                  return (
                    <button key={i} style={{
                      ...styles.infoCard,
                      border: active ? `2px solid ${PRIMARY}` : "1.5px solid #eee",
                      background: active ? "#eef0ff" : "#fff",
                    }} onClick={() => navigate(card.path)}>
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
