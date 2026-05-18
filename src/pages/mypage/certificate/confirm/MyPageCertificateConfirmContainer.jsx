import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import MyPageCertificateConfirmComponent from "./MyPageCertificateConfirmComponent";

const MyPageCertificateConfirmContainer = () => {
  const location = useLocation();

  const isConfirmMain =
    location.pathname === "/mypage/certificate/confirm";

  return (
    <>
      {isConfirmMain ? (
        <MyPageCertificateConfirmComponent />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default MyPageCertificateConfirmContainer;