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
  즐겨찾기 목록은 커뮤니티 API 연동 필요
*/
const bookmarks = [
  {
    category: "학습 인증",
    type: "study",
    title: "이음 앱 학습 100일 달성 후기! 정말 변화가 느껴져요",
    author: "이음선생님",
    like: 134,
    view: 892,
  },
  {
    category: "취업·진로",
    type: "career",
    title: "수어 통역사가 되는 방법 — 현직자가 알려드려요",
    author: "수어마스터",
    like: 97,
    view: "1.2k",
  },
  {
    category: "자유게시판",
    type: "free",
    title: "이음 앱 꿀팁 모음 — 이렇게 쓰면 훨씬 효율적이에요",
    author: "열공함",
    like: 56,
    view: 330,
  },
];

const getBadgeStyle = (type) => {
  if (type === "career") return { bg: "#FFF7ED", color: "#F97316" };
  if (type === "free") return { bg: "#EEF2FF", color: "#4359FC" };
  return { bg: "#DCFCE7", color: "#22C55E" };
};

const BookmarkList = () => {
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

        {bookmarks.map((bookmark, index) => {
          const badge = getBadgeStyle(bookmark.type);

          return (
            <BookmarkRow key={index}>
              <PostTitleBox>
                <PostBadge $bg={badge.bg} $color={badge.color}>
                  {bookmark.category}
                </PostBadge>
                <PostTitleText>{bookmark.title}</PostTitleText>
              </PostTitleBox>

              <NumberText>{bookmark.author}</NumberText>
              <NumberText>{bookmark.like}</NumberText>
              <NumberText>{bookmark.view}</NumberText>
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