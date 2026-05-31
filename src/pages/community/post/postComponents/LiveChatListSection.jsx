import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LiveChatCardCandidate1 from "../../chat/chatComponents/chatCardCandidate/LiveChatCardCandidate1.jsx";
import LiveChatCardCandidate1Skeleton from "../../chat/skeleton/LiveChatCardCandidate1Skeleton.jsx";
import { getChatRooms } from "../../communityApi/chatApi.js";
import { useChatContext } from "../../context/ChatContext";
import { LiveChatRow, AllChatButton } from "../communityPostContainerStyle";
import { RowBlock } from "../../communityStyle";
import { useSearchParams } from "react-router-dom";
import PageCount from "./PageCount";
import NoResult from "../../common/NoResult";

const LiveChatListSection = () => {
  const { openChatRoom } = useChatContext();
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";

  const isSearchMode = keyword !== "";
  const size = isSearchMode ? 6 : 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [keyword]);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const data = await getChatRooms(currentPage, size, keyword);
        setRooms(data.rooms);
        setTotalPages(data.totalPages ?? 1);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [size, currentPage, keyword]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSearchMode) {
    return (
      <>
        <RowBlock flexWrap="wrap">
          {isLoading ? (
            <>
              <LiveChatCardCandidate1Skeleton />
              <LiveChatCardCandidate1Skeleton />
              <LiveChatCardCandidate1Skeleton />
            </>
          ) : rooms.length === 0 ? (
            <NoResult
              message="검색 결과가 없습니다"
              subMessage={`'${keyword}'에 해당하는 채팅방이 없습니다`}
            />
          ) : (
            rooms.map(({ id, ...roomData }) => (
              <LiveChatCardCandidate1
                key={id}
                {...roomData}
                onJoin={() => openChatRoom({ id, ...roomData })}
              />
            ))
          )}
        </RowBlock>
        {!isLoading && totalPages > 1 && (
          <PageCount
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </>
    );
  }

  return (
    <>
      <LiveChatRow>
        {isLoading ? (
          <>
            <LiveChatCardCandidate1Skeleton />
            <LiveChatCardCandidate1Skeleton />
            <LiveChatCardCandidate1Skeleton />
          </>
        ) : rooms.length ? (
          rooms.map(({ id, ...roomData }) => (
            <LiveChatCardCandidate1
              key={id}
              {...roomData}
              onJoin={() => openChatRoom({ id, ...roomData })}
            />
          ))
        ) : (
          <NoResult
            message="실시간 채팅방이 없습니다"
            subMessage="새로운 채팅방을 만들어서 유저들과 소통해 보세요"
          />
        )}
      </LiveChatRow>
      <AllChatButton>
        <Link to={"/community/chat"}>전체 보기 →</Link>
      </AllChatButton>
    </>
  );
};

export default LiveChatListSection;
