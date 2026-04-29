import React from "react";
import {
  NoticeItem,
  NoticeList,
  NoticeText,
  NumberBadge,
  SideCard,
  SideCardTitle,
  SideDivider,
} from "./postWriteComponentStyle";
import styled from "styled-components";
import theme from "../../../../../styles/theme";

const PostingGuide = () => {
  const NoticeStrong = styled.strong`
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.TEXT_COLOR.basic};
  `;
  return (
    <div>
      <SideCard>
        <SideCardTitle>📋 작성 가이드</SideCardTitle>
        <SideDivider />
        <NoticeList>
          <NoticeItem>
            <NumberBadge>
              <span>1</span>
            </NumberBadge>
            <NoticeText>
              <NoticeStrong>카테고리</NoticeStrong>를 먼저 선택해 주세요.
              {"\n"}
              글의 성격에 맞는 게시판에 올려야{"\n"}더 많은 분들이 볼 수 있어요.
            </NoticeText>
          </NoticeItem>
          <NoticeItem>
            <NumberBadge>
              <span>2</span>
            </NumberBadge>
            <NoticeText>
              <NoticeStrong>제목</NoticeStrong>은 내용을 잘 나타낼 수 있도록
              {"\n"}명확하게 작성해 주세요.
            </NoticeText>
          </NoticeItem>
          <NoticeItem>
            <NumberBadge>
              <span>3</span>
            </NumberBadge>
            <NoticeText>
              <NoticeStrong>태그</NoticeStrong>를 추가하면 비슷한 관심사의
              {"\n"}분들이 글을 더 쉽게 찾아요
            </NoticeText>
          </NoticeItem>
          <NoticeItem>
            <NumberBadge>
              <span>4</span>
            </NumberBadge>
            <NoticeText>
              수어 영상이나 이미지를 첨부하면{"\n"}
              <NoticeStrong>훨씬 풍부한 게시글</NoticeStrong>이 됩니다.
            </NoticeText>
          </NoticeItem>
        </NoticeList>
      </SideCard>
    </div>
  );
};

export default PostingGuide;
