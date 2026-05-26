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

export default NoticeRow;