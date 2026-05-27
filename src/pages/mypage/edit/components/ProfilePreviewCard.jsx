import React from "react";

import S from "../style";

const isDefaultProfile = (profileImage) => {
  return (
    !profileImage ||
    profileImage === "default.jpg" ||
    profileImage === "null"
  );
};

const getProfileImageSrc = (profileImage) => {
  if (isDefaultProfile(profileImage)) {
    return null;
  }

  if (profileImage.startsWith("http") || profileImage.startsWith("blob:")) {
    return profileImage;
  }

  return `http://localhost:10000/private/api/file/display?fileName=${encodeURIComponent(profileImage)}`;
};

const ProfilePreviewCard = ({ userInfo, previewImage, onLevelClick }) => {
  const userExp = userInfo?.userExp || 0;
  const level = Math.floor(userExp / 100) + 1;

  // 프로필 이미지 경로 처리
  const imageSrc = previewImage || getProfileImageSrc(userInfo?.userProfile);

  return (
    <S.PreviewCardBox>
      {/* 미리보기 제목 */}
      <S.PreviewTitle>👁 프로필 미리보기</S.PreviewTitle>

      <S.PreviewInnerBox>
        {/* 프로필 이미지 미리보기 */}
        <S.PreviewProfileImage>
          {imageSrc && (
            <img
              src={imageSrc}
              alt=""
              draggable={false}
              onError={(e) => {
                e.currentTarget.remove();
              }}
            />
          )}
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