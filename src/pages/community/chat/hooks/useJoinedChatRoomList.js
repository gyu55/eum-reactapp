import { useState, useEffect, useRef } from "react";
import { getJoinedChatRooms } from "../../communityApi/chatApi";

const formatLastTime = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr.replace(" ", "T"));
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  if (isToday) {
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
  return `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};

const toDisplayRoom = (room) => ({
  id: room.id,
  chatRoomName: room.chatRoomName,
  chatRoomUsers: room.chatRoomUsers ?? 0,
  time: formatLastTime(room.chatLastReadAt),
  chatRoomDetail: room.chatRoomDetail ?? "",
  chatRoomProfile: room.chatRoomProfile ?? null,
});

const useJoinedChatRoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    getJoinedChatRooms(page)
      .then((data) => {
        if (cancelled) return;
        const newRooms = (data.rooms ?? []).map(toDisplayRoom);
        setRooms((prev) => (page === 1 ? newRooms : [...prev, ...newRooms]));
        setHasMore(page < (data.totalPages ?? 1));
      })
      .catch((err) => {
        if (!cancelled) console.error("참여중인 채팅방 목록 불러오기 실패:", err);
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

export default useJoinedChatRoomList;
