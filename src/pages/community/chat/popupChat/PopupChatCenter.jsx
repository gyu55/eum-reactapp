import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import S from "../ChatStyle";

const emojiIconUrl =
  "https://www.figma.com/api/mcp/asset/7326d7ec-d93d-4233-a0cb-6b4c1a81433e";
const imageIconUrl =
  "https://www.figma.com/api/mcp/asset/0e43611f-4878-4e38-a9b5-3429810282f1";
const linkIconUrl =
  "https://www.figma.com/api/mcp/asset/02cbb637-a056-4524-a973-dd1de4c0bc6d";
const signIconUrl =
  "https://www.figma.com/api/mcp/asset/e4fac756-efc7-444e-8b51-66b882636ee0";

const TextInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-family: inherit;
  font-size: 11px;
  color: inherit;
`;

const PopupChatCenter = ({ messages, onSendMessage }) => {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <S.CenterPanel>
      <S.MessagesArea>
        {messages.map((msg) =>
          msg.type === "other" ? (
            <S.OtherMsgWrap key={msg.id}>
              <S.MsgAvatar src={msg.avatar} alt={msg.sender} />
              <S.MsgContentCol>
                <S.SenderName>{msg.sender}</S.SenderName>
                <S.MsgTimeRow>
                  <S.OtherBubble>
                    <S.OtherBubbleText>{msg.content}</S.OtherBubbleText>
                  </S.OtherBubble>
                  <S.MsgTime>{msg.time}</S.MsgTime>
                </S.MsgTimeRow>
              </S.MsgContentCol>
            </S.OtherMsgWrap>
          ) : (
            <S.MyMsgRow key={msg.id}>
              <S.MsgTime>{msg.time}</S.MsgTime>
              <S.MyBubble>
                <S.MyBubbleText>{msg.content}</S.MyBubbleText>
              </S.MyBubble>
            </S.MyMsgRow>
          ),
        )}
        <div ref={messagesEndRef} />
      </S.MessagesArea>
      <S.InputArea>
        <S.AttachRow>
          <S.AttachIcons>
            <S.AttachIcon src={emojiIconUrl} alt="이모지" />
            <S.AttachIcon src={imageIconUrl} alt="이미지" />
            <S.AttachIcon src={linkIconUrl} alt="링크" />
          </S.AttachIcons>
          <S.AttachDivider />
          <S.AttachIcon src={signIconUrl} alt="수어" />
        </S.AttachRow>
        <S.InputRow>
          <S.TextInputBox>
            <TextInput
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="메시지 입력..."
            />
          </S.TextInputBox>
          <S.SendBtn onClick={handleSend}>➤</S.SendBtn>
        </S.InputRow>
      </S.InputArea>
    </S.CenterPanel>
  );
};

export default PopupChatCenter;