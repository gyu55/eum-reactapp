import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";

const sidebarItems = [
  { label: "자격증",    isCategory: true },
  { label: "시험정보",   path: "/exam/info" },
  { label: "원서접수",   path: "/exam/receipt/info" },
  { label: "합격자발표", path: "/exam/results" },
  { label: "자격증갱신", path: "/exam/update" },
  { label: "수료증",    isCategory: true },
  { label: "수료증조회", path: "/exam/certificate" },
];

const menuLinks = sidebarItems.filter(item => !item.isCategory);

export default function ExamSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const itemRefs = useRef([]);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  useLayoutEffect(() => {
    const activeIndex = menuLinks.findIndex(item =>
      location.pathname.startsWith(item.path)
    );
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      const el = itemRefs.current[activeIndex];
      setIndicatorTop(el.offsetTop);
      setIndicatorHeight(el.offsetHeight);
    }
  }, [location.pathname]);

  return (
    <S.SidebarAside>
      <S.SidebarInner>
        <S.SlidingBar $top={indicatorTop} $height={indicatorHeight} />

        {sidebarItems.map((item, i) =>
          item.isCategory ? (
            <S.SidebarCategory key={i}>{item.label}</S.SidebarCategory>
          ) : (
            <S.SidebarItem
              key={i}
              $active={location.pathname.startsWith(item.path)}
              ref={el => {
                const linkIndex = menuLinks.findIndex(m => m.path === item.path);
                itemRefs.current[linkIndex] = el;
              }}
              onClick={() => { window.scrollTo(0, 0); navigate(item.path); }}
            >
              {item.label}
            </S.SidebarItem>
          )
        )}
      </S.SidebarInner>
    </S.SidebarAside>
  );
}
