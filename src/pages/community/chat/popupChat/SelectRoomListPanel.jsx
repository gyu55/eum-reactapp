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
import useChatRoomList from "../hooks/useChatRoomList";
import chatDefaultProfile from "../../assets/chat/chat_default_profile.svg";

const S = {
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
};

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

const SelectRoomListPanel = () => {
  const { popupSelectCurrentFilter, updateSelectFilter, handleSelectRoom } =
    useChatContext();
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeFilter, setActiveFilter] = useState(popupSelectCurrentFilter);
  const { rooms, isLoading, hasMore, loaderRef } = useChatRoomList();

  const handleFilterChange = (tab) => {
    setActiveFilter(tab);
    updateSelectFilter(tab);
  };

  const currentUsers =
    activeFilter === "팔로우 한 유저" ? FOLLOW_USERS : REQUEST_USERS;

  return (
    <S.SelectLeftPanel>
      <S.PanelTop>
        <S.PanelHeader>
          <S.PanelLabel>라이브 채팅방</S.PanelLabel>
          <S.SelectCountBadge>{rooms.length}</S.SelectCountBadge>
        </S.PanelHeader>
        <S.Divider />
        {activeFilter === "라이브 채팅방" ? (
          <S.RoomList>
            {isLoading && rooms.length === 0 && (
              <S.RoomCountText style={{ textAlign: "center", padding: "12px" }}>
                불러오는 중...
              </S.RoomCountText>
            )}
            {!isLoading && rooms.length === 0 && (
              <S.RoomCountText style={{ textAlign: "center", padding: "12px" }}>
                채팅방이 없습니다.
              </S.RoomCountText>
            )}
            {rooms.map((room) => (
              <S.RoomItem
                key={room.id}
                $active={activeRoom === room.id}
                onClick={() => {
                  setActiveRoom(room.id);
                  handleSelectRoom(room);
                }}
              >
                <S.RoomItemLeft>
                  <S.RoomIconBox>
                    <img
                      src={room.thumbnail || chatDefaultProfile}
                      alt={room.name}
                      onError={(e) => {
                        e.target.src = chatDefaultProfile;
                      }}
                    />
                  </S.RoomIconBox>
                  <S.RoomMetaCol>
                    <S.RoomNameText>{room.name}</S.RoomNameText>
                    <S.LiveRow>
                      <S.SelectLiveDot />
                      <S.SelectLiveLabel>라이브</S.SelectLiveLabel>
                    </S.LiveRow>
                  </S.RoomMetaCol>
                </S.RoomItemLeft>
                <S.RoomCountText>{room.count}명</S.RoomCountText>
              </S.RoomItem>
            ))}
            {hasMore && (
              <S.RoomCountText
                ref={loaderRef}
                style={{ textAlign: "center", padding: "8px" }}
              >
                {isLoading ? "불러오는 중..." : ""}
              </S.RoomCountText>
            )}
          </S.RoomList>
        ) : (
          <S.SelectUserList>
            {currentUsers.map((user) => (
              <S.SelectUserItem key={user.id}>
                <S.UserAvatarBox />
                <S.SelectUserNameText>{user.name}</S.SelectUserNameText>
              </S.SelectUserItem>
            ))}
          </S.SelectUserList>
        )}
      </S.PanelTop>

      <S.FilterTabsRow>
        {FILTER_TABS.map((tab) => (
          <S.FilterTab
            key={tab}
            $active={activeFilter === tab}
            onClick={() => handleFilterChange(tab)}
          >
            {tab}
          </S.FilterTab>
        ))}
      </S.FilterTabsRow>
    </S.SelectLeftPanel>
  );
};

export default SelectRoomListPanel;
