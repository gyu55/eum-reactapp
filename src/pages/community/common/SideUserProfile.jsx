import React from "react";
import { ColumnBlock } from "../communityStyle";
import { H11Bold, H12Regular } from "../communityTextStyle";

// 유저 프로필
const SideUserProfile = () => {
  return (
    <div>
      <ColumnBlock gap="2px">
        <H11Bold>유저 프로필</H11Bold>
        <H12Regular>현재 활동 중</H12Regular>
      </ColumnBlock>
    </div>
  );
};

export default SideUserProfile;
