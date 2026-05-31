import styled, { keyframes, css } from "styled-components";
import { PostContentWrapper } from "../postDetailStyle";

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

const shimmerStyle = css`
  background: linear-gradient(90deg, #e8e8e8 25%, #f0f0f0 50%, #e8e8e8 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonBlock = styled.div`
  ${shimmerStyle}
  border-radius: 6px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "16px"};
`;

const SkeletonAvatar = styled.div`
  ${shimmerStyle}
  width: 44px;
  height: 44px;
  border-radius: 10px;
  flex-shrink: 0;
`;

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 44px;
`;

const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AuthorSubRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SkeletonDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #e8e8e8;
`;

const BodyLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const SkeletonImageBox = styled.div`
  ${shimmerStyle}
  width: 60%;
  height: 160px;
  border-radius: 12px;
  align-self: center;
`;

const SkeletonAccessBox = styled.div`
  ${shimmerStyle}
  width: 100%;
  height: 120px;
  border-radius: 12px;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SkeletonSquare = styled.div`
  ${shimmerStyle}
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

const PostContentSkeleton = () => {
  return (
    <div>
      <PostContentWrapper>
        {/* 제목 */}
        <SkeletonBlock height="32px" width="58%" />

        {/* 작성자 정보 */}
        <AuthorRow>
          <SkeletonAvatar />
          <AuthorMeta>
            <SkeletonBlock height="16px" width="90px" />
            <AuthorSubRow>
              <SkeletonBlock height="13px" width="38px" />
              <SkeletonBlock height="13px" width="130px" />
            </AuthorSubRow>
          </AuthorMeta>
        </AuthorRow>

        {/* 구분선 */}
        <SkeletonDivider />

        {/* 본문 내용 */}
        <BodyLines>
          <SkeletonBlock height="14px" width="100%" />
          <SkeletonBlock height="14px" width="94%" />
          <SkeletonBlock height="14px" width="87%" />
          <SkeletonBlock height="14px" width="100%" />
          <SkeletonBlock height="14px" width="70%" />
          {/* 인용 블록 */}
          <SkeletonBlock height="64px" width="100%" />
          <SkeletonBlock height="14px" width="100%" />
          <SkeletonBlock height="14px" width="82%" />
          <SkeletonBlock height="14px" width="96%" />
          {/* 이미지 영역 */}
          <SkeletonImageBox />
          <SkeletonBlock
            height="13px"
            width="200px"
            style={{ alignSelf: "center" }}
          />
          <SkeletonBlock height="14px" width="100%" />
          <SkeletonBlock height="14px" width="88%" />
        </BodyLines>

        {/* 접근성 도구 */}
        <SkeletonAccessBox />

        {/* 액션 버튼 */}
        <ActionRow>
          <SkeletonBlock height="22px" width="56px" />
          <ActionButtons>
            <SkeletonSquare />
            <SkeletonSquare />
          </ActionButtons>
        </ActionRow>
      </PostContentWrapper>
    </div>
  );
};

export default PostContentSkeleton;
