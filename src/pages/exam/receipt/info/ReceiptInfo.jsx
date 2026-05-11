import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { PRIMARY, styles } from "../../style";
import ExamSidebar from "../../ExamSidebar";

const STEP_COLORS = ["#4359fc", "#27ae60", "#e67e22", "#e74c3c"];

const steps = [
  { title: "회원가입", desc: "이음 사이트에서 회원가입을 진행합니다." },
  { title: "원서작성", desc: "시험 회차를 선택하고 개인정보를 입력합니다." },
  { title: "서류제출", desc: "응시 자격 증빙서류를 온라인으로 제출합니다." },
  { title: "결제완료", desc: "응시 수수료를 결제하면 접수가 완료됩니다." },
];

const infoCards = [
  { title: "시험접수안내", sub: "접수 방법 및 유의사항", path: "/exam/receipt/info" },
  { title: "시험원서접수", sub: "바로 원서 제출하기", path: "/exam/receipt/info/submit" },
  { title: "접수확인 / 취소", sub: "접수 현황 조회 및 취소", path: "/exam/receipt/info/confirm" },
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

            {/* 히어로 카드 */}
            <div style={styles.heroCard}>
              <div>
                <div style={styles.heroBadge()}>자격증</div>
                <h1 style={styles.heroTitle}>원서접수</h1>
                <p style={styles.heroSub}>시험 원서 접수부터 확인·취소까지 모두 안내합니다</p>
              </div>
              <div style={styles.heroIllust}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="6" width="24" height="28" rx="3" stroke={PRIMARY} strokeWidth="1.8" fill="none"/>
                  <path d="M14 14H26M14 20H22M14 26H24" stroke={PRIMARY} strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="27" cy="28" r="6" fill={PRIMARY} opacity="0.15"/>
                  <path d="M25 28L27 30L30 26" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* 공지 배너 */}
            <div style={styles.noticeBanner}>
              <span style={{ fontSize: 16 }}>📋</span>
              원서접수는 인터넷으로만 가능합니다. 접수 기간 외에는 신청이 불가하니 일정을 미리 확인하세요.
            </div>

            {/* 원서접수 카드 */}
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

            {outlet ?? (
              <div>
                <h2 style={styles.sectionTitle}>시험접수안내</h2>
                <div style={{
                  background: "#fff",
                  border: "1px solid #eee",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}>
                  {steps.map((step, i) => (
                    <div key={i}>
                      <div style={{ display: "flex", gap: 16, alignItems: "center", padding: "12px 0" }}>
                        <div style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: STEP_COLORS[i],
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#fff",
                          flexShrink: 0,
                        }}>
                          {i + 1}
                        </div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>{step.title}</div>
                          <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{step.desc}</div>
                        </div>
                      </div>
                      {i < steps.length - 1 && (
                        <div style={{ width: 1, height: 14, background: "#e0e0e0", marginLeft: 13 }} />
                      )}
                    </div>
                  ))}
                  <div style={{
                    background: "#fff8f0",
                    border: "1px solid #ffd7a8",
                    borderRadius: 8,
                    padding: "10px 14px",
                    marginTop: 12,
                    fontSize: 12,
                    color: "#e67e22",
                  }}>
                    접수 기간 마감일에는 서버 혼잡이 예상되오니 조기 접수를 권장합니다.
                  </div>
                  <div style={{ fontSize: 11, color: "#999", marginTop: 6, paddingLeft: 4 }}>
                    결제 후 취소 시 환불 수수료가 발생할 수 있습니다.
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
