import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "./components/ProfileCard";
import BookmarkList from "./components/BookmarkList";
import FollowList from "./components/FollowList";
import ActivityCard from "./components/ActivityCard";
import StudyStatusCard from "./components/StudyStatusCard";
import AttendanceCard from "./components/AttendanceCard";
import MypostList from "./components/MypostList";
import QuickMenuCard from "./components/QuickMenuCard";
import LevelGuideModal from "./components/LevelGuideModal";

import S from "./style";

const MyPageComponent = () => {
  const navigate = useNavigate();
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

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
      <S.Layout>
        {/* 왼쪽 영역 */}
        <S.LeftArea>
          <ProfileCard onLevelClick={openLevelModal} />
          <MypostList />
          <BookmarkList />
          <FollowList />

          <S.WithdrawButton type="button" onClick={handleWithdrawClick}>
            회원탈퇴
          </S.WithdrawButton>
        </S.LeftArea>

        {/* 오른쪽 영역 */}
        <S.RightArea>
          <ActivityCard />
          <StudyStatusCard onLevelClick={openLevelModal} />
          <AttendanceCard />
          <QuickMenuCard />
        </S.RightArea>
      </S.Layout>

      {isLevelModalOpen && <LevelGuideModal onClose={closeLevelModal} />}
    </>
  );
};

export default MyPageComponent;