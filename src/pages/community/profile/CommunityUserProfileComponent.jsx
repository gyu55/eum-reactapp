import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import { Page, ContentArea, ColumnBlock } from "../communityStyle";
import CommunityProfile from "./UserProfile/CommunityProfile";
import UserActivity from "./UserProfile/UserActivity";
import UserChatRequest from "./UserProfile/UserChatRequest";
import UserReportBlock from "./UserProfile/UserReportBlock";
import PostFilterBar from "./UserProfile/PostFilterBar";
import { getCommunityUserInfo } from "../communityApi/communityProfileApi";

const S = {
  Page,
  ContentArea,
  ColumnBlock,
};

const CommunityUserProfileComponent = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [userResponseDTO, setUserResponseDTO] = useState();

  useEffect(() => {
    const isRootProfile =
      location.pathname === `/community/profile/${userId}` ||
      location.pathname === `/community/profile/${userId}/`;

    if (isRootProfile) {
      navigate(`/community/profile/${userId}/writed-post`, { replace: true });
    }
  }, [userId, location.pathname, navigate]);

  // 유저 정보 로드
  useEffect(() => {
    const setUserData = async () => {
      const { data } = await getCommunityUserInfo(userId);
      setUserResponseDTO(data);
    };

    setUserData();
  }, [userId]);

  return (
    <div>
      {/* {userId}번 유저 프로필 */}
      <S.Page>
        <S.ContentArea>
          {/* 메인 영역 */}
          <S.ColumnBlock>
            <CommunityProfile {...userResponseDTO} />

            {/* 상단 검색바 및 필터 (유저 활동 수량) */}
            <PostFilterBar {...userResponseDTO} />

            {/* 필터 버튼에 따라 렌더링되는 자식 컴포넌트 */}
            <Outlet />
          </S.ColumnBlock>

          {/* 사이드 영역 */}
          <S.ColumnBlock width="312px">
            {/* 유저 활동 정보 */}
            <UserActivity {...userResponseDTO} />

            {/* 유저한테 1:1 채팅 신청 */}
            <UserChatRequest />

            {/* 유저 신고 */}
            <UserReportBlock userId={userId} />
          </S.ColumnBlock>
        </S.ContentArea>
      </S.Page>
    </div>
  );
};

export default CommunityUserProfileComponent;
