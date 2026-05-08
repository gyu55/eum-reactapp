import React, { useState } from "react";
import styled from "styled-components";
import { LAYOUT, radius, shadows, TYPE } from "../../constants";
import SideChatHeader from "../chatComponents/SideChatHeader";
import SideChatListComponent from "../chatComponents/SideChatListComponent";
import SideChatRequestComponent from "../chatComponents/SideChatRequestComponent";
import SideChatComponent from "../chatComponents/SideChatComponent";

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

const SideChat = ({ onClose, onExpand }) => {
  const [type, setType] = useState(TYPE.LIST);
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
        onMinimize={type === TYPE.ROOM ? handleBack : onClose}
        onExpand={onExpand}
        onClose={onClose}
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
      {type === TYPE.ROOM && (
        <SideChatComponent onViewAll={handleBack} />
      )}
    </ChatPanel>
  );
};

export default SideChat;
