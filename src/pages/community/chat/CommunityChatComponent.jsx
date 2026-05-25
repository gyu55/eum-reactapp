import React, { useState, useEffect } from "react";
import { ColumnBlock, ActionBtn, RowBlock } from "../communityStyle";
import T from "../communityTextStyle";
import styled from "styled-components";
import { flexCenterRow } from "../../../styles/common";
import { useChatContext } from "../context/ChatContext";
import { getChatRooms } from "../communityApi/chatApi";
import PageCount from "../post/postComponents/PageCount";

import LiveChatCardCandidate1 from "./chatComponents/chatCardCandidate/LiveChatCardCandidate1.jsx";

const HeaderBlock = styled.div`
  ${flexCenterRow}
  justify-content: space-between;
  width: 100%;
`;

const CommunityChatComponent = () => {
  const { openChatRoom, openCreateChatRoom } = useChatContext();
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const data = await getChatRooms(currentPage);
        setRooms(data.rooms);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div>
      <ColumnBlock marginBottom="42px">
        <HeaderBlock>
          <T.H6Bold>실시간 채팅방</T.H6Bold>
          <ActionBtn $type="submit" onClick={openCreateChatRoom}>
            +채팅방 만들기
          </ActionBtn>
        </HeaderBlock>

        <RowBlock flexWrap="wrap">
          {rooms.map(({ id, ...roomData }) => (
            <LiveChatCardCandidate1
              key={id}
              {...roomData}
              onJoin={() => openChatRoom({ id, ...roomData })}
            />
          ))}
        </RowBlock>

        {totalPages > 1 && (
          <PageCount
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </ColumnBlock>
    </div>
  );
};

export default CommunityChatComponent;
