import React, { useEffect, useState } from "react";
import { fetchUserPosts } from "../../communityApi/postApi";
import { useParams } from "react-router-dom";
import S from "../../communityStyle";
import PostListCard from "../../post/postComponents/PostListCard.jsx";
import PageCount from "../../post/postComponents/PageCount";

const UserWritePostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const res = await fetchUserPosts({ page: currentPage, userId });
        setPosts(res.data.posts);
        setTotalPages(res.data.totalPages);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [currentPage, userId]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <div>로딩 중...</div>;
  return (
    <div>
      <S.ColumnBlock>
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
      </S.ColumnBlock>
    </div>
  );
};

export default UserWritePostList;
