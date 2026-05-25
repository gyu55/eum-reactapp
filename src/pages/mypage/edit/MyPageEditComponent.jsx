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
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  // 정보수정 화면 회원 정보 조회
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
      } catch (error) {
        console.error(error);
        alert("회원 정보를 불러오지 못했습니다.");
      }
    };

    getUserInfo();
  }, []);

  const handleWithdrawClick = () => {
    navigate("/mypage/withdraw");
  };

  const openLevelModal = () => {
    setIsLevelModalOpen(true);
  };

  const closeLevelModal = () => {
    setIsLevelModalOpen(false);
  };

  if (!userInfo) {
    return null;
  }

  return (
    <>
      <S.EditLayout>
        {/* 왼쪽 영역 */}
        <S.EditMainArea>
          <ProfileCard
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
          />

          <AccountInfoCard userInfo={userInfo} />

          <PasswordChangeCard userInfo={userInfo} />

          <S.EditWithdrawArea>
            <MyPageStyle.WithdrawButton type="button" onClick={handleWithdrawClick}>
              회원 탈퇴
            </MyPageStyle.WithdrawButton>
          </S.EditWithdrawArea>
        </S.EditMainArea>

        {/* 오른쪽 영역 */}
        <S.EditSideArea>
          <ProfilePreviewCard
            userInfo={userInfo}
            previewImage={previewImage}
            onLevelClick={openLevelModal}
          />

          <ProfileGuideCard />

          <SecurityGuideCard userInfo={userInfo} />
        </S.EditSideArea>
      </S.EditLayout>

      {isLevelModalOpen && <LevelGuideModal onClose={closeLevelModal} />}
    </>
  );
};

export default MyPageEditComponent;