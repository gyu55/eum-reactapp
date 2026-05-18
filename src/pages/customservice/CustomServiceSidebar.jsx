import React from "react";
import * as S from "./customServiceContainerStyles";
import CustomServiceTabMenu from "./CustomServiceTabMenu";

const CustomServiceSidebar = () => {
  return (
    <S.Sidebar>
      <CustomServiceTabMenu />
    </S.Sidebar>
  );
};

export default CustomServiceSidebar;
