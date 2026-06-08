import React from "react";
import * as S from "./chatMessageStyle";
import defaultProfile from "../../assets/chat/chat_default_profile.svg";

const IMAGE_BASE_URL = "http://localhost:10000";

const ChatMessage = ({
  isMine = false,
  message = "메세지 메세지",
  time = "14:02",
  username = "ㅇㅇ",
  profileImage = null,
  chatType = "텍스트",
  userId = null,
  userExp = 0,
  onProfileClick = null,
}) => {
  const handleProfileClick = () => {
    if (onProfileClick && !isMine) {
      onProfileClick({ id: userId, userProfile: profileImage, userNickname: username, userExp });
    }
  };
  const bubbleContent = chatType === "IMAGE" ? (
    <S.ChatImg src={`${IMAGE_BASE_URL}${message}`} alt="이미지" />
  ) : (
    <S.Bubble $isMine={isMine}>
      <S.MessageText $isMine={isMine}>{message}</S.MessageText>
    </S.Bubble>
  );

  if (isMine) {
    return (
      <S.MessageRow $isMine={true}>
        <S.BubbleRow>
          <S.TimeText>{time}</S.TimeText>
          {bubbleContent}
        </S.BubbleRow>
      </S.MessageRow>
    );
  }

  return (
    <S.MessageRow $isMine={false}>
      {profileImage ? (
        <S.ProfileImage
          src={profileImage}
          alt={username}
          onError={(e) => {
            e.target.src = defaultProfile;
          }}
          onClick={handleProfileClick}
          style={{ cursor: onProfileClick ? "pointer" : "default" }}
        />
      ) : (
        <S.ProfilePlaceholder
          onClick={handleProfileClick}
          style={{ cursor: onProfileClick ? "pointer" : "default" }}
        />
      )}
      <S.MessageArea>
        <S.Username>{username}</S.Username>
        <S.BubbleRow>
          {bubbleContent}
          <S.TimeText>{time}</S.TimeText>
        </S.BubbleRow>
      </S.MessageArea>
    </S.MessageRow>
  );
};

export default ChatMessage;
