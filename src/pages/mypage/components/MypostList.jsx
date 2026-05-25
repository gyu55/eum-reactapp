import React from "react";

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

/*
  나의 게시글 목록은 마이페이지 메인 API 연동
*/
const getBadgeStyle = (postTag) => {
  if (postTag === "수어 영상") return { color: "#DB2777", bg: "#FCE7F3" };
  if (postTag === "질문게시판") return { color: "#7C3AED", bg: "#EDE9FE" };
  return { color: "#4359FC", bg: "#EEF2FF" };
};

const getDateText = (date) => {
  if (!date) return "-";
  return date.split("T")[0].slice(5).replace("-", ".");
};

const MypostList = ({ posts = [] }) => {
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

        {/* 내가 작성한 게시글 목록 */}
        {posts.map((post) => {
          const badge = getBadgeStyle(post.postTag);

          return (
            <MyPostRow key={post.id}>
              <PostTitleBox>
                <PostBadge $color={badge.color} $bg={badge.bg}>
                  {post.postTag}
                </PostBadge>

                <PostTitleText>{post.postTitle}</PostTitleText>
              </PostTitleBox>

              <NumberText>{post.likeCount}</NumberText>
              <NumberText>{post.postReadCount}</NumberText>
              <NumberText>{getDateText(post.postCreateAt)}</NumberText>
            </MyPostRow>
          );
        })}

        <MoreButton>
          더 보기 <span>→</span>
        </MoreButton>
      </MyPostWrapper>
    </Section>
  );
};

export default MypostList;