import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts, radius } from "../constants";

const DANGER_OVERLAY = "rgba(255, 80, 80, 0.5)";
const OVERLAY_WHITE_15 = "rgba(255, 255, 255, 0.15)";
const POPUP_OVERLAY = "rgba(0, 0, 0, 0.45)";
const INACTIVE_BORDER = "#8d8d8d";

const assets = {
  chatIcon:
    "https://www.figma.com/api/mcp/asset/b4896850-6051-457c-b680-087b71fd7760",
  minimizeV:
    "https://www.figma.com/api/mcp/asset/44666575-71f6-416e-a884-3df8697b8a6e",
  closeV:
    "https://www.figma.com/api/mcp/asset/4b5d23e6-44b7-4a45-8a8f-9ed805ef3301",
};

const LIVE_ROOMS = [
  { id: 1, name: "수어 학습 질문방", count: 84 },
  { id: 2, name: "수어 학습 질문방", count: 0 },
  { id: 3, name: "수어 학습 질문방", count: 0 },
  { id: 4, name: "수어 학습 질문방", count: 0 },
  { id: 5, name: "수어 학습 질문방", count: 0 },
];

const ONGOING_ROOMS = [
  {
    id: 1,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
  {
    id: 2,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
  {
    id: 3,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
];

const FILTER_TABS = ["라이브 채팅방", "팔로우 한 유저", "요청"];

const FOLLOW_USERS = [
  { id: 1, name: "ㅇㅇㅇ님" },
  { id: 2, name: "ㅇㅇㅇ님" },
  { id: 3, name: "ㅇㅇㅇ님" },
  { id: 4, name: "ㅇㅇㅇ님" },
];

const REQUEST_USERS = [
  { id: 1, name: "ㅇㅇㅇ님" },
  { id: 2, name: "ㅇㅇㅇ님" },
  { id: 3, name: "ㅇㅇㅇ님" },
];

// ─── Page wrapper ──────────────────────────────────────────────────────────────

const PageBg = styled.div`
  background: ${POPUP_OVERLAY};
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 73px 0 40px;
`;

const Popup = styled.div`
  width: 872px;
  display: flex;
  flex-direction: column;
`;

// ─── Header ────────────────────────────────────────────────────────────────────

const Header = styled.div`
  background: linear-gradient(
    169.4deg,
    ${colors.primaryDark} 0%,
    ${colors.primary} 100%
  );
  border-radius: ${radius.card} ${radius.card} 0 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
`;

const HeaderTitle = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${colors.textWhite};
  margin: 0;
`;

const HeaderBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MinimizeBtn = styled.button`
  background: ${OVERLAY_WHITE_15};
  border: none;
  border-radius: 6px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 40%;
    height: 40%;
    object-fit: contain;
  }
`;

const CloseBtn = styled.button`
  background: ${DANGER_OVERLAY};
  border: none;
  border-radius: 6px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 6px;
  img {
    width: 8px;
    height: 9px;
    object-fit: contain;
  }
`;

// ─── Body ──────────────────────────────────────────────────────────────────────

const Body = styled.div`
  display: flex;
  height: 460px;
`;

// ─── Left panel (라이브 채팅방 목록) ────────────────────────────────────────────

const LeftPanel = styled.div`
  width: 312px;
  flex-shrink: 0;
  background: ${colors.bgSection};
  border-left: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  border-radius: 0 0 0 ${radius.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px 16px;
`;

const PanelTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PanelLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  margin: 0;
`;

const CountBadge = styled.div`
  background: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 4px 8px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.textWhite};
  letter-spacing: -0.2px;
`;

const Divider = styled.div`
  height: 1px;
  background: ${colors.border};
  width: 100%;
`;

const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  overflow-y: auto;
`;

const RoomItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: ${radius.input};
  background: ${colors.bgSection};
  border: 2px solid
    ${({ $active }) => ($active ? colors.primary : "transparent")};
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${colors.primaryMid};
  }
`;

const RoomItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RoomIconBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.primaryLight};
  border-radius: ${radius.input};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 20px;
    height: 11px;
    object-fit: contain;
  }
`;

const RoomMetaCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RoomNameText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

const LiveRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LiveDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colors.live};
  flex-shrink: 0;
`;

const LiveLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.live};
  letter-spacing: -0.24px;
  margin: 0;
`;

const RoomCountText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
`;

// ─── User list (팔로우 한 유저 / 요청 탭) ─────────────────────────────────────

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  overflow-y: auto;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: ${radius.input};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${colors.primaryLight};
  }
`;

const UserAvatarBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.primaryLight};
  border-radius: ${radius.input};
  flex-shrink: 0;
`;

const UserNameText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

// ─── Filter Tabs ───────────────────────────────────────────────────────────────

const FilterTabsRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 13px;
`;

const FilterTab = styled.button`
  background: ${({ $active }) => ($active ? colors.primaryLight : colors.bgCard)};
  border: 1px solid
    ${({ $active }) => ($active ? colors.primary : INACTIVE_BORDER)};
  border-radius: ${radius.sm};
  padding: 8px 16px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${({ $active }) => ($active ? colors.primary : colors.textMain)};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
`;

// ─── Right panel (진행중인 채팅방) ──────────────────────────────────────────────

const RightPanel = styled.div`
  flex: 1;
  min-width: 0;
  background: ${colors.bgSection};
  border-right: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  border-radius: 0 0 ${radius.card} 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 16px;
`;

const OngoingRoomList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OngoingRoomItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: ${radius.input};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${colors.primaryLight};
  }
`;

const OngoingProfileBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.primaryLight};
  border-radius: ${radius.input};
  flex-shrink: 0;
`;

const OngoingRoomInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const OngoingRoomTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  white-space: nowrap;
`;

const OngoingRoomNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OngoingRoomName = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  margin: 0;
`;

const OngoingRoomCount = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
`;

const OngoingLastTime = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  letter-spacing: -0.2px;
  margin: 0;
`;

const OngoingLastMsg = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.size.sm};
  line-height: 20px;
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// ─── Main Component ────────────────────────────────────────────────────────────

const PopupChatRoomSelect = ({ onMinimize, onClose, onRoomSelect }) => {
  const [activeRoom, setActiveRoom] = useState(1);
  const [activeFilter, setActiveFilter] = useState("라이브 채팅방");

  return (
    <PageBg>
      <Popup>
        {/* ── Header ── */}
        <Header>
          <HeaderTitle>채팅방 선택</HeaderTitle>
          <HeaderBtns>
            <MinimizeBtn onClick={onMinimize}>
              <img src={assets.minimizeV} alt="최소화" />
            </MinimizeBtn>
            <CloseBtn onClick={onClose}>
              <img src={assets.closeV} alt="닫기" />
            </CloseBtn>
          </HeaderBtns>
        </Header>

        {/* ── Body ── */}
        <Body>
          {/* 라이브 채팅방 목록 */}
          <LeftPanel>
            <PanelTop>
              <PanelHeader>
                <PanelLabel>라이브 채팅방</PanelLabel>
                <CountBadge>247</CountBadge>
              </PanelHeader>
              <Divider />
              {activeFilter === "라이브 채팅방" ? (
                <RoomList>
                  {LIVE_ROOMS.map((room) => (
                    <RoomItem
                      key={room.id}
                      $active={activeRoom === room.id}
                      onClick={() => { setActiveRoom(room.id); onRoomSelect?.(room); }}
                    >
                      <RoomItemLeft>
                        <RoomIconBox>
                          <img src={assets.chatIcon} alt="" />
                        </RoomIconBox>
                        <RoomMetaCol>
                          <RoomNameText>{room.name}</RoomNameText>
                          <LiveRow>
                            <LiveDot />
                            <LiveLabel>라이브</LiveLabel>
                          </LiveRow>
                        </RoomMetaCol>
                      </RoomItemLeft>
                      <RoomCountText>{room.count}명</RoomCountText>
                    </RoomItem>
                  ))}
                </RoomList>
              ) : (
                <UserList>
                  {(activeFilter === "팔로우 한 유저"
                    ? FOLLOW_USERS
                    : REQUEST_USERS
                  ).map((user) => (
                    <UserItem key={user.id}>
                      <UserAvatarBox />
                      <UserNameText>{user.name}</UserNameText>
                    </UserItem>
                  ))}
                </UserList>
              )}
            </PanelTop>

            <FilterTabsRow>
              {FILTER_TABS.map((tab) => (
                <FilterTab
                  key={tab}
                  $active={activeFilter === tab}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </FilterTab>
              ))}
            </FilterTabsRow>
          </LeftPanel>

          {/* 진행중인 채팅방 목록 */}
          <RightPanel>
            <PanelHeader>
              <PanelLabel>진행중인 채팅방</PanelLabel>
              <CountBadge>3</CountBadge>
            </PanelHeader>
            <Divider />
            <OngoingRoomList>
              {ONGOING_ROOMS.map((room) => (
                <OngoingRoomItem key={room.id}>
                  <OngoingProfileBox />
                  <OngoingRoomInfo>
                    <OngoingRoomTopRow>
                      <OngoingRoomNameRow>
                        <OngoingRoomName>{room.name}</OngoingRoomName>
                        <OngoingRoomCount>{room.count}명</OngoingRoomCount>
                      </OngoingRoomNameRow>
                      <OngoingLastTime>{room.time}</OngoingLastTime>
                    </OngoingRoomTopRow>
                    <OngoingLastMsg>{room.lastMsg}</OngoingLastMsg>
                  </OngoingRoomInfo>
                </OngoingRoomItem>
              ))}
            </OngoingRoomList>
          </RightPanel>
        </Body>
      </Popup>
    </PageBg>
  );
};

export default PopupChatRoomSelect;
