import React from "react";
import styled from "styled-components";
import { LAYOUT, radius, shadows } from "../../constants";
import { useChatContext, SCREEN, LIST_FILTER } from "../../context/ChatContext";
import SideChatHeader from "../chatComponents/SideChatHeader";
import SideChatListComponent from "../chatComponents/SideChatListComponent";
import SideChatRequestComponent from "../chatComponents/SideChatRequestComponent";
import SideChatComponent from "../chatComponents/SideChatComponent";
import SideChatOngoingComponent from "../chatComponents/SideChatOngoingComponent";

// ─── Panel ───────────────────────────────────────────────────────────────────

const ChatPanel = styled.div`
  width: ${LAYOUT.sidebarWidth};
  display: flex;
  flex-direction: column;
  border-radius: ${radius.card};
  box-shadow: ${shadows.float};
  overflow: hidden;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const SideChat = () => {
  const { screen, listFilter, chatRoomDTO, closeView, expandView, leaveRoom } =
    useChatContext();

  // 사이드의 minus 버튼은 ROOM 화면에선 "목록으로 되돌리기", 그 외엔 "닫기"
  const handleMinimize = screen === SCREEN.ROOM ? leaveRoom : closeView;

  return (
    <ChatPanel>
      <SideChatHeader
        screen={screen}
        listFilter={listFilter}
        chatPartnerName={chatRoomDTO?.chatRoomName}
        onMinimize={handleMinimize}
        onExpand={expandView}
        onClose={closeView}
      />

      {screen === SCREEN.LIST && listFilter === LIST_FILTER.LIVE && (
        <SideChatListComponent />
      )}
      {screen === SCREEN.LIST && listFilter === LIST_FILTER.REQUEST && (
        <SideChatRequestComponent />
      )}
      {screen === SCREEN.LIST && listFilter === LIST_FILTER.ONGOING && (
        <SideChatOngoingComponent />
      )}
      {screen === SCREEN.ROOM && (
        <SideChatComponent chatRoomId={chatRoomDTO?.id} onViewAll={leaveRoom} />
      )}
    </ChatPanel>
  );
};

export default SideChat;
