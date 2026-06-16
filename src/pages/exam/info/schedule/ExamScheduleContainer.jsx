import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PRIMARY, styles, statusStyle } from "../style";

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
        {exam.round.split(" ").slice(0, 2).join(" ")}<br />
        {exam.round.split(" ").slice(2).join(" ")}
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

const ExamScheduleContainer = () => {
  const navigate = useNavigate();
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
      const dday = status === "접수중"
        ? Math.ceil((examDate - now) / (1000 * 60 * 60 * 24))
        : null;
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
    <div>
      <h2 style={styles.sectionTitleSm}>2026년 시험 일정</h2>
      <div style={styles.examCardRow}>
        {examData.length === 0 ? (
          <div style={{ fontSize: 15, color: "#aaa", padding: "24px 0" }}>
            등록된 시험 일정이 없습니다.
          </div>
        ) : (
          examData.map((exam) => (
            <ExamCard key={exam.id} exam={exam} onApply={handleApply} />
          ))
        )}
      </div>
    </div>
  );
};

export default ExamScheduleContainer;
