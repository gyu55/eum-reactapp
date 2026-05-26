import React from "react";
import * as S from "./style";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <S.PaginationWrap>
    <S.PageArrowBtn onClick={() => onPageChange(Math.max(1, currentPage - 1))}>
      &lt;
    </S.PageArrowBtn>
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
      <S.PageNumBtn key={p} $active={currentPage === p} onClick={() => onPageChange(p)}>
        {p}
      </S.PageNumBtn>
    ))}
    <S.PageArrowBtn onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>
      &gt;
    </S.PageArrowBtn>
  </S.PaginationWrap>
);

export default Pagination;