const ROOT_URL = "http://localhost:10000/api";

export const getChatRooms = async (page = 1) => {
  const response = await fetch(`${ROOT_URL}/chats/rooms?page=${page}`);
  if (!response.ok) throw new Error("채팅방 목록을 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

export const getChatMessages = async (chatRoomId) => {
  const response = await fetch(`${ROOT_URL}/chats/${chatRoomId}`);
  if (!response.ok) throw new Error("채팅 메시지를 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

export const getChatRoomUsers = async (chatRoomId) => {
  const response = await fetch(`${ROOT_URL}/chat-rooms/${chatRoomId}/users`);
  if (!response.ok) throw new Error("채팅 참여 유저를 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

export const getChatRoomInfo = async (chatRoomId) => {
  const response = await fetch(`${ROOT_URL}/chat-rooms/${chatRoomId}`);
  if (!response.ok) throw new Error("채팅방 정보를 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};

export const getJoinedChatRooms = async (page = 1) => {
  const response = await fetch(`${ROOT_URL}/chat-rooms/joined?page=${page}`);
  if (!response.ok) throw new Error("참여중인 채팅방 목록을 불러오는 데 실패했습니다.");
  const { data } = await response.json();
  return data;
};
