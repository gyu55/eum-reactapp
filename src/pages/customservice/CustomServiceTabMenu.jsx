import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { styles, PRIMARY } from './style';

const tabMenuItems = [
  { label: "고객지원",         isCategory: true },
  { label: "공지사항",         path: "/customservice/notice" },
  { label: "1:1 문의",        path: "/customservice/inquire" },
  { label: "문의 결과",        path: "/customservice/result" },
  { label: "개인정보 처리방침", path: "/customservice/privacy" },
];

const menuLinks = tabMenuItems.filter((item) => !item.isCategory);

const CustomServiceTabMenu = () => {
  const location = useLocation();
  const [indicatorTop, setIndicatorTop]       = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const activeIndex = menuLinks.findIndex((item) =>
      location.pathname.startsWith(item.path)
    );
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      const el = itemRefs.current[activeIndex];
      setIndicatorTop(el.offsetTop);
      setIndicatorHeight(el.offsetHeight);
    }
  }, [location.pathname]);

  return (
    <div style={{ position: 'relative' }}>
      {/* 슬라이딩 파란 바 */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: indicatorTop,
        height: indicatorHeight,
        width: '3px',
        background: PRIMARY,
        borderRadius: 2,
        transition: 'top 0.25s ease, height 0.25s ease',
      }} />

      {tabMenuItems.map((item, i) =>
        item.isCategory ? (
          <div key={i} style={styles.sidebarCategory}>{item.label}</div>
        ) : (
          <div
            key={i}
            ref={(el) => {
              const linkIndex = menuLinks.findIndex((m) => m.path === item.path);
              itemRefs.current[linkIndex] = el;
            }}
          >
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                ...styles.sidebarItem(isActive),
                borderLeft: 'none',
                display: 'block',
                textDecoration: 'none',
                transition: 'background 0.25s ease, color 0.25s ease',
              })}
            >
              {item.label}
            </NavLink>
          </div>
        )
      )}
    </div>
  );
};

export default CustomServiceTabMenu;
