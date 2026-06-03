import React from "react";
import styled from "styled-components";
import { ColumnBlock } from "../communityStyle";
import SideUserProfile from "./SideUserProfile";
import SideNotice from "./SideNotice";
import FloatingChatButton from "./FloatingChatButton";
import PopupChatScreen from "../chat/popupChat/PopupChatScreen";
import PopupChatRoomSelect from "../chat/popupChat/PopupChatRoomSelect";
import SideChat from "../chat/sideChat/SideChat";
import { useChatContext, VIEW, SCREEN } from "../context/ChatContext";
import CreateChatRoomModal from "../chat/createChatRoom/CreateChatRoomModal";

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  overflow-y: auto;
`;

const MainRightSide = () => {
  const { chatRoomDTO, view, screen, isLoading } = useChatContext();

  return (
    <div>
      <ColumnBlock width="312px">
        <SideUserProfile />
        <SideNotice />

        {/* 플로팅 버튼 — 진행 중인 채팅이 있고 창이 닫혀 있을 때만 표시 */}
        {!isLoading && view === null && chatRoomDTO !== null && (
          <FloatingChatButton />
        )}
      </ColumnBlock>

      {/* 사이드 채팅 — view=SIDE 일 때 (내부에서 screen 으로 ROOM/LIST 분기) */}
      {view === VIEW.SIDE && <SideChat />}

      {/* 채팅방 생성 팝업 */}
      {view === VIEW.POPUP && screen === SCREEN.CREATE && (
        <PopupOverlay>
          <CreateChatRoomModal />
        </PopupOverlay>
      )}

      {/* 채팅방 수정 팝업 */}
      {view === VIEW.POPUP && screen === SCREEN.UPDATE && (
        <PopupOverlay>
          <CreateChatRoomModal mode="update" />
        </PopupOverlay>
      )}

      {/* 팝업 — view=POPUP 일 때 screen 으로 채팅방/선택 화면 분기 */}
      {view === VIEW.POPUP && screen === SCREEN.ROOM && (
        <PopupOverlay>
          <PopupChatScreen />
        </PopupOverlay>
      )}
      {view === VIEW.POPUP && screen === SCREEN.LIST && (
        <PopupOverlay>
          <PopupChatRoomSelect />
        </PopupOverlay>
      )}
    </div>
  );
};

export default MainRightSide;
