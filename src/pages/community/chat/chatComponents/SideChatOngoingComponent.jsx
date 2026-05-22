import React from "react";
import styled from "styled-components";
import { colors, radius } from "../../constants";
import { h10Bold, h11Bold, h11Regular } from "../../../../styles/common";
import chatDefaultProfile from "../../assets/chat/chat_default_profile.svg";
import { ThumbnailBox } from "./chatComponentStyle";
import useJoinedChatRoomList from "../hooks/useJoinedChatRoomList";
import { useChatContext } from "../../context/ChatContext";
import { SIDE_TABS } from "./sideChatTabs";

// ─── Styles ───────────────────────────────────────────────────────────────────

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

const LoaderRow = styled.div`
  padding: 8px 0;
  text-align: center;
  ${h11Regular}
  color: ${colors.textSub};
  flex-shrink: 0;
`;

const RoomItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;

const RoomTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RoomName = styled.p`
  ${h10Bold}
  color: ${colors.textMain};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RoomTime = styled.p`
  ${h11Regular}
  color: ${colors.textSub};
  margin: 0;
  white-space: nowrap;
  flex-shrink: 0;
`;

const RoomLastMsg = styled.p`
  ${h11Regular}
  color: ${colors.textSub};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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

const SideChatOngoingComponent = () => {
  const { listFilter, changeListFilter, selectRoom } = useChatContext();
  const { rooms, isLoading, hasMore, loaderRef } = useJoinedChatRoomList();

  return (
    <ListBody>
      <RoomList>
        {isLoading && rooms.length === 0 ? (
          <LoaderRow>불러오는 중...</LoaderRow>
        ) : !isLoading && rooms.length === 0 ? (
          <LoaderRow>진행중인 채팅방이 없습니다.</LoaderRow>
        ) : (
          <>
            {rooms.map((room) => (
              <RoomItem key={room.id} onClick={() => selectRoom(room)}>
                <ThumbnailBox
                  src={room.chatRoomProfile || chatDefaultProfile}
                  alt={room.chatRoomName}
                  onError={(e) => {
                    e.target.src = chatDefaultProfile;
                  }}
                />
                <RoomInfo>
                  <RoomTopRow>
                    <RoomName>{room.chatRoomName}</RoomName>
                    <RoomTime>{room.time}</RoomTime>
                  </RoomTopRow>
                  <RoomLastMsg>{room.chatRoomDetail || `${room.chatRoomUsers}명`}</RoomLastMsg>
                </RoomInfo>
              </RoomItem>
            ))}
            {hasMore && (
              <LoaderRow ref={loaderRef}>
                {isLoading ? "불러오는 중..." : ""}
              </LoaderRow>
            )}
          </>
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

export default SideChatOngoingComponent;
