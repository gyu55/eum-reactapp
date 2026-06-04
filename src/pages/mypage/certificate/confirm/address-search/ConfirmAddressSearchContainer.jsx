import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ConfirmAddressSearchComponent from "./ConfirmAddressSearchComponent";

const ConfirmAddressSearchContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const previousState = location.state || {};

  // 주소검색 취소 시 신청 화면으로 돌아가기
  const handleCancel = () => {
    navigate("/mypage/certificate/confirm", {
      state: previousState,
    });
  };

  // 선택한 주소를 신청 화면으로 전달
  const handleConfirm = (selectedAddress) => {
    navigate("/mypage/certificate/confirm", {
      state: {
        ...previousState,
        selectedAddress,
      },
    });
  };

  return (
    <ConfirmAddressSearchComponent
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
};

export default ConfirmAddressSearchContainer;