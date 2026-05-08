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

const chatIconUrl =
  "https://www.figma.com/api/mcp/asset/b4896850-6051-457c-b680-087b71fd7760";

const FILTER_TABS = ["라이브 채팅방", "팔로우 한 유저", "요청"];

const SelectRoomListPanel = ({
  liveRooms,
  followUsers,
  requestUsers,
  onRoomSelect,
}) => {
  const [activeRoom, setActiveRoom] = useState(liveRooms[0]?.id ?? null);
  const [activeFilter, setActiveFilter] = useState("라이브 채팅방");

  const currentUsers =
    activeFilter === "팔로우 한 유저" ? followUsers : requestUsers;

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
            {liveRooms.map((room) => (
              <RoomItem
                key={room.id}
                $active={activeRoom === room.id}
                onClick={() => {
                  setActiveRoom(room.id);
                  onRoomSelect?.(room);
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
            onClick={() => setActiveFilter(tab)}
          >
            {tab}
          </FilterTab>
        ))}
      </FilterTabsRow>
    </SelectLeftPanel>
  );
};

export default SelectRoomListPanel;
