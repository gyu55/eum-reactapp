import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "./components/ProfileCard";
import AccountInfoCard from "./components/AccountInfoCard";
import PasswordChangeCard from "./components/PasswordChangeCard";
import ProfilePreviewCard from "./components/ProfilePreviewCard";
import ProfileGuideCard from "./components/ProfileGuideCard";
import SecurityGuideCard from "./components/SecurityGuideCard";
import LevelGuideModal from "../components/LevelGuideModal";

import S from "./style";
import MyPageStyle from "../style";

const MyPageEditComponent = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [previewInfo, setPreviewInfo] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:10000/private/api/mypage/edit", {
          method: "GET",
          credentials: "include",
        });

        const result = await response.json();

        if (!result.success) {
          alert(result.message);
          return;
        }

        setUserInfo(result.data);
        setPreviewInfo(result.data);
      } catch (error) {
        console.error(error);
        alert("회원 정보를 불러오지 못했습니다.");
      }
    };

    getUserInfo();
  }, []);

  const socialProvider = String(userInfo?.socialMemberProvider || "local").toLowerCase();

  const isSocialFlag =
    userInfo?.socialUser === true ||
    userInfo?.socialUser === 1 ||
    userInfo?.socialUser === "1";

  const isSocialProvider =
    socialProvider === "google" ||
    socialProvider === "kakao" ||
    socialProvider === "naver";

  const isSocialUser = isSocialFlag && isSocialProvider;

  const handleWithdrawClick = () => {
    navigate("/mypage/withdraw");
  };

  if (!userInfo || !previewInfo) {
    return null;
  }

  return (
    <>
      <S.EditLayout>
        <S.EditMainArea>
          <ProfileCard
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            setPreviewInfo={setPreviewInfo}
          />

          <AccountInfoCard
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            isSocialUser={isSocialUser}
          />

          <PasswordChangeCard isSocialUser={isSocialUser} />

          <S.EditWithdrawArea>
            <MyPageStyle.WithdrawButton type="button" onClick={handleWithdrawClick}>
              회원 탈퇴
            </MyPageStyle.WithdrawButton>
          </S.EditWithdrawArea>
        </S.EditMainArea>

        <S.EditSideArea>
          <ProfilePreviewCard
            userInfo={previewInfo}
            previewImage={previewImage}
            onLevelClick={() => setIsLevelModalOpen(true)}
          />

          <ProfileGuideCard />
          <SecurityGuideCard />
        </S.EditSideArea>
      </S.EditLayout>

      {isLevelModalOpen && (
        <LevelGuideModal onClose={() => setIsLevelModalOpen(false)} />
      )}
    </>
  );
};

export default MyPageEditComponent;