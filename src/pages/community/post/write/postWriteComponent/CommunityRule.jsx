import React from "react";
import styled from "styled-components";
import theme from "../../../../../styles/theme";
import { h10Bold, h11Bold, h11Regular } from "../../../../../styles/common";
import {
  NoticeItem,
  NoticeList,
  NoticeText,
  NumberBadge,
  SideCard,
  SideCardTitle,
  SideDivider,
} from "./postWriteComponentStyle";

const CommunityRule = () => {
  /* ── 사이드 카드 공통 ── */

  const NoticeDanger = styled.strong`
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.red};
  `;

  const NoticeGreen = styled.strong`
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.secondary.main};
  `;

  return (
    <div>
      <SideCard>
        <SideCardTitle>커뮤니티 규칙</SideCardTitle>
        <SideDivider />
        <NoticeList>
          <NoticeItem>
            <NumberBadge>
              <span>1</span>
            </NumberBadge>
            <NoticeText>
              <NoticeGreen>서로 존중</NoticeGreen>하고 배려하는 말 사용
            </NoticeText>
          </NoticeItem>
          <NoticeItem>
            <NumberBadge>
              <span>2</span>
            </NumberBadge>
            <NoticeText>
              <NoticeDanger>욕설, 비방</NoticeDanger> 및 혐오 표현{" "}
              <NoticeDanger>금지</NoticeDanger>
            </NoticeText>
          </NoticeItem>
          <NoticeItem>
            <NumberBadge>
              <span>3</span>
            </NumberBadge>
            <NoticeText>
              <NoticeDanger>광고, 홍보성</NoticeDanger> 게시글{" "}
              <NoticeDanger>삭제</NoticeDanger>
            </NoticeText>
          </NoticeItem>
          <NoticeItem>
            <NumberBadge>
              <span>4</span>
            </NumberBadge>
            <NoticeText>
              <NoticeDanger>저작권 침해</NoticeDanger> 콘텐츠{" "}
              <NoticeDanger>금지</NoticeDanger>
            </NoticeText>
          </NoticeItem>
        </NoticeList>
      </SideCard>
    </div>
  );
};

export default CommunityRule;
