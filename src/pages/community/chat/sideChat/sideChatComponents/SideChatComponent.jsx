import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { colors, fonts, radius } from "../../../constants";
import ChatMessage from "../../chatComponents/ChatMessage";
import useChatRoom from "../../hooks/useChatRoom";
import UserInfoMiniPopup from "../../popupChat/infoPanel/UserInfoMiniPopup";

// ─── Body ────────────────────────────────────────────────────────────────────

const MessageList = styled.div`
  background: ${colors.bgSection};
  border-left: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  overflow-y: auto;
  /* max-height: 380px; */
  height: 380px;
  flex-shrink: 0;
`;

const InputArea = styled.div`
  background: ${colors.bgCard};
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  flex-shrink: 0;
`;

const TextInput = styled.input`
  flex: 1;
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 8px 10px;
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.textMain};
  outline: none;
  min-width: 0;

  &::placeholder {
    color: ${colors.textSub};
  }
`;

const SendBtn = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: ${radius.input};
  padding: 8px 10px;
  color: ${colors.textWhite};
  font-size: ${fonts.size.sm};
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  background: ${colors.primaryLight};
  padding: 11px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ViewAllText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.primary};
  margin: 0;
  cursor: pointer;
  text-align: center;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const SideChatComponent = ({ chatRoomId, onViewAll }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const messageListRef = useRef(null);
  const { messages, sendMessage } = useChatRoom(chatRoomId);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div style={{ position: "relative" }}>
      <MessageList ref={messageListRef}>
        {messages.map(
          ({
            id,
            isMine,
            content,
            chatType,
            time,
            username,
            profileImage,
            userId,
            userExp,
          }) => (
            <ChatMessage
              key={id}
              isMine={isMine}
              message={content}
              chatType={chatType}
              time={time}
              username={username}
              profileImage={profileImage}
              userId={userId}
              userExp={userExp}
              onProfileClick={setSelectedUser}
            />
          ),
        )}
      </MessageList>

      <InputArea>
        <TextInput
          placeholder="메시지 입력..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SendBtn onClick={handleSend} aria-label="전송">
          ➤
        </SendBtn>
      </InputArea>

      <Footer>
        <ViewAllText onClick={onViewAll}>채팅방 전체 보기 ↗</ViewAllText>
      </Footer>

      {selectedUser && (
        <UserInfoMiniPopup
          {...selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default SideChatComponent;
