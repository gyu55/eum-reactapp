import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  CenterPanel,
  MessagesArea,
  OtherMsgWrap,
  MsgAvatar,
  MsgContentCol,
  SenderName,
  MsgTimeRow,
  OtherBubble,
  OtherBubbleText,
  MsgTime,
  MyMsgRow,
  MyBubble,
  MyBubbleText,
  InputArea,
  AttachRow,
  AttachIcons,
  AttachIcon,
  AttachDivider,
  InputRow,
  TextInputBox,
  SendBtn,
} from "../../ChatStyle";
import chatImozi from "../../../assets/chat/chat_imozi.svg";
import chatImageUpload from "../../../assets/chat/chat_image_upload.svg";
import chatShare from "../../../assets/chat/chat_share.svg";
import chatSueo from "../../../assets/chat/chat_sueo.svg";
import useChatRoom from "../../hooks/useChatRoom";

const S = {
  CenterPanel,
  MessagesArea,
  OtherMsgWrap,
  MsgAvatar,
  MsgContentCol,
  SenderName,
  MsgTimeRow,
  OtherBubble,
  OtherBubbleText,
  MsgTime,
  MyMsgRow,
  MyBubble,
  MyBubbleText,
  InputArea,
  AttachRow,
  AttachIcons,
  AttachIcon,
  AttachDivider,
  InputRow,
  TextInputBox,
  SendBtn,
};

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

const PopupChatCenter = ({ chatRoomId }) => {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);
  const { messages, sendMessage } = useChatRoom(chatRoomId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    sendMessage(inputText.trim());
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
      {/* 메세지 나열 되는곳 */}
      <S.MessagesArea>
        {messages.map((msg) =>
          !msg.isMine ? (
            <S.OtherMsgWrap key={msg.id}>
              <S.MsgAvatar src={msg.profileImage} alt={msg.username} />
              <S.MsgContentCol>
                <S.SenderName>{msg.username}</S.SenderName>
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

      {/* 메세지 작성하는곳 */}
      <S.InputArea>
        <S.AttachRow>
          <S.AttachIcons>
            <S.AttachIcon src={chatImozi} alt="이모지" />
            <S.AttachIcon src={chatImageUpload} alt="이미지" />
            <S.AttachIcon src={chatShare} alt="링크" />
          </S.AttachIcons>
          <S.AttachDivider />
          <S.AttachIcon src={chatSueo} alt="수어" />
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

export default React.memo(PopupChatCenter);
