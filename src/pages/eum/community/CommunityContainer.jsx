import React from "react";
import CommunityComponent from "./CommunityComponent";
import { Outlet } from "react-router-dom";
import CommunityUserProfileComponent from "./profile/CommunityUserProfileComponent";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  background-color: #f9fafb;
`;

const CommunityContainer = () => {
  return (
    <>
      <BackgroundWrapper>
        <div>
          커뮤니티페이지
          <CommunityComponent />
          <Outlet />
        </div>
        <div>
          지금 활동 중인 멤버
          <CommunityUserProfileComponent />
        </div>
      </BackgroundWrapper>
    </>
  );
};

export default CommunityContainer;
