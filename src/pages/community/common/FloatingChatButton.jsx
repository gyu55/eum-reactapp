// import React from "react";
// import styled, { keyframes } from "styled-components";
// import theme from "../../styles/theme";
// import { FONT_FAMILY, RADIUS, SHADOW } from "../../constants";

import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";
import { ALPHA, FONT_FAMILY, RADIUS, SHADOW } from "../constants";
import chatDefaultProfile from "../assets/chat/chat_default_profile.svg";
import expandImg from "../assets/chat/expand.svg";
import { h10Bold, h11Medium } from "../../../styles/common";

const { PALETTE, GRADIENT, GRAYSCALE, FONT_SIZE, FONT_WEIGHT } = theme;
const liveDotsImg =
  "https://www.figma.com/api/mcp/asset/73ce8508-8d79-4321-924d-7baff373298a";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
  animation: ${fadeIn} 0.3s ease;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px;
  border-radius: ${RADIUS.button};
  background: ${GRADIENT.deepBlue};
  border: none;
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${SHADOW.float};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${SHADOW.floatHover};
  }
`;

const DefaultProfile = styled.img`
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: ${RADIUS.smallCard};
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;

const RoomTitle = styled.p`
  ${h10Bold}
  color: ${PALETTE.white};
  margin: 0 0 8px 0;
  white-space: nowrap;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

const LiveDot = styled.img`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
`;

const LiveLabel = styled.span`
  ${h11Medium}
  color: ${GRAYSCALE[8]};
  margin-left: 6px;
  white-space: nowrap;
`;

const CountLabel = styled.span`
  color: ${GRAYSCALE[8]};
  ${h11Medium}
  margin-left: 10px;
  white-space: nowrap;
`;

const ExpandIcon = styled.img`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 6px;
  background: ${ALPHA.white15};
`;

const FloatingChatButton = ({
  roomName = "수어 일상 대화방",
  liveCount = "200명",
  onClick,
}) => {
  return (
    <Wrapper>
      {/* 사이드 채팅 창 여는 버튼 개념 */}
      <Button onClick={onClick} aria-label={`${roomName} 열기`}>
        {/* 기본 프로필 */}
        <DefaultProfile src={chatDefaultProfile} alt="" />
        <TextArea>
          <RoomTitle>{roomName}</RoomTitle>
          <MetaRow>
            <LiveDot src={liveDotsImg} alt="" />
            <LiveLabel>라이브</LiveLabel>
            <CountLabel>{liveCount}</CountLabel>
          </MetaRow>
        </TextArea>

        {/* 확대 아이콘 */}
        <ExpandIcon src={expandImg} alt="" />
      </Button>
    </Wrapper>
  );
};

export default FloatingChatButton;
