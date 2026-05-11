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
  팔로잉, 팔로워 목록은 유저 API 연동 필요
*/
const followingUsers = [
  "이음선생",
  "수어마스터",
  "영상마이스",
  "취준생최고",
  "별빛나리",
  "독서왕김민",
  "모두보살펴",
  "수어꿈나무",
  "입문자박지",
  "아이디어맨",
  "음악수어러",
  "불날학습자",
];

const followerUsers = [
  "새싹학습자",
  "알림이",
  "드림보기",
  "나비처럼",
  "달빛학습",
  "햇살가득",
  "파도타기",
  "여우수어",
];

const FollowList = () => {
  return (
    <Section>
      <SectionTitle>팔로우</SectionTitle>

      <FollowWrapper>
        <FollowHeader>
          <FollowTitle>팔로잉</FollowTitle>
          <CountBadge>{followingUsers.length}</CountBadge>
        </FollowHeader>

        <UserList>
          {followingUsers.map((name) => (
            <UserItem key={name}>
              <Avatar />
              <FollowUserName>{name}</FollowUserName>
            </UserItem>
          ))}
        </UserList>

        <FollowDivider />

        <FollowerBlock>
          <FollowHeader>
            <FollowTitle>팔로워</FollowTitle>
            <CountBadge>{followerUsers.length}</CountBadge>
          </FollowHeader>

          <UserList>
            {followerUsers.map((name) => (
              <UserItem key={name}>
                <Avatar />
                <FollowUserName>{name}</FollowUserName>
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