import React from "react";
import {
  SelectRightPanel,
  PanelHeader,
  PanelLabel,
  SelectCountBadge,
  Divider,
  OngoingRoomList,
  OngoingRoomItem,
  OngoingProfileBox,
  OngoingRoomInfo,
  OngoingRoomTopRow,
  OngoingRoomNameRow,
  OngoingRoomName,
  OngoingRoomCount,
  OngoingLastTime,
  OngoingLastMsg,
} from "../ChatStyle";
import useJoinedChatRoomList from "../hooks/useJoinedChatRoomList";
import { useChatContext } from "../../context/ChatContext";

const S = {
  SelectRightPanel,
  PanelHeader,
  PanelLabel,
  SelectCountBadge,
  Divider,
  OngoingRoomList,
  OngoingRoomItem,
  OngoingProfileBox,
  OngoingRoomInfo,
  OngoingRoomTopRow,
  OngoingRoomNameRow,
  OngoingRoomName,
  OngoingRoomCount,
  OngoingLastTime,
  OngoingLastMsg,
};

const SelectOngoingPanel = () => {
  const { rooms, isLoading, hasMore, loaderRef } = useJoinedChatRoomList();
  const { selectRoom } = useChatContext();

  return (
    <S.SelectRightPanel>
      <S.PanelHeader>
        <S.PanelLabel>진행중인 채팅방</S.PanelLabel>
        <S.SelectCountBadge>{rooms.length}</S.SelectCountBadge>
      </S.PanelHeader>
      <S.Divider />
      <S.OngoingRoomList>
        {isLoading && rooms.length === 0 ? (
          <div style={{ padding: "12px", textAlign: "center", fontSize: "12px" }}>
            불러오는 중...
          </div>
        ) : !isLoading && rooms.length === 0 ? (
          <div style={{ padding: "12px", textAlign: "center", fontSize: "12px" }}>
            진행중인 채팅방이 없습니다.
          </div>
        ) : (
          <>
            {rooms.map((room) => (
              <S.OngoingRoomItem key={room.id} onClick={() => selectRoom(room)}>
                <S.OngoingProfileBox />
                <S.OngoingRoomInfo>
                  <S.OngoingRoomTopRow>
                    <S.OngoingRoomNameRow>
                      <S.OngoingRoomName>{room.chatRoomName}</S.OngoingRoomName>
                      <S.OngoingRoomCount>{room.chatRoomUsers}명</S.OngoingRoomCount>
                    </S.OngoingRoomNameRow>
                    <S.OngoingLastTime>{room.time}</S.OngoingLastTime>
                  </S.OngoingRoomTopRow>
                  <S.OngoingLastMsg>{room.chatRoomDetail}</S.OngoingLastMsg>
                </S.OngoingRoomInfo>
              </S.OngoingRoomItem>
            ))}
            {hasMore && (
              <div
                ref={loaderRef}
                style={{ padding: "8px", textAlign: "center", fontSize: "12px" }}
              >
                {isLoading ? "불러오는 중..." : ""}
              </div>
            )}
          </>
        )}
      </S.OngoingRoomList>
    </S.SelectRightPanel>
  );
};

export default SelectOngoingPanel;
