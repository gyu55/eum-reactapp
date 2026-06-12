import { useState, useEffect } from "react";
import { DEFAULT_IMAGES } from "../../../constants";
import { AuthorAvatar } from "../../detail/postDetailStyle";
import {
  AuthorCard,
  SectionHeader,
  SectionTitle,
  Divider,
  AuthorProfileBlock,
  AuthorName,
  LevelBadge,
  StatsRow,
  StatItem,
  StatValue,
  StatLabel,
  OutlineButton,
  FilledButton,
} from "../postSideBarStyle";
import { getCommunityUserInfo } from "../../../communityApi/communityProfileApi";

const S = {
  AuthorCard,
  SectionHeader,
  SectionTitle,
  Divider,
  AuthorProfileBlock,
  AuthorName,
  LevelBadge,
  StatsRow,
  StatItem,
  StatValue,
  StatLabel,
  OutlineButton,
  FilledButton,
};

const PostSideUserProfile = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!userId) return;
    getCommunityUserInfo(userId)
      .then(({ data }) => setUserInfo(data))
      .catch((err) => console.error("작성자 정보 로드 실패:", err));
  }, [userId]);

  console.log(userInfo);

  const { commentCount } = userInfo ?? {};

  const authorName = userInfo?.userNickname ?? "-";
  const authorAvatar = userInfo?.userProfile ?? DEFAULT_IMAGES.authorProfile;
  const authorPosts = userInfo?.postCount ?? 0;
  const authorLikes = userInfo?.getLikeCount ?? 0;

  return (
    <S.AuthorCard>
      <S.SectionHeader>
        <S.SectionTitle>작성자 정보</S.SectionTitle>
        <S.Divider />
      </S.SectionHeader>

      <S.AuthorProfileBlock>
        <AuthorAvatar
          size="64px"
          border-radius="12px"
          src={authorAvatar}
          alt={authorName}
          onError={(e) => {
            e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
          }}
        />
        <S.AuthorName>{authorName}</S.AuthorName>
        <S.LevelBadge>Lv.1</S.LevelBadge>
      </S.AuthorProfileBlock>

      <S.StatsRow>
        <S.StatItem>
          <S.StatValue>{authorPosts}</S.StatValue>
          <S.StatLabel>게시글</S.StatLabel>
        </S.StatItem>
        <S.StatItem>
          <S.StatValue>{commentCount}</S.StatValue>
          <S.StatLabel>댓글</S.StatLabel>
        </S.StatItem>
        <S.StatItem>
          <S.StatValue>{authorLikes}</S.StatValue>
          <S.StatLabel>좋아요</S.StatLabel>
        </S.StatItem>
      </S.StatsRow>

      <S.OutlineButton>+ 팔로우</S.OutlineButton>
      <S.FilledButton>해당 회원과 1:1 채팅 시작</S.FilledButton>
    </S.AuthorCard>
  );
};

export default PostSideUserProfile;
