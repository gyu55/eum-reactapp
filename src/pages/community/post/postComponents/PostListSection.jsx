import React, { useState, useEffect } from "react";
import PostListCard from "./PostListCard.jsx";
import PageCount from "./PageCount";
import { fetchPosts } from "../../communityApi/postApi";
import S from "../../communityStyle";

const PostListSection = ({ postTag = "" }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // const { userId } = useParams({ userId });

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const res = await fetchPosts({ page: currentPage, postTag });
        setPosts(res.data.posts);
        setTotalPages(res.data.totalPages);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [currentPage, postTag]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <div>로딩 중...</div>;

  return (
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
  );
};

export default PostListSection;
