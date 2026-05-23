import theme from "../../../../../styles/theme";
import { useState, useEffect } from "react";
import { getPostById } from "../../../communityApi/postApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  AccessBtn,
  AccessibilityBox,
  AccessibilityLabel,
  ActionButtons,
  ActionRow,
  AuthorAvatar,
  AuthorMeta,
  AuthorName,
  AuthorRow,
  AuthorSubRow,
  Divider,
  IconButton,
  LevelBadge,
  LikeButton,
  MetaText,
  PostContentWrapper,
  PostTitle,
  Tag,
  TagRow,
} from "../postDetailStyle";
import DummyContent from "./dummyContent/DummyContent";
import { DEFAULT_IMAGES } from "../../../constants";

const { PALETTE } = theme;

const S = {
  AccessBtn,
  AccessibilityBox,
  AccessibilityLabel,
  ActionButtons,
  ActionRow,
  AuthorAvatar,
  AuthorMeta,
  AuthorName,
  AuthorRow,
  AuthorSubRow,
  Divider,
  IconButton,
  LevelBadge,
  LikeButton,
  MetaText,
  PostContentWrapper,
  PostTitle,
  Tag,
  TagRow,
};

const PostContent = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (!postId) return;

    console.log("postId:", postId);

    getPostById(postId)
      .then(({ data }) => {
        console.log("게시글 데이터:", data);
        setPost(data);
        setLikeCount(data.likeCount ?? 0);
      })
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, [postId]);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const authorLevel = post?.userLevel ?? "Lv.1";

  // const tags = ["dd"];

  // 아직 post 데이터가 없을 때
  if (!post) return <div>로딩 중...</div>;

  // 게시글 데이터 분리 (post 데이터 생기고 난 뒤)
  const {
    id,
    postTitle,
    postContent,
    postReadCount,
    postCreateAt,
    postTag,
    userNickname,
    userProfile,
    commentCount,
    isLiked,
    isOwner,
  } = post;

  return (
    <div>
      <S.PostContentWrapper>
        <S.PostTitle>{postTitle}</S.PostTitle>

        {/* 게시글 작성자 정보 */}
        <S.AuthorRow>
          <S.AuthorAvatar
            src={userProfile}
            alt={userNickname}
            onError={(e) => {
              e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
            }}
          />
          <S.AuthorMeta>
            <S.AuthorName>{userNickname}</S.AuthorName>
            <S.AuthorSubRow>
              <S.LevelBadge>{authorLevel}</S.LevelBadge>
              <S.MetaText>
                · {postCreateAt} · 조회 {postReadCount}
              </S.MetaText>
            </S.AuthorSubRow>
          </S.AuthorMeta>
        </S.AuthorRow>

        {/* 구분선 */}
        <S.Divider />

        {/* 게시글 몸체 */}
        <DummyContent />
        {/* <S.TagRow>
          {tags.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.TagRow> */}

        {/* 접근성 도구 */}
        <S.AccessibilityBox>
          <S.AccessibilityLabel $color={PALETTE.primary.main}>
            접근성 도구
          </S.AccessibilityLabel>
          <S.AccessBtn variant="blue" pos="180px">
            수어로 보기
          </S.AccessBtn>
          <S.AccessBtn variant="green" pos="466px">
            글 읽어주기
          </S.AccessBtn>
        </S.AccessibilityBox>

        {/* 게시글 관련 액션 버튼 // 추후 컴포넌트로 분리 생각 */}
        <S.ActionRow>
          {/* 좋아요 버튼 */}
          <S.LikeButton liked={liked} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likeCount}</span>
          </S.LikeButton>
          <S.ActionButtons>
            <S.IconButton aria-label="링크 복사">
              <img
                src={DEFAULT_IMAGES.linkIcon}
                alt="링크"
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_IMAGES.linkIcon;
                }}
              />
            </S.IconButton>
            <S.IconButton danger aria-label="게시글 신고">
              <img
                src={DEFAULT_IMAGES.reportIcon}
                alt="신고"
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_IMAGES.reportIcon;
                }}
              />
            </S.IconButton>
          </S.ActionButtons>
        </S.ActionRow>
      </S.PostContentWrapper>

      {/* 댓글 섹션 */}
      {/* <CommentSection /> */}
    </div>
  );
};

export default PostContent;
