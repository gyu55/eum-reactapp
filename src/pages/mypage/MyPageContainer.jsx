import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import MyPageTabMenu from "./MyPageTabMenu";
import MyPageComponent from "./MyPageComponent";

import S from "./style";

const MyPageContainer = () => {
  const { pathname } = useLocation();

  const isMyPageMain = pathname === "/mypage";

  return (
    <S.Page>
      <S.Inner>
        <MyPageTabMenu />

        {isMyPageMain ? <MyPageComponent /> : <Outlet />}
      </S.Inner>
    </S.Page>
  );
};

export default MyPageContainer;