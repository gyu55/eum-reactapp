import styled from "styled-components";
import theme from "../../../../../styles/theme";
import {
  communityBorderRadius,
  communitySideWidth,
  hoverStyle,
} from "../../../communityStyle";
import { TAG_ON_PRIMARY, ALPHA } from "../../../constants";

// 후보 2: 그라데이션 글래스형
// - 전체 카드를 브랜드 그라데이션으로 채워 시각적 임팩트 강조
// - 흰 원형 아바타가 그라데이션 위에 떠 있어 식별성 유지
// - LIVE dot으로 실시간성을 직관적으로 표현

const Card = styled.div`
  ${communitySideWidth}
  ${communityBorderRadius}
  background: ${theme.GRADIENT.blue};
  padding: 22px 20px;
  color: ${theme.PALETTE.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  box-sizing: border-box;
  ${hoverStyle}

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: -40px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
    pointer-events: none;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const TypePill = styled.span`
  background: ${TAG_ON_PRIMARY.bg};
  border: 1px solid ${TAG_ON_PRIMARY.border};
  color: ${theme.PALETTE.white};
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  padding: 4px 10px;
  border-radius: 100px;
  backdrop-filter: blur(4px);
`;

const DateText = styled.span`
  font-size: ${theme.FONT_SIZE.h12};
  color: ${ALPHA.white70};
`;

const AvatarRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${theme.PALETTE.white};
  color: ${theme.PALETTE.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h6};
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  flex: 1;
`;

const Title = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LiveLine = styled.span`
  font-size: ${theme.FONT_SIZE.h11};
  color: ${ALPHA.white70};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LiveDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 6px #4ade80;
`;

const Detail = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  color: ${ALPHA.white70};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  z-index: 1;
  min-height: 36px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  gap: 8px;
`;

const CapacityPill = styled.div`
  background: ${ALPHA.white15};
  border: 1px solid ${TAG_ON_PRIMARY.border};
  padding: 6px 12px;
  border-radius: 100px;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  backdrop-filter: blur(4px);
  white-space: nowrap;
`;

const JoinButton = styled.button`
  background: ${theme.PALETTE.white};
  color: ${theme.PALETTE.primary.main};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  border: none;
  border-radius: 10px;
  padding: 8px 18px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;

  &:hover {
    background: ${theme.PALETTE.primary.extraLight};
  }
`;

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

const LiveChatCardCandidate2 = ({
  chatRoomName = "채팅방",
  chatRoomType = "그룹",
  chatRoomCreateAt = "",
  chatRoomDetail = "",
  chatRoomUsers = 0,
  chatRoomLimit = 100,
  onJoin,
}) => {
  const firstChar = chatRoomName?.trim()?.charAt(0) || "?";
  const limit = chatRoomLimit || 100;

  return (
    <Card>
      <TopRow>
        <TypePill>{chatRoomType}</TypePill>
        <DateText>{formatDate(chatRoomCreateAt)}</DateText>
      </TopRow>
      <AvatarRow>
        <Avatar>{firstChar}</Avatar>
        <TitleArea>
          <Title>{chatRoomName}</Title>
          <LiveLine>
            <LiveDot />
            실시간 참여 중
          </LiveLine>
        </TitleArea>
      </AvatarRow>
      <Detail>{chatRoomDetail || "설명이 없습니다."}</Detail>
      <BottomRow>
        <CapacityPill>
          {chatRoomUsers}/{limit}명
        </CapacityPill>
        <JoinButton onClick={onJoin}>참여하기 →</JoinButton>
      </BottomRow>
    </Card>
  );
};

export default LiveChatCardCandidate2;
