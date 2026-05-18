import React from "react";
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

const MyPageCertificateCompleteComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const requestInfo = location.state?.requestInfo || {};

  const certificateName = requestInfo.certificateName || "수어 통역사 2급";
  const certificateDate = requestInfo.certificateDate || "2025.03.08";
  const address = requestInfo.address || "서울특별시 강남구 테헤란로 123";
  const detailAddress = requestInfo.detailAddress || "101동 1203호";

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
            <S.CompleteStatusBadge>신청 완료</S.CompleteStatusBadge>
          </S.CompleteStatusItem>
        </S.CompleteInfoGrid>

        <S.CompleteAddressBox>
          <S.CompleteAddressTitle>수령 주소</S.CompleteAddressTitle>
          <S.CompleteAddressText>
            {address}, {detailAddress}
          </S.CompleteAddressText>
        </S.CompleteAddressBox>
      </S.CompleteInfoCard>

      <S.CompleteNoticeCard>
        <S.CompleteCardTitle>다음 안내</S.CompleteCardTitle>

        <S.CompleteNoticeList>
          <S.CompleteNoticeText>
            · 신청 후 상태는 ‘신청 대기 → 신청 완료’로 변경될 수 있습니다.
          </S.CompleteNoticeText>

          <S.CompleteNoticeText>
            · 실물 자격증 발급이 완료되면 마이페이지에서 상태를 확인할 수 있어요.
          </S.CompleteNoticeText>

          <S.CompleteNoticeText>
            · 입력한 주소 정보가 정확하지 않으면 수령이 지연될 수 있습니다.
          </S.CompleteNoticeText>
        </S.CompleteNoticeList>
      </S.CompleteNoticeCard>

      <S.CompleteBackButton type="button" onClick={() => navigate("/mypage")}>
        마이페이지로 돌아가기
      </S.CompleteBackButton>
    </S.CompleteWrapper>
  );
};

export default MyPageCertificateCompleteComponent;