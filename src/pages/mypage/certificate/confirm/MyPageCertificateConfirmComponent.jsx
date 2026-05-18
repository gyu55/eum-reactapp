import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import S from "./style";

const certificateList = [
  {
    name: "수어 통역사 2급",
    date: "2025.03.08",
  },
  {
    name: "수어 통역사 1급",
    date: "2024.11.21",
  },
  {
    name: "수어 지도사",
    date: "2023.08.14",
  },
];

const MyPageCertificateConfirmComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedAddress = location.state?.selectedAddress;

  const [selectedCertificateName, setSelectedCertificateName] = useState(
    "수어 통역사 2급"
  );
  const [detailAddress, setDetailAddress] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const selectedCertificate = certificateList.find(
    (certificate) => certificate.name === selectedCertificateName
  );

  const handleAddressClick = () => {
    navigate("/mypage/certificate/confirm/address-search");
  };

  const handleCancelClick = () => {
    navigate("/mypage/certificate");
  };

  const handleSubmitClick = () => {
    if (!selectedAddress) {
      alert("주소를 먼저 선택해주세요.");
      return;
    }

    if (!isAgreed) {
      alert("동의 및 확인 항목을 체크해주세요.");
      return;
    }

    navigate("/mypage/certificate/complete", {
      state: {
        requestInfo: {
          certificateName: selectedCertificate.name,
          certificateDate: selectedCertificate.date,
          address: `${selectedAddress.roadAddress} ${selectedAddress.building}`,
          detailAddress,
        },
      },
    });
  };

  return (
    <S.ConfirmWrapper>
      <S.ConfirmTopDesc>
        선택한 자격증의 실물 발급 신청 정보를 확인하고 접수할 수 있어요.
      </S.ConfirmTopDesc>

      <S.ConfirmSection $first>
        <S.SelectedCertificateCard>
          <S.InputRow $columns="216px 216px">
            <S.Field>
              <S.Label>선택 자격증</S.Label>

              <S.Select
                value={selectedCertificateName}
                onChange={(e) => setSelectedCertificateName(e.target.value)}
              >
                {certificateList.map((certificate) => (
                  <option key={certificate.name} value={certificate.name}>
                    {certificate.name}
                  </option>
                ))}
              </S.Select>
            </S.Field>

            <S.Field>
              <S.Label>취득일자</S.Label>
              <S.Input value={selectedCertificate.date} readOnly />
            </S.Field>
          </S.InputRow>
        </S.SelectedCertificateCard>
      </S.ConfirmSection>

      <S.ConfirmSection>
        <S.ConfirmSectionTitle>신청자 정보 확인</S.ConfirmSectionTitle>
        <S.ConfirmSectionDesc>
          신청 전에 본인 정보를 확인해주세요.
        </S.ConfirmSectionDesc>

        <S.ApplicantCard>
          <S.InputRow $columns="1fr 1fr 1fr">
            <S.Field>
              <S.Label>이름</S.Label>
              <S.Input placeholder="홍길동" />
            </S.Field>

            <S.Field>
              <S.Label>이메일</S.Label>
              <S.Input placeholder="user123@gmail.com" />
            </S.Field>

            <S.Field>
              <S.Label>전화번호</S.Label>
              <S.Input placeholder="010-1234-5678" />
            </S.Field>
          </S.InputRow>
        </S.ApplicantCard>
      </S.ConfirmSection>

      <S.ConfirmSection>
        <S.ConfirmSectionTitle>수령 정보 입력</S.ConfirmSectionTitle>
        <S.ConfirmSectionDesc>
          실물 자격증을 받을 정보를 입력하세요.
        </S.ConfirmSectionDesc>

        <S.DeliveryCard>
          <S.AddressSearchRow>
            <S.Field>
              <S.Label>수령 방법</S.Label>
              <S.Select defaultValue="우편수령">
                <option>우편수령</option>
                <option>인터넷 수령</option>
              </S.Select>
            </S.Field>

            <S.Field>
              <S.Label>우편번호</S.Label>
              <S.Input
                value={selectedAddress?.zipCode || ""}
                placeholder="06236"
                readOnly
              />
            </S.Field>

            <S.AddressButton type="button" onClick={handleAddressClick}>
              주소 검색
            </S.AddressButton>
          </S.AddressSearchRow>

          <S.AddressField>
            <S.Label>주소</S.Label>
            <S.Input
              value={
                selectedAddress
                  ? `${selectedAddress.roadAddress} ${selectedAddress.building}`
                  : ""
              }
              placeholder="서울특별시 강남구 테헤란로 123"
              readOnly
            />
          </S.AddressField>

          <S.AddressField>
            <S.Label>상세 주소</S.Label>
            <S.Input
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
              placeholder="101동 1203호"
            />
          </S.AddressField>
        </S.DeliveryCard>
      </S.ConfirmSection>

      <S.ConfirmSection>
        <S.ConfirmSectionTitle>신청 전 확인사항</S.ConfirmSectionTitle>

        <S.NoticeCard>
          <S.NoticeText>
            · 신청 후 상태는 ‘미신청 → 신청 대기 → 신청 완료’ 순으로 변경됩니다.
          </S.NoticeText>
          <S.NoticeText>
            · 입력한 주소 정보가 정확해야 정상적으로 수령할 수 있습니다.
          </S.NoticeText>
          <S.NoticeText>
            · 발급 일정은 내부 처리 상황에 따라 달라질 수 있습니다.
          </S.NoticeText>
        </S.NoticeCard>
      </S.ConfirmSection>

      <S.ConfirmSection>
        <S.ConfirmSectionTitle>동의 및 확인</S.ConfirmSectionTitle>

        <S.AgreeCard>
          <S.AgreeRow>
            <S.AgreeInput
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            입력한 정보를 확인했으며, 실물 자격증 신청 절차와 안내사항을 이해했습니다.
          </S.AgreeRow>
        </S.AgreeCard>
      </S.ConfirmSection>

      <S.ButtonArea>
        <S.CancelButton type="button" onClick={handleCancelClick}>
          취소
        </S.CancelButton>

        <S.SubmitButton type="button" onClick={handleSubmitClick}>
          신청 완료
        </S.SubmitButton>
      </S.ButtonArea>
    </S.ConfirmWrapper>
  );
};

export default MyPageCertificateConfirmComponent;