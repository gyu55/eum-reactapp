import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import S from "./style";

const CheckIcon = () => {
  return (
    <svg
      width="30"
      height="23"
      viewBox="0 0 30 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 11.5L11.2 20.5L28 2"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const formatDate = (date) => {
  if (!date) {
    return "-";
  }

  return String(date).split("T")[0].replaceAll("-", ".");
};

const MyPageCertificateCompleteComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const certRenewId = location.state?.certRenewId;
  const fallbackInfo = location.state?.completeInfo;

  const [completeInfo, setCompleteInfo] = useState(fallbackInfo || null);

  // 신청 완료 정보 조회
  useEffect(() => {
    if (!certRenewId) {
      return;
    }

    const getCompleteInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:10000/private/api/mypage/certificates/apply/${certRenewId}`,
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

        setCompleteInfo(result.data);
      } catch (error) {
        console.error(error);
        alert("신청 완료 정보를 불러오지 못했습니다.");
      }
    };

    getCompleteInfo();
  }, [certRenewId]);

  if (!completeInfo) {
    return null;
  }

  const certificateName = completeInfo.testTitle || "-";
  const certificateDate = formatDate(completeInfo.acquiredAt);
  const statusName = completeInfo.certApplyStatusName || "신청 완료";
  const address = completeInfo.certAddress || completeInfo.certRoadAddress || "-";

  return (
    <S.CompleteWrapper>
      <S.CompleteIconOuter>
        <S.CompleteIconInner>
          <CheckIcon />
        </S.CompleteIconInner>
      </S.CompleteIconOuter>

      <S.CompleteTitle>실물 신청이 완료되었어요</S.CompleteTitle>

      <S.CompleteDesc>
        신청이 정상적으로 접수되었습니다. 처리 상태는 마이페이지에서 계속 확인할 수 있어요.
      </S.CompleteDesc>

      <S.CompleteInfoCard>
        <S.CompleteCardTitle>신청 정보</S.CompleteCardTitle>

        <S.CompleteInfoGrid>
          <S.CompleteInfoItem>
            <S.CompleteInfoLabel>신청 자격증</S.CompleteInfoLabel>
            <S.CompleteInfoValue>{certificateName}</S.CompleteInfoValue>
          </S.CompleteInfoItem>

          <S.CompleteInfoItem>
            <S.CompleteInfoLabel>취득일자</S.CompleteInfoLabel>
            <S.CompleteInfoValue>{certificateDate}</S.CompleteInfoValue>
          </S.CompleteInfoItem>

          <S.CompleteStatusItem>
            <S.CompleteInfoLabel>신청 상태</S.CompleteInfoLabel>
            <S.CompleteStatusBadge>{statusName}</S.CompleteStatusBadge>
          </S.CompleteStatusItem>
        </S.CompleteInfoGrid>

        <S.CompleteAddressBox>
          <S.CompleteAddressTitle>수령 주소</S.CompleteAddressTitle>
          <S.CompleteAddressText>{address}</S.CompleteAddressText>
        </S.CompleteAddressBox>
      </S.CompleteInfoCard>

      <S.CompleteNoticeCard>
        <S.CompleteCardTitle>다음 안내</S.CompleteCardTitle>

        <S.CompleteNoticeList>
          <S.CompleteNoticeText>
            · 신청 후 상태는 신청대기에서 신청완료로 변경될 수 있습니다.
          </S.CompleteNoticeText>

          <S.CompleteNoticeText>
            · 실물 자격증 발급이 완료되면 마이페이지에서 상태를 확인할 수 있어요.
          </S.CompleteNoticeText>

          <S.CompleteNoticeText>
            · 입력한 주소 정보가 정확하지 않으면 수령이 지연될 수 있습니다.
          </S.CompleteNoticeText>
        </S.CompleteNoticeList>
      </S.CompleteNoticeCard>

      <S.CompleteBackButton type="button" onClick={() => navigate("/mypage/certificate")}>
        마이페이지로 돌아가기
      </S.CompleteBackButton>
    </S.CompleteWrapper>
  );
};

export default MyPageCertificateCompleteComponent;