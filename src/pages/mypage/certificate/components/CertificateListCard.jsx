import React, { useState } from "react";

import S from "../style";
import { useNavigate } from "react-router-dom";

const certificateList = [
  {
    name: "수어 통역사 2급",
    date: "2025.03.08",
    status: "미신청",
    apply: "신청하기",
  },
  {
    name: "수어 통역사 1급",
    date: "2024.11.21",
    status: "신청완료",
    apply: "완료",
  },
  {
    name: "수어 지도사",
    date: "2023.08.14",
    status: "신청대기",
    apply: "처리중",
  },
];

const CertificateListCard = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleApplyClick = (certificate) => {
    if (certificate.apply !== "신청하기") return;

    setSelectedCertificate(certificate);
  };

  const navigate = useNavigate();

  return (
    <S.CertificateSection>
      <S.CertificateTitle>내 자격증</S.CertificateTitle>

      <S.CertificateDesc>
        취득한 수어 자격증명, 취득일자, 실물 신청 상태를 확인하세요.
      </S.CertificateDesc>

      <S.CertificateCardBox $hasDetail={!!selectedCertificate}>
        <S.CertificateHeader>
          <S.CertificateHeaderText>취득한 자격증명</S.CertificateHeaderText>
          <S.CertificateHeaderText>취득일자</S.CertificateHeaderText>
          <S.CertificateHeaderText>실물 신청 상태</S.CertificateHeaderText>
          <S.CertificateHeaderText>신청</S.CertificateHeaderText>
        </S.CertificateHeader>

        {/* 자격증 목록 연동 */}
        {certificateList.map((certificate) => (
          <S.CertificateRow key={certificate.name}>
            <S.CertificateText>{certificate.name}</S.CertificateText>
            <S.CertificateText>{certificate.date}</S.CertificateText>

            <S.CertificateStatusButton type="button">
              {certificate.status}
            </S.CertificateStatusButton>

            <S.CertificateApplyButton
              type="button"
              onClick={() => handleApplyClick(certificate)}
            >
              {certificate.apply}
            </S.CertificateApplyButton>
          </S.CertificateRow>
        ))}

        {selectedCertificate && (
          <S.CertificateDetailBox>
            <S.CertificateDetailTitle>선택한 자격증 상세</S.CertificateDetailTitle>

            <S.CertificateDetailInfoRow>
              <S.CertificateDetailInfoItem>
                <S.CertificateDetailLabel>자격증명</S.CertificateDetailLabel>
                <S.CertificateDetailValue>
                  {selectedCertificate.name}
                </S.CertificateDetailValue>
              </S.CertificateDetailInfoItem>

              <S.CertificateDetailInfoItem>
                <S.CertificateDetailLabel>취득일자</S.CertificateDetailLabel>
                <S.CertificateDetailValue>
                  {selectedCertificate.date}
                </S.CertificateDetailValue>
              </S.CertificateDetailInfoItem>

              <S.CertificateDetailInfoItem>
                <S.CertificateDetailLabel>실물 신청 상태</S.CertificateDetailLabel>
                <S.CertificateDetailValue>
                  {selectedCertificate.status}
                </S.CertificateDetailValue>
              </S.CertificateDetailInfoItem>
            </S.CertificateDetailInfoRow>

            <S.CertificateDetailNoticeTitle>안내</S.CertificateDetailNoticeTitle>

            <S.CertificateDetailNoticeText>
              실물 자격증이 필요한 경우 신청 버튼을 눌러 발급 절차를 진행할 수 있어요.
              <br />
              신청 후 처리 상태는 마이페이지에서 계속 확인할 수 있습니다.
            </S.CertificateDetailNoticeText>

            {/* 실물 신청 API 연동 */}
            <S.CertificateDetailApplyButton type="button" onClick={() => navigate("/mypage/certificate/confirm")}>
              실물 신청
            </S.CertificateDetailApplyButton>
          </S.CertificateDetailBox>
        )}

        <S.CertificateMoreButton type="button" $hasDetail={!!selectedCertificate}>
          더 보기 <span>→</span>
        </S.CertificateMoreButton>
      </S.CertificateCardBox>
    </S.CertificateSection>
  );
};

export default CertificateListCard;