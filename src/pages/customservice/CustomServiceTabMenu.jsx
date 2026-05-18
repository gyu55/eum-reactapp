import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as S from "./customServiceContainerStyles";

const tabMenuItems = [
  { label: "고객지원",          isCategory: true },
  { label: "공지사항",          path: "/customservice/notice" },
  { label: "1:1 문의",         path: "/customservice/inquire" },
  { label: "문의 결과",         path: "/customservice/result" },
  { label: "개인정보 처리방침",  path: "/customservice/privacy" },
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
    <S.TabMenuWrap>
      <S.SlidingBar $top={indicatorTop} $height={indicatorHeight} />

      {tabMenuItems.map((item, i) =>
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
