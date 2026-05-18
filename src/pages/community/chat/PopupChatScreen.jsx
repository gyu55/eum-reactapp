import React, { useState, useEffect, useRef, useCallback } from "react";
import { colors } from "../constants";
import S from "./ChatStyle";
import PopupChatHeader from "./popupChat/PopupChatHeader";
import PopupParticipantList from "./popupChat/PopupParticipantList";
import PopupChatCenter from "./popupChat/PopupChatCenter";
import PopupRoomInfoPanel from "./popupChat/PopupRoomInfoPanel";
import PopupUserInfoPanel from "./popupChat/PopupUserInfoPanel";
import { useChatContext } from "../context/ChatContext";
import useAuthStore from "../../../store/authStore";
import { getChatMessages } from "../communityApi/chatApi";

const WS_BASE = "ws://localhost:10000/ws/chat";

const USERS = [
  {
    id: 1,
    name: "이규학",
    role: "학습자",
    level: 7,
    avatar:
      "https://www.figma.com/api/mcp/asset/08386982-c82d-42f5-af37-598a6fd8785a",
    iconProfile: true,
    online: false,
  },
  {
    id: 2,
    name: "사용자 2",
    role: "학습자",
    level: 5,
    avatar:
      "https://www.figma.com/api/mcp/asset/83e9a63d-b47c-449f-b99b-fcf322b5e2bd",
    iconProfile: false,
    online: true,
  },
  {
    id: 3,
    name: "사용자 3",
    role: "학습자",
    level: 7,
    avatar:
      "https://www.figma.com/api/mcp/asset/cc784c94-994e-4a8f-91f1-23642503d8d9",
    iconProfile: false,
    online: true,
  },
  {
    id: 4,
    name: "사용자 4",
    role: "학습자",
    level: 7,
    avatar:
      "https://www.figma.com/api/mcp/asset/ba8e3192-8c1a-4388-baa8-a512da31e094",
    iconProfile: false,
    online: true,
  },
  {
    id: 5,
    name: "사용자 5",
    role: "학습자",
    level: 8,
    avatar:
      "https://www.figma.com/api/mcp/asset/6d0896e4-c001-4785-806b-e2b3e7943f21",
    iconProfile: false,
    online: true,
  },
  {
    id: 6,
    name: "사용자 6",
    role: "학습자",
    level: 7,
    avatar:
      "https://www.figma.com/api/mcp/asset/08386982-c82d-42f5-af37-598a6fd8785a",
    iconProfile: true,
    online: false,
  },
];

const TAGS = [
  { label: "#수어기초", bg: colors.primaryLight, color: colors.primary },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#일상회화", bg: colors.liveBg, color: colors.live },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#질문환영", bg: "#fff3e8", color: "#ff8004" },
  { label: "#초보환영", bg: "#e1beec", color: "#b63fde" },
];

const formatTime = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

let wsMessageSeq = 0;
const makeWsMessageId = (msg) =>
  `ws-${msg.userId}-${msg.chatCreateAt}-${++wsMessageSeq}`;

const toDisplayMessage = (msg, currentUserId) => ({
  id: msg.id ?? makeWsMessageId(msg),
  type: msg.userId === currentUserId ? "mine" : "other",
  sender: msg.userNickname ?? `사용자 ${msg.userId}`,
  avatar: msg.userProfile ?? "",
  content: msg.chatContent,
  time: formatTime(msg.chatCreateAt),
});

const PopupChatScreen = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const { activeChatRoom } = useChatContext();
  const { user } = useAuthStore();
  const wsRef = useRef(null);

  const chatRoomId = activeChatRoom?.id;
  const currentUserId = user?.id;

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
          setMessages((prev) => [...prev, toDisplayMessage(msg, currentUserId)]);
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

  const handleSendMessage = useCallback(
    (content) => {
      const text = content.trim();
      if (!text || !chatRoomId) return;
      const ws = wsRef.current;
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        console.warn("WebSocket이 아직 연결되지 않았습니다.");
        return;
      }
      ws.send(JSON.stringify({ chatContent: text, chatType: "텍스트" }));
    },
    [chatRoomId],
  );

  const handleUserClick = (user) => {
    setSelectedUser((prev) => (prev?.id === user.id ? null : user));
  };

  return (
    <S.PageBg>
      <S.Popup>
        <PopupChatHeader />
        <S.Body>
          <PopupParticipantList
            users={USERS}
            selectedUserId={selectedUser?.id}
            onUserClick={handleUserClick}
          />
          <PopupChatCenter
            messages={messages}
            onSendMessage={handleSendMessage}
          />
          <S.RightPanel>
            {selectedUser ? (
              <PopupUserInfoPanel
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
              />
            ) : (
              <PopupRoomInfoPanel tags={TAGS} />
            )}
          </S.RightPanel>
        </S.Body>
      </S.Popup>
    </S.PageBg>
  );
};

export default PopupChatScreen;