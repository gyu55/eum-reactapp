import React, { useEffect, useState } from "react";
import { fetchUserPosts } from "../../communityApi/postApi";
import { useParams, useSearchParams } from "react-router-dom";
import { ColumnBlock } from "../../communityStyle";
import PostListCard from "../../post/postComponents/PostListCard.jsx";
import PageCount from "../../post/postComponents/PageCount";
import PostListCardSkeleton from "../../post/skeleton/PostListCardSkeleton.jsx";

const UserWritePostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const order = searchParams.get("order") ?? "latest";
  const keyword = searchParams.get("keyword") ?? "";

  useEffect(() => {
    setCurrentPage(1);
  }, [keyword]);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const res = await fetchUserPosts({
          page: currentPage,
          userId,
          order,
          keyword,
        });
        setPosts(res.data.posts);
        setTotalPages(res.data.totalPages);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [currentPage, userId, order, keyword]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading)
    return (
      <div>
        <ColumnBlock>
          <PostListCardSkeleton />
          <PostListCardSkeleton />
          <PostListCardSkeleton />
          <PostListCardSkeleton />
        </ColumnBlock>
      </div>
    );
  return (
    <div>
      <ColumnBlock>
        {posts.map(
          ({
            id,
            postTag,
            postCreateAt,
            postTitle,
            postContent,
            userNickname,
            userProfile,
            likeCount,
            commentCount,
            postReadCount,
          }) => (
            <PostListCard
              key={id}
              id={id}
              postTag={postTag}
              postCreateAt={postCreateAt}
              postTitle={postTitle}
              postContent={postContent}
              userNickname={userNickname}
              userProfile={userProfile}
              likeCount={likeCount}
              commentCount={commentCount}
              postReadCount={postReadCount}
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
      </ColumnBlock>
    </div>
  );
};

export default UserWritePostList;
