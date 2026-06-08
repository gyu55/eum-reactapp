import React from "react";
import { ColumnBlock } from "../communityStyle";
import SideMyProfile from "./SideMyProfile";
import SideUserProfile from "./SideUserProfile";
import SideNotice from "./SideNotice";

const MainRightSide = () => {
  return (
    <div>
      <ColumnBlock width="312px">
        <SideMyProfile />
        <SideUserProfile />
        <SideNotice />
      </ColumnBlock>
    </div>
  );
};

export default MainRightSide;
