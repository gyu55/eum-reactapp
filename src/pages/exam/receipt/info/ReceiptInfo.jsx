import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { PRIMARY, styles } from "../../style";
import ExamSidebar from "../../ExamSidebar";

const infoCards = [
  { title: "시험접수안내", sub: "접수 방법 및 유의사항", path: "/exam/receipt/info/guide", icon: "/assets/image/exam/exam_receipt_card1.png" },
  { title: "시험원서접수", sub: "바로 원서 제출하기", path: "/exam/receipt/info/submit", icon: "/assets/image/exam/exam_receipt_card2.png" },
  { title: "접수확인 / 취소", sub: "접수 현황 조회 및 취소", path: "/exam/receipt/info/confirm", icon: "/assets/image/exam/exam_receipt_card2.png" },
];

export default function ReceiptInfo() {
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
          <span style={styles.breadcrumbActive}>원서접수</span>
        </div>

        <div style={styles.contentLayout}>
          <ExamSidebar />

          <div style={styles.contentArea}>

            <div style={styles.heroCard}>
              <div>
                <div style={styles.heroBadge()}>자격증</div>
                <h1 style={styles.heroTitle}>원서접수</h1>
                <p style={styles.heroSub}>시험 원서 접수부터 확인·취소까지 모두 안내합니다</p>
              </div>
            </div>

            <div style={styles.noticeBanner}>
              <span style={{ fontSize: 16 }}>📋</span>
              원서접수는 인터넷으로만 가능합니다. 접수 기간 외에는 신청이 불가하니 일정을 미리 확인하세요.
            </div>

            <div>
              <h2 style={styles.sectionTitle}>원서접수</h2>
              <div style={styles.infoCardRow}>
                {infoCards.map((card, i) => {
                  const active = location.pathname === card.path;
                  return (
                    <button key={i} style={{
                      ...styles.infoCard,
                      border: active ? `2px solid ${PRIMARY}` : "1.5px solid #eee",
                      background: active ? "#eef0ff" : "#fff",
                    }} onClick={() => navigate(active ? "/exam/receipt/info" : card.path)}>
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
