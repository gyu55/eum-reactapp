import React from "react";
import { useNavigate } from "react-router-dom";

import ConfirmAddressSearchComponent from "./ConfirmAddressSearchComponent";

const ConfirmAddressSearchContainer = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/mypage/certificate");
  };

  const handleConfirm = (selectedAddress) => {
    navigate("/mypage/certificate/confirm", {
      state: {
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