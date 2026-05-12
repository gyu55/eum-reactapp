import React from "react";
import S from "./communityStyle";
import T from "./communityTextStyle";
import PostListCard from "./post/postComponents/PostListCard";
import LiveChatCard from "./chat/chatComponents/LiveChatCard";

const CommunityMain = () => {
  return (
    <div>
      <S.Page>
        <S.ContentArea>
          {/* 좌측 메인 */}
          {/* 해당 부분이 아울렛으로 되어야 함 */}
          <S.ColumnBlock>
            {/* 상단 헤더 */}
            <S.RowBlock flexWrap="wrap" justifyContent="space-between" gap="0px">
              {/* 제목 */}
              <T.H6Bold>실시간 채팅방</T.H6Bold>

              {/* 글쓰기 버튼 */}
              <S.ActionBtn $type="submit">+채팅방 만들기</S.ActionBtn>
            </S.RowBlock>
            {/* 채팅방 */}
            <S.RowBlock flexWrap="wrap">
              <LiveChatCard />
              <LiveChatCard />
              <LiveChatCard />
            </S.RowBlock>

            {/* 포스트 영역 헤더 */}
            <S.RowBlock flexWrap="wrap" marginTop="72px">
              <T.H7Bold>게시글</T.H7Bold>
            </S.RowBlock>

            {/* 카테고리 및 글쓰기 버튼 */}
            <S.RowBlock flexWrap="wrap" justifyContent="space-between" gap="0px">
              {/* 카테고리 */}
              <S.RowSimpleBlock gap="8px">
                <S.CategoryPill>카테고리</S.CategoryPill>
                <S.CategoryPill>카테고리</S.CategoryPill>
                <S.CategoryPill>카테고리</S.CategoryPill>
                <S.CategoryPill>카테고리</S.CategoryPill>
                <S.CategoryPill>카테고리</S.CategoryPill>
              </S.RowSimpleBlock>
              <S.ActionBtn $type="submit">글쓰기</S.ActionBtn>

              {/* 글쓰기 */}
            </S.RowBlock>

            {/* 포스트 카드 */}
            <PostListCard />
            <PostListCard />
            <PostListCard />
            <PostListCard />
          </S.ColumnBlock>
        </S.ContentArea>
      </S.Page>
    </div>
  );
};

export default CommunityMain;
