import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ColumnBlock, ActionBtn, CategoryPill } from "../communityStyle";
import T from "../communityTextStyle";
import LiveChatCard from "../chat/chatComponents/LiveChatCard";
import PostListSection from "./postComponents/PostListSection.jsx";
import { useChatContext } from "../context/ChatContext";
import { POST_CATEGORIES } from "../constants";
import {
  HeaderBlock,
  LiveChatRow,
  PostHeader,
  PostCategoryHeader,
  PostCategoryRow,
  AllChatButton,
} from "./communityPostContainerStyle";

const S = {
  ColumnBlock,
  ActionBtn,
  CategoryPill,
  HeaderBlock,
  LiveChatRow,
  PostHeader,
  PostCategoryHeader,
  PostCategoryRow,
  AllChatButton,
};

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

// 컴포넌트
const CommunityPostContainer = () => {
  const { openChatRoom } = useChatContext();
  const [selectedTag, setSelectedTag] = useState("");

  console.log("메인 영역 그려지기");
  return (
    <div>
      {/* <CommunityPostComponent /> */}
      <S.ColumnBlock>
        {/* 상단 헤더 */}
        <S.HeaderBlock>
          {/* 제목 */}
          <T.H6Bold>실시간 채팅방</T.H6Bold>

          {/* 글쓰기 버튼 */}
          <S.ActionBtn $type="submit">+채팅방 만들기</S.ActionBtn>
        </S.HeaderBlock>
        {/* 채팅방 */}
        <S.LiveChatRow>
          {MOCK_FEATURED_ROOMS.map((room) => (
            <LiveChatCard
              key={room.id}
              title={room.title}
              description={room.description}
              participantCount={room.participantCount}
              onJoin={() => openChatRoom(room)}
            />
          ))}
        </S.LiveChatRow>

        {/* 채팅방 모두 보기 버튼 */}
        <S.AllChatButton>
          <Link to={"/community/chat"}>전체 보기 →</Link>
        </S.AllChatButton>

        {/* 포스트 영역 헤더 */}
        <S.PostHeader>
          <T.H7Bold>게시글</T.H7Bold>
        </S.PostHeader>

        {/* 카테고리 및 글쓰기 버튼 */}
        <S.PostCategoryHeader>
          {/* 카테고리 */}
          <S.PostCategoryRow>
            {POST_CATEGORIES.map(({ label, value }) => (
              <S.CategoryPill
                key={value}
                $active={selectedTag === value}
                onClick={() => setSelectedTag(value)}
              >
                {label}
              </S.CategoryPill>
            ))}
          </S.PostCategoryRow>
          <Link to="/community/post/write">
            <S.ActionBtn $type="submit">글쓰기</S.ActionBtn>
          </Link>

          {/* 글쓰기 */}
        </S.PostCategoryHeader>

        {/* 포스트 카드 목록 + 페이지네이션 */}
        <PostListSection postTag={selectedTag} />
      </S.ColumnBlock>
    </div>
  );
};

export default CommunityPostContainer;
