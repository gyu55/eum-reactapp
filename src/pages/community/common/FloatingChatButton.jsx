import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";
import { ALPHA, RADIUS, SHADOW } from "../constants";
import chatDefaultProfile from "../assets/chat/chat_default_profile.svg";
import expandImg from "../assets/chat/expand.svg";
import { h10Bold, h11Medium } from "../../../styles/common";
import { useChatContext } from "../context/ChatContext";
import useDraggable from "./useDraggable";

const { PALETTE, GRADIENT, GRAYSCALE } = theme;
const liveDotsImg =
  "https://www.figma.com/api/mcp/asset/73ce8508-8d79-4321-924d-7baff373298a";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  transform-origin: top left;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px;
  border-radius: ${RADIUS.button};
  background: ${GRADIENT.deepBlue};
  border: none;
  cursor: grab;
  overflow: hidden;
  box-shadow: ${SHADOW.float};
  animation: ${fadeIn} 0.3s ease;
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

const FloatingChatButton = () => {
  const initialDPR = useRef(window.devicePixelRatio);
  const [scale, setScale] = useState(1);
  const { chatRoomDTO, reopenChat } = useChatContext();
  const { chatRoomName, chatRoomUsers } = chatRoomDTO ?? {};

  const { pos, stateRef, onDragHandleMouseDown } = useDraggable(
    Math.max(0, window.innerWidth - 292),
    Math.max(0, window.innerHeight - 175),
  );

  useEffect(() => {
    const handleResize = () => {
      setScale(initialDPR.current / window.devicePixelRatio);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (stateRef.current.wasDragged) return;
    reopenChat();
  };

  return (
    <Wrapper
      onMouseDown={onDragHandleMouseDown}
      style={{
        left: pos.x,
        top: pos.y,
        transform: `scale(${scale})`,
      }}
    >
      <Button onClick={handleClick} aria-label={`${chatRoomName} 열기`}>
        <DefaultProfile src={chatDefaultProfile} alt="" />
        <TextArea>
          <RoomTitle>{chatRoomName}</RoomTitle>
          <MetaRow>
            <LiveDot src={liveDotsImg} alt="" />
            <LiveLabel>라이브</LiveLabel>
            <CountLabel>{chatRoomUsers}</CountLabel>
          </MetaRow>
        </TextArea>
        <ExpandIcon src={expandImg} alt="" />
      </Button>
    </Wrapper>
  );
};

export default FloatingChatButton;
