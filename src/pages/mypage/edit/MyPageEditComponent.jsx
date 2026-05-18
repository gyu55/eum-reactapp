import React, { useState } from "react";
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
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const handleWithdrawClick = () => {
    navigate("/mypage/withdraw");
  };

  const openLevelModal = () => {
    setIsLevelModalOpen(true);
  };

  const closeLevelModal = () => {
    setIsLevelModalOpen(false);
  };

  return (
    <>
      <S.EditLayout>
        {/* 왼쪽 영역 */}
        <S.EditMainArea>
          <ProfileCard />
          <AccountInfoCard />
          <PasswordChangeCard />

          <S.EditWithdrawArea>
            <MyPageStyle.WithdrawButton type="button" onClick={handleWithdrawClick}>
              회원 탈퇴
            </MyPageStyle.WithdrawButton>
          </S.EditWithdrawArea>
        </S.EditMainArea>

        {/* 오른쪽 영역 */}
        <S.EditSideArea>
          <ProfilePreviewCard onLevelClick={openLevelModal} />
          <ProfileGuideCard />
          <SecurityGuideCard />
        </S.EditSideArea>
      </S.EditLayout>

      {isLevelModalOpen && <LevelGuideModal onClose={closeLevelModal} />}
    </>
  );
};

export default MyPageEditComponent;