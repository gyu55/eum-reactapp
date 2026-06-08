import React, { useState, useEffect } from "react";
import { colors } from "../../constants";
import { Popup, Body, RightPanel } from "../ChatStyle";
import PopupChatHeader from "./header/PopupChatHeader";
import PopupParticipantList from "./listPanel/PopupParticipantList";
import PopupChatCenter from "./centerBody/PopupChatCenter";
import PopupRoomInfoPanel from "./infoPanel/PopupRoomInfoPanel";
import UserInfoMiniPopup from "./infoPanel/UserInfoMiniPopup";
import { useChatContext } from "../../context/ChatContext";
import { getChatRoomUsers, getChatRoomInfo } from "../../communityApi/chatApi";

const S = {
  Popup,
  Body,
  RightPanel,
};

// const toDisplayUser = (userDTO) => ({
//   email: userDTO.userEmail,
//   id: userDTO.id,
//   name: userDTO.userNickname,
//   role: "학습자",
//   level: Math.max(1, Math.floor(userDTO.userExp / 100)),
//   avatar: userDTO.userProfile,
//   iconProfile: false,
//   online: false,
// });

const TAGS = [
  { label: "#수어기초", bg: colors.primaryLight, color: colors.primary },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#일상회화", bg: colors.liveBg, color: colors.live },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#질문환영", bg: "#fff3e8", color: "#ff8004" },
  { label: "#초보환영", bg: "#e1beec", color: "#b63fde" },
];

// 메인 에서 채팅방 카드 클릭 시 뜨는 팝업 채팅창 (채팅방)
// 가지고 오는 것: 해당 채팅방 아이디
const PopupChatScreen = ({ onDragMouseDown }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [chatRoomInfo, setChatRoomInfo] = useState(null);
  // 프로바이더 에서 현재 사용자가 선택 한 방 정보 불러온 뒤에 채팅방 아이디 할당
  const { chatRoomDTO, chatRoomInfoRefreshKey } = useChatContext();
  const chatRoomId = chatRoomDTO?.id;

  // 채팅방 정보 불러오기 (수정 완료 후 chatRoomInfoRefreshKey 증가 시 재조회)
  useEffect(() => {
    if (!chatRoomId) return;
    getChatRoomInfo(chatRoomId)
      .then(setChatRoomInfo)
      .catch((err) => console.error("채팅방 정보 불러오기 실패:", err));
  }, [chatRoomId, chatRoomInfoRefreshKey]);

  // 채팅방 내 참여 유저들 불러오기
  useEffect(() => {
    if (!chatRoomId) return;
    getChatRoomUsers(chatRoomId)
      .then((data) => setUsers(data))
      .catch((err) => console.error("유저 목록 불러오기 실패:", err));
  }, [chatRoomId]);

  // 유저 선택, 선택 해제 로직
  const handleUserClick = (user) => {
    setSelectedUser((prev) => (prev?.id === user.id ? null : user));
  };

  return (
    <S.Popup>
      {/* 팝업 채팅방 헤더: 체팅방 정보 구조분해할당 전달 */}
        <PopupChatHeader onDragMouseDown={onDragMouseDown} {...chatRoomInfo} />
        <S.Body>
          {/* 왼쪽 판넬 (참여 유저 목록) */}
          <PopupParticipantList
            users={users}
            selectedUserId={selectedUser?.id}
            onUserClick={handleUserClick}
          />
          {/* 채팅 메세지 나열되는 곳 */}
          <PopupChatCenter chatRoomId={chatRoomId} key={chatRoomId} />

          {/* 오른쪽 정보 판넬 - 항상 채팅방 정보 표시 */}
          <S.RightPanel>
            <PopupRoomInfoPanel tags={TAGS} {...chatRoomInfo} />
          </S.RightPanel>
        </S.Body>

        {/* 유저 클릭 시 중앙 오버레이 팝업 */}
        {selectedUser && (
          <UserInfoMiniPopup
            {...selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
    </S.Popup>
  );
};

export default PopupChatScreen;
