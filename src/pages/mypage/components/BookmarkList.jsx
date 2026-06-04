import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

const DEFAULT_VISIBLE_COUNT = 4;

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
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleBookmarks = isExpanded
    ? bookmarkList
    : bookmarkList.slice(0, DEFAULT_VISIBLE_COUNT);

  const needToggleButton = bookmarkList.length > DEFAULT_VISIBLE_COUNT;

  const handleMovePost = (postId) => {
    navigate(`/community/post/${postId}`);
  };

  // 더보기 / 접기 상태 변경
  const handleToggleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <S.Section>
      <S.SectionTitle>즐겨찾기</S.SectionTitle>

      <S.BookmarkWrapper>
        <S.BookmarkHeader>
          <S.TableHeaderText>제목</S.TableHeaderText>
          <S.TableHeaderText $center>작성자</S.TableHeaderText>
          <S.TableHeaderText $center>좋아요</S.TableHeaderText>
          <S.TableHeaderText $center>조회수</S.TableHeaderText>
        </S.BookmarkHeader>

        {visibleBookmarks.map((bookmark) => {
          const badge = getBadgeStyle(bookmark.postTag);

          return (
            <S.BookmarkRow key={bookmark.id}>
              <S.PostTitleBox>
                <S.PostBadge $color={badge.color} $bg={badge.bg}>
                  {bookmark.postTag || "-"}
                </S.PostBadge>

                <S.PostTitleText
                  $clickable
                  onClick={() => handleMovePost(bookmark.id)}
                >
                  {bookmark.postTitle}
                </S.PostTitleText>
              </S.PostTitleBox>

              <S.NumberText>{bookmark.userNickname || bookmark.userName || "-"}</S.NumberText>
              <S.NumberText>{bookmark.likeCount ?? 0}</S.NumberText>
              <S.NumberText>{bookmark.postReadCount ?? 0}</S.NumberText>
            </S.BookmarkRow>
          );
        })}

        {needToggleButton && (
          <S.MoreButton type="button" onClick={handleToggleClick}>
            {isExpanded ? "접기" : "더보기"} <span>{isExpanded ? "↑" : "→"}</span>
          </S.MoreButton>
        )}
      </S.BookmarkWrapper>
    </S.Section>
  );
};

export default BookmarkList;