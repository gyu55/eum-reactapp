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
  활동 수치는 마이페이지 통계 API 연동 필요
*/
const ActivityCard = () => {
  return (
    <ActivityWrapper>
      <ActivityTitle>📈 내 활동</ActivityTitle>
      <ActivityDivider />

      <ActivityGroup $first>
        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>📝</ActivityIcon>
            작성 게시글
          </ActivityLabel>
          <ActivityCount>42</ActivityCount>
        </ActivityItem>

        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>💬</ActivityIcon>
            작성 댓글
          </ActivityLabel>
          <ActivityCount>87</ActivityCount>
        </ActivityItem>
      </ActivityGroup>

      <ActivityDivider style={{ marginTop: "12px" }} />

      <ActivityGroup>
        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>❤️</ActivityIcon>
            받은 좋아요
          </ActivityLabel>
          <ActivityCount>128</ActivityCount>
        </ActivityItem>

        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>📌</ActivityIcon>
            즐겨찾기
          </ActivityLabel>
          <ActivityCount>63</ActivityCount>
        </ActivityItem>
      </ActivityGroup>

      <ActivityDivider style={{ marginTop: "12px" }} />

      <ActivityGroup>
        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>👥</ActivityIcon>
            팔로잉
          </ActivityLabel>
          <ActivityCount>12</ActivityCount>
        </ActivityItem>

        <ActivityItem>
          <ActivityLabel>
            <ActivityIcon>👤</ActivityIcon>
            팔로워
          </ActivityLabel>
          <ActivityCount>12</ActivityCount>
        </ActivityItem>
      </ActivityGroup>
    </ActivityWrapper>
  );
};

export default ActivityCard;