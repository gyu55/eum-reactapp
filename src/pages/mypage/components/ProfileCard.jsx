import React from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

const DEFAULT_PROFILE_IMAGE =
  "https://gi.esmplus.com/cjfals1015/eum/userProfile/thumbnail/default1.png";

const S3_PROFILE_BASE_URL =
  "https://testapp-gyuhoroh213589.s3.ap-northeast-2.amazonaws.com";

/*
  프로필 정보는 마이페이지 메인, 학습, 자격증에서 공통으로 사용합니다.
*/
const ProfileCard = ({ profile, onLevelClick }) => {
  const navigate = useNavigate();

  // 기본 프로필 여부 확인
  const isDefaultProfile = (profileImage) => {
    return (
      !profileImage ||
      profileImage === "default.jpg" ||
      profileImage === "null"
    );
  };

  // 프로필 이미지 경로 처리
  const getProfileImageSrc = (profileImage) => {
    if (isDefaultProfile(profileImage)) {
      return DEFAULT_PROFILE_IMAGE;
    }

    if (profileImage.startsWith("http") || profileImage.startsWith("blob:")) {
      return profileImage;
    }

    const filePath = profileImage.startsWith("/") ? profileImage : `/${profileImage}`;

    return `${S3_PROFILE_BASE_URL}${filePath}`;
  };

  // 이미지 조회 실패 시 기본 이미지로 대체
  const handleProfileImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = DEFAULT_PROFILE_IMAGE;
  };

  // 정보수정 페이지 이동
  const handleEditClick = () => {
    navigate("/mypage/edit");
  };

  // 백엔드 레벨 계산 결과
  const currentLevel = profile?.userLevel || 1;
  const levelName = profile?.userLevelName || "입문자";
  const currentLevelExp = profile?.currentLevelExp || 0;
  const nextLevelExp = profile?.nextLevelExp || 100;
  const expPercent = profile?.expPercent || 0;

  // 날짜 표시
  const getCreateDate = (date) => {
    if (!date) {
      return "-";
    }

    return date.includes("T") ? date.split("T")[0] : date.split(" ")[0];
  };

  const profileImageSrc = getProfileImageSrc(profile?.userProfile);

  return (
    <S.ProfileWrapper>
      {/* 프로필 이미지 */}
      <S.ProfileImage>
        <img
          key={profileImageSrc}
          src={profileImageSrc}
          alt=""
          draggable={false}
          onError={handleProfileImageError}
        />
      </S.ProfileImage>

      <S.ProfileContent>
        {/* 닉네임 / 레벨 */}
        <S.ProfileNameRow>
          <S.ProfileUserName>
            {profile?.userNickname || profile?.userName || "사용자"}
          </S.ProfileUserName>

          <S.LevelButton type="button" onClick={onLevelClick}>
            <S.LevelBadge>
              Lv.{currentLevel} {levelName}
            </S.LevelBadge>
          </S.LevelButton>
        </S.ProfileNameRow>

        {/* 경험치 */}
        <S.ExpRow>
          <S.ExpButton type="button" onClick={onLevelClick}>
            <S.ExpBar>
              <S.ExpFill $percent={expPercent} />
            </S.ExpBar>
          </S.ExpButton>

          <S.ExpButton type="button" onClick={onLevelClick}>
            <S.ExpText>
              {currentLevelExp} / {nextLevelExp} EXP
            </S.ExpText>
          </S.ExpButton>
        </S.ExpRow>

        {/* 회원 정보 */}
        <S.DetailArea>
          <S.ProfileColumn>
            <S.ProfileRow>
              <S.ProfileLabel>이메일</S.ProfileLabel>
              <S.ProfileValue>{profile?.userEmail || "-"}</S.ProfileValue>
            </S.ProfileRow>

            <S.ProfileRow>
              <S.ProfileLabel>이름</S.ProfileLabel>
              <S.ProfileValue>{profile?.userName || "-"}</S.ProfileValue>
            </S.ProfileRow>

            <S.ProfileRow>
              <S.ProfileLabel>직업</S.ProfileLabel>
              <S.ProfileValue>{profile?.userJob || "-"}</S.ProfileValue>
            </S.ProfileRow>
          </S.ProfileColumn>

          <S.ProfileColumn>
            <S.ProfileRow>
              <S.ProfileLabel>가입일</S.ProfileLabel>
              <S.ProfileValue>{getCreateDate(profile?.userCreateAt)}</S.ProfileValue>
            </S.ProfileRow>

            <S.ProfileRow>
              <S.ProfileLabel>지역</S.ProfileLabel>
              <S.ProfileValue>{profile?.userAddress || "-"}</S.ProfileValue>
            </S.ProfileRow>

            <S.ProfileRow>
              <S.ProfileLabel>전화번호</S.ProfileLabel>
              <S.ProfileValue>{profile?.userPhoneNum || "-"}</S.ProfileValue>
            </S.ProfileRow>
          </S.ProfileColumn>
        </S.DetailArea>
      </S.ProfileContent>

      {/* 정보수정 버튼 */}
      <S.EditButton type="button" onClick={handleEditClick}>
        정보수정하기
      </S.EditButton>
    </S.ProfileWrapper>
  );
};

export default ProfileCard;