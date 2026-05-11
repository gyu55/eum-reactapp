import React from "react";
import {
  SelectRightPanel,
  PanelHeader,
  PanelLabel,
  SelectCountBadge,
  Divider,
  OngoingRoomList,
  OngoingRoomItem,
  OngoingProfileBox,
  OngoingRoomInfo,
  OngoingRoomTopRow,
  OngoingRoomNameRow,
  OngoingRoomName,
  OngoingRoomCount,
  OngoingLastTime,
  OngoingLastMsg,
} from "../ChatStyle";

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

const SelectOngoingPanel = () => (
  <SelectRightPanel>
    <PanelHeader>
      <PanelLabel>진행중인 채팅방</PanelLabel>
      <SelectCountBadge>{ONGOING_ROOMS.length}</SelectCountBadge>
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
  </SelectRightPanel>
);

export default SelectOngoingPanel;
