import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PostListCard from "./PostListCard.jsx";
import PageCount from "./PageCount";
import { fetchPosts } from "../../communityApi/postApi";
import { ColumnBlock, CategoryPill, ActionBtn } from "../../communityStyle";
import PostListCardSkeleton from "../skeleton/PostListCardSkeleton.jsx";
import { POST_CATEGORIES } from "../../constants";
import T from "../../communityTextStyle";
import {
  PostHeader,
  PostCategoryHeader,
  PostCategoryRow,
} from "../communityPostContainerStyle";

const S = {
  ColumnBlock,
  CategoryPill,
  ActionBtn,
  PostHeader,
  PostCategoryHeader,
  PostCategoryRow,
};

const PostListSection = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const listTopRef = useRef(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const res = await fetchPosts({
          page: currentPage,
          postTag: selectedTag,
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
  }, [currentPage, selectedTag]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    listTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <S.PostHeader ref={listTopRef}>
        <T.H7Bold>게시글</T.H7Bold>
      </S.PostHeader>
      <S.PostCategoryHeader>
        <S.PostCategoryRow>
          {POST_CATEGORIES.map(({ label, value }) => (
            <S.CategoryPill
              key={value}
              $active={selectedTag === value}
              onClick={() => setSelectedTag(value)}
            >
              {label}
            </S.CategoryPill>
          ))}
        </S.PostCategoryRow>
        <Link to="/community/post/write">
          <S.ActionBtn $type="submit">글쓰기</S.ActionBtn>
        </Link>
      </S.PostCategoryHeader>
      {isLoading ? (
        <S.ColumnBlock>
          <PostListCardSkeleton />
          <PostListCardSkeleton />
          <PostListCardSkeleton />
          <PostListCardSkeleton />
        </S.ColumnBlock>
      ) : (
        <S.ColumnBlock marginBottom="42px">
          {posts.map(({ id, ...posts }) => (
            <PostListCard key={id} id={id} {...posts} />
          ))}
          {totalPages > 1 && (
            <PageCount
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </S.ColumnBlock>
      )}
    </>
  );
};

export default PostListSection;
