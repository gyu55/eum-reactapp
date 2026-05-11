import React from "react";
import styled from "styled-components";
import S from "../communityStyle";
import SideUserProfile from "./SideUserProfile copy";
import SideNotice from "./SideNotice";
import FloatingChatButton from "./FloatingChatButton";
import PopupChatScreen from "../chat/PopupChatScreen";
import PopupChatRoomSelect from "../chat/PopupChatRoomSelect";
import SideChat from "../chat/sideChat/SideChat";
import { useChatContext, VIEW } from "../context/ChatContext";

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  overflow-y: auto;
`;

const MainRightSide = () => {
  const { activeChatRoom, view, isLoading, reopenChat } = useChatContext();

  return (
    <div>
      <S.ColumnBlock width="312px">
        <SideUserProfile />
        <SideNotice />

        {/* 플로팅 버튼 — 진행 중인 채팅이 있고 팝업이 닫혀 있을 때만 표시 */}
        {!isLoading && view === null && activeChatRoom !== null && (
          <FloatingChatButton
            roomName={activeChatRoom.title}
            liveCount={`${activeChatRoom.participantCount}명`}
            onClick={reopenChat}
          />
        )}
      </S.ColumnBlock>

      {/* 사이드 채팅 — 팝업 축소 시 표시 */}
      {view === VIEW.SIDE && <SideChat />}

      {/* 팝업 채팅 화면 — position: fixed 오버레이 */}
      {view === VIEW.POPUP && (
        <PopupOverlay>
          <PopupChatScreen />
        </PopupOverlay>
      )}

      {/* 채팅방 선택 팝업 — 채팅방 나가기 시 표시 */}
      {view === VIEW.POPUP_SELECT && (
        <PopupOverlay>
          <PopupChatRoomSelect />
        </PopupOverlay>
      )}
    </div>
  );
};

export default MainRightSide;
