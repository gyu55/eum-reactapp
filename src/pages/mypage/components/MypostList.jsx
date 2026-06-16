import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

const COLLAPSED_COUNT = 4;
const PAGE_SIZE = 8;

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
  if (!date) {
    return { month: "-", dot: "", day: "" };
  }

  const value = String(date);
  const dateText = value.includes("T") ? value.split("T")[0] : value.split(" ")[0];
  const parts = dateText.split("-");

  if (parts.length < 3) {
    return { month: "-", dot: "", day: "" };
  }

  return {
    month: parts[1],
    dot: ".",
    day: parts[2],
  };
};

const MypostList = ({ myPostList = [] }) => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const needToggleButton = myPostList.length > COLLAPSED_COUNT;
  const needPagination = isExpanded && myPostList.length >= PAGE_SIZE;
  const pageCount = Math.ceil(myPostList.length / PAGE_SIZE);

  // 더보기 전에는 4개, 더보기 후 8개 이상이면 페이지네이션으로 보여줍니다.
  const visiblePosts = (() => {
    if (!isExpanded) {
      return myPostList.slice(0, COLLAPSED_COUNT);
    }

    if (!needPagination) {
      return myPostList;
    }

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return myPostList.slice(startIndex, startIndex + PAGE_SIZE);
  })();

  const handleMovePost = (postId) => {
    navigate(`/community/post/${postId}`);
  };

  // 더보기 / 접기 상태 변경
  const handleToggleClick = () => {
    setIsExpanded((prev) => !prev);
    setCurrentPage(1);
  };

  return (
    <S.Section>
      <S.SectionTitle>나의 게시글</S.SectionTitle>

      <S.MyPostWrapper>
        <S.MyPostHeader>
          <S.TableHeaderText>제목</S.TableHeaderText>
          <S.TableHeaderText $center>좋아요</S.TableHeaderText>
          <S.TableHeaderText $center>조회수</S.TableHeaderText>
          <S.TableHeaderText $center>날짜</S.TableHeaderText>
        </S.MyPostHeader>

        {visiblePosts.map((post) => {
          const badge = getBadgeStyle(post.postTag);
          const dateParts = formatDate(post.postCreateAt);

          return (
            <S.MyPostRow key={post.id}>
              <S.PostTitleBox>
                <S.PostBadge $color={badge.color} $bg={badge.bg}>
                  {post.postTag || "-"}
                </S.PostBadge>

                <S.PostTitleText
                  $clickable
                  onClick={() => handleMovePost(post.id)}
                >
                  {post.postTitle}
                </S.PostTitleText>
              </S.PostTitleBox>

              <S.NumberText>{post.likeCount ?? 0}</S.NumberText>
              <S.NumberText>{post.postReadCount ?? 0}</S.NumberText>

              <S.DateText>
                <S.DatePart>{dateParts.month}</S.DatePart>
                <S.DateDot>{dateParts.dot}</S.DateDot>
                <S.DatePart>{dateParts.day}</S.DatePart>
              </S.DateText>
            </S.MyPostRow>
          );
        })}

        {needPagination && (
          <S.PaginationArea>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
              <S.PageButton
                key={page}
                type="button"
                $active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </S.PageButton>
            ))}
          </S.PaginationArea>
        )}

        {needToggleButton && (
          <S.MoreButton type="button" onClick={handleToggleClick}>
            {isExpanded ? "접기" : "더 보기"} <span>{isExpanded ? "↑" : "→"}</span>
          </S.MoreButton>
        )}
      </S.MyPostWrapper>
    </S.Section>
  );
};

export default MypostList;