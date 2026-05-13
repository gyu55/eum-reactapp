import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { PRIMARY, styles } from "../style";
import ExamSidebar from "../ExamSidebar";

const infoCards = [
  { title: "자격증갱신 / 재발급", sub: "갱신 및 재발급 신청", path: "/exam/update/renew", icon: "/assets/image/exam/exam_update_card1.svg" },
  { title: "신청확인", sub: "처리 현황 조회", path: "/exam/update/check", icon: "/assets/image/exam/exam_update_card2.png" },
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
                    }} onClick={() => navigate(active ? "/exam/update" : card.path)}>
                      <div style={styles.infoCardInner}>
                        <div style={{ ...styles.infoCardIcon, background: active ? "#dde1ff" : "#eef0ff" }}>
                          <img src={card.icon} alt="" style={{ width: 30, height: 30, objectFit: "contain" }} />
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
