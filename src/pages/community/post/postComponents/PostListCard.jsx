import styled from "styled-components";
import theme from "../../../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  h11Medium,
  h11Regular,
  h12Bold,
  h5Bold,
  h8Medium,
  h9Bold,
} from "../../../../styles/common";
import {
  communityBorderRadius,
  communityWidthStyle,
  FlexRow,
  hoverStyle,
} from "../../communityStyle";

// 게시글 카드 컴포넌트 카드 스타일
const Card = styled.div`
  background: ${theme.PALETTE.white};
  ${communityBorderRadius}
  ${communityWidthStyle}
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  ${hoverStyle}
`;

const Tag = styled.span`
  background: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  ${h12Bold}
  border-radius: 100px;
  padding: 2px 8px;
  white-space: nowrap;
`;

const TimeText = styled.p`
  ${h11Medium}
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  white-space: nowrap;
`;

// 제목과 글 내용
const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 9px;
`;

// 제목
const Title = styled.p`
  ${h5Bold}
  margin: 0;
  word-break: keep-all;
`;

// 이걸 레귤러 로 할 까 대략적인 생각
// 내용
const Description = styled.p`
  ${h8Medium}
  color: ${theme.GRAYSCALE[9]};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// 게시글 이미지
const Thumbnail = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 20px;
  background: ${theme.GRAYSCALE[0]};
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.span`
  ${h9Bold}
  color: ${theme.TEXT_COLOR.basic};
  white-space: nowrap;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    ${h11Medium}
    color: ${theme.GRAYSCALE[9]};
  }

  span {
    ${h11Regular}
    color: ${theme.TEXT_COLOR.basic};
    white-space: nowrap;
  }
`;

const PostListCard = ({
  postTag = "학습 인증",
  postCreateAt = "방금 전",
  postTitle = "수어에서 감정 표현할 때 표정이 얼마나 중요한가요?",
  postContent = "수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제로 어느 정도 비중을 두어야 할지 궁금합니다.",
  postThumbnail = null, // DTO 정의 시 확정
  userNickname = "수어러버김지민",
  authorAvatar = null, // DTO 정의 시 확정
  postLikeCount = 42,
  comments = 18, // DTO 정의 시 확정
  postReadCount = 887,
}) => {
  return (
    <Card>
      <FlexRow justifyContent="space-between">
        <Tag>{postTag}</Tag>
        <TimeText>{postCreateAt}</TimeText>
      </FlexRow>

      <FlexRow gap="28px" marginTop="16px">
        <ContentArea>
          <Title>{postTitle}</Title>
          <Description>{postContent}</Description>
        </ContentArea>
        <Thumbnail>
          {postThumbnail && <img src={postThumbnail} alt="게시글 썸네일" />}
        </Thumbnail>
      </FlexRow>

      <FlexRow justifyContent="space-between" marginTop="36px">
        <FlexRow gap="8px">
          {authorAvatar && <Avatar src={authorAvatar} alt={userNickname} />}
          <AuthorName>{userNickname}</AuthorName>
        </FlexRow>
        <FlexRow gap="12px">
          <StatItem>
            <FontAwesomeIcon icon={faHeart} />
            <span>{postLikeCount}</span>
          </StatItem>
          <StatItem>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments}</span>
          </StatItem>
          <StatItem>
            <FontAwesomeIcon icon={faEye} />
            <span>{postReadCount}</span>
          </StatItem>
        </FlexRow>
      </FlexRow>
    </Card>
  );
};

export default PostListCard;
