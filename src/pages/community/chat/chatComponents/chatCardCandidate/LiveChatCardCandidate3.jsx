import styled from "styled-components";
import theme from "../../../../../styles/theme";
import {
  communityBorderRadius,
  communitySideWidth,
  hoverStyle,
  Divider,
} from "../../../communityStyle";
import T from "../../../communityTextStyle";
import { BORDER_STYLE } from "../../../constants";

// 후보 3: 좌측 강조선형 (정보 우선)
// - 색상 영역을 최소화(좌측 6px 그라데이션 바)하고 정보 표현에 공간 집중
// - 타입 pill + LIVE 배지를 상단에 분리 배치
// - 참여 인원 / 개설일을 메타 행으로 한 줄에 정리

const Card = styled.div`
  ${communitySideWidth}
  ${communityBorderRadius}
  background: ${theme.PALETTE.white};
  border: ${BORDER_STYLE.original};
  display: flex;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
  ${hoverStyle}
`;

const AccentBar = styled.div`
  width: 6px;
  background: ${theme.GRADIENT.lightBlue};
  flex-shrink: 0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  flex: 1;
  min-width: 0;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const TypePill = styled.span`
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  padding: 4px 10px;
  border-radius: 100px;
`;

const LiveBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #e8f9e9;
  color: ${theme.PALETTE.secondary.main};
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  padding: 4px 10px;
  border-radius: 100px;
`;

const LiveDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${theme.PALETTE.secondary.main};
`;

const Title = styled(T.H7Bold)`
  margin: 0;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Detail = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.GRAYSCALE[9]};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 36px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${theme.FONT_SIZE.h11};
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const MetaLabel = styled.span`
  color: ${theme.GRAYSCALE[7]};
`;

const MetaValue = styled.span`
  color: ${theme.TEXT_COLOR.basic};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

const JoinButton = styled.button`
  width: 100%;
  background: ${theme.PALETTE.white};
  color: ${theme.PALETTE.primary.main};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  border: 1.5px solid ${theme.PALETTE.primary.main};
  border-radius: 10px;
  padding: 9px;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s;

  &:hover {
    background: ${theme.PALETTE.primary.main};
    color: ${theme.PALETTE.white};
  }
`;

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

const LiveChatCardCandidate3 = ({
  chatRoomName = "채팅방",
  chatRoomType = "그룹",
  chatRoomCreateAt = "",
  chatRoomDetail = "",
  chatRoomUsers = 0,
  chatRoomLimit = 100,
  onJoin,
}) => {
  const limit = chatRoomLimit || 100;

  return (
    <Card>
      <AccentBar />
      <Body>
        <TopRow>
          <TypePill>{chatRoomType}</TypePill>
          <LiveBadge>
            <LiveDot />
            LIVE
          </LiveBadge>
        </TopRow>
        <Title>{chatRoomName}</Title>
        <Detail>{chatRoomDetail || "설명이 없습니다."}</Detail>
        <Divider />
        <MetaRow>
          <MetaItem>
            <MetaLabel>참여</MetaLabel>
            <MetaValue>
              {chatRoomUsers}/{limit}
            </MetaValue>
          </MetaItem>
          <MetaItem>
            <MetaLabel>개설</MetaLabel>
            <MetaValue>{formatDate(chatRoomCreateAt)}</MetaValue>
          </MetaItem>
        </MetaRow>
        <JoinButton onClick={onJoin}>참여하기</JoinButton>
      </Body>
    </Card>
  );
};

export default LiveChatCardCandidate3;
