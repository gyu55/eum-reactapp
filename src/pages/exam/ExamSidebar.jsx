import { useNavigate, useLocation } from "react-router-dom";
import { styles } from "./style";

const sidebarItems = [
  { label: "자격증", isCategory: true },
  { label: "시험정보", path: "/exam/info" },
  { label: "원서접수", path: "/exam/receipt/info" },
  { label: "합격자발표", path: "/exam/results" },
  { label: "자격증갱신", path: "/exam/update" },
  { label: "수료증", isCategory: true },
  { label: "수료증조회", path: "/exam/certificate" },
];

export default function ExamSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside style={styles.sidebar}>
      {sidebarItems.map((item, i) =>
        item.isCategory ? (
          <div key={i} style={styles.sidebarCategory}>{item.label}</div>
        ) : (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            style={styles.sidebarItem(location.pathname.startsWith(item.path))}
          >
            {item.label}
          </button>
        )
      )}
    </aside>
  );
}
