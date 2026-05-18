import React from "react";

import CertificateGuideStepCard from "./components/CertificateGuideStepCard";
import CertificateGuideExampleCard from "./components/CertificateGuideExampleCard";
import CertificateGuideStatusCard from "./components/CertificateGuideStatusCard";

import S from "./style";

const MyPageCertificateGuideComponent = () => {
  return (
    <S.GuideWrapper>
      <S.GuideHeader>
        <S.GuideTitle>실물 자격증 신청 가이드</S.GuideTitle>

        <S.GuideDesc>
          실물 자격증은 자격증 페이지에서 신청할 수 있어요. 아래 순서대로 확인해주세요.
        </S.GuideDesc>
      </S.GuideHeader>

      <CertificateGuideStepCard />

      <CertificateGuideExampleCard />

      <CertificateGuideStatusCard />
    </S.GuideWrapper>
  );
};

export default MyPageCertificateGuideComponent;