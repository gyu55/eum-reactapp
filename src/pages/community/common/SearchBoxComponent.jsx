import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import iconSearch from "../assets/icon/search.svg";
import { useSearchParams } from "react-router-dom";

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

const SearchBoxComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = () => {
    if (!searchValue.trim()) {
      alert("검색어를 입력해 주세요.");
      return;
    }
    setSearchParams(
      { keyword: searchValue.trim() },
      { preventScrollReset: true },
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <SearchBox>
        <SearchInput
          type="text"
          placeholder="통합 검색"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon src={iconSearch} alt="검색" onClick={handleSubmit} />
      </SearchBox>
    </div>
  );
};

export default SearchBoxComponent;
