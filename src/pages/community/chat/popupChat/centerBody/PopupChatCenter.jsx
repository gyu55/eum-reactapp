import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import * as S from "../../ChatStyle";
import chatImozi from "../../../assets/chat/chat_imozi.svg";
import chatImageUpload from "../../../assets/chat/chat_image_upload.svg";
import chatShare from "../../../assets/chat/chat_share.svg";
import chatSueo from "../../../assets/chat/chat_sueo.svg";
import useChatRoom from "../../hooks/useChatRoom";
import { uploadChatImage } from "../../../communityApi/chatApi";
import ChatMessage from "../../chatComponents/ChatMessage";

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

const PopupChatCenter = ({ chatRoomId, onProfileClick }) => {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const { messages, sendMessage, sendImageMessage } = useChatRoom(chatRoomId);

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

  const handleImageClick = () => fileInputRef.current?.click();

  const handleFileChange = useCallback(
    async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      e.target.value = "";
      try {
        const imageUrl = await uploadChatImage(chatRoomId, file);
        sendImageMessage(imageUrl);
      } catch (err) {
        console.error("이미지 전송 실패:", err);
      }
    },
    [chatRoomId, sendImageMessage],
  );

  return (
    <S.CenterPanel>
      {/* 메세지 나열 되는곳 */}
      <S.MessagesArea>
        {messages.map(
          ({ id, isMine, content, chatType, time, username, profileImage, userId, userExp }) => (
            <ChatMessage
              key={id}
              isMine={isMine}
              message={content}
              chatType={chatType}
              time={time}
              username={username}
              profileImage={profileImage}
              userId={userId}
              userExp={userExp}
              onProfileClick={onProfileClick}
            />
          ),
        )}
        <div ref={messagesEndRef} />
      </S.MessagesArea>

      {/* 메세지 작성하는곳 */}
      <S.InputArea>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <S.AttachRow>
          <S.AttachIcons>
            <S.AttachIcon src={chatImozi} alt="이모지" />
            <S.AttachIcon
              src={chatImageUpload}
              alt="이미지"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            />
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
