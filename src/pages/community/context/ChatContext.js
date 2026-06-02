import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// ─────────────────────────────────────────────────────────────────────────────
// 채팅 상태 enum
//   - 사이드/팝업 모두가 동일한 상태(view, screen, listFilter)를 공유하도록 통합
//   - 기존에 constants.js 에 있던 TYPE 도 SCREEN + LIST_FILTER 로 분리해 흡수
// ─────────────────────────────────────────────────────────────────────────────

// 창 형태: 어떤 컨테이너로 보일지만 결정
export const VIEW = {
  POPUP: "popup",
  SIDE: "side",
  // null = 닫힘 (chatRoomDTO 이 있으면 플로팅 버튼이 노출됨)
};

// 화면 종류: 채팅방 안인지 / 채팅방을 고르는 화면인지 / 채팅방을 만드는 화면인 지
export const SCREEN = {
  ROOM: "room",
  LIST: "list",
  CREATE: "create",
};

// LIST 화면 안에서 어떤 필터(목록 종류)가 활성인지
//   - LIVE/REQUEST 는 사이드/팝업 공통
//   - ONGOING 은 사이드의 "채팅중인 방" / 팝업 우측 패널
//   - FOLLOW 는 팝업 전용 (사이드에서는 ONGOING 으로 폴백)
export const LIST_FILTER = {
  LIVE: "live",
  ONGOING: "ongoing",
  REQUEST: "request",
  FOLLOW: "follow",
};

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [chatRoomDTO, setChatRoomDTO] = useState(null);
  const [view, setView] = useState(null);
  const [screen, setScreen] = useState(SCREEN.LIST);
  const [listFilter, setListFilter] = useState(LIST_FILTER.LIVE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: API 연결 시 fetchMyActiveChatRoom() 로 교체
    setChatRoomDTO(null);
    setIsLoading(false);
  }, []);

  // ── 진입 ───────────────────────────────────────────────────────────────
  // 채팅방 생성하는 팝업 띄우기
  const openCreateChatRoom = useCallback(() => {
    setScreen(SCREEN.CREATE);
    setView(VIEW.POPUP);
  }, []);

  // 메인의 채팅방 카드 클릭 → 팝업 + 채팅방 화면
  const openChatRoom = useCallback((room) => {
    setChatRoomDTO(room);
    setScreen(SCREEN.ROOM);
    setView(VIEW.POPUP);
  }, []);

  // 목록(사이드/팝업)에서 방 선택 → 현재 view 유지하고 ROOM 으로 전환
  const selectRoom = useCallback((room) => {
    if (room) setChatRoomDTO(room);
    setScreen(SCREEN.ROOM);
  }, []);

  // 채팅방 생성 시 할 동작
  // 불러온 정보 저장
  // 해당 정보를 바탕으로 만든 채팅방으로 이동
  const createChatRoom = useCallback((chatRoomDTO) => {
    // 반환되는 채팅방 id 를 통해서 채팅방 정보 불러오기
    setChatRoomDTO(chatRoomDTO);
    setScreen(SCREEN.ROOM);
  }, []);

  // ── 화면 전환 ──────────────────────────────────────────────────────────
  // 채팅방 → 목록 (현재 view 유지, listFilter 도 유지하여 사용자가 보던 탭 보존)
  const leaveRoom = useCallback(() => {
    setScreen(SCREEN.LIST);
  }, []);

  const changeListFilter = useCallback((filter) => {
    setListFilter(filter);
  }, []);

  // ── 창 형태 토글 ───────────────────────────────────────────────────────
  // 팝업 → 사이드: FOLLOW 는 사이드에 미존재 → ONGOING 으로 폴백
  const minimizeView = useCallback(() => {
    setListFilter((prev) =>
      prev === LIST_FILTER.FOLLOW ? LIST_FILTER.ONGOING : prev,
    );
    setView(VIEW.SIDE);
  }, []);

  // 사이드 → 팝업: ONGOING 은 팝업 좌측 탭에 미존재 → LIVE 로 폴백
  // (팝업 우측 패널이 항상 진행중인 방을 보여주므로 데이터 자체는 계속 노출됨)
  const expandView = useCallback(() => {
    setListFilter((prev) =>
      prev === LIST_FILTER.ONGOING ? LIST_FILTER.LIVE : prev,
    );
    setView(VIEW.POPUP);
  }, []);

  // ── 닫기/재오픈 ────────────────────────────────────────────────────────
  // 팝업 채팅방 생성 창 그냥 닫기
  const closeCreateRoomPopup = useCallback(() => {
    setView(null);
  }, []);

  // LIST 에서 닫으면 채팅 자체 종료 (chatRoomDTO 도 제거 → 플로팅 버튼 미노출)
  // ROOM 에서 닫으면 chatRoomDTO 유지 → 플로팅 버튼 노출
  const closeView = useCallback(() => {
    if (screen === SCREEN.LIST) {
      setChatRoomDTO(null);
    }
    setView(null);
  }, [screen]);

  const reopenChat = useCallback(() => {
    setScreen(SCREEN.ROOM);
    setView(VIEW.POPUP);
  }, []);

  const deleteRoom = useCallback(() => {
    setChatRoomDTO(null);
    setView(null);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        // state
        chatRoomDTO,
        view,
        screen,
        listFilter,
        isLoading,
        // actions
        createChatRoom,
        openCreateChatRoom,
        openChatRoom,
        selectRoom,
        leaveRoom,
        changeListFilter,
        minimizeView,
        expandView,
        closeView,
        closeCreateRoomPopup,
        reopenChat,
        deleteRoom,
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
