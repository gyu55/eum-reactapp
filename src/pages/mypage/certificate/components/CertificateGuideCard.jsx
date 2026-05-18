import React from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const guideList = [
  "자격증 취득 정보는 조회용으로 표시됩니다.",
  "실물 신청이 가능한 항목만 버튼이 노출돼요.",
  "신청 후 처리 상태는 실시간으로 반영됩니다.",
  "발급 완료 시 수령 여부를 확인할 수 있어요.",
];

const CertificateGuideCard = () => {
  const navigate = useNavigate();

  /* 신청 가이드 페이지 이동 */
  const handleGuideClick = () => {
    navigate("/mypage/certificate/guide");
  };

  return (
    <S.CertificateGuideCardBox>
      {/* 안내 제목 */}
      <S.CertificateGuideTitle>
        실물 신청 안내
      </S.CertificateGuideTitle>

      {/* 안내 내용 */}
      <S.CertificateGuideList>
        {guideList.map((guide) => (
          <S.CertificateGuideItem key={guide}>
            • {guide}
          </S.CertificateGuideItem>
        ))}
      </S.CertificateGuideList>

      {/* 신청 안내 페이지 연결 */}
      <S.CertificateGuideButton
        type="button"
        onClick={handleGuideClick}
      >
        신청 가이드
      </S.CertificateGuideButton>
    </S.CertificateGuideCardBox>
  );
};

export default CertificateGuideCard;