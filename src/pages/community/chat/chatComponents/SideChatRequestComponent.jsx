import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faExpand, faXmark } from "@fortawesome/free-solid-svg-icons";
import { colors, fonts, radius, shadows } from "../../constants";

// ─── Panel ───────────────────────────────────────────────────────────────────

const ChatRequestPanel = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  border-radius: ${radius.card};
  box-shadow: ${shadows.float};
  overflow: hidden;
`;

// ─── Header ──────────────────────────────────────────────────────────────────

const Header = styled.div`
  background: ${colors.gradientMain};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  flex-shrink: 0;
`;

const TitleText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textWhite};
  margin: 0;
  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const HeaderBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.15);
  color: ${colors.textWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 10px;
  flex-shrink: 0;
`;

const CloseBtn = styled(HeaderBtn)`
  background: rgba(255, 80, 80, 0.5);
`;

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

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${radius.input};
  background: ${colors.primaryLight};
  flex-shrink: 0;
  overflow: hidden;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  background: ${({ $isActive }) => ($isActive ? colors.primary : colors.bgCard)};
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
  transition: background 0.15s, color 0.15s;
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

/**
 * 사용자에게 1:1 채팅을 요청한 유저 리스트 패널.
 *
 * 하단 탭(모든 채팅방 / 채팅중인 방 / 요청)은 부모가 다른 사이드 패널로
 * 전환하는 네비게이션 역할을 한다. onTabChange 콜백으로 탭 key를 올려보내면
 * 부모에서 SideChatListComponent 등 다른 뷰로 스왑하면 된다.
 */
const SideChatRequestComponent = ({
  requests = defaultRequests,
  activeTab = "request",
  onClose,
  onMinimize,
  onExpand,
  onTabChange,
  onRequestClick,
}) => {
  return (
    <ChatRequestPanel>
      <Header>
        <TitleText>채팅 요청 리스트</TitleText>
        <ButtonGroup>
          <HeaderBtn onClick={onMinimize} aria-label="최소화">
            <FontAwesomeIcon icon={faMinus} />
          </HeaderBtn>
          <HeaderBtn onClick={onExpand} aria-label="확대">
            <FontAwesomeIcon icon={faExpand} />
          </HeaderBtn>
          <CloseBtn onClick={onClose} aria-label="닫기">
            <FontAwesomeIcon icon={faXmark} />
          </CloseBtn>
        </ButtonGroup>
      </Header>

      <Body>
        <RequestList>
          {requests.map((req) => (
            <RequestItem key={req.id} onClick={() => onRequestClick?.(req)}>
              <UserLeft>
                <Avatar>
                  {req.avatar && <AvatarImg src={req.avatar} alt={req.username} />}
                </Avatar>
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
    </ChatRequestPanel>
  );
};

export default SideChatRequestComponent;
