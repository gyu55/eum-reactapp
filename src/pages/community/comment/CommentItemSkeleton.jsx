import styled, { css, keyframes } from "styled-components";
import { COMMENT, RADIUS, SURFACE } from "../constants";

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
`;

const shimmerStyle = css`
  background: linear-gradient(90deg, #ebebeb 25%, #f5f5f5 50%, #ebebeb 75%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
`;

const SkeletonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 0;
  background: ${SURFACE.card};
  padding-left: ${({ $isReply }) => ($isReply ? COMMENT.replyIndent : "0")};
`;

const SkeletonLeft = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`;

const SkeletonAvatar = styled.div`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: 50%;
  flex-shrink: 0;
  ${shimmerStyle}
`;

const SkeletonBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${COMMENT.itemGap};
  flex: 1;
  min-width: 0;
`;

const SkeletonLine = styled.div`
  height: ${({ $height }) => $height ?? "14px"};
  width: ${({ $width }) => $width ?? "100%"};
  border-radius: 6px;
  ${shimmerStyle}
`;

const SkeletonReactions = styled.div`
  display: flex;
  gap: ${COMMENT.itemGap};
`;

const SkeletonAccessibility = styled.div`
  display: flex;
  gap: 8px;
`;

const SkeletonRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;
  width: 88px;
`;

const SkeletonReportBtn = styled.div`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: ${RADIUS.button};
  ${shimmerStyle}
`;

const CommentItemSkeleton = ({ isReply = false }) => {
  return (
    <SkeletonWrapper $isReply={isReply}>
      <SkeletonLeft>
        <SkeletonAvatar />
        <SkeletonBody>
          <SkeletonLine $width="80px" $height="14px" />
          <SkeletonLine $width="100%" $height="14px" />
          <SkeletonLine $width="65%" $height="14px" />
          <SkeletonReactions>
            <SkeletonLine $width="36px" $height="12px" />
            <SkeletonLine $width="36px" $height="12px" />
          </SkeletonReactions>
          <SkeletonAccessibility>
            <SkeletonLine $width="80px" $height="28px" />
            <SkeletonLine $width="80px" $height="28px" />
          </SkeletonAccessibility>
        </SkeletonBody>
      </SkeletonLeft>
      <SkeletonRight>
        <SkeletonLine $width="50px" $height="12px" />
        <SkeletonReportBtn />
      </SkeletonRight>
    </SkeletonWrapper>
  );
};

export default CommentItemSkeleton;
