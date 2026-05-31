import React from "react";
import {
  Header,
  HeaderLeft,
  ProfileArea,
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
} from "../../ChatStyle";
import { ThumbnailBox } from "../../chatComponents/chatComponentStyle";
import defaultProfileImg from "../../../assets/chat/chat_default_profile.svg";
import { useChatContext } from "../../../context/ChatContext";
import chatIcon from "../../../assets/chat/chat_icon.svg";
import minusIcon from "../../../assets/chat/minus_icon.svg";
import closeIcon from "../../../assets/chat/close_icon.svg";

const S = {
  CloseBtn,
  Header,
  HeaderLeft,
  ProfileArea,
  RoomInfo,
  RoomTitle,
  RoomSubText,
  MessageStatus,
  MinimizeBtn,
  LiveBadge,
  LiveIcon,
  LiveText,
  TodayMsgRow,
  TodayMsgText,
  HeaderRight,
  LeaveBtn,
};

const liveVectorUrl =
  "https://www.figma.com/api/mcp/asset/79378b34-81dd-4aef-bc8a-2e9814e941b7";

const PopupChatHeader = ({
  id,
  chatRoomProfile,
  chatRoomName,
  chatRoomUsers,
}) => {
  const { leaveRoom, minimizeView, closeView } = useChatContext();

  return (
    <S.Header>
      <S.HeaderLeft>
        <S.ProfileArea>
          <ThumbnailBox
            src={chatRoomProfile || defaultProfileImg}
            alt="채팅방 프로필"
            onError={(e) => {
              e.target.src = defaultProfileImg;
            }}
          />
          <S.RoomInfo>
            <S.RoomTitle>{chatRoomName ?? "채팅방"}</S.RoomTitle>
            <S.RoomSubText>{chatRoomUsers ?? 0}명 참여 중</S.RoomSubText>
          </S.RoomInfo>
        </S.ProfileArea>
        <S.MessageStatus>
          <S.LiveBadge>
            <S.LiveIcon src={liveVectorUrl} alt="" />
            <S.LiveText>LIVE</S.LiveText>
          </S.LiveBadge>
          <S.TodayMsgRow>
            <img src={chatIcon} alt="" />
            <S.TodayMsgText>오늘 00개 메시지</S.TodayMsgText>
          </S.TodayMsgRow>
        </S.MessageStatus>
      </S.HeaderLeft>
      <S.HeaderRight>
        <S.LeaveBtn onClick={leaveRoom}>채팅방 나가기</S.LeaveBtn>
        <S.MinimizeBtn onClick={minimizeView}>
          <img src={minusIcon} alt="최소화" />
        </S.MinimizeBtn>
        <S.CloseBtn onClick={closeView}>
          <img src={closeIcon} alt="닫기" />
        </S.CloseBtn>
      </S.HeaderRight>
    </S.Header>
  );
};

export default PopupChatHeader;
