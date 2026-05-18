import styled from "styled-components";
import theme from "../../../../../styles/theme";
import {
  communityBorderRadius,
  communitySideWidth,
  hoverStyle,
} from "../../../communityStyle";
import T from "../../../communityTextStyle";
import { BORDER_STYLE } from "../../../constants";

// 후보 1: 아바타 + 진행도 바형
// - 좌상단 그라데이션 원형 아바타로 채팅방 식별성 강화
// - 인원 수를 단순 텍스트가 아닌 progress bar로 시각화
// - 타입 pill + 생성일을 한 줄에 배치해 가독성 향상

const Card = styled.div`
  display: flex;
  flex-direction: column;
  ${communitySideWidth}
  ${communityBorderRadius}
  background: ${theme.PALETTE.white};
  border: ${BORDER_STYLE.original};
  padding: 20px;
  gap: 16px;
  box-sizing: border-box;
  ${hoverStyle}
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${theme.GRADIENT.lightBlue};
  color: ${theme.PALETTE.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h7};
  flex-shrink: 0;
`;

const TitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TypePill = styled.span`
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  padding: 3px 8px;
  border-radius: 100px;
  white-space: nowrap;
`;

const DateText = styled.span`
  font-size: ${theme.FONT_SIZE.h12};
  color: ${theme.GRAYSCALE[7]};
`;

const Title = styled(T.H8Bold)`
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

const ProgressArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProgressTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.FONT_SIZE.h11};
`;

const ProgressLabel = styled.span`
  color: ${theme.TEXT_COLOR.basic};
  font-weight: ${theme.FONT_WEIGHT.medium};
`;

const ProgressCount = styled.span`
  color: ${theme.PALETTE.primary.main};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${theme.GRAYSCALE[0]};
  border-radius: 100px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: ${theme.GRADIENT.lightBlue};
  border-radius: 100px;
  transition: width 0.3s ease;
`;

const JoinButton = styled.button`
  width: 100%;
  background: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${theme.PALETTE.primary.dark};
  }
`;

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

const LiveChatCardCandidate1 = ({
  chatRoomName = "채팅방",
  chatRoomType = "그룹",
  chatRoomCreateAt = "",
  chatRoomDetail = "",
  chatRoomUsers = 0,
  chatRoomLimit = 100,
  onJoin,
}) => {
  const limit = chatRoomLimit || 100;
  const percent = Math.min(100, Math.round((chatRoomUsers / limit) * 100)) || 0;
  const firstChar = chatRoomName?.trim()?.charAt(0) || "?";

  return (
    <Card>
      <TopRow>
        <Avatar>{firstChar}</Avatar>
        <TitleColumn>
          <MetaRow>
            <TypePill>{chatRoomType}</TypePill>
            <DateText>{formatDate(chatRoomCreateAt)}</DateText>
          </MetaRow>
          <Title>{chatRoomName}</Title>
        </TitleColumn>
      </TopRow>
      <Detail>{chatRoomDetail || "설명이 없습니다."}</Detail>
      <ProgressArea>
        <ProgressTopRow>
          <ProgressLabel>참여 인원</ProgressLabel>
          <ProgressCount>
            {chatRoomUsers}/{limit}명
          </ProgressCount>
        </ProgressTopRow>
        <ProgressBar>
          <ProgressFill $percent={percent} />
        </ProgressBar>
      </ProgressArea>
      <JoinButton onClick={onJoin}>참여하기</JoinButton>
    </Card>
  );
};

export default LiveChatCardCandidate1;
