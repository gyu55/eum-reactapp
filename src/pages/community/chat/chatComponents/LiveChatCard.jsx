import styled from "styled-components";
import theme from "../../../../styles/theme";
import {
  communityBorderRadius,
  communitySideWidth,
  Divider,
  flexStartColumn,
  hoverStyle,
} from "../../communityStyle";
import { flexBetweenRow, flexCenterColumn } from "../../../../styles/common";
import { H7Medium, H10Regular } from "../../communityTextStyle";
import { BORDER_STYLE } from "../../constants";

const Card = styled.div`
  ${flexCenterColumn}
  ${communitySideWidth}
  ${communityBorderRadius}
  border: ${BORDER_STYLE.original};
  overflow: hidden;
  ${hoverStyle}
`;

const CardHeader = styled.div`
  width: 100%;
  height: 110px;
  background: ${theme.GRADIENT.lightBlue};
  flex-shrink: 0;
`;

const CardBody = styled.div`
  background: ${theme.PALETTE.white};
  padding: 20px;
  ${flexCenterColumn}
  width: 100%;
  gap: 8px;
`;

// 라이브 표시 하는 부분 (일단 사용 안함)

// const LiveBadge = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 4px;
//   background: #e8f9e9;
//   border-radius: 100px;
//   padding: 4px 8px;
//   width: fit-content;
// `;

// const LiveDot = styled.div`
//   width: 8px;
//   height: 8px;
//   border-radius: 50%;
//   background: ${theme.PALETTE.secondary.main};
//   flex-shrink: 0;
// `;

// const LiveText = styled.span`
//   font-weight: ${theme.FONT_WEIGHT.bold};
//   font-size: ${theme.FONT_SIZE.h12};
//   color: ${theme.PALETTE.secondary.main};
//   white-space: nowrap;
// `;

const InfoArea = styled.div`
  ${flexStartColumn}
  gap: 8px;
  width: 100%;
`;

const RoomTitle = styled(H7Medium)`
  margin: 0;
  line-height: 1;
`;

const BottomRow = styled.div`
  ${flexBetweenRow}
  width: 100%;
`;

const ParticipantInfo = styled.div`
  ${flexBetweenRow}
  gap: 4px;
  font-size: ${theme.FONT_SIZE.h11};
`;

const ParticipantLabel = styled.span`
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
`;

const ParticipantCount = styled.span`
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
`;

// 작은 버튼
const JoinButton = styled.button`
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h11};
  border: none;
  border-radius: 10px;
  padding: 6px 16px;
  cursor: pointer;
  white-space: nowrap;
  line-height: normal;

  &:hover {
    background: #dde3ff;
  }
`;

const LiveChatCard = ({
  title = "수어 학습 질문방",
  description = "수어 학습 중 궁금한 점을 함께 해결해요. 초보자도 편하게!",
  participantCount = "00",
  isLive = true,
  onJoin,
}) => {
  return (
    <Card>
      <CardHeader />
      <CardBody>
        <InfoArea>
          {/* {isLive && (
            <LiveBadge>
              <LiveDot />
              <LiveText>라이브</LiveText>
            </LiveBadge>
          )} */}
          <RoomTitle style={{ marginTop: isLive ? "8px" : "0" }}>
            {title}
          </RoomTitle>
          <H10Regular $color={theme.GRAYSCALE[9]}>{description}</H10Regular>
        </InfoArea>
        <Divider />
        <BottomRow>
          <ParticipantInfo>
            <ParticipantLabel>참여 중</ParticipantLabel>
            <ParticipantCount>{participantCount}명</ParticipantCount>
          </ParticipantInfo>
          <JoinButton onClick={onJoin}>참여하기</JoinButton>
        </BottomRow>
      </CardBody>
    </Card>
  );
};

export default LiveChatCard;
