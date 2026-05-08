import React from "react";
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
  InputPlaceholder,
  SendBtn,
} from "../ChatStyle";

const emojiIconUrl =
  "https://www.figma.com/api/mcp/asset/7326d7ec-d93d-4233-a0cb-6b4c1a81433e";
const imageIconUrl =
  "https://www.figma.com/api/mcp/asset/0e43611f-4878-4e38-a9b5-3429810282f1";
const linkIconUrl =
  "https://www.figma.com/api/mcp/asset/02cbb637-a056-4524-a973-dd1de4c0bc6d";
const signIconUrl =
  "https://www.figma.com/api/mcp/asset/e4fac756-efc7-444e-8b51-66b882636ee0";

const PopupChatCenter = ({ messages }) => (
  <CenterPanel>
    <MessagesArea>
      {messages.map((msg) =>
        msg.type === "other" ? (
          <OtherMsgWrap key={msg.id}>
            <MsgAvatar src={msg.avatar} alt={msg.sender} />
            <MsgContentCol>
              <SenderName>{msg.sender}</SenderName>
              <MsgTimeRow>
                <OtherBubble>
                  <OtherBubbleText>{msg.content}</OtherBubbleText>
                </OtherBubble>
                <MsgTime>{msg.time}</MsgTime>
              </MsgTimeRow>
            </MsgContentCol>
          </OtherMsgWrap>
        ) : (
          <MyMsgRow key={msg.id}>
            <MsgTime>{msg.time}</MsgTime>
            <MyBubble>
              <MyBubbleText>{msg.content}</MyBubbleText>
            </MyBubble>
          </MyMsgRow>
        ),
      )}
    </MessagesArea>
    <InputArea>
      <AttachRow>
        <AttachIcons>
          <AttachIcon src={emojiIconUrl} alt="이모지" />
          <AttachIcon src={imageIconUrl} alt="이미지" />
          <AttachIcon src={linkIconUrl} alt="링크" />
        </AttachIcons>
        <AttachDivider />
        <AttachIcon src={signIconUrl} alt="수어" />
      </AttachRow>
      <InputRow>
        <TextInputBox>
          <InputPlaceholder>메시지 입력...</InputPlaceholder>
        </TextInputBox>
        <SendBtn>➤</SendBtn>
      </InputRow>
    </InputArea>
  </CenterPanel>
);

export default PopupChatCenter;
