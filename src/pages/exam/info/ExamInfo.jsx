import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { PRIMARY, styles, statusStyle } from "./style";
import ExamSidebar from "../ExamSidebar";

// 임시 데이터 — 추후 API로 교체
const examData = [
  {
    id: 1,
    round: "1회 정기시험",
    status: "완료",
    period: "2025.02.03 – 02.14",
    examDate: "2025.03.08",
    dday: null,
    active: false,
  },
  {
    id: 2,
    round: "2회 정기시험",
    status: "접수중",
    period: "2025.05.12 – 05.23",
    examDate: "2025.06.14",
    dday: -86,
    active: true,
  },
  {
    id: 3,
    round: "3회 정기시험",
    status: "예정",
    period: "2025.08.11 – 08.22",
    examDate: "2025.09.13",
    dday: null,
    active: false,
  },
  {
    id: 4,
    round: "4회 정기시험",
    status: "예정",
    period: "2025.11.03 – 11.14",
    examDate: "2025.12.06",
    dday: null,
    active: false,
  },
];


function StatusBadge({ status }) {
  const s = statusStyle(status);
  return (
    <span style={{ ...styles.statusBadge, color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>
      {status}
    </span>
  );
}

function ExamCard({ exam }) {
  const isActive = exam.active;
  return (
    <div style={styles.examCard(isActive)}>
      <div style={styles.examCardBadgeRow}>
        <StatusBadge status={exam.status} />
      </div>
      <div style={styles.examCardRound(exam.status)}>{exam.round}</div>

      <div style={styles.examCardPeriodLabel(exam.status)}>접수기간</div>
      <div style={styles.examCardPeriodValue(exam.status)}>{exam.period}</div>

      <div style={styles.examCardDateBox(isActive, exam.status)}>
        <div style={styles.examDateInner}>
          <div style={styles.examCardDateLabel(isActive, exam.status)}>시험일</div>
          <div style={styles.examCardDateValue(isActive, exam.status)}>{exam.examDate}</div>
        </div>
        {exam.dday !== null && (
          <div style={styles.examCardDdaySection}>
            <div style={styles.examCardDdayLabel}>D-Day</div>
            <div style={styles.examCardDdayValue}>{exam.dday}</div>
          </div>
        )}
      </div>
    </div>
  );
}

const infoCards = [
  { title: "자격시험안내", sub: "응시 자격 및 시험 개요", path: "/exam/info/intro" },
  { title: "개요", sub: "시험 목적 및 운영 방향", path: "/exam/info/notice" },
];

export default function ExamInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div style={styles.page}>

      {/* ── 콘텐츠 영역 ── */}
      <main style={styles.main}>

        {/* 브레드크럼 */}
        <div style={styles.breadcrumb}>
          {["홈", "시험", "자격증"].map((item, i) => (
            <span key={i} style={styles.breadcrumbItem}>
              <span style={styles.breadcrumbLink}>{item}</span>
              <span style={styles.breadcrumbSep}>›</span>
            </span>
          ))}
          <span style={styles.breadcrumbActive}>시험정보</span>
        </div>

        {/* 메인 레이아웃: 사이드바 + 본문 */}
        <div style={styles.contentLayout}>

          <ExamSidebar />

          {/* ── 본문 ── */}
          <div style={styles.contentArea}>

            {/* 히어로 카드 */}
            <div style={styles.heroCard}>
              <div>
                <div style={styles.heroBadge}>자격증</div>
                <h1 style={styles.heroTitle}>시험정보</h1>
                <p style={styles.heroSub}>수어 자격증 취득을 위한 시험 일정과 응시 안내를 확인하세요</p>
              </div>
              <div style={styles.heroIllust}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="6" y="8" width="28" height="24" rx="3" stroke={PRIMARY} strokeWidth="1.8" fill="none"/>
                  <path d="M12 16 H28 M12 21 H22 M12 26 H25" stroke={PRIMARY} strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* 공지 배너 */}
            <div style={styles.noticeBanner}>
              <span style={{ fontSize: 16 }}>📢</span>
              2025년 수어 자격시험 일정이 공개되었습니다. 원서접수 전 반드시 응시 자격 요건을 확인하세요.
            </div>

            {/* 시험정보 카드 */}
            <div>
              <h2 style={styles.sectionTitle}>시험정보</h2>
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
                      <span style={{ ...styles.infoCardArrow, color: active ? PRIMARY : "#ccc" }}>›</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 탭 클릭 시 서브 콘텐츠, 기본 시 시험 일정 표시 */}
            {outlet ?? (
              <div>
                <h2 style={styles.sectionTitleSm}>2025년 시험 일정</h2>
                <div style={styles.examCardRow}>
                  {examData.map((exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

    </div>
  );
}
