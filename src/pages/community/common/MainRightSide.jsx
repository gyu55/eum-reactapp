import React, { useState } from "react";
import styled from "styled-components";
import { ColumnBlock } from "../communityStyle";
import SideUserProfile from "./SideUserProfile copy";
import SideNotice from "./SideNotice";
import FloatingChatButton from "./FloatingChatButton";
import SideChat from "../chat/sideChat/SideChat";
import PopupChatScreen from "../chat/PopupChatScreen";
import PopupChatRoomSelect from "../chat/PopupChatRoomSelect";

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  overflow-y: auto;
`;

export const VIEW = {
  SIDE: "side",
  POPUP: "popup",
  POPUP_SELECT: "popupSelect",
};

const MainRightSide = () => {
  const [view, setView] = useState(null);

  // 사이드 채팅 핸들러
  const handleOpen = () => setView(VIEW.SIDE);
  const handleClose = () => setView(null);
  const handleExpand = () => setView(VIEW.POPUP);

  // 팝업 채팅 핸들러
  const handlePopupMinimize = () => setView(VIEW.SIDE);
  const handlePopupClose = () => setView(null);
  const handlePopupLeave = () => setView(VIEW.POPUP_SELECT);

  // 채팅방 선택 팝업 핸들러
  const handleSelectMinimize = () => setView(VIEW.SIDE);
  const handleSelectClose = () => setView(null);
  const handleSelectRoomClick = () => setView(VIEW.POPUP);

  return (
    <div>
      <ColumnBlock width="312px">
        <SideUserProfile />
        <SideNotice />

        {/* 사이드 채팅 패널 — 내부 뷰(목록·요청·채팅방) 전환은 SideChat 내부에서 관리 */}
        {view === VIEW.SIDE && (
          <SideChat onClose={handleClose} onExpand={handleExpand} />
        )}

        {/* 플로팅 버튼 — 사이드/팝업이 열려있으면 숨김 */}
        {view === null && <FloatingChatButton onClick={handleOpen} />}
      </ColumnBlock>

      {/* 팝업 채팅 화면 — position: fixed 오버레이 */}
      {view === VIEW.POPUP && (
        <PopupOverlay>
          <PopupChatScreen
            onMinimize={handlePopupMinimize}
            onClose={handlePopupClose}
            onLeave={handlePopupLeave}
          />
        </PopupOverlay>
      )}

      {/* 채팅방 선택 팝업 — 채팅방 나가기 시 표시 */}
      {view === VIEW.POPUP_SELECT && (
        <PopupOverlay>
          <PopupChatRoomSelect
            onMinimize={handleSelectMinimize}
            onClose={handleSelectClose}
            onRoomSelect={handleSelectRoomClick}
          />
        </PopupOverlay>
      )}
    </div>
  );
};

export default MainRightSide;
