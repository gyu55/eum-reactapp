import React, { useState, useEffect } from "react";
import { ColumnBlock, RowBlock } from "../communityStyle";
import T from "../communityTextStyle";
import styled from "styled-components";
import { flexCenterRow } from "../../../styles/common";
import { useChatContext } from "../context/ChatContext";
import { getChatRooms } from "../communityApi/chatApi";
import PageCount from "../post/postComponents/PageCount";
import LiveChatCardCandidate1Skeleton from "./skeleton/LiveChatCardCandidate1Skeleton.jsx";

import LiveChatCardCandidate1 from "./chatComponents/chatCardCandidate/LiveChatCardCandidate1.jsx";
import NoResult from "../common/NoResult.jsx";
import CreateChatRoomButton from "./chatComponents/CreateChatRoomButton";

const HeaderBlock = styled.div`
  ${flexCenterRow}
  justify-content: space-between;
  width: 100%;
`;

const CommunityChatComponent = () => {
  const { openChatRoom } = useChatContext();
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

  // 로딩 중 (스켈레톤)
  if (isLoading)
    return (
      <div>
        <ColumnBlock>
          <RowBlock>
            <LiveChatCardCandidate1Skeleton />
            <LiveChatCardCandidate1Skeleton />
            <LiveChatCardCandidate1Skeleton />
          </RowBlock>
          <RowBlock>
            <LiveChatCardCandidate1Skeleton />
            <LiveChatCardCandidate1Skeleton />
            <LiveChatCardCandidate1Skeleton />
          </RowBlock>
        </ColumnBlock>
      </div>
    );

  // 로딩 완료 후 결과가 없을 때 (결과 없다는 메세지 반환)
  if (!rooms.length)
    return (
      <ColumnBlock>
        <NoResult
          message="실시간 채팅방이 없습니다"
          subMessage="새로운 채팅방을 만들어서 유저들과 소통해 보세요"
        />
      </ColumnBlock>
    );

  return (
    <div>
      <ColumnBlock marginBottom="42px">
        <HeaderBlock>
          <T.H6Bold>실시간 채팅방</T.H6Bold>
          <CreateChatRoomButton />
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
