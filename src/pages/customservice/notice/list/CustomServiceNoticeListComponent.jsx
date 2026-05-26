import React from "react";
import * as S from "./style";
import Pagination from "./PageNation";
import NoticeRow from "./NoticeRow";

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