import React from "react";
import { Outlet } from "react-router-dom";

import MyPageCertificateGuideComponent from "./MyPageCertificateGuideComponent";

const MyPageCertificateGuideContainer = () => {
  return (
    <>
      <MyPageCertificateGuideComponent />
      <Outlet />
    </>
  );
};

export default MyPageCertificateGuideContainer;