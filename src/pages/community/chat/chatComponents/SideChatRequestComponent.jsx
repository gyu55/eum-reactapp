import React from "react";
import styled from "styled-components";
import { colors, fonts, radius } from "../../constants";
import chatDefaultProfile from "../../assets/chat/chat_default_profile.svg";
import { ThumbnailBox } from "./chatComponentStyle";

// ─── Body ────────────────────────────────────────────────────────────────────

const Body = styled.div`
  background: ${colors.bgCard};
  border-radius: 0 0 ${radius.card} ${radius.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  height: 346px;
  flex-shrink: 0;
`;

// ─── Request List ─────────────────────────────────────────────────────────────

const RequestList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
`;

const RequestItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: ${radius.input};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${colors.bgSection};
  }
`;

const UserLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Username = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  margin: 0;
  white-space: nowrap;
`;

const TimeAgo = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  margin: 0;
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
`;

// ─── Tab Buttons ─────────────────────────────────────────────────────────────

const TabGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

const TabBtn = styled.button`
  background: ${({ $isActive }) =>
    $isActive ? colors.primary : colors.bgCard};
  border: 1px solid ${colors.primary};
  border-radius: ${radius.sm};
  padding: 6px 16px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${({ $isActive }) => ($isActive ? colors.textWhite : colors.primary)};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition:
    background 0.15s,
    color 0.15s;
`;

// ─── Default Data ─────────────────────────────────────────────────────────────

const defaultRequests = [
  { id: 1, username: "수어러버박하늘", timeAgo: "50분 전", avatar: null },
  { id: 2, username: "헬스하는칼국수", timeAgo: "1시간 전", avatar: null },
];

const TABS = [
  { key: "all", label: "모든 채팅방" },
  { key: "chatting", label: "채팅중인 방" },
  { key: "request", label: "요청" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const SideChatRequestComponent = ({
  requests = defaultRequests,
  activeTab = "request",
  onTabChange,
  onRequestClick,
}) => {
  return (
    <Body>
      <RequestList>
        {requests.map((req) => (
          <RequestItem key={req.id} onClick={() => onRequestClick?.(req)}>
            <UserLeft>
              <ThumbnailBox
                src={req.avatar || chatDefaultProfile}
                alt={req.username}
              />
              <Username>{req.username}</Username>
            </UserLeft>
            <TimeAgo>{req.timeAgo}</TimeAgo>
          </RequestItem>
        ))}
      </RequestList>

      <TabGroup>
        {TABS.map((tab) => (
          <TabBtn
            key={tab.key}
            $isActive={tab.key === activeTab}
            onClick={() => onTabChange?.(tab.key)}
          >
            {tab.label}
          </TabBtn>
        ))}
      </TabGroup>
    </Body>
  );
};

export default SideChatRequestComponent;
