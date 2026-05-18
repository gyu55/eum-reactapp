import React from "react";

import S from "../style";

const stepList = [
  "① 마이페이지에서 자격증 탭으로 이동합니다.",
  "② 자격증 목록에서 상태가 미신청인 자격증을 확인합니다.",
  "③ 해당 행 오른쪽의 신청하기 버튼을 눌러 실물 신청을 진행합니다.",
];

const CertificateGuideStepCard = () => {
  return (
    <S.GuideStepCardBox>
      <S.GuideStepTitle>
        1. 실물 자격증 신청 절차
      </S.GuideStepTitle>

      <S.GuideStepList>
        {stepList.map((step) => (
          <S.GuideStepItem key={step}>
            {step}
          </S.GuideStepItem>
        ))}
      </S.GuideStepList>
    </S.GuideStepCardBox>
  );
};

export default CertificateGuideStepCard;