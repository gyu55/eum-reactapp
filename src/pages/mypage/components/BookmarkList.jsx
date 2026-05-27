import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const getBadgeStyle = (postTag) => {
  if (postTag === "수어학습") return { color: "#22C55E", bg: "#DCFCE7" };
  if (postTag === "질문게시판") return { color: "#7C3AED", bg: "#EDE9FE" };
  if (postTag === "학습후기") return { color: "#F97316", bg: "#FFF7ED" };
  if (postTag === "정보공유") return { color: "#4359FC", bg: "#EEF2FF" };
  if (postTag === "학습 인증") return { color: "#4359FC", bg: "#EEF2FF" };
  if (postTag === "자유게시판") return { color: "#4359FC", bg: "#EEF2FF" };

  return { color: "#4359FC", bg: "#EEF2FF" };
};

const BookmarkList = ({ bookmarkList = [] }) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleBookmarks = bookmarkList.slice(0, visibleCount);

  const handleMovePost = (postId) => {
    navigate(`/community/post/${postId}`);
  };

  const handleMoreClick = () => {
    setVisibleCount((prev) => prev + 4);
  };

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

        {visibleBookmarks.map((bookmark) => {
          const badge = getBadgeStyle(bookmark.postTag);

          return (
            <BookmarkRow key={bookmark.id}>
              <PostTitleBox>
                <PostBadge $color={badge.color} $bg={badge.bg}>
                  {bookmark.postTag || "-"}
                </PostBadge>

                <PostTitleText
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMovePost(bookmark.id)}
                >
                  {bookmark.postTitle}
                </PostTitleText>
              </PostTitleBox>

              <NumberText>{bookmark.userNickname || bookmark.userName || "-"}</NumberText>
              <NumberText>{bookmark.likeCount ?? 0}</NumberText>
              <NumberText>{bookmark.postReadCount ?? 0}</NumberText>
            </BookmarkRow>
          );
        })}

        {visibleCount < bookmarkList.length && (
          <MoreButton type="button" onClick={handleMoreClick}>
            더 보기 <span>→</span>
          </MoreButton>
        )}
      </BookmarkWrapper>
    </Section>
  );
};

export default BookmarkList;