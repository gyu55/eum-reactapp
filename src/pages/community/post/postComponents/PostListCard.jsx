import styled from "styled-components";
import theme from "../../../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  flexBetweenRow,
  flexCenterRow,
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

const TopRow = styled.div`
  ${flexBetweenRow}
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

const MidRow = styled.div`
  ${flexCenterRow}
  gap: 28px;
  margin-top: 16px;
`;

// 제목과 글 내용
const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 9px;
  /* min-width: 0; */
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

// 하단 작성자, 게시글 상태 묶은 row
const BottomRow = styled.div`
  ${flexBetweenRow}
  margin-top: 36px;
`;

const AuthorArea = styled.div`
  ${flexCenterRow}
  gap: 8px;
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

const StatsArea = styled.div`
  ${flexCenterRow}
  gap: 12px;
`;

const StatItem = styled.div`
  ${flexCenterRow}
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
  tag = "학습 인증",
  time = "방금 전",
  title = "수어에서 감정 표현할 때 표정이 얼마나 중요한가요?",
  content = "수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제로 어느 정도 비중을 두어야 할지 궁금합니다.",
  thumbnail = null,
  authorName = "수어러버김지민",
  authorAvatar = null,
  likes = 42,
  comments = 18,
  views = 887,
}) => {
  return (
    <Card>
      <TopRow>
        <Tag>{tag}</Tag>
        <TimeText>{time}</TimeText>
      </TopRow>

      <MidRow>
        <ContentArea>
          <Title>{title}</Title>
          <Description>{content}</Description>
        </ContentArea>
        <Thumbnail>
          {thumbnail && <img src={thumbnail} alt="게시글 썸네일" />}
        </Thumbnail>
      </MidRow>

      <BottomRow>
        <AuthorArea>
          {authorAvatar && <Avatar src={authorAvatar} alt={authorName} />}
          <AuthorName>{authorName}</AuthorName>
        </AuthorArea>
        <StatsArea>
          <StatItem>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likes}</span>
          </StatItem>
          <StatItem>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments}</span>
          </StatItem>
          <StatItem>
            <FontAwesomeIcon icon={faEye} />
            <span>{views}</span>
          </StatItem>
        </StatsArea>
      </BottomRow>
    </Card>
  );
};

export default PostListCard;
