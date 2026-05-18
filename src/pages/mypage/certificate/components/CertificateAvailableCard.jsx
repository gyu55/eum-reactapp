import React from "react";

import S from "../style";

/* 자격증 아이콘 */
const certificateIconImg =
  "/assets/image/main/exam.svg";

const CertificateAvailableCard = () => {
  return (
    <S.CertificateAvailableCardBox>
      {/* 신청 가능 안내 */}
      <S.CertificateAvailableContent>
        <S.CertificateAvailableTitle>
          실물 신청 가능
        </S.CertificateAvailableTitle>

        {/* 신청 가능 개수 API 연결 */}
        <S.CertificateAvailableCountWrap>
          <S.CertificateAvailableCount>
            1
          </S.CertificateAvailableCount>

          <S.CertificateAvailableUnit>
            개
          </S.CertificateAvailableUnit>
        </S.CertificateAvailableCountWrap>

        <S.CertificateAvailableDesc>
          미신청 자격증을 확인해보세요
        </S.CertificateAvailableDesc>
      </S.CertificateAvailableContent>

      {/* 오른쪽 아이콘 */}
      <S.CertificateAvailableIcon>
        <img
          src={certificateIconImg}
          alt="자격증 아이콘"
        />
      </S.CertificateAvailableIcon>
    </S.CertificateAvailableCardBox>
  );
};

export default CertificateAvailableCard;