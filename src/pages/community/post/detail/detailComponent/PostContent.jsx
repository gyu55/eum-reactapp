import theme from "../../../../../styles/theme";
import { useState } from "react";
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

const PostContent = ({
  category = "학습 인증",
  breadcrumb = "이음 커뮤니티 › 학습 인증 게시판",
  title = "수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌",
  authorName = "수어러버김지민",
  authorLevel = "Lv.7",
  authorAvatar = DEFAULT_IMAGES.authorProfile,
  postDate = "2025.03.08 (오늘)",
  views = 324,
  likes = 42,
  tags = ["# 수어기초", "# 알파벳", "# 태그1", "# 태그2"],
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div>
      <S.PostContentWrapper>
        <S.PostTitle>{title}</S.PostTitle>

        {/* 게시글 작성자 정보 */}
        <S.AuthorRow>
          <S.AuthorAvatar
            src={authorAvatar}
            alt={authorName}
            onError={(e) => { e.currentTarget.src = DEFAULT_IMAGES.authorProfile; }}
          />
          <S.AuthorMeta>
            <S.AuthorName>{authorName}</S.AuthorName>
            <S.AuthorSubRow>
              <S.LevelBadge>{authorLevel}</S.LevelBadge>
              <S.MetaText>
                · {postDate} · 조회 {views}
              </S.MetaText>
            </S.AuthorSubRow>
          </S.AuthorMeta>
        </S.AuthorRow>

        {/* 구분선 */}
        <S.Divider />

        {/* 게시글 몸체 */}
        <DummyContent />
        <S.TagRow>
          {tags.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.TagRow>

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

        {/* 게시글 관련 액션 버튼 */}
        <S.ActionRow>
          <S.LikeButton liked={liked} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likeCount}</span>
          </S.LikeButton>
          <S.ActionButtons>
            <S.IconButton aria-label="링크 복사">
              <img
                src={DEFAULT_IMAGES.linkIcon}
                alt="링크"
                onError={(e) => { e.currentTarget.src = DEFAULT_IMAGES.linkIcon; }}
              />
            </S.IconButton>
            <S.IconButton danger aria-label="게시글 신고">
              <img
                src={DEFAULT_IMAGES.reportIcon}
                alt="신고"
                onError={(e) => { e.currentTarget.src = DEFAULT_IMAGES.reportIcon; }}
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
