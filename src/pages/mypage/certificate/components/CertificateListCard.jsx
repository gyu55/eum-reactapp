import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const formatDate = (date) => {
  if (!date) {
    return "-";
  }

  return String(date).split("T")[0].replaceAll("-", ".");
};

const CertificateListCard = ({ certificateList = [] }) => {
  const navigate = useNavigate();

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const hasMoreCertificates = certificateList.length >= 4;
  const visibleCertificateList = isExpanded
    ? certificateList
    : certificateList.slice(0, 3);

  const handleCertificateClick = async (certificate) => {
    try {
      const response = await fetch(
        `http://localhost:10000/private/api/mypage/certificates/${certificate.testResultId}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      setSelectedCertificate(result.data);
    } catch (error) {
      console.error(error);
      alert("선택한 자격증 정보를 불러오지 못했습니다.");
    }
  };

  const handleApplyClick = (certificate) => {
    if (!certificate.canApply) {
      return;
    }

    navigate("/mypage/certificate/confirm", {
      state: {
        testResultId: certificate.testResultId,
      },
    });
  };

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

        {certificateList.length === 0 ? (
          <S.CertificateRow>
            <S.CertificateText>취득한 자격증이 없습니다.</S.CertificateText>
            <S.CertificateText>-</S.CertificateText>
            <S.CertificateText>-</S.CertificateText>
            <S.CertificateText>-</S.CertificateText>
          </S.CertificateRow>
        ) : (
          visibleCertificateList.map((certificate) => (
            <S.CertificateRow key={certificate.testResultId}>
              <S.CertificateText>{certificate.testTitle}</S.CertificateText>
              <S.CertificateText>{formatDate(certificate.acquiredAt)}</S.CertificateText>

              <S.CertificateStatusButton as="span">
                {certificate.certApplyStatusName}
              </S.CertificateStatusButton>

              <S.CertificateApplyButton
                type="button"
                disabled={!certificate.canApply}
                onClick={() => handleCertificateClick(certificate)}
              >
                {certificate.buttonText}
              </S.CertificateApplyButton>
            </S.CertificateRow>
          ))
        )}

        {selectedCertificate && (
          <S.CertificateDetailBox>
            <S.CertificateDetailTitle>선택한 자격증 상세</S.CertificateDetailTitle>

            <S.CertificateDetailInfoRow>
              <S.CertificateDetailInfoItem>
                <S.CertificateDetailLabel>자격증명</S.CertificateDetailLabel>
                <S.CertificateDetailValue>
                  {selectedCertificate.testTitle}
                </S.CertificateDetailValue>
              </S.CertificateDetailInfoItem>

              <S.CertificateDetailInfoItem>
                <S.CertificateDetailLabel>취득일자</S.CertificateDetailLabel>
                <S.CertificateDetailValue>
                  {formatDate(selectedCertificate.acquiredAt)}
                </S.CertificateDetailValue>
              </S.CertificateDetailInfoItem>

              <S.CertificateDetailInfoItem>
                <S.CertificateDetailLabel>실물 신청 상태</S.CertificateDetailLabel>
                <S.CertificateDetailValue>
                  {selectedCertificate.certApplyStatusName}
                </S.CertificateDetailValue>
              </S.CertificateDetailInfoItem>
            </S.CertificateDetailInfoRow>

            <S.CertificateDetailNoticeTitle>안내</S.CertificateDetailNoticeTitle>

            <S.CertificateDetailNoticeText>
              실물 자격증이 필요한 경우 신청 버튼을 눌러 발급 절차를 진행할 수 있어요.
              <br />
              신청 후 처리 상태는 마이페이지에서 계속 확인할 수 있습니다.
            </S.CertificateDetailNoticeText>

            {selectedCertificate.canApply && (
              <S.CertificateDetailApplyButton
                type="button"
                onClick={() => handleApplyClick(selectedCertificate)}
              >
                실물 신청
              </S.CertificateDetailApplyButton>
            )}
          </S.CertificateDetailBox>
        )}

        {hasMoreCertificates && (
          <S.CertificateMoreButton
            type="button"
            $hasDetail={!!selectedCertificate}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? "접기" : "더보기"}{" "}
            <span>{isExpanded ? "▲" : "▼"}</span>
          </S.CertificateMoreButton>
        )}
      </S.CertificateCardBox>
    </S.CertificateSection>
  );
};

export default CertificateListCard;