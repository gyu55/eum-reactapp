import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { PRIMARY, styles } from "../style";
import ExamSidebar from "../ExamSidebar";

const infoCards = [
  { title: "자격증갱신 / 재발급", sub: "갱신 및 재발급 신청", path: "/exam/update/renew" },
  { title: "신청확인", sub: "처리 현황 조회", path: "/exam/update/check" },
];

export default function Update() {
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
          <span style={styles.breadcrumbActive}>자격증갱신</span>
        </div>

        <div style={styles.contentLayout}>
          <ExamSidebar />

          <div style={styles.contentArea}>

            <div style={styles.heroCard}>
              <div>
                <div style={styles.heroBadge()}>자격증</div>
                <h1 style={styles.heroTitle}>자격증갱신</h1>
                <p style={styles.heroSub}>유효기간 만료 전 갱신하고 재발급 신청하세요</p>
              </div>
              <div style={styles.heroIllust}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M12 20C12 15.58 15.58 12 20 12C22.76 12 25.22 13.38 26.73 15.5" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <path d="M28 20C28 24.42 24.42 28 20 28C17.24 28 14.78 26.62 13.27 24.5" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <path d="M26 12L27 16L23 15" stroke={PRIMARY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 28L13 24L17 25" stroke={PRIMARY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div style={styles.noticeBanner}>
              <span style={{ fontSize: 16 }}>⚠️</span>
              자격증 유효기간(3년) 만료 전 갱신하세요. 갱신 미이행 시 자격이 취소될 수 있습니다.
            </div>

            <div>
              <h2 style={styles.sectionTitle}>자격증갱신</h2>
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
                            <path d="M5 10C5 7.24 7.24 5 10 5C11.38 5 12.61 5.57 13.5 8" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                            <path d="M15 10C15 12.76 12.76 15 10 15C8.62 15 7.39 14.43 6.5 12" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                            <path d="M13 5L14 8L11 7" stroke={PRIMARY} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 15L6 12L9 13" stroke={PRIMARY} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
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
