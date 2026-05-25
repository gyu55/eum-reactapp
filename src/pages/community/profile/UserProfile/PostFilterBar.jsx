import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../../styles/theme";

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
  counts = { post: 42, comment: 42, like: 42 },
  onSortChange,
  onSearch,
}) => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeType, setActiveType] = useState("post");
  const [searchValue, setSearchValue] = useState("");

  const activeSort = searchParams.get("order") ?? "latest";

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
    <Wrapper>
      <SearchRow>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder={TYPE_PLACEHOLDER[activeType]}
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <SearchIcon src={iconSearch} alt="검색" onClick={handleSearch} />
        </SearchBox>
      </SearchRow>
      <FilterRow>
        {TYPE_LIST.map(({ key, label, icon, iconActive }) => (
          <TypeTab
            key={key}
            $active={activeType === key}
            onClick={() => handleTypeClick(key)}
          >
            <TabIconLabel>
              <TabIcon
                src={activeType === key ? iconActive : icon}
                alt={label}
              />
              <TabLabel $active={activeType === key}>{label}</TabLabel>
            </TabIconLabel>
            <CountBadge $active={activeType === key}>{counts[key]}</CountBadge>
          </TypeTab>
        ))}
        <Spacer />
        {/* 인기순 최신순 고려 */}
        <SortGroup>
          {SORT_LIST.map(({ key, label }) => (
            <SortButton
              key={key}
              $active={activeSort === key}
              onClick={() => handleSortClick(key)}
            >
              {label}
            </SortButton>
          ))}
        </SortGroup>
      </FilterRow>
    </Wrapper>
  );
};

export default PostFilterBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const SearchRow = styled.div`
  display: flex;
  justify-content: center;
`;

// 검색창 관련
const SearchBox = styled.div`
  width: 536px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  line-height: 24px;
  letter-spacing: -0.28px;
  color: ${theme.TEXT_COLOR.basic};
  background: transparent;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const TypeTab = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid
    ${({ $active }) =>
      $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};
  background: ${({ $active }) =>
    $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[10]};
  cursor: pointer;
  flex-shrink: 0;
`;

const TabIconLabel = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const TabIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const TabLabel = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  line-height: 24px;
  letter-spacing: -0.28px;
  color: ${({ $active }) =>
    $active ? theme.PALETTE.white : theme.GRAYSCALE[9]};
  white-space: nowrap;
`;

const CountBadge = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 100px;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: normal;
  color: ${({ $active }) =>
    $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[9]};
  white-space: nowrap;
`;

const Spacer = styled.div`
  flex: 1;
  min-width: 1px;
`;

const SortGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

const SortButton = styled.button`
  padding: 6px 16px;
  border-radius: 10px;
  border: 1px solid
    ${({ $active }) =>
      $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};
  background: ${({ $active }) =>
    $active ? theme.PALETTE.primary.extraLight : theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: normal;
  color: ${theme.GRAYSCALE[9]};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
`;
