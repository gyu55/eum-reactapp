import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Section,
  SectionTitle,
  MyPostWrapper,
  MyPostHeader,
  MyPostRow,
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

const formatDate = (date) => {
  if (!date) return "-";

  const value = String(date);
  const dateText = value.includes("T") ? value.split("T")[0] : value.split(" ")[0];
  const parts = dateText.split("-");

  if (parts.length < 3) return "-";

  return `${parts[1]}.${parts[2]}`;
};

const MypostList = ({ myPostList = [] }) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(3);

  const visiblePosts = myPostList.slice(0, visibleCount);

  const handleMovePost = (postId) => {
    navigate(`/community/post/${postId}`);
  };

  const handleMoreClick = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <Section>
      <SectionTitle>나의 게시글</SectionTitle>

      <MyPostWrapper>
        <MyPostHeader>
          <TableHeaderText>제목</TableHeaderText>
          <TableHeaderText $center>좋아요</TableHeaderText>
          <TableHeaderText $center>조회수</TableHeaderText>
          <TableHeaderText $center>날짜</TableHeaderText>
        </MyPostHeader>

        {visiblePosts.map((post) => {
          const badge = getBadgeStyle(post.postTag);

          return (
            <MyPostRow key={post.id}>
              <PostTitleBox>
                <PostBadge $color={badge.color} $bg={badge.bg}>
                  {post.postTag || "-"}
                </PostBadge>

                <PostTitleText
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMovePost(post.id)}
                >
                  {post.postTitle}
                </PostTitleText>
              </PostTitleBox>

              <NumberText>{post.likeCount ?? 0}</NumberText>
              <NumberText>{post.postReadCount ?? 0}</NumberText>
              <NumberText>{formatDate(post.postCreateAt)}</NumberText>
            </MyPostRow>
          );
        })}

        {visibleCount < myPostList.length && (
          <MoreButton type="button" onClick={handleMoreClick}>
            더 보기 <span>→</span>
          </MoreButton>
        )}
      </MyPostWrapper>
    </Section>
  );
};

export default MypostList;