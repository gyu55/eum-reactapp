import React from "react";

import {
  Section,
  SectionTitle,
  BookmarkWrapper,
  BookmarkHeader,
  BookmarkRow,
  TableHeaderText,
  PostTitleBox,
  PostBadge,
  PostTitleText,
  NumberText,
  MoreButton,
} from "./style";

/*
  즐겨찾기 목록은 마이페이지 메인 API 연동
*/
const getBadgeStyle = (postTag) => {
  if (postTag === "취업·진로") return { bg: "#FFF7ED", color: "#F97316" };
  if (postTag === "자유게시판") return { bg: "#EEF2FF", color: "#4359FC" };
  return { bg: "#DCFCE7", color: "#22C55E" };
};

const BookmarkList = ({ bookmarks = [] }) => {
  return (
    <Section>
      <SectionTitle>즐겨찾기</SectionTitle>

      <BookmarkWrapper>
        <BookmarkHeader>
          <TableHeaderText>제목</TableHeaderText>
          <TableHeaderText $center>작성자</TableHeaderText>
          <TableHeaderText $center>좋아요</TableHeaderText>
          <TableHeaderText $center>조회수</TableHeaderText>
        </BookmarkHeader>

        {/* 좋아요한 게시글 목록 */}
        {bookmarks.map((bookmark) => {
          const badge = getBadgeStyle(bookmark.postTag);

          return (
            <BookmarkRow key={bookmark.id}>
              <PostTitleBox>
                <PostBadge $bg={badge.bg} $color={badge.color}>
                  {bookmark.postTag}
                </PostBadge>

                <PostTitleText>{bookmark.postTitle}</PostTitleText>
              </PostTitleBox>

              <NumberText>{bookmark.userNickname || "-"}</NumberText>
              <NumberText>{bookmark.likeCount}</NumberText>
              <NumberText>{bookmark.postReadCount}</NumberText>
            </BookmarkRow>
          );
        })}

        <MoreButton>
          더 보기 <span>→</span>
        </MoreButton>
      </BookmarkWrapper>
    </Section>
  );
};

export default BookmarkList;