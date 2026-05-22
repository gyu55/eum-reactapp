import { useState, useEffect, useRef } from "react";
import { getChatRooms } from "../../communityApi/chatApi";

// const toDisplayRoom = (room) => ({
//   id, chatRoomName, chatRoomDetail,
// });
// const toDisplayRoom = (room) => ({
//   id: room.id,
//   name: room.chatRoomName,
//   detail: room.chatRoomDetail,
//   count: room.chatRoomUsers ?? 0,
//   isLive: true,
//   thumbnail: room.chatRoomProfile ?? null,
// });

const useChatRoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    getChatRooms(page)
      .then((data) => {
        if (cancelled) return;
        const newRooms = (data.rooms ?? []).map(
          ({ id, chatRoomName, chatRoomDetail, chatRoomUsers, chatRoomProfile }) => ({
            id,
            chatRoomName,
            chatRoomDetail,
            chatRoomUsers: chatRoomUsers ?? 0,
            isLive: true,
            chatRoomProfile: chatRoomProfile ?? null,
          })
        );
        setRooms((prev) => (page === 1 ? newRooms : [...prev, ...newRooms]));
        setHasMore(page < (data.totalPages ?? 1));
      })
      .catch((err) => {
        if (!cancelled) console.error("채팅방 목록 불러오기 실패:", err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [page]);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPage((p) => p + 1);
      },
      { threshold: 0.5 },
    );

    const el = loaderRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  return { rooms, isLoading, hasMore, loaderRef };
};

export default useChatRoomList;
