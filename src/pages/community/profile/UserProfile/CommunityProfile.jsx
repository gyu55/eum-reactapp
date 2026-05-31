import styled from "styled-components";
import theme from "../../../../styles/theme";

const FIGMA_AVATAR =
  "https://www.figma.com/api/mcp/asset/4848f13d-3ea0-4289-9296-1a6aae75dd78";
const DEFAULT_PROFILE =
  "https://gi.esmplus.com/cjfals1015/eum/userProfile/thumbnail/default1.png";

// 그라디언트 배경 위에 겹치는 반투명 흰색들 — theme에 없으므로 로컬 상수로 관리
const PROFILE_GRADIENT = `linear-gradient(169.69deg, ${theme.PALETTE.primary.main} 0%, #6478FD 100%)`;
const WHITE_20 = "rgba(255, 255, 255, 0.2)";
const WHITE_40 = "rgba(255, 255, 255, 0.4)";
const WHITE_85 = "rgba(255, 255, 255, 0.85)";

const MOCK_USER = {
  nickname: "minjun_k",
  level: 1,
  title: "열공러",
  streak: "30일 연속 학습",
  bio: "수어를 배우며 세상과 더 넓게 소통하고 싶어요. 매일 조금씩, 꾸준히 나아가는 중입니다 😊",
  joinInfo: "2025년 2월 가입 · 서울",
  avatarUrl: DEFAULT_PROFILE,
};

const CommunityProfile = ({ user = MOCK_USER, onFollow }) => {
  return (
    <ProfileBar>
      <AvatarImg src={user.avatarUrl} alt={user.nickname} />
      <UserInfoRow>
        <TextBlock>
          <Nickname>{user.nickname}</Nickname>
          <TagRow>
            <InfoTag>
              Lv.{user.level} · {user.title}
            </InfoTag>
            <InfoTag>{user.streak}</InfoTag>
          </TagRow>
          <Bio>{user.bio}</Bio>
          <JoinInfo>{user.joinInfo}</JoinInfo>
        </TextBlock>
        <FollowButton onClick={onFollow}>+ 팔로우</FollowButton>
      </UserInfoRow>
    </ProfileBar>
  );
};

export default CommunityProfile;

const ProfileBar = styled.div`
  background: ${PROFILE_GRADIENT};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

const AvatarImg = styled.img`
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  border-radius: 20px;
  object-fit: cover;
  pointer-events: none;
`;

const UserInfoRow = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
`;

const Nickname = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  letter-spacing: -0.56px;
  line-height: normal;
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InfoTag = styled.div`
  padding: 4px 16px;
  border-radius: 100px;
  border: 1px solid ${WHITE_40};
  background: ${WHITE_20};
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  letter-spacing: -0.24px;
  line-height: 20px;
  white-space: nowrap;
`;

const Bio = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${WHITE_85};
  letter-spacing: -0.28px;
  line-height: 22px;
`;

const JoinInfo = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${WHITE_85};
  letter-spacing: -0.24px;
  line-height: 20px;
`;

const FollowButton = styled.button`
  flex-shrink: 0;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid ${WHITE_40};
  background: ${WHITE_20};
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  letter-spacing: -0.28px;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
`;
