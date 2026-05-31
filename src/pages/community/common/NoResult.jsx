import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import T from "../communityTextStyle";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 16px;
`;

const IconCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${theme.PALETTE.primary.extraLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11"
      cy="11"
      r="7"
      stroke={theme.PALETTE.primary.main}
      strokeWidth="2"
    />
    <line
      x1="16.5"
      y1="16.5"
      x2="21"
      y2="21"
      stroke={theme.PALETTE.primary.main}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="8"
      y1="11"
      x2="14"
      y2="11"
      stroke={theme.PALETTE.primary.main}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="11"
      y1="8"
      x2="11"
      y2="14"
      stroke={theme.PALETTE.primary.main}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const NoResult = ({
  message = "게시글이 없습니다",
  subMessage = "다른 카테고리를 선택하거나 새 글을 작성해 보세요",
}) => {
  return (
    <Wrapper>
      <IconCircle>
        <SearchIcon />
      </IconCircle>
      <T.H8Bold $color={theme.TEXT_COLOR.basic}>{message}</T.H8Bold>
      <T.H10Regular $color={theme.GRAYSCALE[9]}>{subMessage}</T.H10Regular>
    </Wrapper>
  );
};

export default NoResult;
