import React from "react";
import NoticeCard from "./NoticeCardComponent";
import * as S from "./style.js";

const NoticeSectionComponent = ({ notices = [] }) => {
  if (notices.length === 0) return null;

  return (
    <S.SectionWrap>
      <S.SectionHeader>
        <span>
          <img src="/assets/image/main/noticeIcon.svg" alt="" />
        </span>
        <S.SectionTitle>알려드려요</S.SectionTitle>
      </S.SectionHeader>

      <S.NoticeGrid>
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            id={notice.id}
            tag={notice.noticeCategory}
            title={notice.noticeTitle}
            date={notice.noticeCreateAt ? notice.noticeCreateAt.slice(0, 10).replaceAll("-", ".") : ""}
          />
        ))}
      </S.NoticeGrid>
    </S.SectionWrap>
  );
};

export default NoticeSectionComponent;