import { useNavigate } from "react-router-dom";
import formatRelativeTime from "../../functions/formatRelativeTime";
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
import heartIcon from "../../assets/icon/heart.svg";
import commentIcon from "../../assets/icon/comment.svg";
import viewCountIcon from "../../assets/icon/view-count.svg";
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

const S = {
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
};

const PostListCard = ({
  id = 0,
  postTag = "",
  postCreateAt = "",
  postTitle = "",
  postContent = "",
  postProfile = "",
  userNickname = "",
  userProfile = "",
  likeCount = 0,
  commentCount = 0,
  postReadCount = 0,
}) => {
  const navigate = useNavigate();
  const fallbackProfile = defaultProfiles[id % defaultProfiles.length];

  return (
    // 포스트 카드 영역
    <S.Card onClick={() => navigate(`/community/post/${id}`)}>
      {/* 태그 및 작성 시각 */}
      <S.TagAndTimeRow>
        <S.Tag>{postTag}</S.Tag>
        <S.TimeText>{formatRelativeTime(postCreateAt)}</S.TimeText>
      </S.TagAndTimeRow>

      {/* 게시글 컨텐츠 (제목, 내용) 및 썸네일 row */}
      <S.ContentAndTitleRow>
        {/* 게시글 제목 및 내용 */}
        <S.ContentArea>
          <S.Title>{postTitle}</S.Title>
          <S.Description>{postContent}</S.Description>
        </S.ContentArea>
        <S.Thumbnail>
          <img
            src={postProfile || postDefaultProfile}
            alt="게시글 썸네일"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = postDefaultProfile;
            }}
          />
        </S.Thumbnail>
      </S.ContentAndTitleRow>

      {/* 작성자 및 좋아요, 조회수, 댓글 수 나타내기 */}
      <S.PostMetaRow>
        {/* 작성자 프로필 이미지 및 이름 */}
        <S.AvatarAndAuthorRow>
          <S.Avatar
            src={userProfile || fallbackProfile}
            alt={userNickname}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackProfile;
            }}
          />
          <S.AuthorName>{userNickname}</S.AuthorName>
        </S.AvatarAndAuthorRow>

        {/* 좋아요, 조회수, 댓글 수 row */}
        <S.PostStateRow>
          {/* 좋아요 */}
          <S.StatItem>
            <img src={heartIcon} alt="heart" height={"12px"} />
            <span>{likeCount}</span>
          </S.StatItem>
          {/* 댓글수 */}
          <S.StatItem>
            <img src={commentIcon} alt="comment" height={"12px"} />
            <span>{commentCount}</span>
          </S.StatItem>
          {/* 조회수 */}
          <S.StatItem>
            <img src={viewCountIcon} alt="viewCount" width={"12px"} />
            <span>{postReadCount}</span>
          </S.StatItem>
        </S.PostStateRow>
      </S.PostMetaRow>
    </S.Card>
  );
};

export default PostListCard;
