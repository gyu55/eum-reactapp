import React from "react";
import { Link, useParams } from "react-router-dom";
import { ColumnBlock, ContentArea, Page } from "../communityStyle";
import CommunityProfile from "./UserProfile/CommunityProfile";
import UserActivity from "./UserProfile/UserActivity";
import UserChatRequest from "./UserProfile/UserChatRequest";
import UserReportBlock from "./UserProfile/UserReportBlock";
import PostFilterBar from "./UserProfile/PostFilterBar";
import UserWritePostList from "./filter/UserWritePostList";
import UserWriteComment from "./filter/UserWriteComment";

const CommunityUserProfileComponent = () => {
  const { userId } = useParams();

  return (
    <div>
      {userId}번 유저 프로필
      <Page>
        <ContentArea>
          {/* 메인 영역 */}
          <ColumnBlock>
            <CommunityProfile />

            {/* 상단 검색바 및 필터 */}
            <PostFilterBar />

            {/* 아래 부분들은 outer 에 들어가야 함 */}
            {/* 유저가 작성한 게시글 목록 컴포넌트 */}
            
            <UserWritePostList />

            {/* 유저가 작성한 댓글 목록 컴포넌트 */}
            <UserWriteComment />
          </ColumnBlock>

          {/* 사이드 영역 */}
          <ColumnBlock width="312px">
            {/* 유저 활동 정보 */}
            <UserActivity></UserActivity>

            {/* 유저한테 1:1 채팅 신청 */}
            <UserChatRequest />

            {/* 유저 신고 */}
            <UserReportBlock />
          </ColumnBlock>
        </ContentArea>
      </Page>
    </div>
  );
};

export default CommunityUserProfileComponent;
