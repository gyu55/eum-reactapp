import React from "react";
import * as S from "./style";

const NoticeRow = ({ notice, onNoticeClick }) => (
  <S.Tr onClick={() => onNoticeClick(notice)}>
    <S.TdCenter>
      {notice.noticePinned === 1 ? <span style={{ fontSize: 16 }}>📌</span> : notice.id}
    </S.TdCenter>
    <S.TdCenter>
      <S.CategoryBadge $category={notice.noticeCategory}>
        {notice.noticeCategory}
      </S.CategoryBadge>
    </S.TdCenter>
    <S.TdTitle $pinned={notice.noticePinned === 1}>
      {notice.noticeTitle}
    </S.TdTitle>
    <S.TdDate>
      {notice.noticeCreateAt ? notice.noticeCreateAt.slice(0, 10).replaceAll("-", ".") : ""}
    </S.TdDate>
  </S.Tr>
);

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

const CustomServiceNoticeListComponent = ({
  notices = [],
  tabs = [],
  activeTab,
  currentPage,
  totalPages,
  isLoading,
  error,
  onTabChange,
  onPageChange,
  onNoticeClick,
  onWriteClick,
  isAdmin = false,
}) => {
  if (isLoading) return <S.StatusMessage>불러오는 중...</S.StatusMessage>;
  if (error)     return <S.StatusMessage $error>{error}</S.StatusMessage>;

  return (
    <S.ListWrap>
      {/* 탭 + 글쓰기 버튼 */}
      <S.ListHeader>
        <S.TabRow>
          {tabs.map((tab) => (
            <S.TabBtn key={tab} $active={activeTab === tab} onClick={() => onTabChange(tab)}>
              {tab}
            </S.TabBtn>
          ))}
        </S.TabRow>
        {isAdmin && (
          <S.WriteBtn onClick={onWriteClick}>+ 글쓰기</S.WriteBtn>
        )}
      </S.ListHeader>

      {/* 테이블 */}
      <S.Table>
        <S.Thead>
          <S.ThRow>
            {["번호", "분류", "제목", "작성일"].map((h) => (
              <S.Th key={h} $left={h === "제목"}>{h}</S.Th>
            ))}
          </S.ThRow>
        </S.Thead>
        <tbody>
          {notices.map((notice) => (
            <NoticeRow key={notice.id} notice={notice} onNoticeClick={onNoticeClick} />
          ))}
        </tbody>
      </S.Table>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </S.ListWrap>
  );
};

export default CustomServiceNoticeListComponent;
