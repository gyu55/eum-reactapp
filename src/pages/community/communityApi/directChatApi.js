// 프론트에서 호출 방법

// POST /private/chat-rooms/direct
// Content-Type: application/json

// { "targetUserId": 5 }
// 응답:

// { "success": true, "message": "1:1 채팅방 준비 완료", "data": 42 }
// 이후 반환된 chatRoomId(42)로 기존 WebSocket(ws://localhost:10000/ws/chat/42)에 연결하면 됩니다.
const PRIVATE_ROOT_URL = "http://localhost:10000/private";

// 다이렉트 채팅방 생성
export const createDirectChatRoom = async () => {
  const response = await fetch(`${PRIVATE_ROOT_URL}/chat-rooms/direct`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("1:1 채팅방 생성 실패했습니다");
  const { success, message, data } = await response.json();
  return { success, message, data };
};
