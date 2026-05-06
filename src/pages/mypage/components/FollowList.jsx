import React from "react";
import styled from "styled-components";
import Card from "./Card";
import theme from "../../../styles/theme";

const { GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

/* 섹션 */
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: ${FONT_SIZE.h9};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 카드 */
const Wrapper = styled(Card)`
  width: 984px;
  min-height: 266px;
  padding: 21px 28px 24px;
`;

const FollowHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const FollowTitle = styled.span`
  font-size: 13px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

const CountBadge = styled.span`
  width: 24px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background: ${GRAYSCALE[10]};

  font-size: 11px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${GRAYSCALE[9]};
`;

const UserList = styled.div`
  margin-top: 9px;
  display: flex;
  gap: 12px;
`;

const UserItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.div`
  width: 42px;
  height: 43px;

  border-radius: 10px;
  background: ${GRAYSCALE[2]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserName = styled.span`
  margin-top: 6px;

  font-size: ${FONT_SIZE.h12};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${GRAYSCALE[9]};
  white-space: nowrap;
`;

const Divider = styled.div`
  height: 1px;
  margin-top: 6px;
  background: #f3f4f6;
`;

const FollowerBlock = styled.div`
  margin-top: 12px;
`;

const MoreButton = styled.button`
  margin: 36px auto 0;

  display: flex;
  align-items: center;
  gap: 4px;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: #555555;
`;

/*
 팔로잉/팔로워 목록, 프로필 이미지는 백엔드 유저 API 연동 필요
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

      <Wrapper>
        <FollowHeader>
          <FollowTitle>팔로잉</FollowTitle>
          <CountBadge>{followingUsers.length}</CountBadge>
        </FollowHeader>

        <UserList>
          {followingUsers.map((name) => (
            <UserItem key={name}>
              <Avatar />
              <UserName>{name}</UserName>
            </UserItem>
          ))}
        </UserList>

        <Divider />

        <FollowerBlock>
          <FollowHeader>
            <FollowTitle>팔로워</FollowTitle>
            <CountBadge>{followerUsers.length}</CountBadge>
          </FollowHeader>

          <UserList>
            {followerUsers.map((name) => (
              <UserItem key={name}>
                <Avatar />
                <UserName>{name}</UserName>
              </UserItem>
            ))}
          </UserList>
        </FollowerBlock>

        <MoreButton>
          더 보기 <span>→</span>
        </MoreButton>
      </Wrapper>
    </Section>
  );
};

export default FollowList;