import { useState } from "react";

import ProfileCard from "./components/ProfileCard";
import BookmarkList from "./components/BookmarkList";
import FollowList from "./components/FollowList";
import ActivityCard from "./components/ActivityCard";
import StudyStatusCard from "./components/StudyStatusCard";
import AttendanceCard from "./components/AttendanceCard";
import MypostList from "./components/MypostList";
import QuickMenuCard from "./components/QuickMenuCard";
import LevelGuideModal from "./components/LevelGuideModal";
import { useNavigate } from "react-router-dom";

import {
  Layout,
  LeftArea,
  RightArea,
  WithdrawButton,
} from "./style";

const MyPageComponent = () => {
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const navigate = useNavigate();

  // 레벨업 가이드 
  const openLevelModal = () => {
    setIsLevelModalOpen(true);
  };

  const closeLevelModal = () => {
    setIsLevelModalOpen(false);
  };

  // 회원탈퇴
  const handleWithdrawClick = () => {
  navigate("/mypage/withdraw");
  };

  return (
    <>
      <Layout>
        <LeftArea>
          <ProfileCard onLevelClick={openLevelModal} />
          <MypostList />
          <BookmarkList />
          <FollowList />

          <WithdrawButton type="button" onClick={handleWithdrawClick}>
            회원탈퇴
          </WithdrawButton>
        </LeftArea>

        <RightArea>
          <ActivityCard />
          <StudyStatusCard onLevelClick={openLevelModal} />
          <AttendanceCard />
          <QuickMenuCard />
        </RightArea>
      </Layout>

      {isLevelModalOpen && <LevelGuideModal onClose={closeLevelModal} />}
    </>
  );
};

export default MyPageComponent;