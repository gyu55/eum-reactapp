import React from "react";
import { ColumnBlock } from "../communityStyle";
import SideUserProfile from "./SideUserProfile copy";
import SideNotice from "./SideNotice";
import FloatingChatButton from "./FloatingChatButton";

const MainRightSide = () => {
  return (
    <div>
      {/* 사이드 바 column */}
      <ColumnBlock width="312px">
        <SideUserProfile />
        <SideNotice />
        {/* 여기에 고정 채팅 플로팅 버튼 */}
        <FloatingChatButton />
      </ColumnBlock>
    </div>
  );
};

export default MainRightSide;
