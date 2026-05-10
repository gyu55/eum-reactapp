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
} from "./postListCardStyle";
import postDefaultProfile from "../../assets/post_default_profile.png";
import defaultProfile1 from "../../assets/userProfile/default1.png";
import defaultProfile2 from "../../assets/userProfile/default2.png";
import defaultProfile3 from "../../assets/userProfile/default3.png";
import defaultProfile4 from "../../assets/userProfile/default4.png";

const defaultProfiles = [
  defaultProfile1,
  defaultProfile2,
  defaultProfile3,
  defaultProfile4,
];

const PostListCard = ({
  id = 0,
  postTag = "",
  postCreateAt = "",
  postTitle = "",
  postContent = "",
  userNickname = "",
  userProfile = "",
  likeCount = 0,
  commentCount = 0,
  postReadCount = 0,
}) => {
  const fallbackProfile = defaultProfiles[id % defaultProfiles.length];

  return (
    // 포스트 카드 영역
    <Card>
      {/* 태그 및 작성 시각 */}
      <TagAndTimeRow>
        <Tag>{postTag}</Tag>
        <TimeText>{postCreateAt}</TimeText>
      </TagAndTimeRow>

      {/* 게시글 컨텐츠 (제목, 내용) 및 썸네일 row */}
      <ContentAndTitleRow>
        {/* 게시글 제목 및 내용 */}
        <ContentArea>
          <Title>{postTitle}</Title>
          <Description>{postContent}</Description>
        </ContentArea>
        {/* 게시글 썸네일 — 추후 API 연동 시 실제 이미지로 교체 */}
        <Thumbnail>
          <img src={postDefaultProfile} alt="게시글 썸네일" />
        </Thumbnail>
      </ContentAndTitleRow>

      {/* 작성자 및 좋아요, 조회수, 댓글 수 나타내기 */}
      <PostMetaRow>
        {/* 작성자 프로필 이미지 및 이름 */}
        <AvatarAndAuthorRow>
          <Avatar
            src={userProfile || fallbackProfile}
            alt={userNickname}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackProfile;
            }}
          />
          <AuthorName>{userNickname}</AuthorName>
        </AvatarAndAuthorRow>

        {/* 좋아요, 조회수, 댓글 수 row */}
        <PostStateRow>
          {/* 좋아요 */}
          <StatItem>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likeCount}</span>
          </StatItem>
          {/* 댓글수 */}
          <StatItem>
            <FontAwesomeIcon icon={faComment} />
            <span>{commentCount}</span>
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
