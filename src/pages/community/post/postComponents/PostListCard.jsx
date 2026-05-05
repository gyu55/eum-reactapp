import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  AvatarAndAuthorRow,
  AuthorName,
  Card,
  ContentAndTitleRow,
  ContentArea,
  Description,
  PostMetaRow,
  PostStateRow,
  StatItem,
  Tag,
  TagAndTimeRow,
  Thumbnail,
  TimeText,
  Title,
} from "./postListCard";

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
    // 포스트 카드 영역
    <Card>
      {/* 태그 및 작성 시각 */}
      <TagAndTimeRow>
        <Tag>{postTag}</Tag>
        <TimeText>{postCreateAt}</TimeText>
      </TagAndTimeRow>

      {/* 게시글 컨텐츠 (제목, 내용) 및 썸네일 row */}
      {/* <ContentAndTitleRow gap="28px" marginTop="16px"> */}
      <ContentAndTitleRow>
        {/* 게시글 제목 및 내용 */}
        <ContentArea>
          <Title>{postTitle}</Title>
          <Description>{postContent}</Description>
        </ContentArea>
        {/* 게시글 썸네일 */}
        <Thumbnail>
          {postThumbnail && <img src={postThumbnail} alt="게시글 썸네일" />}
        </Thumbnail>
      </ContentAndTitleRow>

      {/* 작성자 및 좋아요, 조회수, 댓글 수 나타내기 */}
      <PostMetaRow>
        {/* 작성자 프로필 이미지 및 이름 */}
        <AvatarAndAuthorRow>
          {authorAvatar && <Avatar src={authorAvatar} alt={userNickname} />}
          <AuthorName>{userNickname}</AuthorName>
        </AvatarAndAuthorRow>

        {/* 좋아요, 조회수, 댓글 수 row */}
        <PostStateRow>
          {/* 좋아요 */}
          <StatItem>
            <FontAwesomeIcon icon={faHeart} />
            <span>{postLikeCount}</span>
          </StatItem>
          {/* 댓글수 */}
          <StatItem>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments}</span>
          </StatItem>
          {/* 조회수 */}
          <StatItem>
            <FontAwesomeIcon icon={faEye} />
            <span>{postReadCount}</span>
          </StatItem>
        </PostStateRow>
      </PostMetaRow>
    </Card>
  );
};

export default PostListCard;
