import { useState, useEffect } from "react";
import { DEFAULT_IMAGES } from "../../../constants";
import * as S from "../postSideBarStyle";
import {
  getCommunityUserInfo,
  userFollow,
  cancelFollow,
} from "../../../communityApi/communityProfileApi";

const PostSideUserProfile = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    if (!userId) return;
    getCommunityUserInfo(userId)
      .then(({ data }) => {
        setUserInfo(data);
        setIsFollow(data.isFollow);
      })
      .catch((err) => console.error("작성자 정보 로드 실패:", err));
  }, [userId]);

  const handleFollow = async () => {
    await userFollow(userId);
    setIsFollow(true);
  };

  const handleCancelFollow = async () => {
    await cancelFollow(userId);
    setIsFollow(false);
  };

  const {
    userNickname,
    userProfile,
    postCount,
    getLikeCount,
    commentCount,
    isMe,
  } = userInfo ?? {};

  return (
    <S.AuthorCard>
      <S.SectionHeader>
        <S.SectionTitle>작성자 정보</S.SectionTitle>
        <S.Divider />
      </S.SectionHeader>

      <S.AuthorProfileBlock>
        <S.AuthorAvatarStyle
          size="64px"
          border-radius="12px"
          src={userProfile}
          alt={userNickname}
          onError={(e) => {
            e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
          }}
        />
        <S.AuthorName>{userNickname}</S.AuthorName>
        <S.LevelBadge>Lv.1</S.LevelBadge>
      </S.AuthorProfileBlock>

      <S.StatsRow>
        <S.StatItem>
          <S.StatValue>{postCount}</S.StatValue>
          <S.StatLabel>게시글</S.StatLabel>
        </S.StatItem>
        <S.StatItem>
          <S.StatValue>{commentCount}</S.StatValue>
          <S.StatLabel>댓글</S.StatLabel>
        </S.StatItem>
        <S.StatItem>
          <S.StatValue>{getLikeCount}</S.StatValue>
          <S.StatLabel>좋아요</S.StatLabel>
        </S.StatItem>
      </S.StatsRow>

      {!isMe &&
        (isFollow ? (
          <S.DangerOutlineButton onClick={handleCancelFollow}>
            팔로우 취소
          </S.DangerOutlineButton>
        ) : (
          <S.OutlineButton onClick={handleFollow}>+ 팔로우</S.OutlineButton>
        ))}
      <S.FilledButton>해당 회원과 1:1 채팅 시작</S.FilledButton>
    </S.AuthorCard>
  );
};

export default PostSideUserProfile;
