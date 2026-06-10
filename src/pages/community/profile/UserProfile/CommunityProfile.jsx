import { useParams } from "react-router-dom";
import * as S from "./communityProfileStyle";
import { userFollow } from "../../communityApi/communityProfileApi";

const DEFAULT_PROFILE =
  "https://gi.esmplus.com/cjfals1015/eum/userProfile/thumbnail/default1.png";

const MOCK_USER = {
  level: 1,
  title: "열공러",
  streak: "30일 연속 학습",
  bio: "수어를 배우며 세상과 더 넓게 소통하고 싶어요. 매일 조금씩, 꾸준히 나아가는 중입니다 😊",
  joinInfo: "2025년 2월 가입 · 서울",
  avatarUrl: DEFAULT_PROFILE,
};

const CommunityProfile = ({
  userNickname,
  userProfile,
  userIntro,
  isMe,
  isFollow,
  onFollowChange,
}) => {
  const { userId } = useParams();

  const handleFollowToggle = async () => {
    try {
      const { success } = await userFollow(userId);
      if (success) onFollowChange();
    } catch (err) {
      console.error("팔로우 요청 실패:", err);
    }
  };

  return (
    <S.ProfileBar>
      <S.AvatarImg
        src={userProfile}
        alt={userNickname}
        onError={(e) => {
          e.currentTarget.src = DEFAULT_PROFILE;
        }}
      />
      <S.UserInfoRow>
        <S.TextBlock>
          <S.Nickname>{userNickname}</S.Nickname>
          <S.TagRow>
            <S.InfoTag>
              Lv.{MOCK_USER.level} · {MOCK_USER.title}
            </S.InfoTag>
            <S.InfoTag>{MOCK_USER.streak}</S.InfoTag>
          </S.TagRow>
          <S.Bio>{userIntro}</S.Bio>
          <S.JoinInfo>{MOCK_USER.joinInfo}</S.JoinInfo>
        </S.TextBlock>

        {/* 로그인 상태(isMe가 boolean) + 타인 프로필일 때만 팔로우 버튼 노출 */}
        {isMe === false && !isFollow && (
          <S.FollowButton onClick={handleFollowToggle}>+ 팔로우</S.FollowButton>
        )}
        {isMe === false && isFollow && (
          <S.FollowButton onClick={console.log("팔로우 취소 버튼")}>
            팔로우 취소
          </S.FollowButton>
        )}
      </S.UserInfoRow>
    </S.ProfileBar>
  );
};

export default CommunityProfile;
