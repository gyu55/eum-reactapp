import React from "react";
import { Link } from "react-router-dom";
import S from "../communityStyle";
import T from "../communityTextStyle";
import LiveChatCard from "../chat/chatComponents/LiveChatCard";
import PostListSection from "./postComponents/PostListSection.jsx";
import styled from "styled-components";
import { flexCenterRow, flexStartRow, h11Bold } from "../../../styles/common";
import theme from "../../../styles/theme";
import { useChatContext } from "../context/ChatContext";

// TODO: API 연결 시 서버에서 받아온 데이터로 교체 (메인 노출용 추천 채팅방 3개)
const MOCK_FEATURED_ROOMS = [
  {
    id: 1,
    title: "수어 학습 질문방",
    description: "수어 학습 중 궁금한 점을 함께 해결해요. 초보자도 편하게!",
    participantCount: 24,
  },
  {
    id: 2,
    title: "일상 수어 대화방",
    description: "일상적인 수어 표현을 자유롭게 연습하는 공간이에요.",
    participantCount: 15,
  },
  {
    id: 3,
    title: "수어 기초반",
    description: "수어를 처음 배우는 분들을 위한 입문 대화방입니다.",
    participantCount: 8,
  },
];

// 배치 하는 스타일 정의
// 상단 헤더
const HeaderBlock = styled.div`
  ${flexCenterRow}
  width: 100%;
  justify-content: space-between;
`;

// 중간 채팅방 나열
const LiveChatRow = styled.div`
  ${flexCenterRow}
  width: 100%;
  justify-content: space-between;
`;

// 포스트 헤더
const PostHeader = styled.div`
  ${flexStartRow}
  width: 100%;
  justify-content: start;
`;

// 카테고리 및 글쓰기 버튼
const PostCategoryHeader = styled.div`
  ${flexCenterRow}
  width: 100%;
  justify-content: space-between;
`;

// 카테고리
const PostCategoryRow = styled.div`
  ${flexCenterRow}
  gap: 8px;
`;

// 모두 이동 링크 버튼 스타일
const AllChatButton = styled.div`
  ${h11Bold}
  color: ${theme.PALETTE.primary.main};
  width: 100%;
  display: flex;
  justify-content: center;
`;

// 컴포넌트
const CommunityPostContainer = () => {
  const { openChatRoom } = useChatContext();

  console.log("메인 영역 그려지기");
  return (
    <div>
      {/* <CommunityPostComponent /> */}
      <S.ColumnBlock>
        {/* 상단 헤더 */}
        <HeaderBlock>
          {/* 제목 */}
          <T.H6Bold>실시간 채팅방</T.H6Bold>

          {/* 글쓰기 버튼 */}
          <S.ActionBtn $type="submit">+채팅방 만들기</S.ActionBtn>
        </HeaderBlock>
        {/* 채팅방 */}
        <LiveChatRow>
          {MOCK_FEATURED_ROOMS.map((room) => (
            <LiveChatCard
              key={room.id}
              title={room.title}
              description={room.description}
              participantCount={room.participantCount}
              onJoin={() => openChatRoom(room)}
            />
          ))}
        </LiveChatRow>

        {/* 채팅방 모두 보기 버튼 */}
        <AllChatButton>
          <Link to={"/community/chat"}>전체 보기 →</Link>
        </AllChatButton>

        {/* 포스트 영역 헤더 */}
        <PostHeader>
          <T.H7Bold>게시글</T.H7Bold>
        </PostHeader>

        {/* 카테고리 및 글쓰기 버튼 */}
        <PostCategoryHeader>
          {/* 카테고리 */}
          <PostCategoryRow>
            <S.CategoryPill>카테고리</S.CategoryPill>
            <S.CategoryPill>카테고리</S.CategoryPill>
            <S.CategoryPill>카테고리</S.CategoryPill>
            <S.CategoryPill>카테고리</S.CategoryPill>
            <S.CategoryPill>카테고리</S.CategoryPill>
          </PostCategoryRow>
          <S.ActionBtn $type="submit">글쓰기</S.ActionBtn>

          {/* 글쓰기 */}
        </PostCategoryHeader>

        {/* 포스트 카드 목록 + 페이지네이션 */}
        <PostListSection />
      </S.ColumnBlock>
    </div>
  );
};

export default CommunityPostContainer;
