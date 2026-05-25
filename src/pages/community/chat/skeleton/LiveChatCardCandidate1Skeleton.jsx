import styled, { keyframes, css } from "styled-components";
import {
  communityBorderRadius,
  communitySideWidth,
} from "../../communityStyle";
import { BORDER_STYLE } from "../../constants";

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

const shimmerStyle = css`
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  ${communitySideWidth}
  ${communityBorderRadius}
  background: #ffffff;
  border: ${BORDER_STYLE.original};
  padding: 20px;
  gap: 16px;
  box-sizing: border-box;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const AvatarBlock = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
  ${shimmerStyle}
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

const TypePillBlock = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 100px;
  ${shimmerStyle}
`;

const DateBlock = styled.div`
  width: 72px;
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const TitleBlock = styled.div`
  width: 65%;
  height: 18px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const DetailArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DetailLine = styled.div`
  width: ${({ $width }) => $width || "100%"};
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
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
`;

const ProgressLabelBlock = styled.div`
  width: 52px;
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const ProgressCountBlock = styled.div`
  width: 48px;
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const ProgressBarBlock = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 100px;
  ${shimmerStyle}
`;

const JoinButtonBlock = styled.div`
  width: 100%;
  height: 38px;
  border-radius: 10px;
  ${shimmerStyle}
`;

const LiveChatCardCandidate1Skeleton = () => {
  return (
    <Card>
      <TopRow>
        <AvatarBlock />
        <TitleColumn>
          <MetaRow>
            <TypePillBlock />
            <DateBlock />
          </MetaRow>
          <TitleBlock />
        </TitleColumn>
      </TopRow>
      <DetailArea>
        <DetailLine />
        <DetailLine $width="75%" />
      </DetailArea>
      <ProgressArea>
        <ProgressTopRow>
          <ProgressLabelBlock />
          <ProgressCountBlock />
        </ProgressTopRow>
        <ProgressBarBlock />
      </ProgressArea>
      <JoinButtonBlock />
    </Card>
  );
};

export default LiveChatCardCandidate1Skeleton;
