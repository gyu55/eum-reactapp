import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import { h11Bold } from "../../../../styles/common";
import { TYPE } from "../../constants";
import minusIcon from "../../assets/chat/minus_icon.svg";
import expandIcon from "../../assets/chat/expand.svg";
import closeIcon from "../../assets/chat/close_icon.svg";

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
  ${h11Bold}
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

const SideChatHeader = ({
  chatPartnerName = "ㅇㅇ",
  onMinimize,
  onExpand,
  onClose,
  type,
}) => {
  return (
    <div>
      <Header>
        {/* 해당 부분만 좀 다름 */}
        {type === TYPE.LIST && <TitleText>전체 채팅 리스트</TitleText>}
        {type === TYPE.REQUEST && <TitleText>채팅 요청 리스트</TitleText>}
        {type === TYPE.ROOM && (
          <HeaderTitle>
            <ChatDot />
            <TitleText>{chatPartnerName}님과 채팅</TitleText>
          </HeaderTitle>
        )}
        <ButtonGroup>
          <HeaderBtn onClick={onMinimize} aria-label="최소화">
            <img src={minusIcon} alt="최소화" />
          </HeaderBtn>
          <HeaderBtn onClick={onExpand} aria-label="확대">
            <img src={expandIcon} alt="확대" width={10} height={10} />
          </HeaderBtn>
          <CloseBtn onClick={onClose} aria-label="닫기">
            <img src={closeIcon} alt="닫기" />
          </CloseBtn>
        </ButtonGroup>
      </Header>
    </div>
  );
};

export default SideChatHeader;
