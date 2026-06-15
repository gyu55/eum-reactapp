import { useState, useRef, useEffect, useCallback } from "react";
import { getChatMessages } from "../../communityApi/chatApi";
import useAuthStore from "../../../../store/authStore";

const WS_BASE = "ws://localhost:10000/ws/chat";

let wsSeq = 0;
const makeWsMsgId = (msg) => `ws-${msg.userId}-${msg.chatCreateAt}-${++wsSeq}`;

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
  isMine: msg.chatIsMe ?? (currentUserId != null && msg.userId === currentUserId),
  content: msg.chatContent,
  chatType: msg.chatType ?? "텍스트",
  time: formatTime(msg.chatCreateAt),
  username: msg.userNickname ?? "사용자",
  profileImage: msg.userProfile ?? null,
  userId: msg.userId,
  userExp: msg.userExp ?? 0,
});

const useChatRoom = (chatRoomId) => {
  const [messages, setMessages] = useState([]);
  const wsRef = useRef(null);
  const { user } = useAuthStore();
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

  const sendMessage = useCallback(
    (content, retryCount = 0) => {
    const text = content.trim();
    if (!text || !chatRoomId) return;
    const ws = wsRef.current;

    if (!ws || ws.readyState !== WebSocket.OPEN) {
      if (retryCount < 20) {
        setTimeout(() => sendMessage(content, retryCount + 1), 500);
      } else {
        console.warn("WebSocket 연결 실패로 메시지 전송 불가");
      }
      return;
    }

    ws.send(JSON.stringify({ chatContent: text, chatType: "텍스트" }));
    }, [chatRoomId],
  );

  const sendImageMessage = useCallback(
    (imageUrl) => {
      const ws = wsRef.current;
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        console.warn("WebSocket이 아직 연결되지 않았습니다.");
        return;
      }
      ws.send(JSON.stringify({ chatContent: imageUrl, chatType: "IMAGE" }));
    },
    [],
  );

  const sendSignMessage = useCallback(
    (word) => {
      const ws = wsRef.current;
      if (!ws || ws.readyState !== WebSocket.OPEN) return;
      ws.send(JSON.stringify({
        chatContent: word,      // 단어 저장 (리로드 후 keypoints 재요청용)
        chatType: "수어",
      }));
    },
    [],
  );

  return { messages, sendMessage, sendImageMessage, sendSignMessage };
}

export default useChatRoom;