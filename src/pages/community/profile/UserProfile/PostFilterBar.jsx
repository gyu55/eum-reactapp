import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as S from "./postFilterBarStyle";

import iconPost from "../../assets/icon/postWrite.svg";
import iconPostActive from "../../assets/icon/postWriteWhite.svg";
import iconComment from "../../assets/icon/comment.svg";
import iconCommentActive from "../../assets/icon/commentWhite.svg";
import iconLike from "../../assets/icon/heart.svg";
import iconSearch from "../../assets/icon/search.svg";

const TYPE_LIST = [
  {
    key: "post",
    label: "작성 게시글",
    icon: iconPost,
    iconActive: iconPostActive,
  },
  {
    key: "comment",
    label: "작성 댓글",
    icon: iconComment,
    iconActive: iconCommentActive,
  },
  { key: "like", label: "좋아요한 글", icon: iconLike, iconActive: iconLike },
];

const SORT_LIST = [
  { key: "latest", label: "최신순" },
  { key: "popular", label: "인기순" },
];

const TYPE_PATH = {
  post: "writed-post",
  comment: "writed-comment",
  like: "liked-post",
};

const TYPE_PLACEHOLDER = {
  post: "게시글 검색",
  comment: "댓글 검색",
  like: "좋아요 한 게시글 검색",
};

const PostFilterBar = ({
  onSortChange,
  onSearch,
  postCount,
  postLikeCount,
  commentCount,
}) => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeType, setActiveType] = useState("post");
  const [searchValue, setSearchValue] = useState("");

  const activeSort = searchParams.get("order") ?? "latest";
  const counts = {
    post: postCount,
    comment: commentCount,
    like: postLikeCount,
  };

  const handleTypeClick = (key) => {
    setActiveType(key);
    navigate(`/community/profile/${userId}/${TYPE_PATH[key]}`);
  };

  const handleSortClick = (key) => {
    // setSearchParams({ order: key });
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("order", key);
      return next;
    });
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleSearch = () => {
    if (!searchValue.trim()) {
      alert("검색어를 입력해 주세요.");
      return;
    }
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("keyword", searchValue.trim());
      return next;
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <S.Wrapper>
      <S.SearchRow>
        <S.SearchBox>
          <S.SearchInput
            type="text"
            placeholder={TYPE_PLACEHOLDER[activeType]}
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <S.SearchIcon src={iconSearch} alt="검색" onClick={handleSearch} />
        </S.SearchBox>
      </S.SearchRow>
      <S.FilterRow>
        {TYPE_LIST.map(({ key, label, icon, iconActive }) => (
          <S.TypeTab
            key={key}
            $active={activeType === key}
            onClick={() => handleTypeClick(key)}
          >
            <S.TabIconLabel>
              <S.TabIcon
                src={activeType === key ? iconActive : icon}
                alt={label}
              />
              <S.TabLabel $active={activeType === key}>{label}</S.TabLabel>
            </S.TabIconLabel>
            <S.CountBadge $active={activeType === key}>{counts[key]}</S.CountBadge>
          </S.TypeTab>
        ))}
        <S.Spacer />
        {/* 인기순 최신순 고려 */}
        <S.SortGroup>
          {SORT_LIST.map(({ key, label }) => (
            <S.SortButton
              key={key}
              $active={activeSort === key}
              onClick={() => handleSortClick(key)}
            >
              {label}
            </S.SortButton>
          ))}
        </S.SortGroup>
      </S.FilterRow>
    </S.Wrapper>
  );
};

export default PostFilterBar;
