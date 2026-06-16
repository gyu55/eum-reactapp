import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";
import MyPageStyle from "../style";

const COLLAPSED_COUNT = 15;
const PAGE_SIZE = 32;

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

  // React public 폴더 이미지 경로는 그대로 사용
  if (profileImage.startsWith("/assets/")) {
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
  const [currentPage, setCurrentPage] = useState(1);

  const maxFollowCount = Math.max(followingList.length, followerList.length);
  const needToggleButton = maxFollowCount > COLLAPSED_COUNT;
  const needPagination = isExpanded && maxFollowCount >= PAGE_SIZE;
  const pageCount = Math.ceil(maxFollowCount / PAGE_SIZE);

  // 팔로우는 16명 기준, 더보기 후 32명 이상이면 페이지네이션으로 보여줍니다.
  const getVisibleUsers = (list) => {
    if (!isExpanded) {
      return list.slice(0, COLLAPSED_COUNT);
    }

    if (!needPagination) {
      return list;
    }

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return list.slice(startIndex, startIndex + PAGE_SIZE);
  };

  const visibleFollowingUsers = getVisibleUsers(followingList);
  const visibleFollowerUsers = getVisibleUsers(followerList);

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
    setCurrentPage(1);
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

        {needPagination && (
          <S.PaginationArea>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
              <S.PageButton
                key={page}
                type="button"
                $active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </S.PageButton>
            ))}
          </S.PaginationArea>
        )}

        {needToggleButton && (
          <S.MoreButton type="button" onClick={handleToggleClick}>
            {isExpanded ? "접기" : "더 보기"} <span>{isExpanded ? "↑" : "→"}</span>
          </S.MoreButton>
        )}
      </S.FollowWrapper>
    </S.Section>
  );
};

export default FollowList;