import React from "react";
import {
  LeftPanel,
  ParticipantHeader,
  ParticipantLabel,
  CountBadge,
  Divider,
  UserList,
  UserItem,
  UserProfileRow,
  AvatarWrap,
  OnlineDot,
  UserMeta,
  UserNameText,
  UserRoleText,
  LevelBadge,
} from "../ChatStyle";
import { PopupThumbnailBox } from "../chatComponents/chatComponentStyle";
import defaultProfile from "../../assets/chat/chat_default_profile.svg";

const onlineDotUrl =
  "https://www.figma.com/api/mcp/asset/b33f6cd4-cc19-4c37-9250-813cb5dca21d";

const PopupParticipantList = ({ users, selectedUserId, onUserClick }) => (
  <LeftPanel>
    <ParticipantHeader>
      <ParticipantLabel>참여자</ParticipantLabel>
      <CountBadge>247</CountBadge>
    </ParticipantHeader>
    <Divider />
    <UserList>
      {users.map((user) => (
        <UserItem
          key={user.id}
          $selected={selectedUserId === user.id}
          onClick={() => onUserClick(user)}
        >
          <UserProfileRow>
            <AvatarWrap>
              <PopupThumbnailBox
                src={user.avatar || defaultProfile}
                alt={user.name}
                onError={(e) => {
                  e.target.src = defaultProfile;
                }}
              />
              {user.online && <OnlineDot src={onlineDotUrl} alt="" />}
            </AvatarWrap>
            <UserMeta>
              <UserNameText>{user.name}</UserNameText>
              <UserRoleText>{user.role}</UserRoleText>
            </UserMeta>
          </UserProfileRow>
          <LevelBadge>Lv.{user.level}</LevelBadge>
        </UserItem>
      ))}
    </UserList>
  </LeftPanel>
);

export default PopupParticipantList;
