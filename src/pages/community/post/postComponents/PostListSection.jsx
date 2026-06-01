import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PostListCard from "./PostListCard.jsx";
import PageCount from "./PageCount";
import { fetchPosts } from "../../communityApi/postApi";
import { ColumnBlock, CategoryPill, ActionBtn } from "../../communityStyle";
import PostListCardSkeleton from "../skeleton/PostListCardSkeleton.jsx";
import { POST_CATEGORIES } from "../../constants";
import T from "../../communityTextStyle";
import NoResult from "../../common/NoResult.jsx";
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
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const listTopRef = useRef(null);
  const pendingScrollRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";
  const currentPage = parseInt(searchParams.get("page") ?? "1", 10);
  const selectedTag = searchParams.get("tag") ?? "";

  // keyword 가 외부(검색창)에서 바뀌면 page를 1로 리셋
  const prevKeywordRef = useRef(keyword);
  useEffect(() => {
    if (keyword !== prevKeywordRef.current) {
      prevKeywordRef.current = keyword;
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set("page", "1");
        return next;
      });
    }
  }, [keyword, setSearchParams]);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const res = await fetchPosts({
          page: currentPage,
          postTag: selectedTag,
          keyword,
        });
        setPosts(res.data.posts);
        setTotalPages(res.data.totalPages);

        // 게시글 상세에서 돌아왔을 때 스크롤 복원값 예약
        const savedScroll = sessionStorage.getItem("community-scroll");
        if (savedScroll !== null) {
          pendingScrollRef.current = parseInt(savedScroll, 10);
          sessionStorage.removeItem("community-scroll");
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [currentPage, selectedTag, keyword]);

  // 로딩 완료 후 DOM이 갱신된 뒤 스크롤 복원 실행
  useEffect(() => {
    if (!isLoading && pendingScrollRef.current !== null) {
      window.scrollTo({ top: pendingScrollRef.current, behavior: "smooth" });
      pendingScrollRef.current = null;
    }
  }, [isLoading]);

  const handlePageChange = (page) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(page));
      return next;
    });
    listTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTagChange = (tag) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("tag", tag);
      next.set("page", "1");
      return next;
    });
  };

  let content;
  if (isLoading) {
    content = (
      <S.ColumnBlock>
        <PostListCardSkeleton />
        <PostListCardSkeleton />
        <PostListCardSkeleton />
        <PostListCardSkeleton />
      </S.ColumnBlock>
    );
  } else if (posts.length === 0) {
    content = <NoResult />;
  } else {
    content = (
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
    );
  }

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
              onClick={() => handleTagChange(value)}
            >
              {label}
            </S.CategoryPill>
          ))}
        </S.PostCategoryRow>
        <Link to="/community/post/write">
          <S.ActionBtn $type="submit">글쓰기</S.ActionBtn>
        </Link>
      </S.PostCategoryHeader>
      {content}
    </>
  );
};

export default PostListSection;
