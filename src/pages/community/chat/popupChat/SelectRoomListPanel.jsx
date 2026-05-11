import React, { useState } from "react";
import {
  SelectLeftPanel,
  PanelTop,
  PanelHeader,
  PanelLabel,
  SelectCountBadge,
  Divider,
  RoomList,
  RoomItem,
  RoomItemLeft,
  RoomIconBox,
  RoomMetaCol,
  RoomNameText,
  LiveRow,
  SelectLiveDot,
  SelectLiveLabel,
  RoomCountText,
  SelectUserList,
  SelectUserItem,
  UserAvatarBox,
  SelectUserNameText,
  FilterTabsRow,
  FilterTab,
} from "../ChatStyle";
import { useChatContext } from "../../context/ChatContext";

const chatIconUrl =
  "https://www.figma.com/api/mcp/asset/b4896850-6051-457c-b680-087b71fd7760";

const FILTER_TABS = ["라이브 채팅방", "팔로우 한 유저", "요청"];

const LIVE_ROOMS = [
  { id: 1, name: "수어 학습 질문방", count: 84 },
  { id: 2, name: "수어 학습 질문방", count: 0 },
  { id: 3, name: "수어 학습 질문방", count: 0 },
  { id: 4, name: "수어 학습 질문방", count: 0 },
  { id: 5, name: "수어 학습 질문방", count: 0 },
];

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

const SelectRoomListPanel = () => {
  const { popupSelectCurrentFilter, updateSelectFilter, handleSelectRoom } =
    useChatContext();
  const [activeRoom, setActiveRoom] = useState(LIVE_ROOMS[0]?.id ?? null);
  const [activeFilter, setActiveFilter] = useState(popupSelectCurrentFilter);

  const handleFilterChange = (tab) => {
    setActiveFilter(tab);
    updateSelectFilter(tab);
  };

  const currentUsers =
    activeFilter === "팔로우 한 유저" ? FOLLOW_USERS : REQUEST_USERS;

  return (
    <SelectLeftPanel>
      <PanelTop>
        <PanelHeader>
          <PanelLabel>라이브 채팅방</PanelLabel>
          <SelectCountBadge>247</SelectCountBadge>
        </PanelHeader>
        <Divider />
        {activeFilter === "라이브 채팅방" ? (
          <RoomList>
            {LIVE_ROOMS.map((room) => (
              <RoomItem
                key={room.id}
                $active={activeRoom === room.id}
                onClick={() => {
                  setActiveRoom(room.id);
                  handleSelectRoom(room);
                }}
              >
                <RoomItemLeft>
                  <RoomIconBox>
                    <img src={chatIconUrl} alt="" />
                  </RoomIconBox>
                  <RoomMetaCol>
                    <RoomNameText>{room.name}</RoomNameText>
                    <LiveRow>
                      <SelectLiveDot />
                      <SelectLiveLabel>라이브</SelectLiveLabel>
                    </LiveRow>
                  </RoomMetaCol>
                </RoomItemLeft>
                <RoomCountText>{room.count}명</RoomCountText>
              </RoomItem>
            ))}
          </RoomList>
        ) : (
          <SelectUserList>
            {currentUsers.map((user) => (
              <SelectUserItem key={user.id}>
                <UserAvatarBox />
                <SelectUserNameText>{user.name}</SelectUserNameText>
              </SelectUserItem>
            ))}
          </SelectUserList>
        )}
      </PanelTop>

      <FilterTabsRow>
        {FILTER_TABS.map((tab) => (
          <FilterTab
            key={tab}
            $active={activeFilter === tab}
            onClick={() => handleFilterChange(tab)}
          >
            {tab}
          </FilterTab>
        ))}
      </FilterTabsRow>
    </SelectLeftPanel>
  );
};

export default SelectRoomListPanel;
