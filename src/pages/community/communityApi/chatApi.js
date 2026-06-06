const ROOT_URL = "http://localhost:10000/api";
const PRIVATE_ROOT_URL = "http://localhost:10000/private";

// 채팅방 생성
export const insertChatRoom = async (chatRoomRequestDTO) => {
  const response = await fetch(`${ROOT_URL}/chat-rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(chatRoomRequestDTO),
  });
  if (!response.ok) throw new Error("채팅방 생성에 실패했습니다");
  const { data } = await response.json();
  return data;
};

// 채팅방 목록 불러오기
export const getChatRooms = async (page = 1, size = 6, keyword = "") => {
  const pageParams = new URLSearchParams({ page });
  const sizeParams = new URLSearchParams({ size });
  const keywordParams = new URLSearchParams({ keyword });
  const response = await fetch(
    `${ROOT_URL}/chats/rooms?${pageParams}&${sizeParams}&${keywordParams}`,
  );
  if (!response.ok) throw new Error("채팅방 목록을 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

// 채팅 메세지들 불러오기 (로그인 필요)
export const getChatMessages = async (chatRoomId) => {
  const response = await fetch(`${PRIVATE_ROOT_URL}/chats/${chatRoomId}`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("채팅 메시지를 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

// 채팅방 참여자들 불러오기
export const getChatRoomUsers = async (chatRoomId) => {
  const response = await fetch(`${ROOT_URL}/chat-rooms/${chatRoomId}/users`);
  if (!response.ok)
    throw new Error("채팅 참여 유저를 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

// 단일 채팅방 불러오는 api
export const getChatRoomInfo = async (chatRoomId) => {
  const response = await fetch(`${PRIVATE_ROOT_URL}/chat-rooms/${chatRoomId}`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("채팅방 정보를 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

// 현재 참여중인 채팅방 목록 불러오기
export const getJoinedChatRooms = async (page = 1) => {
  const response = await fetch(`${ROOT_URL}/chat-rooms/joined?page=${page}`);
  if (!response.ok)
    throw new Error("참여중인 채팅방 목록을 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

// 채팅방 정보 수정
export const updateChatRoom = async ({ id, ...chatRoomRequestDTO }) => {
  const response = await fetch(`${ROOT_URL}/chat-rooms/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(chatRoomRequestDTO),
  });
  if (!response.ok) throw new Error("채팅방 수정에 실패했습니다");
  const { data } = await response.json();
  return data;
};

// 채팅방 소프트 삭제
export const deleteChatRoom = async (chatRoomId) => {
  const response = await fetch(`${ROOT_URL}/chat-rooms/${chatRoomId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("채팅방 삭제에 실패했습니다");
};
