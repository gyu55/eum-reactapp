import React from "react";
import { Outlet } from "react-router-dom";

import MyPageSettingComponent from "./MyPageSettingComponent";

const MyPageSettingContainer = () => {
  return (
    <>
      <MyPageSettingComponent />
      <Outlet />
    </>
  );
};

export default MyPageSettingContainer;