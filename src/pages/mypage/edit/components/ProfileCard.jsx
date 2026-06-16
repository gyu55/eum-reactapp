import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const DEFAULT_PROFILE_IMAGE =
  "https://gi.esmplus.com/cjfals1015/eum/userProfile/thumbnail/default1.png";

const S3_PROFILE_BASE_URL =
  "https://testapp-gyuhoroh213589.s3.ap-northeast-2.amazonaws.com";

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

const ProfileCard = ({
  userInfo = {},
  setUserInfo,
  previewImage,
  setPreviewImage,
  setPreviewInfo,
}) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [uploadFile, setUploadFile] = useState(null);
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);

  const [userName, setUserName] = useState(userInfo?.userName || "");
  const [userNickname, setUserNickname] = useState(userInfo?.userNickname || "");
  const [userIntro, setUserIntro] = useState(userInfo?.userIntro || "");
  const [userJob, setUserJob] = useState(userInfo?.userJob || "직장인");
  const [customJob, setCustomJob] = useState("");
  const [userAddress, setUserAddress] = useState(userInfo?.userAddress || "수도권");
  const [customAddress, setCustomAddress] = useState("");
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  // 회원 정보 조회가 끝난 뒤 입력값을 화면에 반영합니다.
  useEffect(() => {
    setUserName(userInfo?.userName || "");
    setUserNickname(userInfo?.userNickname || "");
    setUserIntro(userInfo?.userIntro || "");
    setUserJob(userInfo?.userJob || "직장인");
    setUserAddress(userInfo?.userAddress || "수도권");
  }, [userInfo]);

  const syncPreview = (next = {}) => {
    const nextInfo = {
      ...userInfo,
      userName,
      userNickname,
      userIntro,
      userJob: userJob === "직접입력" ? customJob : userJob,
      userAddress: userAddress === "직접입력" ? customAddress : userAddress,
      ...next,
    };

    setPreviewInfo(nextInfo);
  };

  const getLatestUserInfo = async () => {
    const response = await fetch("http://localhost:10000/private/api/mypage/edit", {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  };

  const updateHeaderProfile = (nextNickname, nextProfile) => {
    window.dispatchEvent(
      new CustomEvent("userProfileUpdated", {
        detail: {
          userNickname: nextNickname,
          userProfile: nextProfile,
        },
      })
    );
  };

  const handleImageChangeClick = () => {
    fileInputRef.current.click();
  };

  const handleProfileImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("프로필 사진은 5MB 이하만 가능합니다.");
      e.target.value = "";
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);

    setUploadFile(selectedFile);
    setIsProfileDeleted(false);
    setPreviewImage(objectUrl);
    syncPreview({ userProfile: objectUrl });

    e.target.value = "";
  };

  const handleDeleteProfileImage = () => {
    setUploadFile(null);
    setPreviewImage("");
    setIsProfileDeleted(true);

    const updatedUser = {
      ...userInfo,
      userProfile: "default.jpg",
    };

    setUserInfo(updatedUser);
    setPreviewInfo(updatedUser);
  };

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

  const handleSaveBasicInfo = async () => {
    const finalJob = userJob === "직접입력" ? customJob : userJob;
    const finalAddress = userAddress === "직접입력" ? customAddress : userAddress;

    if (!userName.trim() || !userNickname.trim() || !finalJob.trim() || !finalAddress.trim()) {
      alert("필수 항목을 입력해 주세요.");
      return;
    }

    if (userNickname !== userInfo?.userNickname && !isNicknameChecked) {
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
          userName,
          userNickname,
          userIntro,
          userJob: finalJob,
          userAddress: finalAddress,
        }),
      });

      const basicResult = await basicResponse.json();

      if (!basicResult.success) {
        alert(basicResult.message);
        return;
      }

      if (isProfileDeleted) {
        const deleteResponse = await fetch("http://localhost:10000/private/api/mypage/edit/profile", {
          method: "DELETE",
          credentials: "include",
        });

        const deleteResult = await deleteResponse.json();

        if (!deleteResult.success) {
          alert(deleteResult.message);
          return;
        }
      }

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

      // 저장 후 DB에 반영된 최신 프로필 경로를 다시 조회
      const latestUserInfo = await getLatestUserInfo();

      setUserInfo(latestUserInfo);
      setPreviewInfo(latestUserInfo);
      setPreviewImage("");

      // 저장 성공 후 레이아웃 헤더 반영
      updateHeaderProfile(latestUserInfo.userNickname, latestUserInfo.userProfile);

      alert("프로필 정보가 저장되었습니다.");
      navigate("/mypage", { replace: true });
    } catch (error) {
      console.error(error);
      alert("프로필 정보 저장에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    navigate("/mypage", { replace: true });
  };

  const imageSrc = previewImage || getProfileImageSrc(userInfo?.userProfile);

  return (
    <>
      <S.ProfileSection>
        <S.SectionTitle>기본 프로필</S.SectionTitle>
        <S.SectionDesc>프로필 사진, 이름, 닉네임 등 기본 정보를 수정합니다</S.SectionDesc>
      </S.ProfileSection>

      <S.ProfileEditCard>
        <S.ProfileTop>
          <S.ProfileImageBox>
            <img
              key={imageSrc}
              src={imageSrc}
              alt=""
              draggable={false}
              onError={handleProfileImageError}
            />
          </S.ProfileImageBox>

          <S.ProfileImageInfo>
            <S.ProfileImageTitle>프로필 사진</S.ProfileImageTitle>

            <S.UploadDesc>
              JPG, PNG, GIF 형식 · 최대 5MB
              <br />
              권장 크기: 400x400px 이상
            </S.UploadDesc>

            <S.ImageButtonArea>
              <S.ImageChangeButton type="button" onClick={handleImageChangeClick}>
                사진 변경
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

              <S.Input
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  syncPreview({ userName: e.target.value });
                }}
                placeholder="이름을 입력해 주세요"
              />
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
                    syncPreview({ userNickname: e.target.value });
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
              onChange={(e) => {
                setUserIntro(e.target.value);
                syncPreview({ userIntro: e.target.value });
              }}
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
                  <S.Select
                    value={userJob}
                    onChange={(e) => {
                      setUserJob(e.target.value);
                      syncPreview({ userJob: e.target.value });
                    }}
                  >
                    <option value="직장인">직장인</option>
                    <option value="사업가">사업가</option>
                    <option value="자영업자">자영업자</option>
                    <option value="학생">학생</option>
                    <option value="프리랜서">프리랜서</option>
                    <option value="주부">주부</option>
                    <option value="직접입력">직접입력</option>
                  </S.Select>
                </S.SelectWrapper>

                {userJob === "직접입력" && (
                  <S.DirectInputRow>
                    <S.DirectInput
                      value={customJob}
                      onChange={(e) => {
                        setCustomJob(e.target.value);
                        syncPreview({ userJob: e.target.value });
                      }}
                      placeholder="직업을 직접 입력해 주세요"
                    />
                  </S.DirectInputRow>
                )}
              </S.Field>

              <S.Field>
                <S.Label>
                  지역
                  <S.Required>*</S.Required>
                </S.Label>

                <S.SelectWrapper>
                  <S.Select
                    value={userAddress}
                    onChange={(e) => {
                      setUserAddress(e.target.value);
                      syncPreview({ userAddress: e.target.value });
                    }}
                  >
                    <option value="수도권">수도권</option>
                    <option value="경상권">경상권</option>
                    <option value="충청권">충청권</option>
                    <option value="전라권">전라권</option>
                    <option value="강원권">강원권</option>
                    <option value="제주권">제주권</option>
                    <option value="직접입력">직접입력</option>
                  </S.Select>
                </S.SelectWrapper>

                {userAddress === "직접입력" && (
                  <S.DirectInputRow>
                    <S.DirectInput
                      value={customAddress}
                      onChange={(e) => {
                        setCustomAddress(e.target.value);
                        syncPreview({ userAddress: e.target.value });
                      }}
                      placeholder="지역을 직접 입력해 주세요"
                    />
                  </S.DirectInputRow>
                )}
              </S.Field>
            </S.FieldGroup>
          </S.ExtraFormArea>

          <S.BottomDivider />

          <S.BottomArea>
            <S.RequiredGuide>* 표시는 필수 입력 항목입니다</S.RequiredGuide>

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