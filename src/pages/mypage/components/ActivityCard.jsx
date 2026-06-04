import React from "react";

import S from "./style";

/*
  활동 수치는 마이페이지 메인 API 연동
*/
const ActivityCard = ({ activity }) => {
  return (
    <S.ActivityWrapper>
      <S.ActivityTitle>📢 나의 활동</S.ActivityTitle>

      <S.ActivityDivider />

      {/* 게시글 / 댓글 */}
      <S.ActivityGroup $first>
        <S.ActivityItem>
          <S.ActivityLabel>
            <S.ActivityIcon>📄</S.ActivityIcon>
            작성 게시글
          </S.ActivityLabel>

          <S.ActivityCount>
            {activity?.postCount || 0}
          </S.ActivityCount>
        </S.ActivityItem>

        <S.ActivityItem>
          <S.ActivityLabel>
            <S.ActivityIcon>💬</S.ActivityIcon>
            작성 댓글
          </S.ActivityLabel>

          <S.ActivityCount>
            {activity?.commentCount || 0}
          </S.ActivityCount>
        </S.ActivityItem>
      </S.ActivityGroup>

      <S.ActivityDivider $spaced />

      {/* 좋아요 / 즐겨찾기 */}
      <S.ActivityGroup>
        <S.ActivityItem>
          <S.ActivityLabel>
            <S.ActivityIcon>⭐</S.ActivityIcon>
            받은 좋아요
          </S.ActivityLabel>

          <S.ActivityCount>
            {activity?.likeCount || 0}
          </S.ActivityCount>
        </S.ActivityItem>

        <S.ActivityItem>
          <S.ActivityLabel>
            <S.ActivityIcon>🔖</S.ActivityIcon>
            즐겨찾기
          </S.ActivityLabel>

          <S.ActivityCount>
            {activity?.bookmarkCount || 0}
          </S.ActivityCount>
        </S.ActivityItem>
      </S.ActivityGroup>

      <S.ActivityDivider $spaced />

      {/* 팔로우 */}
      <S.ActivityGroup>
        <S.ActivityItem>
          <S.ActivityLabel>
            <S.ActivityIcon>👥</S.ActivityIcon>
            팔로잉
          </S.ActivityLabel>

          <S.ActivityCount>
            {activity?.followingCount || 0}
          </S.ActivityCount>
        </S.ActivityItem>

        <S.ActivityItem>
          <S.ActivityLabel>
            <S.ActivityIcon>👤</S.ActivityIcon>
            팔로워
          </S.ActivityLabel>

          <S.ActivityCount>
            {activity?.followerCount || 0}
          </S.ActivityCount>
        </S.ActivityItem>
      </S.ActivityGroup>
    </S.ActivityWrapper>
  );
};

export default ActivityCard;