import { useState } from "react";
import styled from "styled-components";
import theme from "../../../../styles/theme";

// Figma asset URLs — 7일 후 만료
const ICON_POST =
  "https://www.figma.com/api/mcp/asset/bd7c9cbe-6afa-409f-9c53-c0502569a2ed";
const ICON_COMMENT =
  "https://www.figma.com/api/mcp/asset/f4441c11-e0f1-4839-9118-e67a6d221989";
const ICON_LIKE =
  "https://www.figma.com/api/mcp/asset/ce27d7c9-7075-4b28-96b1-4fc59784fd73";
const ICON_SEARCH =
  "https://www.figma.com/api/mcp/asset/27421e9c-a690-4a9d-ad0f-4a381195ea09";

const TYPE_LIST = [
  { key: "post", label: "작성 게시글", icon: ICON_POST },
  { key: "comment", label: "작성 댓글", icon: ICON_COMMENT },
  { key: "like", label: "좋아요한 글", icon: ICON_LIKE },
];

const SORT_LIST = [
  { key: "latest", label: "최신순" },
  { key: "popular", label: "인기순" },
];

const PostFilterBar = ({
  counts = { post: 42, comment: 42, like: 42 },
  onTypeChange,
  onSortChange,
  onSearch,
}) => {
  const [activeType, setActiveType] = useState("post");
  const [activeSort, setActiveSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  const handleTypeClick = (key) => {
    setActiveType(key);
    onTypeChange?.(key);
  };

  const handleSortClick = (key) => {
    setActiveSort(key);
    onSortChange?.(key);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <Wrapper>
      <SearchRow>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="게시글 검색"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <SearchIcon src={ICON_SEARCH} alt="검색" />
        </SearchBox>
      </SearchRow>
      <FilterRow>
        {TYPE_LIST.map(({ key, label, icon }) => (
          <TypeTab
            key={key}
            $active={activeType === key}
            onClick={() => handleTypeClick(key)}
          >
            <TabIconLabel>
              <TabIcon src={icon} alt={label} />
              <TabLabel $active={activeType === key}>{label}</TabLabel>
            </TabIconLabel>
            <CountBadge $active={activeType === key}>{counts[key]}</CountBadge>
          </TypeTab>
        ))}
        <Spacer />
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
