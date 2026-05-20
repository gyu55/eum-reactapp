import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { LAYOUT } from "../../constants";
import UserCommentCard from "../UserProfile/UserCommentCard";
import PageCount from "../../post/postComponents/PageCount";
import { getUserComments } from "../../communityApi/commentApi";

const Wrapper = styled.div`
  width: ${LAYOUT.cardMaxWidth};
  display: flex;
  flex-direction: column;
  gap: ${LAYOUT.gridGap};
`;

const UserWriteComment = () => {
  const { userId } = useParams();
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const data = await getUserComments(userId, currentPage);
        setComments(data.comments);
        setTotalPages(data.totalPages);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [userId, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <div>로딩 중...</div>;

  //  "id": 11,
  //       "commentContent": "정말 유익한 정보 감사해요. 통역사 준비 파이팅!",
  //       "commentCreateAt": "2026-03-18T15:00:00",
  //       "commentLikeCount": 4,
  //       "commentReplyCount": 1,
  //       "userNickname": "minjun_k",
  //       "userProfile": "https://gi.esmplus.com/cjfals1015/eum/userProfile/thumbnail/default1.png",
  //       "postId": 7,
  //       "userId": 1,
  //       "commentId": null

  return (
    <div>
      <Wrapper>
        {comments.map(
          ({
            id,
            userNickname,
            userProfile,
            commentContent,
            commentCreateAt,
            commentReplyCount,
            commentLikeCount,
            postId,
          }) => (
            <UserCommentCard
              key={id}
              userNickname={userNickname}
              userProfile={userProfile}
              commentContent={commentContent}
              commentCreateAt={commentCreateAt}
              commentReplyCount={commentReplyCount}
              commentLikeCount={commentLikeCount}
              postId={postId}
            />
          ),
        )}
        {totalPages > 1 && (
          <PageCount
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </Wrapper>
    </div>
  );
};

export default UserWriteComment;
