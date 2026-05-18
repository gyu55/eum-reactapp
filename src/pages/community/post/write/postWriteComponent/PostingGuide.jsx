import React from "react";
import {
  NoticeItem,
  NoticeList,
  NoticeText,
  NumberBadge,
  SideCard,
  SideCardTitle,
  SideDivider,
  NoticeStrong,
} from "./postWriteComponentStyle";

const PostingGuide = () => {
  const S = {
    NoticeItem,
    NoticeList,
    NoticeText,
    NumberBadge,
    SideCard,
    SideCardTitle,
    SideDivider,
    NoticeStrong,
  };

  return (
    <div>
      <S.SideCard>
        <S.SideCardTitle>📋 작성 가이드</S.SideCardTitle>
        <S.SideDivider />
        <S.NoticeList>
          <S.NoticeItem>
            <S.NumberBadge>
              <span>1</span>
            </S.NumberBadge>
            <S.NoticeText>
              <S.NoticeStrong>카테고리</S.NoticeStrong>를 먼저 선택해 주세요.
              {"\n"}
              글의 성격에 맞는 게시판에 올려야{"\n"}더 많은 분들이 볼 수 있어요.
            </S.NoticeText>
          </S.NoticeItem>
          <S.NoticeItem>
            <S.NumberBadge>
              <span>2</span>
            </S.NumberBadge>
            <S.NoticeText>
              <S.NoticeStrong>제목</S.NoticeStrong>은 내용을 잘 나타낼 수 있도록
              {"\n"}명확하게 작성해 주세요.
            </S.NoticeText>
          </S.NoticeItem>
          <S.NoticeItem>
            <S.NumberBadge>
              <span>3</span>
            </S.NumberBadge>
            <S.NoticeText>
              <S.NoticeStrong>태그</S.NoticeStrong>를 추가하면 비슷한 관심사의
              {"\n"}분들이 글을 더 쉽게 찾아요
            </S.NoticeText>
          </S.NoticeItem>
          <S.NoticeItem>
            <S.NumberBadge>
              <span>4</span>
            </S.NumberBadge>
            <S.NoticeText>
              수어 영상이나 이미지를 첨부하면{"\n"}
              <S.NoticeStrong>훨씬 풍부한 게시글</S.NoticeStrong>이 됩니다.
            </S.NoticeText>
          </S.NoticeItem>
        </S.NoticeList>
      </S.SideCard>
    </div>
  );
};

export default PostingGuide;
