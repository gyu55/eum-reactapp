import { useNavigate, useLocation, useOutlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faBookOpen, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { PRIMARY, styles } from "./style";

const infoCards = [
  { title: "자격시험안내", sub: "응시 자격 및 시험 개요",  path: "/exam/info/intro",    icon: faCircleInfo },
  { title: "개요",         sub: "시험 목적 및 운영 방향",  path: "/exam/info/notice",   icon: faBookOpen },
  { title: "일정",         sub: "시험 일정 및 접수 안내",  path: "/exam/info/schedule", icon: faCalendar },
];

export default function ExamInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet = useOutlet();

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

      {/* 시험정보 탭 카드 */}
      <div>
        <h2 style={styles.sectionTitle}>시험정보</h2>
        <div style={styles.infoCardRow}>
          {infoCards.map((card, i) => {
            const active = location.pathname === card.path;
            return (
              <button
                key={i}
                style={{
                  ...styles.infoCard,
                  border: active ? `2px solid ${PRIMARY}` : "1.5px solid #eee",
                  background: active ? "#eef0ff" : "#fff",
                }}
                onClick={() => navigate(card.path, { preventScrollReset: true })}
              >
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

      {outlet}
    </>
  );
}
