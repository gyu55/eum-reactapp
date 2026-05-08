import React from "react";
import {
  Header,
  HeaderLeft,
  ProfileArea,
  RoomProfileBox,
  RoomInfo,
  RoomTitle,
  RoomSubText,
  MessageStatus,
  LiveBadge,
  LiveIcon,
  LiveText,
  TodayMsgRow,
  TodayMsgText,
  HeaderRight,
  LeaveBtn,
  MinimizeBtn,
  CloseBtn,
} from "../ChatStyle";

const roomProfileUrl =
  "https://www.figma.com/api/mcp/asset/4597fd24-1f77-4b23-a97f-9d0612d37539";
const liveVectorUrl =
  "https://www.figma.com/api/mcp/asset/79378b34-81dd-4aef-bc8a-2e9814e941b7";
const downloadIconUrl =
  "https://www.figma.com/api/mcp/asset/20ea9338-907b-444f-9835-2f74b2aa1a24";
const minimizeVUrl =
  "https://www.figma.com/api/mcp/asset/d026f38b-0832-4a94-b0cc-5bbc2206c401";
const closeVUrl =
  "https://www.figma.com/api/mcp/asset/633d41af-e1e1-462a-acec-b1534e4d49ad";

const PopupChatHeader = ({ onLeave, onMinimize, onClose }) => (
  <Header>
    <HeaderLeft>
      <ProfileArea>
        <RoomProfileBox>
          <img src={roomProfileUrl} alt="채팅방 프로필" />
        </RoomProfileBox>
        <RoomInfo>
          <RoomTitle>학습 일상 대화방</RoomTitle>
          <RoomSubText>00명 참여 중</RoomSubText>
        </RoomInfo>
      </ProfileArea>
      <MessageStatus>
        <LiveBadge>
          <LiveIcon src={liveVectorUrl} alt="" />
          <LiveText>LIVE</LiveText>
        </LiveBadge>
        <TodayMsgRow>
          <img src={downloadIconUrl} alt="" />
          <TodayMsgText>오늘 00개 메시지</TodayMsgText>
        </TodayMsgRow>
      </MessageStatus>
    </HeaderLeft>
    <HeaderRight>
      <LeaveBtn onClick={onLeave}>채팅방 나가기</LeaveBtn>
      <MinimizeBtn onClick={onMinimize}>
        <img src={minimizeVUrl} alt="최소화" />
      </MinimizeBtn>
      <CloseBtn onClick={onClose}>
        <img src={closeVUrl} alt="닫기" />
      </CloseBtn>
    </HeaderRight>
  </Header>
);

export default PopupChatHeader;
