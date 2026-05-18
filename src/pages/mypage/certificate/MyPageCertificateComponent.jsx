import React, { useState } from "react";

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
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const openLevelModal = () => {
    setIsLevelModalOpen(true);
  };

  const closeLevelModal = () => {
    setIsLevelModalOpen(false);
  };

  return (
    <>
      <S.CertificateLayout>
        {/* 왼쪽 영역 */}
        <S.CertificateLeftArea>
          <ProfileCard onLevelClick={openLevelModal} />

          <CertificateListCard />

          <CourseListCard />
        </S.CertificateLeftArea>

        {/* 오른쪽 영역 */}
        <S.CertificateRightArea>
          <ActivityCard />

          <CertificateGuideCard />

          <CertificateAvailableCard />

          <QuickMenuCard />
        </S.CertificateRightArea>
      </S.CertificateLayout>

      {isLevelModalOpen && (
        <LevelGuideModal onClose={closeLevelModal} />
      )}
    </>
  );
};

export default MyPageCertificateComponent;