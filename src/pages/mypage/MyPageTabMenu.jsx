import React from "react";

import { TabMenu, TabButton } from "./style";

const tabs = [
  { name: "마이페이지", path: "/mypage", size: "main" },
  { name: "학습", path: "/mypage/learning", size: "small" },
  { name: "자격증", path: "/mypage/certificate", size: "medium" },
  { name: "설정", path: "/mypage/setting", size: "medium" },
];

const MyPageTabMenu = () => {
  return (
    <TabMenu>
      {tabs.map((tab) => (
        <TabButton
          key={tab.path}
          to={tab.path}
          $size={tab.size}
          end={tab.path === "/mypage"}
        >
          <span>{tab.name}</span>
        </TabButton>
      ))}
    </TabMenu>
  );
};

export default MyPageTabMenu;