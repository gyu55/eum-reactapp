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
} from "../../ChatStyle";
import { PopupThumbnailBox } from "../../chatComponents/chatComponentStyle";
import defaultProfile from "../../../assets/chat/chat_default_profile.svg";

const S = {
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
};

const onlineDotUrl =
  "https://www.figma.com/api/mcp/asset/b33f6cd4-cc19-4c37-9250-813cb5dca21d";

const PopupParticipantList = ({ users, selectedUserEmail, onUserClick }) => (
  <S.LeftPanel>
    <S.ParticipantHeader>
      <S.ParticipantLabel>참여자</S.ParticipantLabel>
      <S.CountBadge>{users.length}</S.CountBadge>
    </S.ParticipantHeader>
    <S.Divider />
    <S.UserList>
      {users.map((user) => (
        <S.UserItem
          key={user.email ?? user.id}
          $selected={selectedUserEmail === user.email}
          onClick={() => onUserClick(user)}
        >
          <S.UserProfileRow>
            <S.AvatarWrap>
              <PopupThumbnailBox
                src={user.avatar || defaultProfile}
                alt={user.name}
                onError={(e) => {
                  e.target.src = defaultProfile;
                }}
              />
              {user.online && <S.OnlineDot src={onlineDotUrl} alt="" />}
            </S.AvatarWrap>
            <S.UserMeta>
              <S.UserNameText>{user.name}</S.UserNameText>
              <S.UserRoleText>{user.role}</S.UserRoleText>
            </S.UserMeta>
          </S.UserProfileRow>
          <S.LevelBadge>Lv.{user.level}</S.LevelBadge>
        </S.UserItem>
      ))}
    </S.UserList>
  </S.LeftPanel>
);

export default PopupParticipantList;
