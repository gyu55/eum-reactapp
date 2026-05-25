import React from "react";
import styled from "styled-components";
import { colors, radius } from "../../../constants";
import { h10Bold, h11Bold, h11Regular } from "../../../../../styles/common";
import chatDefaultProfile from "../../../assets/chat/chat_default_profile.svg";
import { ThumbnailBox } from "../../chatComponents/chatComponentStyle";
import useChatRoomList from "../../hooks/useChatRoomList";
import { useChatContext } from "../../../context/ChatContext";
import { SIDE_TABS } from "../../chatComponents/sideChatTabs";

import defaultProfileImg from "../../../assets/chat/chat_default_profile.svg";

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
  height: 380px;
  overflow-y: auto;
`;

const LoaderRow = styled.div`
  padding: 8px 0;
  text-align: center;
  ${h11Regular}
  color: ${colors.textSub};
  flex-shrink: 0;
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

// ─── Component ────────────────────────────────────────────────────────────────

const SideChatListComponent = () => {
  const { listFilter, changeListFilter, selectRoom } = useChatContext();
  const { rooms, isLoading, hasMore, loaderRef } = useChatRoomList();

  return (
    <ListBody>
      <RoomList>
        {rooms.map((room) => (
          <RoomItem key={room.id} onClick={() => selectRoom(room)}>
            <RoomLeft>
              {/* 방 썸네일 */}
              <ThumbnailBox
                src={room.chatRoomProfile || chatDefaultProfile}
                alt={room.chatRoomName}
                onError={(e) => {
                  e.target.src = defaultProfileImg;
                }}
              />
              <RoomInfo>
                <RoomName>{room.chatRoomName}</RoomName>
                {room.isLive && (
                  <LiveBadge>
                    <LiveDot />
                    <LiveText>라이브</LiveText>
                  </LiveBadge>
                )}
              </RoomInfo>
            </RoomLeft>
            <CountText>{room.chatRoomUsers}명</CountText>
          </RoomItem>
        ))}
        {hasMore && (
          <LoaderRow ref={loaderRef}>
            {isLoading ? "불러오는 중..." : ""}
          </LoaderRow>
        )}
        {!hasMore && rooms.length === 0 && !isLoading && (
          <LoaderRow>채팅방이 없습니다.</LoaderRow>
        )}
      </RoomList>

      <TabGroup>
        {SIDE_TABS.map((tab) => (
          <TabBtn
            key={tab.key}
            $isActive={tab.key === listFilter}
            onClick={() => changeListFilter(tab.key)}
          >
            {tab.label}
          </TabBtn>
        ))}
      </TabGroup>
    </ListBody>
  );
};

export default SideChatListComponent;
