import React, { useEffect, useState } from "react";

import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/ActivityCard";
import AttendanceCard from "./components/AttendanceCard";
import StudyStatusCard from "./components/StudyStatusCard";
import MypostList from "./components/MypostList";
import BookmarkList from "./components/BookmarkList";
import FollowList from "./components/FollowList";
import QuickMenuCard from "./components/QuickMenuCard";
import LevelGuideModal from "./components/LevelGuideModal";

import S from "./style";

/*
  마이페이지 메인 컴포넌트
  - 프로필
  - 내 활동
  - 내 게시글
  - 즐겨찾기
  - 팔로우 / 팔로워
  - 출석 / 학습 / 퀵메뉴
*/
const MyPageComponent = () => {
  const [myPageData, setMyPageData] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  // 마이페이지 메인 데이터 조회
  useEffect(() => {
    const getMyPageMain = async () => {
      try {
        const response = await fetch("http://localhost:10000/private/api/mypage", {
          method: "GET",
          credentials: "include",
        });

        const result = await response.json();

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

  // 데이터 로딩 전 화면
  if (!myPageData) {
    return null;
  }

  return (
    <>
      <S.Page>
        <S.Inner>
          <S.Layout>
            {/* 왼쪽 메인 영역 */}
            <S.LeftArea>
              {/* 프로필 카드 */}
              <ProfileCard
                profile={myPageData.profile}
                onLevelClick={() => setIsLevelModalOpen(true)}
              />

              {/* 나의 게시글 */}
              <MypostList myPostList={myPageData.myPostList || []} />

              {/* 즐겨찾기 */}
              <BookmarkList bookmarkList={myPageData.bookmarkList || []} />

              {/* 팔로우 / 팔로워 */}
              <FollowList
                followingList={myPageData.followingList || []}
                followerList={myPageData.followerList || []}
              />
            </S.LeftArea>

            {/* 오른쪽 사이드 영역 */}
            <S.RightArea>
              {/* 내 활동 */}
              <ActivityCard activity={myPageData.activity} />

              {/* 학습 현황 */}
              <StudyStatusCard studyStatusList={myPageData.studyStatusList || []} />

              {/* 연속 학습 */}
              <AttendanceCard attendance={myPageData.attendance} />

              {/* 퀵 메뉴 */}
              <QuickMenuCard />
            </S.RightArea>
          </S.Layout>
        </S.Inner>
      </S.Page>

      {/* 레벨 안내 모달 */}
      {isLevelModalOpen && (
        <LevelGuideModal onClose={() => setIsLevelModalOpen(false)} />
      )}
    </>
  );
};

export default MyPageComponent;