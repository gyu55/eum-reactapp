import React from "react";
import {
  SelectPageBg,
  SelectPopup,
  SelectHeader,
  HeaderTitle,
  HeaderBtns,
  MinimizeBtn,
  SelectCloseBtn,
  SelectBody,
} from "./ChatStyle";
import SelectRoomListPanel from "./popupChat/SelectRoomListPanel";
import SelectOngoingPanel from "./popupChat/SelectOngoingPanel";

const minimizeVUrl =
  "https://www.figma.com/api/mcp/asset/44666575-71f6-416e-a884-3df8697b8a6e";
const closeVUrl =
  "https://www.figma.com/api/mcp/asset/4b5d23e6-44b7-4a45-8a8f-9ed805ef3301";

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

const PopupChatRoomSelect = ({
  initialFilter,
  onMinimize,
  onClose,
  onRoomSelect,
}) => (
  <SelectPageBg>
    <SelectPopup>
      <SelectHeader>
        <HeaderTitle>채팅방 선택</HeaderTitle>
        <HeaderBtns>
          <MinimizeBtn onClick={onMinimize}>
            <img src={minimizeVUrl} alt="최소화" />
          </MinimizeBtn>
          <SelectCloseBtn onClick={onClose}>
            <img src={closeVUrl} alt="닫기" />
          </SelectCloseBtn>
        </HeaderBtns>
      </SelectHeader>

      <SelectBody>
        <SelectRoomListPanel
          liveRooms={LIVE_ROOMS}
          followUsers={FOLLOW_USERS}
          requestUsers={REQUEST_USERS}
          initialFilter={initialFilter}
          onRoomSelect={onRoomSelect}
        />
        <SelectOngoingPanel rooms={ONGOING_ROOMS} />
      </SelectBody>
    </SelectPopup>
  </SelectPageBg>
);

export default PopupChatRoomSelect;
