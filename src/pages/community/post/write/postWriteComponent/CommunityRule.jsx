import React from "react";
import {
  NoticeItem,
  NoticeList,
  NoticeText,
  NumberBadge,
  SideCard,
  SideCardTitle,
  SideDivider,
  NoticeDanger,
  NoticeGreen,
} from "./postWriteComponentStyle";

const CommunityRule = () => {
  const S = {
    NoticeItem,
    NoticeList,
    NoticeText,
    NumberBadge,
    SideCard,
    SideCardTitle,
    SideDivider,
    NoticeDanger,
    NoticeGreen,
  };

  return (
    <div>
      <S.SideCard>
        <S.SideCardTitle>커뮤니티 규칙</S.SideCardTitle>
        <S.SideDivider />
        <S.NoticeList>
          <S.NoticeItem>
            <S.NumberBadge>
              <span>1</span>
            </S.NumberBadge>
            <S.NoticeText>
              <S.NoticeGreen>서로 존중</S.NoticeGreen>하고 배려하는 말 사용
            </S.NoticeText>
          </S.NoticeItem>
          <S.NoticeItem>
            <S.NumberBadge>
              <span>2</span>
            </S.NumberBadge>
            <S.NoticeText>
              <S.NoticeDanger>욕설, 비방</S.NoticeDanger> 및 혐오 표현{" "}
              <S.NoticeDanger>금지</S.NoticeDanger>
            </S.NoticeText>
          </S.NoticeItem>
          <S.NoticeItem>
            <S.NumberBadge>
              <span>3</span>
            </S.NumberBadge>
            <S.NoticeText>
              <S.NoticeDanger>광고, 홍보성</S.NoticeDanger> 게시글{" "}
              <S.NoticeDanger>삭제</S.NoticeDanger>
            </S.NoticeText>
          </S.NoticeItem>
          <S.NoticeItem>
            <S.NumberBadge>
              <span>4</span>
            </S.NumberBadge>
            <S.NoticeText>
              <S.NoticeDanger>저작권 침해</S.NoticeDanger> 콘텐츠{" "}
              <S.NoticeDanger>금지</S.NoticeDanger>
            </S.NoticeText>
          </S.NoticeItem>
        </S.NoticeList>
      </S.SideCard>
    </div>
  );
};

export default CommunityRule;
