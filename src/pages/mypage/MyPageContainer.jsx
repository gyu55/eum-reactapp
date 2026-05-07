import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MyPageTabMenu from "./MyPageTabMenu";
import MyPageComponent from "./MyPageComponent";

import { Page, Inner } from "./style";

const MyPageContainer = () => {
  const { pathname } = useLocation();

  const isMyPageMain = pathname === "/mypage";

  return (
    <Page>
      <Inner>
        <MyPageTabMenu />

        {isMyPageMain ? <MyPageComponent /> : <Outlet />}
      </Inner>
    </Page>
  );
};

export default MyPageContainer;