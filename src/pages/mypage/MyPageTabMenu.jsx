import React from "react";

import S from "./style";

const tabs = [
  { name: "마이페이지", path: "/mypage", size: "main" },
  { name: "학습", path: "/mypage/learning", size: "small" },
  { name: "자격증", path: "/mypage/certificate", size: "medium" },
  { name: "설정", path: "/mypage/setting", size: "medium" },
];

const MyPageTabMenu = () => {
  return (
    <S.TabMenu>
      {tabs.map((tab) => (
        <S.TabButton
          key={tab.path}
          to={tab.path}
          $size={tab.size}
          end={tab.path === "/mypage"}
        >
          <span>{tab.name}</span>
        </S.TabButton>
      ))}
    </S.TabMenu>
  );
};

export default MyPageTabMenu;