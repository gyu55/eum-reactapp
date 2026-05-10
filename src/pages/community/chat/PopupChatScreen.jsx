import React, { useState } from "react";
import { colors } from "../constants";
import { PageBg, Popup, Body, RightPanel } from "./ChatStyle";
import PopupChatHeader from "./popupChat/PopupChatHeader";
import PopupParticipantList from "./popupChat/PopupParticipantList";
import PopupChatCenter from "./popupChat/PopupChatCenter";
import PopupRoomInfoPanel from "./popupChat/PopupRoomInfoPanel";
import PopupUserInfoPanel from "./popupChat/PopupUserInfoPanel";

// Figma asset URLs (expires in 7 days)
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

const MESSAGES = [
  {
    id: 1,
    type: "other",
    sender: "상대방",
    avatar:
      "https://www.figma.com/api/mcp/asset/047eac11-c15a-4d40-bf4b-3c6cc159b4de",
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 2,
    type: "other",
    sender: "상대방",
    avatar:
      "https://www.figma.com/api/mcp/asset/f2fad4c6-fd43-4ef4-8d70-4cf117c31970",
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 3,
    type: "other",
    sender: "상대방",
    avatar:
      "https://www.figma.com/api/mcp/asset/047eac11-c15a-4d40-bf4b-3c6cc159b4de",
    content:
      "여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지",
    time: "14:02",
  },
  {
    id: 4,
    type: "mine",
    content: "안녕하세요! 오늘도 열공해요 💪",
    time: "15:00",
  },
  {
    id: 5,
    type: "other",
    sender: "상대방",
    avatar:
      "https://www.figma.com/api/mcp/asset/f2fad4c6-fd43-4ef4-8d70-4cf117c31970",
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 6,
    type: "mine",
    content:
      "안녕하세요! 오늘도 열공해요 💪안녕하세요! 오늘도 열공해안녕하세요! 오늘도 열공해",
    time: "15:00",
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

const PopupChatScreen = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser((prev) => (prev?.id === user.id ? null : user));
  };

  return (
    <PageBg>
      <Popup>
        <PopupChatHeader />
        <Body>
          <PopupParticipantList
            users={USERS}
            selectedUserId={selectedUser?.id}
            onUserClick={handleUserClick}
          />
          <PopupChatCenter messages={MESSAGES} />
          <RightPanel>
            {selectedUser ? (
              <PopupUserInfoPanel
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
              />
            ) : (
              <PopupRoomInfoPanel tags={TAGS} />
            )}
          </RightPanel>
        </Body>
      </Popup>
    </PageBg>
  );
};

export default PopupChatScreen;
