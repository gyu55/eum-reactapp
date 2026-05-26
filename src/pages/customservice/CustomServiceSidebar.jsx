import React from "react";
import CustomServiceTabMenu from "./CustomServiceTabMenu";
import * as S from "./customServiceContainerStyles";

const CustomServiceSidebar = () => {
  return (
    <S.Sidebar>
      <CustomServiceTabMenu />
    </S.Sidebar>
  );
};

export default CustomServiceSidebar;
