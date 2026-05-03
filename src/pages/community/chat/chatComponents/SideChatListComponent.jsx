import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faExpand, faXmark, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { colors, fonts, radius, shadows } from "../../constants";

// ─── Panel ───────────────────────────────────────────────────────────────────

const ChatListPanel = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  border-radius: ${radius.card};
  box-shadow: ${shadows.float};
  overflow: hidden;
`;

// ─── Header ──────────────────────────────────────────────────────────────────

const Header = styled.div`
  background: ${colors.gradientMain};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  flex-shrink: 0;
`;

const TitleText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textWhite};
  margin: 0;
  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const HeaderBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.15);
  color: ${colors.textWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 10px;
  flex-shrink: 0;
`;

const CloseBtn = styled(HeaderBtn)`
  background: rgba(255, 80, 80, 0.5);
`;

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
  background: ${({ $isActive }) => ($isActive ? colors.bgSection : "transparent")};
  border: ${({ $isActive }) => ($isActive ? `2px solid ${colors.primary}` : "2px solid transparent")};
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

const ThumbnailBox = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: ${radius.input};
  background: ${colors.primaryLight};
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 4px 6px;
  box-sizing: border-box;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${radius.input};
  position: absolute;
  inset: 0;
`;

const RoomIconOverlay = styled.span`
  font-size: 12px;
  color: ${colors.primary};
  position: relative;
  z-index: 1;
`;

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RoomName = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
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
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.live};
  margin: 0;
`;

const CountText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
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
  background: ${({ $isActive }) => ($isActive ? colors.primary : colors.bgCard)};
  border: 1px solid ${colors.primary};
  border-radius: ${radius.sm};
  padding: 6px 16px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${({ $isActive }) => ($isActive ? colors.textWhite : colors.primary)};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.15s, color 0.15s;
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
  title = "전체 채팅 리스트",
  rooms = defaultRooms,
  onClose,
  onMinimize,
  onExpand,
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
    <ChatListPanel>
      <Header>
        <TitleText>{title}</TitleText>
        <ButtonGroup>
          <HeaderBtn onClick={onMinimize} aria-label="최소화">
            <FontAwesomeIcon icon={faMinus} />
          </HeaderBtn>
          <HeaderBtn onClick={onExpand} aria-label="확대">
            <FontAwesomeIcon icon={faExpand} />
          </HeaderBtn>
          <CloseBtn onClick={onClose} aria-label="닫기">
            <FontAwesomeIcon icon={faXmark} />
          </CloseBtn>
        </ButtonGroup>
      </Header>

      <ListBody>
        <RoomList>
          {rooms.map((room) => (
            <RoomItem
              key={room.id}
              $isActive={room.id === selectedRoomId}
              onClick={() => handleRoomClick(room)}
            >
              <RoomLeft>
                <ThumbnailBox>
                  {room.thumbnail && <ThumbnailImg src={room.thumbnail} alt={room.name} />}
                  <RoomIconOverlay>
                    <FontAwesomeIcon icon={faHandshake} />
                  </RoomIconOverlay>
                </ThumbnailBox>
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
    </ChatListPanel>
  );
};

export default SideChatListComponent;
