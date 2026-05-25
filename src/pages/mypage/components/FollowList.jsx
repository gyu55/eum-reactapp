import React from "react";

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

/*
  팔로잉, 팔로워 목록은 마이페이지 메인 API 연동
*/
const FollowList = ({ followingList = [], followerList = [] }) => {
  return (
    <Section>
      <SectionTitle>팔로우</SectionTitle>

      <FollowWrapper>
        {/* 팔로잉 */}
        <FollowHeader>
          <FollowTitle>팔로잉</FollowTitle>
          <CountBadge>{followingList.length}</CountBadge>
        </FollowHeader>

        <UserList>
          {followingList.map((user) => (
            <UserItem key={user.id}>
              <Avatar
                src={user.userProfile}
                alt="팔로잉 프로필"
              />

              <FollowUserName>
                {user.userNickname || "이름 없음"}
              </FollowUserName>
            </UserItem>
          ))}
        </UserList>

        <FollowDivider />

        {/* 팔로워 */}
        <FollowerBlock>
          <FollowHeader>
            <FollowTitle>팔로워</FollowTitle>
            <CountBadge>{followerList.length}</CountBadge>
          </FollowHeader>

          <UserList>
            {followerList.map((user) => (
              <UserItem key={user.id}>
                <Avatar
                  src={user.userProfile}
                  alt="팔로워 프로필"
                />

                <FollowUserName>
                  {user.userNickname || "이름 없음"}
                </FollowUserName>
              </UserItem>
            ))}
          </UserList>
        </FollowerBlock>

        <MoreButton>
          더 보기 <span>→</span>
        </MoreButton>
      </FollowWrapper>
    </Section>
  );
};

export default FollowList;