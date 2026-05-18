import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import * as S from "./customServiceContainerStyles";
import CustomServiceSidebar from "./CustomServiceSidebar";

const BREADCRUMB_MAP = {
  "/customservice/notice":  "공지사항",
  "/customservice/inquire": "1:1 문의",
  "/customservice/result":  "문의 결과",
  "/customservice/privacy": "개인정보 처리방침",
};

const CustomServiceContainer = () => {
  const location = useLocation();
  const currentLabel = BREADCRUMB_MAP[location.pathname] || "고객지원";

  return (
    <S.Page>
      <S.Main>
        {/* 브레드크럼 */}
        <S.Breadcrumb>
          <S.BreadcrumbLink>홈</S.BreadcrumbLink>
          <S.BreadcrumbSep>&gt;</S.BreadcrumbSep>
          <S.BreadcrumbLink>고객지원</S.BreadcrumbLink>
          <S.BreadcrumbSep>&gt;</S.BreadcrumbSep>
          <S.BreadcrumbActive>{currentLabel}</S.BreadcrumbActive>
        </S.Breadcrumb>

        {/* 사이드바 + 콘텐츠 */}
        <S.ContentLayout>
          <CustomServiceSidebar />
          <S.ContentArea>
            <Outlet />
          </S.ContentArea>
        </S.ContentLayout>
      </S.Main>
    </S.Page>
  );
};

export default CustomServiceContainer;
