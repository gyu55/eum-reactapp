import React, { useEffect, useState } from "react";
import LiveChatCardCandidate1 from "../../chat/chatComponents/chatCardCandidate/LiveChatCardCandidate1.jsx";
import LiveChatCardCandidate1Skeleton from "../../chat/skeleton/LiveChatCardCandidate1Skeleton.jsx";
import { getChatRooms } from "../../communityApi/chatApi.js";
import { useChatContext } from "../../context/ChatContext";
import { LiveChatRow } from "../communityPostContainerStyle";

const LiveChatListSection = () => {
  const { openChatRoom } = useChatContext();
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  if (isLoading)
    return (
      <LiveChatRow>
        <LiveChatCardCandidate1Skeleton />
        <LiveChatCardCandidate1Skeleton />
        <LiveChatCardCandidate1Skeleton />
      </LiveChatRow>
    );

  return (
    <LiveChatRow>
      {rooms.map(({ id, ...roomData }) => (
        <LiveChatCardCandidate1
          key={id}
          {...roomData}
          onJoin={() => openChatRoom({ id, ...roomData })}
        />
      ))}
    </LiveChatRow>
  );
};

export default LiveChatListSection;
