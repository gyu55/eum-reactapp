import styled, { keyframes, css } from "styled-components";
import {
  communityBorderRadius,
  communityWidthStyle,
} from "../../communityStyle";
import { BORDER_STYLE, RADIUS } from "../../constants";

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
  background: #ffffff;
  ${communityBorderRadius}
  ${communityWidthStyle}
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: ${BORDER_STYLE.original};
`;

const TagAndTimeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TagBlock = styled.div`
  width: 56px;
  height: 20px;
  border-radius: ${RADIUS.pill};
  ${shimmerStyle}
`;

const TimeBlock = styled.div`
  width: 80px;
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const ContentAndTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 16px;
  gap: 28px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 9px;
`;

const TitleBlock = styled.div`
  width: 60%;
  height: 22px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const DescLine = styled.div`
  width: ${({ $width }) => $width || "100%"};
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const ThumbnailBlock = styled.div`
  width: 96px;
  height: 96px;
  border-radius: ${RADIUS.card};
  flex-shrink: 0;
  ${shimmerStyle}
`;

const PostMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;

const AvatarAndAuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AvatarBlock = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
  ${shimmerStyle}
`;

const AuthorNameBlock = styled.div`
  width: 72px;
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const PostStateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatBlock = styled.div`
  width: 32px;
  height: 14px;
  border-radius: 4px;
  ${shimmerStyle}
`;

const PostListCardSkeleton = () => {
  return (
    <Card>
      <TagAndTimeRow>
        <TagBlock />
        <TimeBlock />
      </TagAndTimeRow>

      <ContentAndTitleRow>
        <ContentArea>
          <TitleBlock />
          <DescLine />
          <DescLine $width="75%" />
        </ContentArea>
        <ThumbnailBlock />
      </ContentAndTitleRow>

      <PostMetaRow>
        <AvatarAndAuthorRow>
          <AvatarBlock />
          <AuthorNameBlock />
        </AvatarAndAuthorRow>
        <PostStateRow>
          <StatBlock />
          <StatBlock />
          <StatBlock />
        </PostStateRow>
      </PostMetaRow>
    </Card>
  );
};

export default PostListCardSkeleton;
