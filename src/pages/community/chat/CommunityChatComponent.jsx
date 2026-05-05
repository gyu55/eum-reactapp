import React from "react";
import LiveChatCard from "./chatComponents/LiveChatCard";
import {
  ActionBtn,
  CategoryPill,
  ColumnBlock,
  RowBlock,
  RowSimpleBlock,
} from "../communityStyle";
import { H6Bold, H7Bold } from "../communityTextStyle";
import PostListCard from "../post/postComponents/PostListCard.jsx";
import styled from "styled-components";
import { flexCenterRow } from "../../../styles/common";

const HeaderBlock = styled.div`
  ${flexCenterRow}
  justify-content: space-between;
  width: 100%;
`;

const CommunityChatComponent = () => {
  return (
    <div>
      <ColumnBlock>
        {/* 상단 헤더 */}
        <HeaderBlock>
          {/* 제목 */}
          <H6Bold>실시간 채팅방</H6Bold>

          {/* 글쓰기 버튼 */}
          <ActionBtn $type="submit">+채팅방 만들기</ActionBtn>
        </HeaderBlock>
        {/* 채팅방 */}
        <RowBlock flexWrap="wrap">
          <LiveChatCard />
          <LiveChatCard />
          <LiveChatCard />
          <LiveChatCard />
          <LiveChatCard />
          <LiveChatCard />
        </RowBlock>
      </ColumnBlock>
    </div>
  );
};

export default CommunityChatComponent;
