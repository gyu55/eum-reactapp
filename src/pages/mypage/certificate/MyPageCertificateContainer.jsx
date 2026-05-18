import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import MyPageCertificateComponent from "./MyPageCertificateComponent";

const MyPageCertificateContainer = () => {
  const location = useLocation();

  const isCertificateMain =
    location.pathname === "/mypage/certificate";

  return (
    <>
      {isCertificateMain ? (
        <MyPageCertificateComponent />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default MyPageCertificateContainer;