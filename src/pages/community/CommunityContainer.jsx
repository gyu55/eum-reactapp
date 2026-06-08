import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import * as S from "./communityStyle";
import MainRightSide from "./common/MainRightSide";
import CommunityHeader from "./common/CommunityHeader";
import SearchBoxComponent from "./common/SearchBoxComponent";

// 커뮤니티 가장 메인 영역
const CommunityContainer = () => {
  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <div>
        {/* 헤더 */}
        <CommunityHeader />
        <S.Page>
          <S.SearchBoxRow>
            <S.LeftSearchBlock>
              <SearchBoxComponent />
            </S.LeftSearchBlock>
          </S.SearchBoxRow>
          <S.ContentArea>
            {/* 좌측 메인 */}
            <Outlet />

            {/* 우측 사이드 바 */}
            <MainRightSide />
          </S.ContentArea>
        </S.Page>
      </div>
    </>
  );
};

export default CommunityContainer;
