import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const COLLAPSED_COUNT = 4;
const PAGE_SIZE = 8;

const formatDate = (date) => {
  if (!date) return "-";

  const target = new Date(date);

  return `${target.getFullYear()}.${String(target.getMonth() + 1).padStart(2, "0")}.${String(target.getDate()).padStart(2, "0")}`;
};

const formatCertDate = (date) => {
  if (!date) return "-";

  const target = new Date(date);

  return `${target.getFullYear()}년 ${target.getMonth() + 1}월 ${target.getDate()}일`;
};

const isExpired = (date) => {
  if (!date) return false;
  return new Date(date) < new Date();
};

const getCertNo = (cert) => {
  const year = cert.eduCertCreateAt ? new Date(cert.eduCertCreateAt).getFullYear() : "0000";

  return `CL-${year}-${String(cert.id).padStart(5, "0")}`;
};

const escapeHtml = (value) => {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

const MyEduCertificateCard = ({ eduCertList = [], profile = {} }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);

  // 발급일 최신순 정렬
  const sortedEduCertList = useMemo(() => {
    return [...eduCertList].sort((a, b) => {
      return new Date(b.eduCertCreateAt || 0).getTime() - new Date(a.eduCertCreateAt || 0).getTime();
    });
  }, [eduCertList]);

  const handleMoveReissue = () => {
  navigate("/exam/certificate/reissue");
  };

  const needToggleButton = sortedEduCertList.length > COLLAPSED_COUNT;
  const needPagination = isExpanded && sortedEduCertList.length >= PAGE_SIZE;
  const pageCount = Math.ceil(sortedEduCertList.length / PAGE_SIZE);

  // 기본 4개, 더보기 후 8개 단위
  const visibleEduCertList = (() => {
    if (!isExpanded) {
      return sortedEduCertList.slice(0, COLLAPSED_COUNT);
    }

    if (!needPagination) {
      return sortedEduCertList;
    }

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return sortedEduCertList.slice(startIndex, startIndex + PAGE_SIZE);
  })();

  const userName = profile?.userName || profile?.userNickname || "OOO";
  const userBirth = profile?.userBirth ? profile.userBirth.replace(/-/g, ".") : "2000.01.01";

  const handleToggleClick = () => {
    setIsExpanded((prev) => !prev);
    setCurrentPage(1);
  };

  const handleOpenPreview = (cert) => {
    if (!cert || isExpired(cert.eduCertExpireAt)) {
      return;
    }

    setSelectedCert(cert);
  };

  const handleClosePreview = () => {
    setSelectedCert(null);
  };

  const handlePrint = () => {
    if (!selectedCert) return;

    const logoUrl = `${window.location.origin}/assets/image/layout/logo.svg`;
    const certNo = getCertNo(selectedCert);
    const issueDate = formatCertDate(selectedCert.eduCertCreateAt);
    const courseName = selectedCert.eduTitle || "-";

    const printWindow = window.open("", "_blank", "width=680,height=860");

    if (!printWindow) {
      alert("팝업이 차단되었습니다. 팝업 허용 후 다시 시도해주세요.");
      return;
    }

    printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>수료증</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Malgun Gothic', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #e8e8e8;
    }
    .wrap {
      width: 520px;
      padding: 48px 56px 44px;
      border: 1.5px solid #aaaaaa;
      background: #ffffff;
      position: relative;
      overflow: hidden;
    }
    .watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      opacity: 0.07;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
    .title {
      text-align: center;
      font-size: 32px;
      font-weight: 800;
      letter-spacing: 0.5em;
      color: #111111;
      padding-bottom: 20px;
      border-bottom: 2.5px solid #111111;
      margin-bottom: 10px;
      position: relative;
    }
    .no {
      font-size: 13px;
      color: #888888;
      text-align: right;
      margin: 12px 0 20px;
      position: relative;
    }
    .field {
      display: flex;
      align-items: baseline;
      gap: 16px;
      border-bottom: 1px solid #bbbbbb;
      padding: 11px 0;
      position: relative;
    }
    .label {
      min-width: 90px;
      font-size: 15px;
      color: #555555;
    }
    .value {
      font-size: 17px;
      font-weight: 700;
      color: #111111;
    }
    .text-block {
      font-size: 16px;
      color: #222222;
      line-height: 2.2;
      text-align: center;
      padding: 32px 0 28px;
      position: relative;
    }
    .footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 10px;
      position: relative;
    }
    .date-org {
      flex: 1;
      text-align: center;
    }
    .date {
      font-size: 15px;
      color: #333333;
      margin-bottom: 10px;
    }
    .org {
      font-size: 17px;
      font-weight: 700;
      color: #111111;
    }
    .seal {
      opacity: 0.85;
      flex-shrink: 0;
    }
    @media print {
      body {
        background: #ffffff;
        min-height: auto;
      }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <img class="watermark" src="${logoUrl}" alt="" />
    <div class="title">수료증</div>
    <div class="no">${escapeHtml(certNo)}</div>

    <div class="field">
      <span class="label">성명</span>
      <span class="value">${escapeHtml(userName)}</span>
    </div>

    <div class="field">
      <span class="label">생년월일</span>
      <span class="value">${escapeHtml(userBirth)}</span>
    </div>

    <div class="field">
      <span class="label">과정명</span>
      <span class="value">${escapeHtml(courseName)}</span>
    </div>

    <div class="text-block">
      위 사람은 해당 과정을 수료하였음을<br />
      증명합니다.
    </div>

    <div class="footer">
      <div class="date-org">
        <div class="date">${escapeHtml(issueDate)}</div>
        <div class="org">이음</div>
      </div>

      <svg class="seal" width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="86" height="86" fill="none" stroke="#b45f55" stroke-width="3.5"/>
        <rect x="7" y="7" width="76" height="76" fill="none" stroke="#b45f55" stroke-width="1.5"/>
        <rect x="7" y="7" width="76" height="16" fill="#b45f55"/>
        <rect x="7" y="67" width="76" height="16" fill="#b45f55"/>
        <text x="45" y="19" font-family="'Malgun Gothic', sans-serif" font-size="10" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="5">이음협회</text>
        <text x="28" y="48" font-family="'Malgun Gothic', sans-serif" font-size="21" font-weight="bold" fill="#b45f55" text-anchor="middle">수</text>
        <text x="62" y="48" font-family="'Malgun Gothic', sans-serif" font-size="21" font-weight="bold" fill="#b45f55" text-anchor="middle">료</text>
        <text x="28" y="66" font-family="'Malgun Gothic', sans-serif" font-size="21" font-weight="bold" fill="#b45f55" text-anchor="middle">증</text>
        <text x="62" y="66" font-family="'Malgun Gothic', sans-serif" font-size="21" font-weight="bold" fill="#b45f55" text-anchor="middle">명</text>
        <text x="45" y="79" font-family="'Malgun Gothic', sans-serif" font-size="9" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="1">수어통역사교육</text>
      </svg>
    </div>
  </div>
</body>
</html>`);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <>
      <S.EduCertSection>
        <S.EduCertTitle>내 수료증</S.EduCertTitle>
        <S.EduCertDesc>
          수료한 학습 과정의 수료증을 확인하고 PDF로 출력할 수 있어요.
        </S.EduCertDesc>

        <S.EduCertCardBox>
          <S.EduCertHeader>
            <S.EduCertHeaderText>수료증명</S.EduCertHeaderText>
            <S.EduCertHeaderText>발급일</S.EduCertHeaderText>
            <S.EduCertHeaderText>만료일</S.EduCertHeaderText>
            <S.EduCertHeaderText>출력</S.EduCertHeaderText>
          </S.EduCertHeader>

          {visibleEduCertList.length === 0 ? (
            <S.EduCertEmptyText>발급된 수료증이 없습니다.</S.EduCertEmptyText>
          ) : (
            visibleEduCertList.map((cert) => {
              const expired = isExpired(cert.eduCertExpireAt);

              return (
                <S.EduCertRow key={cert.id}>
                  <S.EduCertText>{cert.eduTitle}</S.EduCertText>
                  <S.EduCertText>{formatDate(cert.eduCertCreateAt)}</S.EduCertText>
                  <S.EduCertText>{formatDate(cert.eduCertExpireAt)}</S.EduCertText>

                  <S.EduCertPrintButton
                      type="button"
                      $expired={expired}
                      onClick={() => (expired ? handleMoveReissue() : handleOpenPreview(cert))}
                    >
                    {expired ? "만료" : "원본 보기"}
                  </S.EduCertPrintButton>
                </S.EduCertRow>
              );
            })
          )}

          {needPagination && (
            <S.EduCertPaginationArea>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                <S.EduCertPageButton
                  key={page}
                  type="button"
                  $active={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </S.EduCertPageButton>
              ))}
            </S.EduCertPaginationArea>
          )}

          {needToggleButton && (
            <S.EduCertMoreButton type="button" onClick={handleToggleClick}>
              {isExpanded ? "접기" : "더 보기"} <span>{isExpanded ? "↑" : "→"}</span>
            </S.EduCertMoreButton>
          )}
        </S.EduCertCardBox>
      </S.EduCertSection>

      {selectedCert && (
        <S.EduCertModalOverlay onClick={handleClosePreview}>
          <S.EduCertModalContent onClick={(e) => e.stopPropagation()}>
            <S.EduCertModalCloseButton type="button" onClick={handleClosePreview}>
              ×
            </S.EduCertModalCloseButton>

            <S.EduCertPreviewCard>
              <S.EduCertWatermark>
                <img src="/assets/image/layout/logo.svg" alt="" />
              </S.EduCertWatermark>

              <S.EduCertPreviewTitle>수료증</S.EduCertPreviewTitle>

              <S.EduCertPreviewBody>
                <S.EduCertPreviewNo>{getCertNo(selectedCert)}</S.EduCertPreviewNo>

                <S.EduCertPreviewFieldRow>
                  <S.EduCertPreviewFieldLabel>성명</S.EduCertPreviewFieldLabel>
                  <S.EduCertPreviewFieldValue>{userName}</S.EduCertPreviewFieldValue>
                </S.EduCertPreviewFieldRow>

                <S.EduCertPreviewFieldRow>
                  <S.EduCertPreviewFieldLabel>생년월일</S.EduCertPreviewFieldLabel>
                  <S.EduCertPreviewFieldValue>{userBirth}</S.EduCertPreviewFieldValue>
                </S.EduCertPreviewFieldRow>

                <S.EduCertPreviewFieldRow>
                  <S.EduCertPreviewFieldLabel>과정명</S.EduCertPreviewFieldLabel>
                  <S.EduCertPreviewFieldValue>{selectedCert.eduTitle}</S.EduCertPreviewFieldValue>
                </S.EduCertPreviewFieldRow>

                <S.EduCertPreviewTextBlock>
                  위 사람은 상기 과정을 수료하였음을
                  <br />
                  증명합니다.
                </S.EduCertPreviewTextBlock>

                <S.EduCertPreviewFooter>
                  <S.EduCertPreviewDate>
                    {formatCertDate(selectedCert.eduCertCreateAt)}
                    <br />
                    <S.EduCertPreviewOrg>이음</S.EduCertPreviewOrg>
                  </S.EduCertPreviewDate>

                  <S.EduCertPreviewSeal
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="2" y="2" width="86" height="86" fill="none" stroke="#b45f55" strokeWidth="3.5" />
                    <rect x="7" y="7" width="76" height="76" fill="none" stroke="#b45f55" strokeWidth="1.5" />
                    <rect x="7" y="7" width="76" height="16" fill="#b45f55" />
                    <rect x="7" y="67" width="76" height="16" fill="#b45f55" />
                    <text x="45" y="19" fontFamily="'Malgun Gothic', sans-serif" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="5">이음협회</text>
                    <text x="28" y="48" fontFamily="'Malgun Gothic', sans-serif" fontSize="21" fontWeight="bold" fill="#b45f55" textAnchor="middle">수</text>
                    <text x="62" y="48" fontFamily="'Malgun Gothic', sans-serif" fontSize="21" fontWeight="bold" fill="#b45f55" textAnchor="middle">료</text>
                    <text x="28" y="66" fontFamily="'Malgun Gothic', sans-serif" fontSize="21" fontWeight="bold" fill="#b45f55" textAnchor="middle">증</text>
                    <text x="62" y="66" fontFamily="'Malgun Gothic', sans-serif" fontSize="21" fontWeight="bold" fill="#b45f55" textAnchor="middle">명</text>
                    <text x="45" y="79" fontFamily="'Malgun Gothic', sans-serif" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="1">수어통역사교육</text>
                  </S.EduCertPreviewSeal>
                </S.EduCertPreviewFooter>
              </S.EduCertPreviewBody>

              <S.EduCertPreviewPrintButton type="button" onClick={handlePrint}>
                출력하기 (PDF)
              </S.EduCertPreviewPrintButton>
            </S.EduCertPreviewCard>
          </S.EduCertModalContent>
        </S.EduCertModalOverlay>
      )}
    </>
  );
};

export default MyEduCertificateCard;