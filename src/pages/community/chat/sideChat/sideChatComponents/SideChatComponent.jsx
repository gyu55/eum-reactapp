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
  font-size: ${fonts.size.md};
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
  font-size: ${fonts.size.md};
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignBtn = styled.button`
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 8px 10px;
  font-size: 16px;
  cursor: pointer;
  flex-shrink: 0;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
  const [signLoading, setSignLoading] = useState(false);
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

  const handleSignSend = async () => {
    if (!inputValue.trim()) return;
    console.log("chatRoomId 확인:", chatRoomId);
    const original = inputValue.trim();
    setInputValue("");
    setSignLoading(true);
    try {
      const res = await fetch(`/private/chats/${chatRoomId}/sign-translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ text: original }),
      });
      const data = await res.json();
      // 번역 결과를 WebSocket으로 전송
      sendMessage(`${original}\n\n🤟 수어 표현\n${data.data.reply}`);
    } catch {
      sendMessage(original);
    } finally {
      setSignLoading(false);
    }
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
