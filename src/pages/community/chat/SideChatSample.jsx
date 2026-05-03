import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts, radius } from "../constants";
import SideChatListComponent from "./chatComponents/SideChatListComponent";
import SideChatRequestComponent from "./chatComponents/SideChatRequestComponent";
import SideChatComponent from "./chatComponents/SideChatComponent";

// ─── Page ─────────────────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${colors.bgPage};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GuideBox = styled.div`
  background: ${colors.bgCard};
  border-radius: ${radius.card};
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  max-width: 480px;
  width: 100%;
`;

const PageTitle = styled.h2`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xl};
  color: ${colors.textMain};
  margin: 0;
`;

const Description = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${colors.textSub};
  margin: 0;
  line-height: 1.6;
`;

const FlowList = styled.ul`
  font-family: ${fonts.family};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  line-height: 1.6;

  li span {
    color: ${colors.primary};
    font-weight: ${fonts.weight.bold};
  }
`;

const OpenBtn = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: ${radius.button};
  padding: 12px 28px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textWhite};
  cursor: pointer;
  align-self: flex-end;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
  }
`;

// ─── Floating Chat Panel ──────────────────────────────────────────────────────

const ChatFixed = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
`;

// ─── View 상수 ─────────────────────────────────────────────────────────────────

const VIEW = {
  LIST: "list",
  REQUEST: "request",
  ROOM: "room",
};

// ─── Component ────────────────────────────────────────────────────────────────

const SideChatSample = () => {
  const [view, setView] = useState(null); // null | "list" | "request" | "room"
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleOpen = () => setView(VIEW.LIST);
  const handleClose = () => setView(null);
  const handleExpand = () => {};

  // 탭 클릭: 리스트/요청 패널 전환
  const handleTabChange = (tab) => {
    if (tab === "request") {
      setView(VIEW.REQUEST);
    } else {
      setView(VIEW.LIST);
    }
  };

  // 채팅방 항목 클릭: 1:1 채팅 뷰로 전환
  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setView(VIEW.ROOM);
  };

  // 1:1 채팅창 최소화: 채팅방 목록으로 복귀
  const handleMinimizeRoom = () => {
    setView(VIEW.LIST);
  };

  // 채팅방 전체 보기: 목록으로 복귀
  const handleViewAll = () => {
    setView(VIEW.LIST);
  };

  // 리스트/요청 패널 공통 props
  const sharedProps = {
    onClose: handleClose,
    onExpand: handleExpand,
    onTabChange: handleTabChange,
  };

  return (
    <PageWrapper>
      <GuideBox>
        <PageTitle>사이드 채팅 테스트</PageTitle>
        <Description>
          우측 하단 채팅 패널에서 각 뷰를 테스트해보세요.
        </Description>
        <FlowList>
          <li>
            <span>채팅방 목록</span> — 방 항목 클릭 시 1:1 채팅 뷰로 전환
          </li>
          <li>
            <span>요청 탭</span> — 하단 탭의 "요청" 클릭 시 요청 리스트로 전환
          </li>
          <li>
            <span>1:1 채팅</span> — 최소화 버튼으로 목록 복귀, 닫기로 종료
          </li>
          <li>
            <span>채팅방 전체 보기</span> — 하단 링크로 목록 복귀
          </li>
        </FlowList>
        {!view && <OpenBtn onClick={handleOpen}>채팅 열기</OpenBtn>}
      </GuideBox>

      {view && (
        <ChatFixed>
          {view === VIEW.LIST && (
            <SideChatListComponent
              {...sharedProps}
              onMinimize={handleClose}
              onRoomClick={handleRoomClick}
            />
          )}

          {view === VIEW.REQUEST && (
            <SideChatRequestComponent
              {...sharedProps}
              activeTab="request"
              onMinimize={handleClose}
              onRequestClick={() => {}}
            />
          )}

          {view === VIEW.ROOM && (
            <SideChatComponent
              chatPartnerName={selectedRoom?.name ?? "ㅇㅇ"}
              onClose={handleClose}
              onMinimize={handleMinimizeRoom}
              onExpand={handleExpand}
              onViewAll={handleViewAll}
            />
          )}
        </ChatFixed>
      )}
    </PageWrapper>
  );
};

export default SideChatSample;
