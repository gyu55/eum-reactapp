import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const VIEW = {
  POPUP: "popup",
  POPUP_SELECT: "popupSelect",
  SIDE: "side",
};

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [activeChatRoom, setActiveChatRoom] = useState(null);
  const [view, setView] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: API 연결 시 아래 mock을 실제 쿼리로 교체
    // const data = await fetchMyActiveChatRoom();
    setActiveChatRoom(null);
    setIsLoading(false);
  }, []);

  // LiveChatCard "참여하기" 클릭 → 팝업 오픈
  const openChatRoom = useCallback((roomInfo) => {
    setActiveChatRoom(roomInfo);
    setView(VIEW.POPUP);
  }, []);

  // 팝업 최소화 → 사이드 채팅 표시 (activeChatRoom 유지)
  const minimizeChat = useCallback(() => {
    setView(VIEW.SIDE);
  }, []);

  // 사이드 채팅 닫기 → 플로팅 버튼 표시 (activeChatRoom 유지)
  const closeSideChat = useCallback(() => {
    setView(null);
  }, []);

  // 팝업 닫기(X) → 채팅 종료
  const closeChat = useCallback(() => {
    setActiveChatRoom(null);
    setView(null);
  }, []);

  // 플로팅 버튼 클릭 → 팝업 재오픈
  const reopenChat = useCallback(() => {
    setView(VIEW.POPUP);
  }, []);

  // 팝업에서 "나가기" → 채팅방 선택 화면
  const handleLeave = useCallback(() => {
    setView(VIEW.POPUP_SELECT);
  }, []);

  // 채팅방 선택 화면에서 방 선택 → 팝업 오픈
  const handleSelectRoom = useCallback(() => {
    setView(VIEW.POPUP);
  }, []);

  // 채팅방 선택 화면 최소화
  const handleSelectMinimize = useCallback(() => {
    setView(null);
  }, []);

  // 채팅방 선택 화면 닫기(X) → 채팅 종료
  const handleSelectClose = useCallback(() => {
    setActiveChatRoom(null);
    setView(null);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        activeChatRoom,
        view,
        isLoading,
        openChatRoom,
        minimizeChat,
        closeChat,
        closeSideChat,
        reopenChat,
        handleLeave,
        handleSelectRoom,
        handleSelectMinimize,
        handleSelectClose,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  if (!ctx)
    throw new Error(
      "useChatContext는 ChatProvider 내부에서만 사용할 수 있습니다.",
    );
  return ctx;
};
