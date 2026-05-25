import React, { useState, useEffect } from "react";
import { colors } from "../../constants";
import { PageBg, Popup, Body, RightPanel } from "../ChatStyle";
import PopupChatHeader from "./header/PopupChatHeader";
import PopupParticipantList from "./listPanel/PopupParticipantList";
import PopupChatCenter from "./centerBody/PopupChatCenter";
import PopupRoomInfoPanel from "./infoPanel/PopupRoomInfoPanel";
import PopupUserInfoPanel from "./infoPanel/PopupUserInfoPanel";
import { useChatContext } from "../../context/ChatContext";
import { getChatRoomUsers, getChatRoomInfo } from "../../communityApi/chatApi";

const S = {
  PageBg,
  Popup,
  Body,
  RightPanel,
};

const toDisplayUser = (userDTO) => ({
  email: userDTO.userEmail,
  id: userDTO.id,
  name: userDTO.userNickname,
  role: "학습자",
  level: Math.max(1, Math.floor(userDTO.userExp / 100)),
  avatar: userDTO.userProfile,
  iconProfile: false,
  online: false,
});

const TAGS = [
  { label: "#수어기초", bg: colors.primaryLight, color: colors.primary },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#일상회화", bg: colors.liveBg, color: colors.live },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#질문환영", bg: "#fff3e8", color: "#ff8004" },
  { label: "#초보환영", bg: "#e1beec", color: "#b63fde" },
];

// 메인 에서 채팅방 카드 클릭 시 뜨는 팝업 채팅창 (채팅방)
const PopupChatScreen = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [chatRoomInfo, setChatRoomInfo] = useState(null);
  // 프로바이더 에서 현재 사용자가 선택 한 방 정보 불러온 뒤에 채팅방 아이디 할당
  const { chatRoomDTO } = useChatContext();
  const chatRoomId = chatRoomDTO?.id;

  // 채팅방 정보 불러오기
  useEffect(() => {
    if (!chatRoomId) return;
    getChatRoomInfo(chatRoomId)
      .then(setChatRoomInfo)
      .catch((err) => console.error("채팅방 정보 불러오기 실패:", err));
  }, [chatRoomId]);

  // 채팅방 내 참여 유저들 불러오기
  useEffect(() => {
    if (!chatRoomId) return;
    getChatRoomUsers(chatRoomId)
      .then((data) => setUsers(data.map(toDisplayUser)))
      .catch((err) => console.error("유저 목록 불러오기 실패:", err));
  }, [chatRoomId]);

  const handleUserClick = (user) => {
    setSelectedUser((prev) => (prev?.email === user.email ? null : user));
  };

  return (
    <S.PageBg>
      <S.Popup>
        <PopupChatHeader chatRoomInfo={chatRoomInfo} />
        <S.Body>
          {/* 왼쪽 판넬 (참여 유저 목록) */}
          <PopupParticipantList
            users={users}
            selectedUserEmail={selectedUser?.email}
            onUserClick={handleUserClick}
          />
          {/* 채팅 메세지 나열되는 곳 */}
          <PopupChatCenter chatRoomId={chatRoomId} key={chatRoomId} />
          <S.RightPanel>
            {selectedUser ? (
              <PopupUserInfoPanel
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
              />
            ) : (
              <PopupRoomInfoPanel chatRoomInfo={chatRoomInfo} tags={TAGS} />
            )}
          </S.RightPanel>
        </S.Body>
      </S.Popup>
    </S.PageBg>
  );
};

export default PopupChatScreen;
