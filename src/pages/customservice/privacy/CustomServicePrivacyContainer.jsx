import React from "react";
import * as S from "./style";
import CustomServicePrivacyComponent from "./CustomServicePrivacyComponent";

const CustomServicePrivacyContainer = () => {
  return (
    <>
      <S.HeroCard>
        <div>
          <S.HeroBadge>고객지원</S.HeroBadge>
          <S.HeroTitle>개인정보 처리방침</S.HeroTitle>
          <S.HeroSub>시행일 : 2026.05.05</S.HeroSub>
        </div>
        <S.HeroIllust>
          <img src="/assets/image/customService/eumServiceIcon.svg" alt="" style={{ width: "80px" }} />
        </S.HeroIllust>
      </S.HeroCard>

      <CustomServicePrivacyComponent />
    </>
  );
};

export default CustomServicePrivacyContainer;
