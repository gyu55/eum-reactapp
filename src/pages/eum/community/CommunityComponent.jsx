import React from "react";
import { Link } from "react-router-dom";
import PostListCard from "./post/postComponents/PostListCard";
import styled, { css } from "styled-components";

const BackgroundWrapper = styled.div`
  background-color: #f9fafb;
`;

const CommunityComponent = () => {
  return (
    <div>
      <BackgroundWrapper>
        <Link to={"/community/chat"}>실시간 채팅</Link>
        <Link to={"/community/post"}>게시글</Link>
        {/* 여기에 포스트 카드 한번 놔둬보기 */}
        <PostListCard />
      </BackgroundWrapper>
    </div>
  );
};

export default CommunityComponent;
