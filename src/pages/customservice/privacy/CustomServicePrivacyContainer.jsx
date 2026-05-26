import React from "react";
import CustomServicePrivacyComponent from "./CustomServicePrivacyComponent";
import PageHeroCard from "../common/pageHeroCard";

const CustomServicePrivacyContainer = () => {
  return (
    <>
      <PageHeroCard
        badge="고객지원"
        title="개인정보 처리방침"
        sub="이음 서비스의 개인정보 처리방침을 확인하세요."
        iconSrc="/assets/image/customService/eumServiceIcon.svg"
      />
      <CustomServicePrivacyComponent />
    </>
  );
};

export default CustomServicePrivacyContainer;