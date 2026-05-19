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

  return (
    <div>
      <Wrapper>
        {comments.map((comment) => (
          <UserCommentCard
            key={comment.id}
            userNickname={comment.userNickname}
            userProfile={comment.userProfile}
            commentContent={comment.commentContent}
            commentCreateAt={comment.commentCreateAt}
          />
        ))}
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
