import React, { useState } from "react";
import styled from "styled-components";
import { LAYOUT, radius, shadows, TYPE } from "../../constants";
import SideChatHeader from "../chatComponents/SideChatHeader";
import SideChatListComponent from "../chatComponents/SideChatListComponent";
import SideChatRequestComponent from "../chatComponents/SideChatRequestComponent";
import SideChatComponent from "../chatComponents/SideChatComponent";
import { useChatContext } from "../../context/ChatContext";

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
  const { sideInitialType, closeSideChat, expandFromSide } = useChatContext();
  const [type, setType] = useState(sideInitialType);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleTabChange = (tab) =>
    setType(tab === "request" ? TYPE.REQUEST : TYPE.LIST);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setType(TYPE.ROOM);
  };

  const handleBack = () => setType(TYPE.LIST);

  return (
    <ChatPanel>
      <SideChatHeader
        type={type}
        chatPartnerName={selectedRoom?.name}
        onMinimize={type === TYPE.ROOM ? handleBack : closeSideChat}
        onExpand={() => expandFromSide(type)}
        onClose={closeSideChat}
      />
      {type === TYPE.LIST && (
        <SideChatListComponent
          onRoomClick={handleRoomClick}
          onTabChange={handleTabChange}
        />
      )}
      {type === TYPE.REQUEST && (
        <SideChatRequestComponent
          activeTab="request"
          onTabChange={handleTabChange}
        />
      )}
      {type === TYPE.ROOM && <SideChatComponent onViewAll={handleBack} />}
    </ChatPanel>
  );
};

export default SideChat;
