import { useEffect, useState } from "react";
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

  const [myPageData, setMyPageData] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  // 마이페이지 메인 정보 불러오기
  useEffect(() => {
    const getMyPageMain = async () => {
      try {
        const response = await fetch("http://localhost:10000/private/api/mypage", {
          method: "GET",
          credentials: "include",
        });

        const result = await response.json();
        console.log(result.data.studyStatusList);

        if (!result.success) {
          alert(result.message);
          return;
        }

        setMyPageData(result.data);
      } catch (error) {
        console.error(error);
        alert("마이페이지 정보를 불러오지 못했습니다.");
      }
    };

    getMyPageMain();
  }, []);
  
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

  if (!myPageData) {
    return null;
  }
  return (
    <>
      <S.Layout>
        {/* 왼쪽 영역 */}
        <S.LeftArea>
          <ProfileCard
            profile={myPageData.profile}
            onLevelClick={openLevelModal}
          />

          <MypostList posts={myPageData.posts} />

          <BookmarkList bookmarks={myPageData.bookmarks} />

          <FollowList
            followingList={myPageData.followingList}
            followerList={myPageData.followerList}
          />

          <S.WithdrawButton type="button" onClick={handleWithdrawClick}>
            회원탈퇴
          </S.WithdrawButton>
        </S.LeftArea>

        {/* 오른쪽 영역 */}
        <S.RightArea>
          <ActivityCard activity={myPageData.activity} />

          <StudyStatusCard
            studyStatusList={myPageData.studyStatusList}
            onLevelClick={openLevelModal}
          />

          <AttendanceCard attendance={myPageData.attendance} />

          <QuickMenuCard />
        </S.RightArea>
      </S.Layout>
      
      {isLevelModalOpen && <LevelGuideModal onClose={closeLevelModal} />}
    </>
  );
};

export default MyPageComponent;