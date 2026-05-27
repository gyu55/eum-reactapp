import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Section,
  SectionTitle,
  FollowWrapper,
  FollowHeader,
  FollowTitle,
  CountBadge,
  UserList,
  UserItem,
  Avatar,
  FollowUserName,
  FollowDivider,
  FollowerBlock,
  MoreButton,
} from "./style";

const DEFAULT_PROFILE_IMAGE = "/assets/images/default-profile.png";
const MAX_VISIBLE_USER_COUNT = 16;

const isDefaultProfile = (profileImage) => {
  return !profileImage || profileImage === "default.jpg" || profileImage === "null";
};

const getProfileImageSrc = (profileImage) => {
  if (isDefaultProfile(profileImage)) {
    return "";
  }

  if (profileImage.startsWith("http")) {
    return profileImage;
  }

  return `http://localhost:10000/private/api/file/display?fileName=${encodeURIComponent(profileImage)}`;
};

const FollowAvatar = ({ profileImage }) => {
  const imageSrc = getProfileImageSrc(profileImage);

  return (
    <Avatar>
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          draggable={false}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
    </Avatar>
  );
};

const FollowList = ({ followingList = [], followerList = [] }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleFollowingUsers = isExpanded
    ? followingList
    : followingList.slice(0, MAX_VISIBLE_USER_COUNT);

  const visibleFollowerUsers = isExpanded
    ? followerList
    : followerList.slice(0, MAX_VISIBLE_USER_COUNT);

  const needMoreButton =
    followingList.length > MAX_VISIBLE_USER_COUNT ||
    followerList.length > MAX_VISIBLE_USER_COUNT;

  const handleMoveUserProfile = (userId) => {
    navigate(`/community/profile/${userId}`);
  };

  return (
    <Section>
      <SectionTitle>팔로우</SectionTitle>

      <FollowWrapper>
        <FollowHeader>
          <FollowTitle>팔로잉</FollowTitle>
          <CountBadge>{followingList.length}</CountBadge>
        </FollowHeader>

        <UserList>
          {visibleFollowingUsers.map((user) => (
            <UserItem
              key={`following-${user.id}`}
              onClick={() => handleMoveUserProfile(user.id)}
              style={{ cursor: "pointer" }}
            >
              <FollowAvatar profileImage={user.userProfile} />
              <FollowUserName>{user.userNickname || user.userName}</FollowUserName>
            </UserItem>
          ))}
        </UserList>

        <FollowDivider />

        <FollowerBlock>
          <FollowHeader>
            <FollowTitle>팔로워</FollowTitle>
            <CountBadge>{followerList.length}</CountBadge>
          </FollowHeader>

          <UserList>
            {visibleFollowerUsers.map((user) => (
              <UserItem
                key={`follower-${user.id}`}
                onClick={() => handleMoveUserProfile(user.id)}
                style={{ cursor: "pointer" }}
              >
                <FollowAvatar profileImage={user.userProfile} />
                <FollowUserName>{user.userNickname || user.userName}</FollowUserName>
              </UserItem>
            ))}
          </UserList>
        </FollowerBlock>

        {!isExpanded && needMoreButton && (
          <MoreButton type="button" onClick={() => setIsExpanded(true)}>
            더 보기 <span>→</span>
          </MoreButton>
        )}
      </FollowWrapper>
    </Section>
  );
};

export default FollowList;