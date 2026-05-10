import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "./components/ProfileCard";
import AccountInfoCard from "./components/AccountInfoCard";
import PasswordChangeCard from "./components/PasswordChangeCard";
import ProfilePreviewCard from "./components/ProfilePreviewCard";
import ProfileGuideCard from "./components/ProfileGuideCard";
import LevelGuideModal from "../components/LevelGuideModal";

import {
  EditLayout,
  EditMainArea,
  EditSideArea,
  EditWithdrawArea,
} from "./style";
import { WithdrawButton } from "../style";
import SecurityGuideCard from "./components/SecurityGuideCard";

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
      <EditLayout>
        <EditMainArea>
          <ProfileCard />
          <AccountInfoCard />
          <PasswordChangeCard />

          <EditWithdrawArea>
            <WithdrawButton type="button" onClick={handleWithdrawClick}>
              회원 탈퇴
            </WithdrawButton>
          </EditWithdrawArea>
        </EditMainArea>

        <EditSideArea>
          <ProfilePreviewCard onLevelClick={openLevelModal} />
          <ProfileGuideCard />
          <SecurityGuideCard />
        </EditSideArea>
      </EditLayout>

      {isLevelModalOpen && <LevelGuideModal onClose={closeLevelModal} />}
    </>
  );
};

export default MyPageEditComponent;