import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";
import MyPageStyle from "../style";

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

  return `http://localhost:10000/private/api/files/${encodeURIComponent(profileImage)}`;
};

const FollowAvatar = ({ profileImage }) => {
  const imageSrc = getProfileImageSrc(profileImage);

  return (
    <S.Avatar>
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
    </S.Avatar>
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

  const needToggleButton =
    followingList.length > MAX_VISIBLE_USER_COUNT ||
    followerList.length > MAX_VISIBLE_USER_COUNT;

  const handleMoveUserProfile = (userId) => {
    navigate(`/community/profile/${userId}`);
  };

  // 회원탈퇴 페이지로 이동
  const handleWithdrawClick = () => {
    navigate("/mypage/withdraw");
  };

  // 더보기 / 접기 상태 변경
  const handleToggleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <S.Section>
      <S.SectionTitle>팔로우</S.SectionTitle>

      <S.FollowWrapper>
        <S.FollowHeader>
          <S.FollowTitle>팔로잉</S.FollowTitle>
          <S.CountBadge>{followingList.length}</S.CountBadge>
        </S.FollowHeader>

        <S.UserList>
          {visibleFollowingUsers.map((user) => (
            <S.UserItem
              key={`following-${user.id}`}
              $clickable
              onClick={() => handleMoveUserProfile(user.id)}
            >
              <FollowAvatar profileImage={user.userProfile} />
              <S.FollowUserName>{user.userNickname || user.userName}</S.FollowUserName>
            </S.UserItem>
          ))}
        </S.UserList>

        <S.FollowDivider />

        <S.FollowerBlock>
          <S.FollowHeader>
            <S.FollowTitle>팔로워</S.FollowTitle>
            <S.CountBadge>{followerList.length}</S.CountBadge>
          </S.FollowHeader>

          <S.UserList>
            {visibleFollowerUsers.map((user) => (
              <S.UserItem
                key={`follower-${user.id}`}
                $clickable
                onClick={() => handleMoveUserProfile(user.id)}
              >
                <FollowAvatar profileImage={user.userProfile} />
                <S.FollowUserName>{user.userNickname || user.userName}</S.FollowUserName>
              </S.UserItem>
            ))}
          </S.UserList>
        </S.FollowerBlock>

        {needToggleButton && (
          <S.MoreButton type="button" onClick={handleToggleClick}>
            {isExpanded ? "접기" : "더보기"} <span>{isExpanded ? "↑" : "→"}</span>
          </S.MoreButton>
        )}
      </S.FollowWrapper>

      {/* 카드 바깥 오른쪽 하단 회원탈퇴 버튼 */}
      <S.FollowWithdrawArea>
        <MyPageStyle.WithdrawButton type="button" onClick={handleWithdrawClick}>
          회원 탈퇴
        </MyPageStyle.WithdrawButton>
      </S.FollowWithdrawArea>
    </S.Section>
  );
};

export default FollowList;