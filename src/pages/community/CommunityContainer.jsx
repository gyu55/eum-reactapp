import React from "react";
import { Outlet } from "react-router-dom";
import { Page, ContentArea } from "./communityStyle";
import MainRightSide from "./common/MainRightSide";
import { ChatProvider } from "./context/ChatContext";

const S = {
  Page,
  ContentArea,
};

// 커뮤니티 가장 메인 영역
const CommunityContainer = () => {
  return (
    <ChatProvider>
      <>
        <div>
          <S.Page>
            <S.ContentArea>
              {/* 좌측 메인 */}
              <Outlet />

              {/* 우측 사이드 바 */}
              <MainRightSide />
            </S.ContentArea>
          </S.Page>
        </div>
      </>
    </ChatProvider>
  );
};

export default CommunityContainer;
