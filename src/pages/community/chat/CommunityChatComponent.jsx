import React, { useState, useEffect } from "react";
import LiveChatCard from "./chatComponents/LiveChatCard";
import { ColumnBlock, ActionBtn, RowBlock } from "../communityStyle";
import T from "../communityTextStyle";
import styled from "styled-components";
import { flexCenterRow } from "../../../styles/common";
import { useChatContext } from "../context/ChatContext";
import { getChatRooms } from "../communityApi/chatApi";

const HeaderBlock = styled.div`
  ${flexCenterRow}
  justify-content: space-between;
  width: 100%;
`;

const CommunityChatComponent = () => {
  const { openChatRoom } = useChatContext();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getChatRooms(1)
      .then((data) => setRooms(data.rooms))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ColumnBlock>
        <HeaderBlock>
          <T.H6Bold>실시간 채팅방</T.H6Bold>
          <ActionBtn $type="submit">+채팅방 만들기</ActionBtn>
        </HeaderBlock>

        <RowBlock flexWrap="wrap">
          {rooms.map((room) => (
            <LiveChatCard
              key={room.id}
              chatRoomName={room.chatRoomName}
              chatRoomDetail={room.chatRoomDetail}
              chatRoomUsers={room.chatRoomUsers}
              onJoin={() => openChatRoom(room)}
            />
          ))}
        </RowBlock>
      </ColumnBlock>
    </div>
  );
};

export default CommunityChatComponent;
