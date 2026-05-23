import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ColumnBlock, ActionBtn, CategoryPill } from "../communityStyle";
import T from "../communityTextStyle";
import PostListSection from "./postComponents/PostListSection.jsx";
import { useChatContext } from "../context/ChatContext";
import { POST_CATEGORIES } from "../constants";
import {
  HeaderBlock,
  LiveChatRow,
  PostHeader,
  PostCategoryHeader,
  PostCategoryRow,
  AllChatButton,
} from "./communityPostContainerStyle";
import LiveChatCardCandidate1 from "../chat/chatComponents/chatCardCandidate/LiveChatCardCandidate1.jsx";
import { getChatRooms } from "../communityApi/chatApi.js";


const S = {
  ColumnBlock,
  ActionBtn,
  CategoryPill,
  HeaderBlock,
  LiveChatRow,
  PostHeader,
  PostCategoryHeader,
  PostCategoryRow,
  AllChatButton,
};

// 컴포넌트
const CommunityPostContainer = () => {
  const { openChatRoom, openCreateChatRoom } = useChatContext();
  const [selectedTag, setSelectedTag] = useState("");

  // 채팅방 관련
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 최초 3개의 채팅방만 불러오기
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const data = await getChatRooms(1, 3);
        setRooms(data.rooms);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  console.log("메인 영역 그려지기");
  return (
    <div>
      {/* <CommunityPostComponent /> */}
      <S.ColumnBlock>
        {/* 상단 헤더 */}
        <S.HeaderBlock>
          {/* 제목 */}
          <T.H6Bold>실시간 채팅방</T.H6Bold>

          {/* 글쓰기 버튼 */}
          <S.ActionBtn $type="submit" onClick={openCreateChatRoom}>
            +채팅방 만들기
          </S.ActionBtn>
        </S.HeaderBlock>
        {/* 채팅방 */}
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          <S.LiveChatRow>
            {rooms.map(({ id, ...roomData }) => (
              <LiveChatCardCandidate1
                key={id}
                {...roomData}
                onJoin={() => openChatRoom(...roomData)}
              />
            ))}
          </S.LiveChatRow>
        )}
        {/* 채팅방 모두 보기 버튼 */}
        <S.AllChatButton>
          <Link to={"/community/chat"}>전체 보기 →</Link>
        </S.AllChatButton>
        {/* 포스트 영역 헤더 */}
        <S.PostHeader>
          <T.H7Bold>게시글</T.H7Bold>
        </S.PostHeader>
        {/* 카테고리 및 글쓰기 버튼 */}
        <S.PostCategoryHeader>
          {/* 카테고리 */}
          <S.PostCategoryRow>
            {POST_CATEGORIES.map(({ label, value }) => (
              <S.CategoryPill
                key={value}
                $active={selectedTag === value}
                onClick={() => setSelectedTag(value)}
              >
                {label}
              </S.CategoryPill>
            ))}
          </S.PostCategoryRow>
          <Link to="/community/post/write">
            <S.ActionBtn $type="submit">글쓰기</S.ActionBtn>
          </Link>

          {/* 글쓰기 */}
        </S.PostCategoryHeader>
        {/* 포스트 카드 목록 + 페이지네이션 */}
        <PostListSection postTag={selectedTag} />
      </S.ColumnBlock>
    </div>
  );
};

export default CommunityPostContainer;
