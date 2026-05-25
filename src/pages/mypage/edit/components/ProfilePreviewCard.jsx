import React from "react";

import S from "../style";

const ProfilePreviewCard = ({ userInfo, previewImage, onLevelClick }) => {
  const userExp = userInfo?.userExp || 0;
  const level = Math.floor(userExp / 100) + 1;

  // 프로필 이미지 경로 처리
  const getProfileImageSrc = (profileImage) => {
    if (!profileImage || profileImage === "default.jpg") {
      return "/assets/images/default-profile.png";
    }

    if (profileImage.startsWith("http")) {
      return profileImage;
    }

    return `http://localhost:10000/private/api/file/display?fileName=${encodeURIComponent(profileImage)}`;
  };

  return (
    <S.PreviewCardBox>
      {/* 미리보기 제목 */}
      <S.PreviewTitle>👁 프로필 미리보기</S.PreviewTitle>

      <S.PreviewInnerBox>
        {/* 프로필 이미지 미리보기 */}
        <S.PreviewProfileImage>
          <img
            src={previewImage || getProfileImageSrc(userInfo?.userProfile)}
            alt="프로필 이미지"
            onError={(e) => {
              e.currentTarget.src = "/assets/images/default-profile.png";
            }}
          />
        </S.PreviewProfileImage>

        {/* 사용자 정보 */}
        <S.PreviewUserName>
          {userInfo?.userName || "사용자"}
        </S.PreviewUserName>

        <S.PreviewLevelButton type="button" onClick={onLevelClick}>
          Lv.{level} · 열공러
        </S.PreviewLevelButton>

        <S.PreviewIntro>
          {userInfo?.userIntro || "자기소개가 없습니다."}
        </S.PreviewIntro>

        <S.PreviewGuideText>
          다른 사용자에게 이렇게 보입니다
        </S.PreviewGuideText>
      </S.PreviewInnerBox>
    </S.PreviewCardBox>
  );
};

export default ProfilePreviewCard;