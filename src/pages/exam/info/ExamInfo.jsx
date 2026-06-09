import { useState, useEffect } from "react";
import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { PRIMARY, styles, statusStyle } from "./style";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};


function StatusBadge({ status }) {
  const s = statusStyle(status);
  return (
    <span style={{ ...styles.statusBadge, color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>
      {status}
    </span>
  );
}

function ExamCard({ exam, onApply }) {
  const isActive = exam.active;
  return (
    <div style={styles.examCard(isActive)}>
      <div style={styles.examCardBadgeRow}>
        <StatusBadge status={exam.status} />
      </div>
      <div style={styles.examCardRound(exam.status)}>
        {exam.round.split(' ').slice(0, 2).join(' ')}<br />
        {exam.round.split(' ').slice(2).join(' ')}
      </div>

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

      {exam.status === "접수중" && (
        <button
          onClick={() => onApply(exam.id)}
          style={{
            marginTop: 14,
            width: "100%",
            padding: "10px 0",
            background: PRIMARY,
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          접수하기
        </button>
      )}
    </div>
  );
}

const infoCards = [
  { title: "자격시험안내", sub: "응시 자격 및 시험 개요", path: "/exam/info/intro", icon: faCircleInfo },
  { title: "개요",         sub: "시험 목적 및 운영 방향", path: "/exam/info/notice", icon: faBookOpen },
];

export default function ExamInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet = useOutlet();
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:10000/api/tests", { credentials: "include" })
      .then(res => res.json())
      .then(data => { if (data.success) setTests(data.data); })
      .catch(() => {});
  }, []);

  const examData = tests
    .filter(t => new Date(t.testDate).getFullYear() === new Date().getFullYear())
    .map(t => {
      const now = new Date();
      const start = new Date(t.testReceiptStart);
      const end = new Date(t.testReceiptEnd);
      const examDate = new Date(t.testDate);
      let status = "예정";
      if (now > examDate) status = "완료";
      else if (now >= start && now <= end) status = "접수중";
      const dday = status === "접수중" ? Math.ceil((examDate - now) / (1000 * 60 * 60 * 24)) : null;
      return {
        id: t.id,
        round: t.testTitle,
        status,
        period: `${formatDate(t.testReceiptStart)} – ${formatDate(t.testReceiptEnd)}`,
        examDate: formatDate(t.testDate),
        dday,
        active: status === "접수중",
      };
    });

  const handleApply = (testId) => {
    navigate("/exam/receipt/info/submit", { state: { testId: String(testId) } });
  };

  return (
    <>
            {/* 히어로 카드 */}
            <div style={styles.heroCard}>
              <div>
                <div style={styles.heroBadge}>자격증</div>
                <h1 style={styles.heroTitle}>시험정보</h1>
                <p style={styles.heroSub}>수어 자격증 취득을 위한 시험 일정과 응시 안내를 확인하세요</p>
              </div>
              <div style={styles.heroIllust}>
                <img src="/assets/image/exam/exam_info_hero.svg" alt="" style={{ width: 80, height: 80, objectFit: "contain" }} />
              </div>
            </div>

            {/* 공지 배너 */}
            <div style={styles.noticeBanner}>
              <span style={{ fontSize: 16 }}>📢</span>
              2026년 수어 자격시험 일정이 공개되었습니다. 원서접수 전 반드시 응시 자격 요건을 확인하세요.
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
                    }} onClick={() => navigate(active ? "/exam/info" : card.path, { preventScrollReset: true })}>
                      <div style={styles.infoCardInner}>
                        <div style={{ ...styles.infoCardIcon, background: active ? "#dde1ff" : "#eef0ff" }}>
                          <FontAwesomeIcon icon={card.icon} style={{ fontSize: 18, color: active ? PRIMARY : "#7b8cde" }} />
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
                <h2 style={styles.sectionTitleSm}>2026년 시험 일정</h2>
                <div style={styles.examCardRow}>
                  {examData.map((exam) => (
                    <ExamCard key={exam.id} exam={exam} onApply={handleApply} />
                  ))}
                </div>
              </div>
            )}

    </>
  );
}
