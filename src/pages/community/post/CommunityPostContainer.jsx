import React from "react";
import { ColumnBlock } from "../communityStyle";
import T from "../communityTextStyle";
import PostListSection from "./postComponents/PostListSection.jsx";
import LiveChatListSection from "./postComponents/LiveChatListSection.jsx";
import { HeaderBlock } from "./communityPostContainerStyle";
import CreateChatRoomButton from "../chat/chatComponents/CreateChatRoomButton";

const S = {
  ColumnBlock,
  HeaderBlock,
};

// 커뮤니티 메인 (일부 채팅방, 게시글 리스트)
const CommunityPostContainer = () => {
  console.log("메인 영역 그려지기");
  return (
    <div>
      <S.ColumnBlock>
        <S.HeaderBlock>
          <T.H6Bold>실시간 채팅방</T.H6Bold>
          <CreateChatRoomButton />
        </S.HeaderBlock>
        {/* 채팅방 리스트 목록 */}
        <LiveChatListSection />
        {/* 게시글 목록 */}
        <PostListSection />
      </S.ColumnBlock>
    </div>
  );
};

export default CommunityPostContainer;
