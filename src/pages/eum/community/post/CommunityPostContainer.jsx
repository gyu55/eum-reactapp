import React from "react";
import CommunityPostComponent from "./CommunityPostComponent";
import { Outlet } from "react-router-dom";
import PostDetailPage from "./detail/PostDetailPage";

const CommunityPostContainer = () => {
  return (
    <div>
      게시글 컨테이너
      <CommunityPostComponent />
      <PostDetailPage />
      <Outlet />
    </div>
  );
};

export default CommunityPostContainer;
