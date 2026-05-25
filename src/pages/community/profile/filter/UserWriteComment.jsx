import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useSearchParams } from "react-router-dom";
import { LAYOUT } from "../../constants";
import UserCommentCard from "../UserProfile/UserCommentCard";
import PageCount from "../../post/postComponents/PageCount";
import { getUserComments } from "../../communityApi/commentApi";
import UserCommentCardSkeleton from "../UserProfile/UserCommentCardSkeleton";

const Wrapper = styled.div`
  width: ${LAYOUT.cardMaxWidth};
  display: flex;
  flex-direction: column;
  gap: ${LAYOUT.gridGap};
`;

const UserWriteComment = () => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const order = searchParams.get("order") ?? "latest";
  const keyword = searchParams.get("keyword") ?? "";

  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [keyword]);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const data = await getUserComments({ userId, page: currentPage, order, keyword });
        setComments(data.comments);
        setTotalPages(data.totalPages);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [userId, currentPage, order, keyword]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading)
    return (
      <div>
        <Wrapper>
          <UserCommentCardSkeleton />
          <UserCommentCardSkeleton />
          <UserCommentCardSkeleton />
          <UserCommentCardSkeleton />
        </Wrapper>
      </div>
    );

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
