import React from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const statusList = [
  {
    name: "미신청",
    description: "아직 실물 자격증을 신청하지 않은 상태",
  },
  {
    name: "신청 대기",
    description: "신청이 접수되어 처리 중인 상태",
  },
  {
    name: "신청 완료",
    description: "실물 자격증 발급이 완료된 상태",
  },
];

const CertificateGuideStatusCard = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/mypage/certificate");
  };

  return (
    <S.GuideStatusSection>
      {/* 신청 상태 안내 */}
      <S.GuideStatusTitle>
        3. 신청 상태 안내
      </S.GuideStatusTitle>

      <S.GuideStatusCardBox>
        {statusList.map((status) => (
          <S.GuideStatusText key={status.name}>
            <S.GuideStatusIcon aria-hidden="true" />
            <S.GuideStatusName>{status.name}</S.GuideStatusName>
            <S.GuideStatusColon>:</S.GuideStatusColon>
            <S.GuideStatusDescription>
              {status.description}
            </S.GuideStatusDescription>
          </S.GuideStatusText>
        ))}
      </S.GuideStatusCardBox>

      {/* 자격증 페이지 이동 */}
      <S.GuideBackButton type="button" onClick={handleBackClick}>
        자격증 페이지로 돌아가기
      </S.GuideBackButton>
    </S.GuideStatusSection>
  );
};

export default CertificateGuideStatusCard;