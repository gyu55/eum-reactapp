import ReactDOM from "react-dom";
import styled from "styled-components";
import { useChatContext, VIEW, SCREEN } from "../context/ChatContext";
import FloatingChatButton from "./FloatingChatButton";
import SideChat from "../chat/sideChat/SideChat";
import PopupChatScreen from "../chat/popupChat/PopupChatScreen";
import PopupChatRoomSelect from "../chat/popupChat/PopupChatRoomSelect";
import CreateChatRoomModal from "../chat/createChatRoom/CreateChatRoomModal";
import useDraggable from "./useDraggable";

const PopupDarkOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.45);
`;

const PopupDraggableContainer = styled.div`
  position: fixed;
  z-index: 201;
`;

const SideChatWrapper = styled.div`
  position: fixed;
  z-index: 100;
`;

const GlobalChatFloat = () => {
  const { chatRoomDTO, view, screen, isLoading } = useChatContext();

  const {
    pos: sidePos,
    onDragHandleMouseDown: onSideDragMouseDown,
  } = useDraggable(
    Math.max(0, window.innerWidth - 344),
    Math.max(0, window.innerHeight - 532),
  );

  const {
    pos: popupPos,
    onDragHandleMouseDown: onPopupDragMouseDown,
  } = useDraggable(
    Math.max(0, Math.floor((window.innerWidth - 872) / 2)),
    73,
  );

  return ReactDOM.createPortal(
    <>
      {!isLoading && view === null && chatRoomDTO !== null && (
        <FloatingChatButton />
      )}

      {view === VIEW.SIDE && (
        <SideChatWrapper style={{ left: sidePos.x, top: sidePos.y }}>
          <SideChat onDragMouseDown={onSideDragMouseDown} />
        </SideChatWrapper>
      )}

      {view === VIEW.POPUP && <PopupDarkOverlay />}

      {view === VIEW.POPUP && screen === SCREEN.CREATE && (
        <PopupDraggableContainer style={{ left: popupPos.x, top: popupPos.y }}>
          <CreateChatRoomModal onDragMouseDown={onPopupDragMouseDown} />
        </PopupDraggableContainer>
      )}

      {view === VIEW.POPUP && screen === SCREEN.UPDATE && (
        <PopupDraggableContainer style={{ left: popupPos.x, top: popupPos.y }}>
          <CreateChatRoomModal mode="update" onDragMouseDown={onPopupDragMouseDown} />
        </PopupDraggableContainer>
      )}

      {view === VIEW.POPUP && screen === SCREEN.ROOM && (
        <PopupDraggableContainer style={{ left: popupPos.x, top: popupPos.y }}>
          <PopupChatScreen onDragMouseDown={onPopupDragMouseDown} />
        </PopupDraggableContainer>
      )}

      {view === VIEW.POPUP && screen === SCREEN.LIST && (
        <PopupDraggableContainer style={{ left: popupPos.x, top: popupPos.y }}>
          <PopupChatRoomSelect onDragMouseDown={onPopupDragMouseDown} />
        </PopupDraggableContainer>
      )}
    </>,
    document.body,
  );
};

export default GlobalChatFloat;
