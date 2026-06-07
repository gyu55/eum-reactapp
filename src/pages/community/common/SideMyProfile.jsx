import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../../../styles/theme";
import {
  hoverStyle,
  sideCardStyle,
  sideHeaderStyle,
} from "../communityStyle";
import { BORDER_STYLE, DEFAULT_IMAGES } from "../constants";
import { h10Bold } from "../../../styles/common";
import { AuthorAvatar } from "../post/detail/postDetailStyle";
import useAuthStore from "../../../store/authStore";

const DEFAULT_PROFILE_IMAGE =
  "https://gi.esmplus.com/cjfals1015/eum/userProfile/thumbnail/default1.png";
const S3_PROFILE_BASE_URL =
  "https://testapp-gyuhoroh213589.s3.ap-northeast-2.amazonaws.com";

const getProfileImageSrc = (profileImage) => {
  if (!profileImage || profileImage === "default.jpg" || profileImage === "null") {
    return DEFAULT_PROFILE_IMAGE;
  }
  if (profileImage.startsWith("http") || profileImage.startsWith("blob:")) {
    return profileImage;
  }
  const filePath = profileImage.startsWith("/") ? profileImage : `/${profileImage}`;
  return `${S3_PROFILE_BASE_URL}${filePath}`;
};

export default function SideMyProfile() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) return;

    fetch("http://localhost:10000/private/api/mypage", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.success) {
          setProfile(data.data.profile);
        }
      })
      .catch(() => {});
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <Card>
        <Title>커뮤니티 프로필로 이동</Title>
        <LoginPrompt onClick={() => navigate("/login")}>
          <LoginText>로그인하세요</LoginText>
          <LoginSub>로그인 후 내 프로필을 확인하세요</LoginSub>
        </LoginPrompt>
      </Card>
    );
  }

  const profileImageSrc = getProfileImageSrc(user?.userProfile);
  const nickname = user?.userNickname || user?.userName || "사용자";
  const level = profile?.userLevel;
  const levelName = profile?.userLevelName;

  return (
    <Card>
      <Title>커뮤니티 프로필로 이동</Title>
      <ProfileItem onClick={() => navigate(`/community/profile/${user?.id}`)}>
        <ProfileGroup>
          <AuthorAvatar
            size="34px"
            src={profileImageSrc}
            alt={nickname}
            onError={(e) => {
              e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
            }}
          />
          <MemberInfo>
            <MemberName>{nickname}</MemberName>
            {levelName && <MemberStatus>{levelName}</MemberStatus>}
          </MemberInfo>
        </ProfileGroup>
        {level != null && <LevelBadge>Lv.{level}</LevelBadge>}
      </ProfileItem>
    </Card>
  );
}

const Card = styled.div`
  background: ${theme.PALETTE.white};
  ${sideCardStyle}
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.p`
  ${sideHeaderStyle}
  color: ${theme.TEXT_COLOR.basic};
  ${h10Bold}
`;

const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: ${BORDER_STYLE.original};
  ${sideCardStyle}
  ${hoverStyle}
  padding-top: 8px;
  padding-bottom: 8px;
`;

const ProfileGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MemberName = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  line-height: ${theme.FONT_LINE.h11};
`;

const MemberStatus = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
  line-height: ${theme.FONT_LINE.h12};
  letter-spacing: -0.2px;
`;

const LevelBadge = styled.div`
  flex-shrink: 0;
  padding: 2px 8px;
  border-radius: 6px;
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: ${theme.FONT_LINE.h12};
  white-space: nowrap;
`;

const LoginPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 16px;
  border: ${BORDER_STYLE.original};
  border-radius: 8px;
  ${hoverStyle}
  cursor: pointer;
`;

const LoginText = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.primary.main};
  line-height: ${theme.FONT_LINE.h10};
`;

const LoginSub = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
  line-height: ${theme.FONT_LINE.h12};
`;
