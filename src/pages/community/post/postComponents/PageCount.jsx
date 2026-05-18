import React from "react";
import { PageButtonRow, PageButton, HighlightButton } from "./pageCountStyle";

const S = {
  PageButtonRow,
  PageButton,
  HighlightButton,
};

const PageCount = ({ totalPages = 1, currentPage = 1, onPageChange }) => {
  return (
    <S.PageButtonRow>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
        page === currentPage ? (
          <S.HighlightButton key={page}>{page}</S.HighlightButton>
        ) : (
          <S.PageButton key={page} onClick={() => onPageChange(page)}>
            {page}
          </S.PageButton>
        ),
      )}
    </S.PageButtonRow>
  );
};

export default PageCount;
