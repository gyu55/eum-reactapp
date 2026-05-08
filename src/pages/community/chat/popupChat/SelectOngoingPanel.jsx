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

const SelectOngoingPanel = ({ rooms }) => (
  <SelectRightPanel>
    <PanelHeader>
      <PanelLabel>진행중인 채팅방</PanelLabel>
      <SelectCountBadge>{rooms.length}</SelectCountBadge>
    </PanelHeader>
    <Divider />
    <OngoingRoomList>
      {rooms.map((room) => (
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
