import React, { useState } from "react";
import styled from "styled-components";
import { colors, radius } from "../../constants";
import { h10Bold, h11Bold, h11Regular } from "../../../../styles/common";
import chatDefaultProfile from "../../assets/chat/chat_default_profile.svg";
import { ThumbnailBox } from "./chatComponentStyle";

// ─── List Body ───────────────────────────────────────────────────────────────

const ListBody = styled.div`
  background: ${colors.bgCard};
  border-radius: 0 0 ${radius.card} ${radius.card};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  flex-shrink: 0;
`;

const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  overflow-y: auto;
`;

// ─── Room Item ───────────────────────────────────────────────────────────────

const RoomItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: ${radius.input};
  cursor: pointer;
  background: ${({ $isActive }) =>
    $isActive ? colors.bgSection : "transparent"};
  border: ${({ $isActive }) =>
    $isActive ? `2px solid ${colors.primary}` : "2px solid transparent"};
  transition: background 0.15s;

  &:hover {
    background: ${colors.bgSection};
  }
`;

const RoomLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;


const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RoomName = styled.p`
  ${h10Bold}
  color: ${colors.textMain};
  margin: 0;
  white-space: nowrap;
`;

const LiveBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LiveDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colors.live};
  flex-shrink: 0;
`;

const LiveText = styled.p`
  ${h11Bold}
  color: ${colors.live};
  margin: 0;
`;

const CountText = styled.p`
  ${h11Regular}
  color: ${colors.textSub};
  margin: 0;
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
`;

// ─── Tab Buttons ─────────────────────────────────────────────────────────────

const TabGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

const TabBtn = styled.button`
  background: ${({ $isActive }) =>
    $isActive ? colors.primary : colors.bgCard};
  border: 1px solid ${colors.primary};
  border-radius: ${radius.sm};
  padding: 6px 16px;
  ${h11Bold}
  color: ${({ $isActive }) => ($isActive ? colors.textWhite : colors.primary)};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition:
    background 0.15s,
    color 0.15s;
`;

// ─── Default Data ─────────────────────────────────────────────────────────────

const defaultRooms = [
  { id: 1, name: "수어 학습 질문방", count: 84, isLive: true },
  { id: 2, name: "수어 학습 질문방", count: 0, isLive: true },
  { id: 3, name: "수어 학습 질문방", count: 0, isLive: true },
  { id: 4, name: "수어 학습 질문방", count: 0, isLive: true },
  { id: 5, name: "수어 학습 질문방", count: 0, isLive: true },
];

const TABS = [
  { key: "all", label: "모든 채팅방" },
  { key: "chatting", label: "채팅중인 방" },
  { key: "request", label: "요청" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const SideChatListComponent = ({
  rooms = defaultRooms,
  onRoomClick,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRoomId, setSelectedRoomId] = useState(rooms[0]?.id ?? null);

  const handleRoomClick = (room) => {
    setSelectedRoomId(room.id);
    onRoomClick?.(room);
  };

  return (
    <ListBody>
      <RoomList>
        {rooms.map((room) => (
          <RoomItem
            key={room.id}
            $isActive={room.id === selectedRoomId}
            onClick={() => handleRoomClick(room)}
          >
            <RoomLeft>
              <ThumbnailBox
                src={room.thumbnail || chatDefaultProfile}
                alt={room.name}
              />
              <RoomInfo>
                <RoomName>{room.name}</RoomName>
                {room.isLive && (
                  <LiveBadge>
                    <LiveDot />
                    <LiveText>라이브</LiveText>
                  </LiveBadge>
                )}
              </RoomInfo>
            </RoomLeft>
            <CountText>{room.count}명</CountText>
          </RoomItem>
        ))}
      </RoomList>

      <TabGroup>
        {TABS.map((tab) => (
          <TabBtn
            key={tab.key}
            $isActive={tab.key === activeTab}
            onClick={() => {
              setActiveTab(tab.key);
              onTabChange?.(tab.key);
            }}
          >
            {tab.label}
          </TabBtn>
        ))}
      </TabGroup>
    </ListBody>
  );
};

export default SideChatListComponent;
