import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const ProfileCard = ({ userInfo, setUserInfo, previewImage, setPreviewImage }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [uploadFile, setUploadFile] = useState(null);
  const [userNickname, setUserNickname] = useState(userInfo.userNickname || "");
  const [userIntro, setUserIntro] = useState(userInfo.userIntro || "");
  const [userJob, setUserJob] = useState(userInfo.userJob || "학생");
  const [userAddress, setUserAddress] = useState(userInfo.userAddress || "서울 · 수도권");
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

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

  // 닉네임 중복 확인
  const handleNicknameCheck = async () => {
    if (!userNickname.trim()) {
      alert("닉네임을 입력해 주세요.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:10000/private/api/mypage/edit/nickname-check?userNickname=${userNickname}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      if (result.data) {
        alert("이미 사용 중인 닉네임입니다.");
        setIsNicknameChecked(false);
        return;
      }

      alert("사용 가능한 닉네임입니다.");
      setIsNicknameChecked(true);
    } catch (error) {
      console.error(error);
      alert("닉네임 중복 확인에 실패했습니다.");
    }
  };

  // 프로필 사진 선택창 열기
  const handleImageChangeClick = () => {
    fileInputRef.current.click();
  };

  // 프로필 사진은 바로 업로드하지 않고 프리뷰만 변경
  const handleProfileImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("프로필 사진은 5MB 이하만 가능합니다.");
      return;
    }

    setUploadFile(selectedFile);
    setPreviewImage(URL.createObjectURL(selectedFile));
  };

  // 프로필 사진 삭제도 저장 전에는 프리뷰만 기본값 처리
  const handleDeleteProfileImage = () => {
    setUploadFile(null);
    setPreviewImage("");
    setUserInfo({
      ...userInfo,
      userProfile: "default.jpg",
    });
  };

  // 기본 프로필 저장
  const handleSaveBasicInfo = async () => {
    if (!userNickname.trim() || !userJob || !userAddress) {
      alert("필수 항목을 입력해 주세요.");
      return;
    }

    if (userNickname !== userInfo.userNickname && !isNicknameChecked) {
      alert("닉네임 중복 확인을 해주세요.");
      return;
    }

    try {
      const basicResponse = await fetch("http://localhost:10000/private/api/mypage/edit/basic", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          userNickname,
          userIntro,
          userJob,
          userAddress,
        }),
      });

      const basicResult = await basicResponse.json();

      if (!basicResult.success) {
        alert(basicResult.message);
        return;
      }

      // 선택한 이미지가 있을 때만 저장 시점에 업로드
      if (uploadFile) {
        const formData = new FormData();
        formData.append("uploadFile", uploadFile);

        const profileResponse = await fetch("http://localhost:10000/private/api/mypage/edit/profile", {
          method: "PATCH",
          credentials: "include",
          body: formData,
        });

        const profileResult = await profileResponse.json();

        if (!profileResult.success) {
          alert(profileResult.message);
          return;
        }
      }

      alert("프로필 정보가 저장되었습니다.");
      navigate("/mypage", { replace: true });
    } catch (error) {
      console.error(error);
      alert("프로필 정보 저장에 실패했습니다.");
    }
  };

  // 입력값 초기화
  const handleCancel = () => {
    setUploadFile(null);
    setPreviewImage("");
    setUserNickname(userInfo.userNickname || "");
    setUserIntro(userInfo.userIntro || "");
    setUserJob(userInfo.userJob || "학생");
    setUserAddress(userInfo.userAddress || "서울 · 수도권");
    setIsNicknameChecked(false);
  };

  return (
    <>
      <S.ProfileSection>
        {/* 섹션 제목 */}
        <S.SectionTitle>기본 프로필</S.SectionTitle>

        {/* 섹션 설명 */}
        <S.SectionDesc>
          프로필 사진, 이름, 닉네임 등 기본 정보를 수정합니다
        </S.SectionDesc>
      </S.ProfileSection>

      <S.ProfileEditCard>
        <S.ProfileTop>
          {/* 프로필 이미지 */}
          <S.ProfileImageBox>
            <img
              src={previewImage || getProfileImageSrc(userInfo.userProfile)}
              alt="프로필 이미지"
              onError={(e) => {
                e.currentTarget.src = "/assets/images/default-profile.png";
              }}
            />
          </S.ProfileImageBox>

          <S.ProfileImageInfo>
            <S.ProfileImageTitle>프로필 사진</S.ProfileImageTitle>

            <S.UploadDesc>
              JPG, PNG, GIF 형식 · 최대 5MB
              <br />
              권장 크기: 400×400px 이상
            </S.UploadDesc>

            <S.ImageButtonArea>
              <S.ImageChangeButton type="button" onClick={handleImageChangeClick}>
                📷 사진 변경
              </S.ImageChangeButton>

              <S.ImageDeleteButton type="button" onClick={handleDeleteProfileImage}>
                삭제
              </S.ImageDeleteButton>
            </S.ImageButtonArea>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleProfileImageChange}
            />
          </S.ProfileImageInfo>
        </S.ProfileTop>

        <S.FormArea>
          <S.FieldGroup>
            <S.Field>
              <S.Label>
                이름
                <S.Required>*</S.Required>
              </S.Label>

              {/* 이름은 변경 불가 */}
              <S.ReadOnlyField>
                {userInfo.userName}
              </S.ReadOnlyField>
            </S.Field>

            <S.NicknameField>
              <S.Label>
                닉네임
                <S.Required>*</S.Required>
              </S.Label>

              <S.NicknameInputRow>
                <S.NicknameInput
                  value={userNickname}
                  onChange={(e) => {
                    setUserNickname(e.target.value);
                    setIsNicknameChecked(false);
                  }}
                  placeholder="닉네임을 입력해 주세요"
                />

                <S.CheckButton type="button" onClick={handleNicknameCheck}>
                  중복 확인
                </S.CheckButton>
              </S.NicknameInputRow>
            </S.NicknameField>
          </S.FieldGroup>

          <S.IntroArea>
            <S.IntroLabelRow>
              <S.Label as="span">자기소개</S.Label>
              <S.OptionalBadge>선택</S.OptionalBadge>
            </S.IntroLabelRow>

            <S.IntroTextarea
              maxLength={150}
              value={userIntro}
              onChange={(e) => setUserIntro(e.target.value)}
              placeholder="자기소개를 입력해 주세요"
            />

            <S.CountText>{userIntro.length} / 150</S.CountText>
          </S.IntroArea>

          <S.ExtraDivider>
            <S.ExtraLabel>추가 정보</S.ExtraLabel>
          </S.ExtraDivider>

          <S.ExtraFormArea>
            <S.FieldGroup>
              <S.Field>
                <S.Label>
                  직업
                  <S.Required>*</S.Required>
                </S.Label>

                <S.SelectWrapper>
                  <S.Select value={userJob} onChange={(e) => setUserJob(e.target.value)}>
                    <option value="학생">학생</option>
                    <option value="직장인">직장인</option>
                    <option value="프리랜서">프리랜서</option>
                    <option value="기타">기타</option>
                  </S.Select>
                </S.SelectWrapper>
              </S.Field>

              <S.Field>
                <S.Label>
                  지역
                  <S.Required>*</S.Required>
                </S.Label>

                <S.SelectWrapper>
                  <S.Select value={userAddress} onChange={(e) => setUserAddress(e.target.value)}>
                    <option value="서울 · 수도권">서울 · 수도권</option>
                    <option value="강원권">강원권</option>
                    <option value="충청권">충청권</option>
                    <option value="전라권">전라권</option>
                    <option value="경상권">경상권</option>
                    <option value="제주권">제주권</option>
                  </S.Select>
                </S.SelectWrapper>
              </S.Field>
            </S.FieldGroup>
          </S.ExtraFormArea>

          <S.BottomDivider />

          <S.BottomArea>
            <S.RequiredGuide>
              * 표시는 필수 입력 항목입니다
            </S.RequiredGuide>

            <S.ButtonArea>
              <S.CancelButton type="button" onClick={handleCancel}>
                취소
              </S.CancelButton>

              <S.SaveButton type="button" onClick={handleSaveBasicInfo}>
                저장하기
              </S.SaveButton>
            </S.ButtonArea>
          </S.BottomArea>
        </S.FormArea>
      </S.ProfileEditCard>
    </>
  );
};

export default ProfileCard;