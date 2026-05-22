import React from "react";
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
import { useChatContext, LIST_FILTER } from "../../context/ChatContext";
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

// 좌측 필터 탭 — 팝업 전용 (FOLLOW 포함)
// ONGOING 은 우측 패널(SelectOngoingPanel) 이 항상 노출하므로 좌측 탭에서는 제외
const FILTER_TABS = [
  { key: LIST_FILTER.LIVE, label: "라이브 채팅방" },
  { key: LIST_FILTER.FOLLOW, label: "팔로우 한 유저" },
  { key: LIST_FILTER.REQUEST, label: "요청" },
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
  const { listFilter, changeListFilter, selectRoom } = useChatContext();
  const { rooms, isLoading, hasMore, loaderRef } = useChatRoomList();

  // 사이드 확대 등으로 좌측 탭과 매핑되지 않는 필터(ONGOING)가 들어오면
  // 시각적으로는 LIVE 탭에 해당하는 콘텐츠를 보여줌
  const displayFilter = FILTER_TABS.some((tab) => tab.key === listFilter)
    ? listFilter
    : LIST_FILTER.LIVE;

  const showRooms = displayFilter === LIST_FILTER.LIVE;
  const currentUsers =
    displayFilter === LIST_FILTER.FOLLOW ? FOLLOW_USERS : REQUEST_USERS;

  return (
    <S.SelectLeftPanel>
      <S.PanelTop>
        <S.PanelHeader>
          <S.PanelLabel>라이브 채팅방</S.PanelLabel>
          <S.SelectCountBadge>{rooms.length}</S.SelectCountBadge>
        </S.PanelHeader>
        <S.Divider />
        {showRooms ? (
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
            {/* 채팅방 목록 */}
            {rooms.map((room) => (
              <S.RoomItem key={room.id} onClick={() => selectRoom(room)}>
                <S.RoomItemLeft>
                  <S.RoomIconBox>
                    <img
                      src={room.chatRoomProfile || chatDefaultProfile}
                      alt={room.chatRoomName}
                      onError={(e) => {
                        e.target.src = chatDefaultProfile;
                      }}
                    />
                  </S.RoomIconBox>
                  <S.RoomMetaCol>
                    <S.RoomNameText>{room.chatRoomName}</S.RoomNameText>
                    <S.LiveRow>
                      <S.SelectLiveDot />
                      <S.SelectLiveLabel>라이브</S.SelectLiveLabel>
                    </S.LiveRow>
                  </S.RoomMetaCol>
                </S.RoomItemLeft>
                <S.RoomCountText>{room.chatRoomUsers}명</S.RoomCountText>
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
            key={tab.key}
            $active={displayFilter === tab.key}
            onClick={() => changeListFilter(tab.key)}
          >
            {tab.label}
          </S.FilterTab>
        ))}
      </S.FilterTabsRow>
    </S.SelectLeftPanel>
  );
};

export default SelectRoomListPanel;
