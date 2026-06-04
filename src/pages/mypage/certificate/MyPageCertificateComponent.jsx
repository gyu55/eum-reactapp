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
  const [certificateData, setCertificateData] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  // 마이페이지 공통 정보와 자격증 페이지 정보를 함께 조회
  useEffect(() => {
    const getCertificatePage = async () => {
      try {
        const [myPageResponse, certificateResponse] = await Promise.all([
          fetch("http://localhost:10000/private/api/mypage", {
            method: "GET",
            credentials: "include",
          }),
          fetch("http://localhost:10000/private/api/mypage/certificates", {
            method: "GET",
            credentials: "include",
          }),
        ]);

        const myPageResult = await myPageResponse.json();
        const certificateResult = await certificateResponse.json();

        if (!myPageResult.success) {
          alert(myPageResult.message);
          return;
        }

        if (!certificateResult.success) {
          alert(certificateResult.message);
          return;
        }

        setMyPageData(myPageResult.data);
        setCertificateData(certificateResult.data);
      } catch (error) {
        console.error(error);
        alert("자격증 정보를 불러오지 못했습니다.");
      }
    };

    getCertificatePage();
  }, []);

  if (!myPageData || !certificateData) {
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

          <CertificateListCard
            certificateList={certificateData.certificateList || []}
          />

          <CourseListCard courseList={certificateData.courseList || []} />
        </S.CertificateLeftArea>

        {/* 오른쪽 영역 */}
        <S.CertificateRightArea>
          <ActivityCard activity={myPageData.activity} />

          <CertificateGuideCard />

          <CertificateAvailableCard
            availableApplyCount={certificateData.summary?.availableApplyCount || 0}
          />

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