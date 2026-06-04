import React from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

/*
  프로필 정보는 마이페이지 메인 API 연동
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
      return null;
    }

    if (profileImage.startsWith("http") || profileImage.startsWith("blob:")) {
      return profileImage;
    }

    return `http://localhost:10000/private/api/files/${encodeURIComponent(profileImage)}`;
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

  // 프로필 이미지
  const profileImageSrc = getProfileImageSrc(profile?.userProfile);

  return (
    <S.ProfileWrapper>
      {/* 프로필 이미지 */}
      <S.ProfileImage>
        {profileImageSrc && (
          <img
            src={profileImageSrc}
            alt=""
            draggable={false}
            onError={(e) => {
              e.currentTarget.remove();
            }}
          />
        )}
      </S.ProfileImage>

      <S.ProfileContent>
        {/* 이름 / 레벨 */}
        <S.ProfileNameRow>
          <S.ProfileUserName>
            {profile?.userName || "사용자"}
          </S.ProfileUserName>

<<<<<<< HEAD
          <LevelButton type="button" onClick={onLevelClick}>
            <LevelBadge>
              Lv.{currentLevel} {levelName}
            </LevelBadge>
          </LevelButton>
        </ProfileNameRow>
=======
          <S.LevelButton type="button" onClick={onLevelClick}>
            <S.LevelBadge>
              Lv.{currentLevel} {levelName}
            </S.LevelBadge>
          </S.LevelButton>
        </S.ProfileNameRow>
>>>>>>> b12cf5640e09fff6a3d154647aad43e787950d1a

        {/* 경험치 */}
        <S.ExpRow>
          <S.ExpButton type="button" onClick={onLevelClick}>
            <S.ExpBar>
              <S.ExpFill $percent={expPercent} />
            </S.ExpBar>
          </S.ExpButton>

<<<<<<< HEAD
          <ExpButton type="button" onClick={onLevelClick}>
            <ExpText>
              {currentLevelExp} / {nextLevelExp} EXP
            </ExpText>
          </ExpButton>
        </ExpRow>
=======
          <S.ExpButton type="button" onClick={onLevelClick}>
            <S.ExpText>
              {currentLevelExp} / {nextLevelExp} EXP
            </S.ExpText>
          </S.ExpButton>
        </S.ExpRow>
>>>>>>> b12cf5640e09fff6a3d154647aad43e787950d1a

        {/* 회원 정보 */}
        <S.DetailArea>
          <S.ProfileColumn>
            <S.ProfileRow>
              <S.ProfileLabel>이메일</S.ProfileLabel>

              <S.ProfileValue>
                {profile?.userEmail || "-"}
              </S.ProfileValue>
            </S.ProfileRow>

            <S.ProfileRow>
              <S.ProfileLabel>닉네임</S.ProfileLabel>

              <S.ProfileValue>
                {profile?.userNickname || "-"}
              </S.ProfileValue>
            </S.ProfileRow>

            <S.ProfileRow>
              <S.ProfileLabel>직업</S.ProfileLabel>

              <S.ProfileValue>
                {profile?.userJob || "-"}
              </S.ProfileValue>
            </S.ProfileRow>
          </S.ProfileColumn>

          <S.ProfileColumn>
            <S.ProfileRow>
              <S.ProfileLabel>가입일</S.ProfileLabel>

              <S.ProfileValue>
                {getCreateDate(profile?.userCreateAt)}
              </S.ProfileValue>
            </S.ProfileRow>

            <S.ProfileRow>
              <S.ProfileLabel>지역</S.ProfileLabel>

              <S.ProfileValue>
                {profile?.userAddress || "-"}
              </S.ProfileValue>
            </S.ProfileRow>

            <S.ProfileRow>
              <S.ProfileLabel>전화번호</S.ProfileLabel>

              <S.ProfileValue>
                {profile?.userPhoneNum || "-"}
              </S.ProfileValue>
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
