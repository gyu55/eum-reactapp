import React, { useState } from "react";

import S from "./style";

const getAddressValue = (address, keyList) => {
  for (const key of keyList) {
    if (address?.[key]) {
      return address[key];
    }
  }

  return "";
};

const ConfirmAddressSearchComponent = ({ onCancel, onConfirm }) => {
  const [keyword, setKeyword] = useState("");
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // 도로명주소 검색 API 조회
  const handleSearchClick = async () => {
    if (!keyword.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }

    try {
      setIsSearching(true);

      const response = await fetch(
        `http://localhost:10000/private/api/mypage/certificates/address-search?keyword=${encodeURIComponent(keyword.trim())}`,
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

      setAddressList(result.data || []);
      setSelectedAddress(null);
    } catch (error) {
      console.error(error);
      alert("주소 검색 중 오류가 발생했습니다.");
    } finally {
      setIsSearching(false);
    }
  };

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
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
            placeholder="예: 테헤란로 123 / 강남구 역삼동"
          />

          <S.SearchButton type="button" onClick={handleSearchClick}>
            {isSearching ? "검색 중" : "검색"}
          </S.SearchButton>
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
          <S.ResultCount>총 {addressList.length}건</S.ResultCount>
        </S.ResultTop>

        <S.ResultHeader>
          <S.ResultHeaderText>우편번호</S.ResultHeaderText>
          <S.ResultHeaderText>도로명 주소</S.ResultHeaderText>
          <S.ResultHeaderText>지번 주소</S.ResultHeaderText>
          <S.ResultHeaderText>선택</S.ResultHeaderText>
        </S.ResultHeader>

        {addressList.map((address) => {
          const zipCode = getAddressValue(address, ["zipCode", "zipNo", "postcode"]);
          const roadAddress = getAddressValue(address, ["roadAddress", "roadAddr"]);
          const buildingName = getAddressValue(address, ["building", "buildingName", "bdNm"]);
          const jibunAddress = getAddressValue(address, ["jibunAddress", "jibunAddr"]);
          const isSelected = selectedAddress === address;

          return (
            <S.ResultRow key={`${zipCode}-${roadAddress}`}>
              <S.ZipCodeText>{zipCode}</S.ZipCodeText>

              <S.RoadAddress>
                <S.AddressText>{roadAddress}</S.AddressText>
                {buildingName && (
                  <S.AddressText>{buildingName}</S.AddressText>
                )}
              </S.RoadAddress>

              <S.AddressText>{jibunAddress}</S.AddressText>

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
            원하는 주소의 선택 버튼을 누르면 신청 페이지의 주소 입력란에 자동으로 반영됩니다.
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