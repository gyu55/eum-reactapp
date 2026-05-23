import React from "react";
import { Link } from "react-router-dom";
import { ColumnBlock, ActionBtn } from "../communityStyle";
import T from "../communityTextStyle";
import PostListSection from "./postComponents/PostListSection.jsx";
import LiveChatListSection from "./postComponents/LiveChatListSection.jsx";
import { useChatContext } from "../context/ChatContext";
import {
  HeaderBlock,
  AllChatButton,
} from "./communityPostContainerStyle";

const S = {
  ColumnBlock,
  ActionBtn,
  HeaderBlock,
  AllChatButton,
};

const CommunityPostContainer = () => {
  const { openCreateChatRoom } = useChatContext();

  console.log("메인 영역 그려지기");
  return (
    <div>
      <S.ColumnBlock>
        <S.HeaderBlock>
          <T.H6Bold>실시간 채팅방</T.H6Bold>
          <S.ActionBtn $type="submit" onClick={openCreateChatRoom}>
            +채팅방 만들기
          </S.ActionBtn>
        </S.HeaderBlock>
        <LiveChatListSection />
        <S.AllChatButton>
          <Link to={"/community/chat"}>전체 보기 →</Link>
        </S.AllChatButton>
        <PostListSection />
      </S.ColumnBlock>
    </div>
  );
};

export default CommunityPostContainer;
