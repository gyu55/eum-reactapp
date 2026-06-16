import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as S from "./customServiceContainerStyles";
import { TAB_MENU_ITEMS } from "./constants";

const menuLinks = TAB_MENU_ITEMS.filter((item) => !item.isCategory);

const CustomServiceTabMenu = () => {
  const location                              = useLocation();
  const [indicatorTop, setIndicatorTop]       = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);
  const itemRefs                              = useRef([]);

  useEffect(() => {
  const activeIndex = menuLinks.findIndex((item) =>
    location.pathname.startsWith(item.path)
  );

  const updateIndicator = () => {
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      const el = itemRefs.current[activeIndex];
      setIndicatorTop(el.offsetTop);
      setIndicatorHeight(el.offsetHeight);
    }
  };

  // 즉시 실행
  updateIndicator();

  // 크기 변경 감지 (폰트 로딩 후에도 재계산)
  const observer = new ResizeObserver(updateIndicator);
  itemRefs.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, [location.pathname]);

  return (
    <S.TabMenuWrap>
      <S.SlidingBar $top={indicatorTop} $height={indicatorHeight} />

      {TAB_MENU_ITEMS.map((item, i) =>
        item.isCategory ? (
          <S.SidebarCategory key={i}>{item.label}</S.SidebarCategory>
        ) : (
          <S.SidebarNavLink
            key={i}
            $active={location.pathname.startsWith(item.path)}
            ref={(el) => {
              const linkIndex = menuLinks.findIndex((m) => m.path === item.path);
              itemRefs.current[linkIndex] = el;
            }}
          >
            <NavLink to={item.path}>{item.label}</NavLink>
          </S.SidebarNavLink>
        )
      )}
    </S.TabMenuWrap>
  );
};

export default CustomServiceTabMenu;