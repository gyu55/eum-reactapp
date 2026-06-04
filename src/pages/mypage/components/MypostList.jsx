import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

const DEFAULT_VISIBLE_COUNT = 3;

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
  const [isExpanded, setIsExpanded] = useState(false);

  const visiblePosts = isExpanded
    ? myPostList
    : myPostList.slice(0, DEFAULT_VISIBLE_COUNT);

  const needToggleButton = myPostList.length > DEFAULT_VISIBLE_COUNT;

  const handleMovePost = (postId) => {
    navigate(`/community/post/${postId}`);
  };

  // 더보기 / 접기 상태 변경
  const handleToggleClick = () => {
    setIsExpanded((prev) => !prev);
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
              <S.NumberText>{formatDate(post.postCreateAt)}</S.NumberText>
            </S.MyPostRow>
          );
        })}

        {needToggleButton && (
          <S.MoreButton type="button" onClick={handleToggleClick}>
            {isExpanded ? "접기" : "더보기"} <span>{isExpanded ? "↑" : "→"}</span>
          </S.MoreButton>
        )}
      </S.MyPostWrapper>
    </S.Section>
  );
};

export default MypostList;