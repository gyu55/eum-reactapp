import React from "react";
import {
  ActionBtn,
  CategoryPill,
  ColumnBlock,
  ContentArea,
  LeftBlock,
  Page,
  RowBlock,
  RowSimpleBlock,
} from "./communityStyle";
import { H6Bold, H7Bold } from "./communityTextStyle";
import PostListCard from "./post/postComponents/PostListCard";
import LiveChatCard from "./chat/chatComponents/LiveChatCard";

const CommunityMain = () => {
  return (
    <div>
      <Page>
        <ContentArea>
          {/* 좌측 메인 */}
          {/* 해당 부분이 아울렛으로 되어야 함 */}
          <ColumnBlock>
            {/* 상단 헤더 */}
            <RowBlock flexWrap="wrap" justifyContent="space-between" gap="0px">
              {/* 제목 */}
              <H6Bold>실시간 채팅방</H6Bold>

              {/* 글쓰기 버튼 */}
              <ActionBtn $type="submit">+채팅방 만들기</ActionBtn>
            </RowBlock>
            {/* 채팅방 */}
            <RowBlock flexWrap="wrap">
              <LiveChatCard />
              <LiveChatCard />
              <LiveChatCard />
            </RowBlock>

            {/* 포스트 영역 헤더 */}
            <RowBlock flexWrap="wrap" marginTop="72px">
              <H7Bold>게시글</H7Bold>
            </RowBlock>

            {/* 카테고리 및 글쓰기 버튼 */}
            <RowBlock flexWrap="wrap" justifyContent="space-between" gap="0px">
              {/* 카테고리 */}
              <RowSimpleBlock gap="8px">
                <CategoryPill>카테고리</CategoryPill>
                <CategoryPill>카테고리</CategoryPill>
                <CategoryPill>카테고리</CategoryPill>
                <CategoryPill>카테고리</CategoryPill>
                <CategoryPill>카테고리</CategoryPill>
              </RowSimpleBlock>
              <ActionBtn $type="submit">글쓰기</ActionBtn>

              {/* 글쓰기 */}
            </RowBlock>

            {/* 포스트 카드 */}
            <PostListCard />
            <PostListCard />
            <PostListCard />
            <PostListCard />
          </ColumnBlock>
        </ContentArea>
      </Page>
    </div>
  );
};

export default CommunityMain;
