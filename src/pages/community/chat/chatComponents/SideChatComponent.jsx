import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faExpand, faXmark } from "@fortawesome/free-solid-svg-icons";
import { colors, fonts, radius, shadows } from "../../constants";
import ChatMessage from "./ChatMessage";

const ChatPanel = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  border-radius: ${radius.card};
  box-shadow: ${shadows.float};
  overflow: hidden;
`;

const Header = styled.div`
  background: ${colors.gradientMain};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  flex-shrink: 0;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChatDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${colors.textWhite};
  flex-shrink: 0;
`;

const TitleText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textWhite};
  margin: 0;
  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const HeaderBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.15);
  color: ${colors.textWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 10px;
  flex-shrink: 0;
`;

const CloseBtn = styled(HeaderBtn)`
  background: rgba(255, 80, 80, 0.5);
`;

const MessageList = styled.div`
  background: ${colors.bgSection};
  border-left: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  overflow-y: auto;
  max-height: 380px;
  flex-shrink: 0;
`;

const InputArea = styled.div`
  background: ${colors.bgCard};
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  flex-shrink: 0;
`;

const TextInput = styled.input`
  flex: 1;
  border: 1px solid ${colors.border};
  border-radius: ${radius.input};
  padding: 8px 10px;
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.textMain};
  outline: none;
  min-width: 0;

  &::placeholder {
    color: ${colors.textSub};
  }
`;

const SendBtn = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: ${radius.input};
  padding: 8px 10px;
  color: ${colors.textWhite};
  font-size: ${fonts.size.sm};
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  background: ${colors.primaryLight};
  padding: 11px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ViewAllText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.primary};
  margin: 0;
  cursor: pointer;
  text-align: center;
`;

const defaultMessages = [
  { id: 1, isMine: false, username: "ㅇㅇ", message: "메세지 메세지", time: "14:02" },
  { id: 2, isMine: false, username: "ㅇㅇ", message: "메세지 메세지", time: "14:02" },
  { id: 3, isMine: false, username: "ㅇㅇ", message: "내 프로필에 와줘서 고마워.", time: "14:02" },
  { id: 4, isMine: true, message: "안녕하세요! 오늘도 열공해요 💪", time: "15:00" },
  { id: 5, isMine: false, username: "ㅇㅇ", message: "메세지 메세지", time: "14:02" },
  {
    id: 6,
    isMine: true,
    message: "안녕하세요! 오늘도 열공해요 💪안녕하세요! 오늘도 열공해안녕하세요! 오늘도 열공해",
    time: "15:00",
  },
  {
    id: 7,
    isMine: false,
    username: "ㅇㅇ",
    message: "여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지",
    time: "14:02",
  },
];

const SideChatComponent = ({
  chatPartnerName = "ㅇㅇ",
  messages = defaultMessages,
  onClose,
  onMinimize,
  onExpand,
  onViewAll,
}) => {
  const [inputValue, setInputValue] = useState("");
  const messageListRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <ChatPanel>
      <Header>
        <HeaderTitle>
          <ChatDot />
          <TitleText>{chatPartnerName}님과 채팅</TitleText>
        </HeaderTitle>
        <ButtonGroup>
          <HeaderBtn onClick={onMinimize} aria-label="최소화">
            <FontAwesomeIcon icon={faMinus} />
          </HeaderBtn>
          <HeaderBtn onClick={onExpand} aria-label="확대">
            <FontAwesomeIcon icon={faExpand} />
          </HeaderBtn>
          <CloseBtn onClick={onClose} aria-label="닫기">
            <FontAwesomeIcon icon={faXmark} />
          </CloseBtn>
        </ButtonGroup>
      </Header>

      <MessageList ref={messageListRef}>
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            isMine={msg.isMine}
            message={msg.message}
            time={msg.time}
            username={msg.username}
            profileImage={msg.profileImage ?? null}
          />
        ))}
      </MessageList>

      <InputArea>
        <TextInput
          placeholder="메시지 입력..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SendBtn onClick={handleSend} aria-label="전송">
          ➤
        </SendBtn>
      </InputArea>

      <Footer>
        <ViewAllText onClick={onViewAll}>채팅방 전체 보기 ↗</ViewAllText>
      </Footer>
    </ChatPanel>
  );
};

export default SideChatComponent;
