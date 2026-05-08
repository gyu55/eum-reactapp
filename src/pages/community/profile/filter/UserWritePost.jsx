import React from "react";
import { ColumnBlock } from "../../communityStyle";
import PostListCard from "../../post/postComponents/PostListCard.jsx";
import UserCommentCard from "../UserProfile/UserCommentCard.jsx";

// 해당 컴포넌트는 커뮤니티의 유저 프로필에 들어 갔을 때 해당 유저가 작성한 게시글을 보여주기 위한 컴포넌트
// 해당 컴포넌트는 필터에 의해 생겨나는 것 (Outer 영역에 있어야 함)
const UserWritePost = () => {
  return (
    <div>
      <ColumnBlock>
        {/* 각각 포스트 리스트 */}
        <PostListCard />
        <PostListCard />
        <PostListCard />
        {/* <UserCommentCard /> */}
      </ColumnBlock>
    </div>
  );
};

export default UserWritePost;
