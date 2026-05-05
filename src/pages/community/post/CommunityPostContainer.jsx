import React from "react";
import CommunityPostComponent from "./CommunityPostComponent";
import { Link, Outlet } from "react-router-dom";
import PostDetailPage from "./detail/PostDetailPage";
import {
  ActionBtn,
  CategoryPill,
  ColumnBlock,
  flexStartColumn,
  RowBlock,
  RowSimpleBlock,
} from "../communityStyle";
import { H11Bold, H6Bold, H7Bold } from "../communityTextStyle";
import LiveChatCard from "../chat/chatComponents/LiveChatCard";
import PostListCard from "./postComponents/PostListCard.jsx";
import PostContent from "./detail/detailComponent/PostContent";
import styled from "styled-components";
import { flexCenterRow, flexStartRow, h11Bold } from "../../../styles/common";
import { colors } from "../constants";
import theme from "../../../styles/theme";

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
  console.log("메인 영역 그려지기");
  return (
    <div>
      {/* <CommunityPostComponent /> */}
      <ColumnBlock>
        {/* 상단 헤더 */}
        <HeaderBlock>
          {/* 제목 */}
          <H6Bold>실시간 채팅방</H6Bold>

          {/* 글쓰기 버튼 */}
          <ActionBtn $type="submit">+채팅방 만들기</ActionBtn>
        </HeaderBlock>
        {/* 채팅방 */}
        <LiveChatRow>
          <LiveChatCard />
          <LiveChatCard />
          <LiveChatCard />
        </LiveChatRow>

        {/* 채팅방 모두 보기 버튼 */}
        <AllChatButton>
          <Link to={"/community/chat"}>전체 보기 →</Link>
        </AllChatButton>

        {/* 포스트 영역 헤더 */}
        <PostHeader>
          <H7Bold>게시글</H7Bold>
        </PostHeader>

        {/* 카테고리 및 글쓰기 버튼 */}
        <PostCategoryHeader>
          {/* 카테고리 */}
          <PostCategoryRow>
            <CategoryPill>카테고리</CategoryPill>
            <CategoryPill>카테고리</CategoryPill>
            <CategoryPill>카테고리</CategoryPill>
            <CategoryPill>카테고리</CategoryPill>
            <CategoryPill>카테고리</CategoryPill>
          </PostCategoryRow>
          <ActionBtn $type="submit">글쓰기</ActionBtn>

          {/* 글쓰기 */}
        </PostCategoryHeader>

        {/* 포스트 카드 */}
        <PostListCard />
        <PostListCard />
        <PostListCard />
        <PostListCard />
      </ColumnBlock>
      {/* <PostDetailPage /> */}
      <Outlet />

      {/* 여기에 임시로 개발 목적으로 포스트 디테일 */}
      {/* <PostDetailPage /> */}
    </div>
  );
};

export default CommunityPostContainer;
