import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { colors, fonts, radius } from "../../constants";
import ChatMessage from "./ChatMessage";
import { getChatMessages } from "../../communityApi/chatApi";
import useAuthStore from "../../../../store/authStore";

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
  max-height: 380px;
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

const WS_BASE = "ws://localhost:10000/ws/chat";

let wsSeq = 0;
const makeWsMsgId = (msg) =>
  `ws-${msg.userId}-${msg.chatCreateAt}-${++wsSeq}`;

const formatTime = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const toDisplayMessage = (msg, currentUserId) => ({
  id: msg.id ?? makeWsMsgId(msg),
  isMine:
    msg.chatIsMe ?? (currentUserId != null && msg.userId === currentUserId),
  message: msg.chatContent,
  time: formatTime(msg.chatCreateAt),
  username: msg.userNickname ?? "사용자",
  profileImage: msg.userProfile ?? null,
});

// ─── Component ────────────────────────────────────────────────────────────────

const SideChatComponent = ({ chatRoomId, onViewAll }) => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null);
  const wsRef = useRef(null);
  const { user } = useAuthStore();
  const currentUserId = user?.id;

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!chatRoomId) return;

    let ws;
    let cancelled = false;

    const init = async () => {
      try {
        const data = await getChatMessages(chatRoomId);
        if (cancelled) return;
        const sorted = [...data].sort(
          (a, b) => new Date(a.chatCreateAt) - new Date(b.chatCreateAt),
        );
        setMessages(sorted.map((msg) => toDisplayMessage(msg, currentUserId)));
      } catch (err) {
        if (!cancelled) console.error("메시지 불러오기 실패:", err);
      }

      if (cancelled) return;

      ws = new WebSocket(`${WS_BASE}/${chatRoomId}`);
      wsRef.current = ws;

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          setMessages((prev) => [
            ...prev,
            toDisplayMessage(msg, currentUserId),
          ]);
        } catch (e) {
          console.error("WS 메시지 파싱 실패:", e);
        }
      };

      ws.onerror = (err) => console.error("WebSocket 오류:", err);
    };

    init();

    return () => {
      cancelled = true;
      ws?.close();
      wsRef.current = null;
    };
  }, [chatRoomId, currentUserId]);

  const handleSend = useCallback(() => {
    const text = inputValue.trim();
    if (!text || !chatRoomId) return;
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      console.warn("WebSocket이 아직 연결되지 않았습니다.");
      return;
    }
    ws.send(JSON.stringify({ chatContent: text, chatType: "텍스트" }));
    setInputValue("");
  }, [inputValue, chatRoomId]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <MessageList ref={messageListRef}>
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            isMine={msg.isMine}
            message={msg.message}
            time={msg.time}
            username={msg.username}
            profileImage={msg.profileImage}
          />
        ))}
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
    </>
  );
};

export default SideChatComponent;
