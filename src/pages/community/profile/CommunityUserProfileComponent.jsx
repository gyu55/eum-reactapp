import React from "react";
import { Outlet, useParams } from "react-router-dom";
import S from "../communityStyle";
import CommunityProfile from "./UserProfile/CommunityProfile";
import UserActivity from "./UserProfile/UserActivity";
import UserChatRequest from "./UserProfile/UserChatRequest";
import UserReportBlock from "./UserProfile/UserReportBlock";
import PostFilterBar from "./UserProfile/PostFilterBar";

const CommunityUserProfileComponent = () => {
  const { userId } = useParams();

  return (
    <div>
      {userId}번 유저 프로필
      <S.Page>
        <S.ContentArea>
          {/* 메인 영역 */}
          <S.ColumnBlock>
            <CommunityProfile />

            {/* 상단 검색바 및 필터 */}
            <PostFilterBar />

            {/* 필터 버튼에 따라 렌더링되는 자식 컴포넌트 */}
            <Outlet />
          </S.ColumnBlock>

          {/* 사이드 영역 */}
          <S.ColumnBlock width="312px">
            {/* 유저 활동 정보 */}
            <UserActivity></UserActivity>

            {/* 유저한테 1:1 채팅 신청 */}
            <UserChatRequest />

            {/* 유저 신고 */}
            <UserReportBlock />
          </S.ColumnBlock>
        </S.ContentArea>
      </S.Page>
    </div>
  );
};

export default CommunityUserProfileComponent;
