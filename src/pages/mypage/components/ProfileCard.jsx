import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ProfileWrapper,
  ProfileImage,
  ProfileContent,
  ProfileNameRow,
  ProfileUserName,
  LevelButton,
  LevelBadge,
  ExpRow,
  ExpButton,
  ExpBar,
  ExpFill,
  ExpText,
  DetailArea,
  ProfileColumn,
  ProfileRow,
  ProfileLabel,
  ProfileValue,
  EditButton,
} from "./style";

/*
  프로필 정보는 마이페이지 메인 API 연동
*/
const ProfileCard = ({ profile, onLevelClick }) => {
  const navigate = useNavigate();

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

  // 정보수정 페이지 이동
  const handleEditClick = () => {
    navigate("/mypage/edit");
  };

  // 경험치 퍼센트 계산
  const currentExp = profile?.userExp || 0;

  // 레벨 계산
  const currentLevel = Math.floor(currentExp / 100) + 1;
  const maxExp = currentLevel * 100;
  const expPercent = Math.min((currentExp / maxExp) * 100, 100);

  // 날짜 표시
  const getCreateDate = (date) => {
    if (!date) {
      return "-";
    }

    return date.includes("T") ? date.split("T")[0] : date.split(" ")[0];
  };

  return (
    <ProfileWrapper>
      {/* 프로필 이미지 */}
      <ProfileImage>
        <img
          src={getProfileImageSrc(profile?.userProfile)}
          alt="프로필 이미지"
          onError={(e) => {
            e.currentTarget.src = "/assets/images/default-profile.png";
          }}
        />
      </ProfileImage>

      <ProfileContent>
        {/* 이름 / 레벨 */}
        <ProfileNameRow>
          <ProfileUserName>
            {profile?.userName || "사용자"}
          </ProfileUserName>

          <LevelButton type="button" onClick={onLevelClick}>
            <LevelBadge>
              Lv.{currentLevel}
            </LevelBadge>
          </LevelButton>
        </ProfileNameRow>

        {/* 경험치 */}
        <ExpRow>
          <ExpButton type="button" onClick={onLevelClick}>
            <ExpBar>
              <ExpFill $percent={expPercent} />
            </ExpBar>
          </ExpButton>

          <ExpButton type="button" onClick={onLevelClick}>
            <ExpText>
              {currentExp} / {maxExp} EXP
            </ExpText>
          </ExpButton>
        </ExpRow>

        {/* 회원 정보 */}
        <DetailArea>
          <ProfileColumn>
            <ProfileRow>
              <ProfileLabel>이메일</ProfileLabel>
              <ProfileValue>{profile?.userEmail || "-"}</ProfileValue>
            </ProfileRow>

            <ProfileRow>
              <ProfileLabel>닉네임</ProfileLabel>
              <ProfileValue>{profile?.userNickname || "-"}</ProfileValue>
            </ProfileRow>

            <ProfileRow>
              <ProfileLabel>직업</ProfileLabel>
              <ProfileValue>{profile?.userJob || "-"}</ProfileValue>
            </ProfileRow>
          </ProfileColumn>

          <ProfileColumn>
            <ProfileRow>
              <ProfileLabel>가입일</ProfileLabel>
              <ProfileValue>{getCreateDate(profile?.userCreateAt)}</ProfileValue>
            </ProfileRow>

            <ProfileRow>
              <ProfileLabel>지역</ProfileLabel>
              <ProfileValue>{profile?.userAddress || "-"}</ProfileValue>
            </ProfileRow>

            <ProfileRow>
              <ProfileLabel>전화번호</ProfileLabel>
              <ProfileValue>{profile?.userPhoneNum || "-"}</ProfileValue>
            </ProfileRow>
          </ProfileColumn>
        </DetailArea>
      </ProfileContent>

      {/* 정보수정 버튼 */}
      <EditButton type="button" onClick={handleEditClick}>
        정보수정하기
      </EditButton>
    </ProfileWrapper>
  );
};

export default ProfileCard;