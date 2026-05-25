import React from "react";

import {
  ActivityWrapper,
  ActivityTitle,
  ActivityDivider,
  ActivityGroup,
  ActivityItem,
  ActivityLabel,
  ActivityIcon,
  ActivityCount,
} from "./style";

/*
  활동 수치는 마이페이지 메인 API 연동
*/
const ActivityCard = ({ activity }) => {
  return (
    <ActivityWrapper>
      <ActivityTitle>📈 내 활동</ActivityTitle>

      <ActivityDivider />

      {/* 게시글 / 댓글 */}
      <ActivityGroup $first>
        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>📝</ActivityIcon>
            작성 게시글
          </ActivityLabel>

          <ActivityCount>
            {activity?.postCount || 0}
          </ActivityCount>
        </ActivityItem>

        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>💬</ActivityIcon>
            작성 댓글
          </ActivityLabel>

          <ActivityCount>
            {activity?.commentCount || 0}
          </ActivityCount>
        </ActivityItem>
      </ActivityGroup>

      <ActivityDivider style={{ marginTop: "12px" }} />

      {/* 좋아요 / 즐겨찾기 */}
      <ActivityGroup>
        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>❤️</ActivityIcon>
            받은 좋아요
          </ActivityLabel>

          <ActivityCount>
            {activity?.likeCount || 0}
          </ActivityCount>
        </ActivityItem>

        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>📌</ActivityIcon>
            즐겨찾기
          </ActivityLabel>

          <ActivityCount>
            {activity?.bookmarkCount || 0}
          </ActivityCount>
        </ActivityItem>
      </ActivityGroup>

      <ActivityDivider style={{ marginTop: "12px" }} />

      {/* 팔로우 */}
      <ActivityGroup>
        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>👥</ActivityIcon>
            팔로잉
          </ActivityLabel>

          <ActivityCount>
            {activity?.followingCount || 0}
          </ActivityCount>
        </ActivityItem>

        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>👤</ActivityIcon>
            팔로워
          </ActivityLabel>

          <ActivityCount>
            {activity?.followerCount || 0}
          </ActivityCount>
        </ActivityItem>
      </ActivityGroup>
    </ActivityWrapper>
  );
};

export default ActivityCard;