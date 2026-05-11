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
  나의 게시글 목록은 커뮤니티 API 연동 필요
*/
const posts = [
  {
    category: "학습 인증",
    type: "cert",
    title: "수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌",
    like: 42,
    view: 324,
    date: "03.08",
  },
  {
    category: "학습 인증",
    type: "cert",
    title: "20일차 학습 인증 — 수어 숫자 1~100 완주!",
    like: 31,
    view: 201,
    date: "03.05",
  },
  {
    category: "수어 영상",
    type: "video",
    title: "처음으로 수어 영상 찍어봤어요 📹 (많이 어색해요ㅎㅎ)",
    like: 74,
    view: 487,
    date: "03.01",
  },
  {
    category: "학습 질문",
    type: "question",
    title: "수어에서 문장 순서가 한국어랑 다른가요?",
    like: 19,
    view: 162,
    date: "02.24",
  },
];

const getBadgeStyle = (type) => {
  if (type === "video") return { color: "#DB2777", bg: "#FCE7F3" };
  if (type === "question") return { color: "#7C3AED", bg: "#EDE9FE" };
  return { color: "#4359FC", bg: "#EEF2FF" };
};

const MypostList = () => {
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

        {posts.map((post, index) => {
          const badge = getBadgeStyle(post.type);

          return (
            <MyPostRow key={index}>
              <PostTitleBox>
                <PostBadge $color={badge.color} $bg={badge.bg}>
                  {post.category}
                </PostBadge>
                <PostTitleText>{post.title}</PostTitleText>
              </PostTitleBox>

              <NumberText>{post.like}</NumberText>
              <NumberText>{post.view}</NumberText>
              <NumberText>{post.date}</NumberText>
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