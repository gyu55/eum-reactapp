import React, { useEffect, useState } from "react";

import ProfileCard from "../components/ProfileCard";
import ActivityCard from "../components/ActivityCard";
import QuickMenuCard from "../components/QuickMenuCard";
import LevelGuideModal from "../components/LevelGuideModal";

import CertificateListCard from "./components/CertificateListCard";
import CourseListCard from "./components/CourseListCard";
import CertificateGuideCard from "./components/CertificateGuideCard";
import CertificateAvailableCard from "./components/CertificateAvailableCard";

import S from "./style";

const MyPageCertificateComponent = () => {
  const [myPageData, setMyPageData] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  // 마이페이지 공통 데이터 조회
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

  if (!myPageData) {
    return null;
  }

  return (
    <>
      <S.CertificateLayout>
        {/* 왼쪽 영역 */}
        <S.CertificateLeftArea>
          <ProfileCard
            profile={myPageData.profile}
            onLevelClick={() => setIsLevelModalOpen(true)}
          />

          <CertificateListCard />

          <CourseListCard />
        </S.CertificateLeftArea>

        {/* 오른쪽 영역 */}
        <S.CertificateRightArea>
          <ActivityCard activity={myPageData.activity} />

          <CertificateGuideCard />

          <CertificateAvailableCard />

          <QuickMenuCard />
        </S.CertificateRightArea>
      </S.CertificateLayout>

      {isLevelModalOpen && (
        <LevelGuideModal onClose={() => setIsLevelModalOpen(false)} />
      )}
    </>
  );
};

export default MyPageCertificateComponent;