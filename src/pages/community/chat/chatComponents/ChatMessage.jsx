import React from "react";
import styled from "styled-components";
import { colors, fonts, radius } from "../../constants";

const MessageRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
  justify-content: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
  gap: 8px;
  width: 100%;
  max-width: 480px;
  margin-left: ${({ $isMine }) => ($isMine ? "auto" : "0")};
  margin-right: ${({ $isMine }) => ($isMine ? "0" : "auto")};
`;

const ProfileImage = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background-color: ${colors.border};
`;

const ProfilePlaceholder = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${colors.border};
  flex-shrink: 0;
`;

const MessageArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const Username = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  margin: 0;
  line-height: 1;
`;

const BubbleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

const Bubble = styled.div`
  background-color: ${({ $isMine }) =>
    $isMine ? colors.primary : colors.bgCard};
  border-radius: ${radius.button};
  padding: 8px 12px;
  max-width: 280px;
`;

const MessageText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${({ $isMine }) => ($isMine ? colors.textWhite : colors.textMain)};
  margin: 0;
  line-height: 1.5;
  word-break: break-word;
`;

const TimeText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.xs};
  color: ${colors.textSub};
  margin: 0;
  white-space: nowrap;
  line-height: 1;
`;

const ChatMessage = ({
  isMine = false,
  message = "메세지 메세지",
  time = "14:02",
  username = "ㅇㅇ",
  profileImage = null,
}) => {
  if (isMine) {
    return (
      <MessageRow $isMine={true}>
        <BubbleRow>
          <TimeText>{time}</TimeText>
          <Bubble $isMine={true}>
            <MessageText $isMine={true}>{message}</MessageText>
          </Bubble>
        </BubbleRow>
      </MessageRow>
    );
  }

  return (
    <MessageRow $isMine={false}>
      {profileImage ? (
        <ProfileImage src={profileImage} alt={username} />
      ) : (
        <ProfilePlaceholder />
      )}
      <MessageArea>
        <Username>{username}</Username>
        <BubbleRow>
          <Bubble $isMine={false}>
            <MessageText $isMine={false}>{message}</MessageText>
          </Bubble>
          <TimeText>{time}</TimeText>
        </BubbleRow>
      </MessageArea>
    </MessageRow>
  );
};

export default ChatMessage;
