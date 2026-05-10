import React from "react";
import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";
import { h11Bold, h11Regular } from "../../../../styles/common";

const PageButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 42px;
`;

const buttonStyle = css`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PageButton = styled.div`
  ${buttonStyle}
  border: 2px solid ${theme.GRAYSCALE[8]};
  ${h11Regular}
`;

const HighlightButton = styled.div`
  ${buttonStyle}
  border: 2px solid ${theme.PALETTE.primary.main};
  background: ${theme.PALETTE.primary.main};
  ${h11Bold}
  color: ${theme.PALETTE.white};
`;

const PageCount = ({ totalPages = 1, currentPage = 1, onPageChange }) => {
  return (
    <PageButtonRow>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
        page === currentPage ? (
          <HighlightButton key={page}>{page}</HighlightButton>
        ) : (
          <PageButton key={page} onClick={() => onPageChange(page)}>
            {page}
          </PageButton>
        ),
      )}
    </PageButtonRow>
  );
};

export default PageCount;
