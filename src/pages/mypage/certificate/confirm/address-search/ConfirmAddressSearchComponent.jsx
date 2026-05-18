import React, { useState } from "react";

import S from "./style";

const addressList = [
  {
    zipCode: "06236",
    roadAddress: "서울특별시 강남구 테헤란로 123",
    building: "이음빌딩",
    jibunAddress: "서울특별시 강남구 역삼동 123-45",
  },
  {
    zipCode: "06134",
    roadAddress: "서울특별시 강남구 테헤란로 152",
    building: "강남파이낸스센터",
    jibunAddress: "서울특별시 강남구 역삼동 737",
  },
  {
    zipCode: "06242",
    roadAddress: "서울특별시 강남구 테헤란로 210",
    building: "역삼 센터타워",
    jibunAddress: "서울특별시 강남구 역삼동 701",
  },
  {
    zipCode: "06229",
    roadAddress: "서울특별시 강남구 테헤란로 301",
    building: "테헤란타워",
    jibunAddress: "서울특별시 강남구 역삼동 825-20",
  },
];

const ConfirmAddressSearchComponent = ({ onCancel, onConfirm }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleConfirmClick = () => {
    if (!selectedAddress) {
      alert("주소를 선택해주세요.");
      return;
    }

    onConfirm(selectedAddress);
  };

  return (
    <S.AddressWrapper>
      <S.AddressTitle>주소 검색</S.AddressTitle>

      <S.AddressDesc>
        도로명, 건물명 또는 지번을 입력해 주소를 검색하세요.
      </S.AddressDesc>

      <S.AddressCard>
        <S.SearchArea>
          <S.SearchInput
            type="text"
            placeholder="예: 테헤란로 123 / 강남구 역삼동"
          />

          <S.SearchButton type="button">검색</S.SearchButton>
        </S.SearchArea>

        <S.SearchGuideBox>
          <S.SearchGuideGroup>
            <S.SearchGuideTitle>검색 팁</S.SearchGuideTitle>
            <S.SearchGuideText>
              · 도로명 + 건물번호, 건물명, 지번으로 검색할 수 있어요.
            </S.SearchGuideText>
          </S.SearchGuideGroup>

          <S.SearchGuideExample>
            · 예: 테헤란로 123 / 이음빌딩 / 역삼동 123-45
          </S.SearchGuideExample>
        </S.SearchGuideBox>

        <S.ResultTop>
          <S.ResultTitle>검색 결과</S.ResultTitle>
          <S.ResultCount>총 4건</S.ResultCount>
        </S.ResultTop>

        <S.ResultHeader>
          <S.ResultHeaderText>우편번호</S.ResultHeaderText>
          <S.ResultHeaderText>도로명 주소</S.ResultHeaderText>
          <S.ResultHeaderText>지번 주소</S.ResultHeaderText>
          <S.ResultHeaderText>선택</S.ResultHeaderText>
        </S.ResultHeader>

        {addressList.map((address) => {
          const isSelected = selectedAddress?.zipCode === address.zipCode;

          return (
            <S.ResultRow key={address.zipCode}>
              <S.ZipCodeText>{address.zipCode}</S.ZipCodeText>

              <S.RoadAddress>
                <S.AddressText>{address.roadAddress}</S.AddressText>
                <S.AddressText>{address.building}</S.AddressText>
              </S.RoadAddress>

              <S.AddressText>{address.jibunAddress}</S.AddressText>

              <S.SelectButtonWrap>
                <S.SelectButton
                  type="button"
                  $selected={isSelected}
                  onClick={() => setSelectedAddress(address)}
                >
                  선택
                </S.SelectButton>
              </S.SelectButtonWrap>
            </S.ResultRow>
          );
        })}

        <S.BottomGuideBox>
          <S.BottomGuideTitle>선택 안내</S.BottomGuideTitle>
          <S.BottomGuideText>
            원하는 주소의 ‘선택’ 버튼을 누르면 신청 페이지의 주소 입력란에 자동으로 반영됩니다.
            <br />
            상세 주소는 주소 선택 후 직접 입력해주세요.
          </S.BottomGuideText>
        </S.BottomGuideBox>

        <S.AddressButtonArea>
          <S.CancelButton type="button" onClick={onCancel}>
            닫기
          </S.CancelButton>

          <S.ConfirmButton type="button" onClick={handleConfirmClick}>
            확인
          </S.ConfirmButton>
        </S.AddressButtonArea>
      </S.AddressCard>
    </S.AddressWrapper>
  );
};

export default ConfirmAddressSearchComponent;