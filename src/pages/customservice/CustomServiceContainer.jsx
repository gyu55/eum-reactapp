import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import CustomServiceSidebar from "./CustomServiceSidebar";
import { BREADCRUMB_MAP } from "./constants";
import * as S from "./customServiceContainerStyles";

const CustomServiceContainer = () => {
  const location     = useLocation();
  const currentLabel = BREADCRUMB_MAP[location.pathname] || "고객지원";

  return (
    <S.Page>
      <S.Main>
        <S.Breadcrumb>
          <S.BreadcrumbLink>홈</S.BreadcrumbLink>
          <S.BreadcrumbSep>&gt;</S.BreadcrumbSep>
          <S.BreadcrumbLink>고객지원</S.BreadcrumbLink>
          <S.BreadcrumbSep>&gt;</S.BreadcrumbSep>
          <S.BreadcrumbActive>{currentLabel}</S.BreadcrumbActive>
        </S.Breadcrumb>

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