import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ContentArea, Page } from "./communityStyle";
import MainRightSide from "./common/MainRightSide";
import { ChatProvider } from "./context/ChatContext";

const users = [
  { userId: 1, userName: "홍길동" },
  { userId: 2, userName: "장보고" },
];

// 커뮤니티 가장 메인 영역
const CommunityContainer = () => {
  return (
    <ChatProvider>
      <>
        <div>
          <Page>
            <Link to={"/community/chat"}>실시간 채팅</Link>
            <Link to={"/community/post"}>게시글</Link>
            <ContentArea>
              {/* 좌측 메인 */}
              <Outlet />

              {/* 우측 사이드 바 */}
              <MainRightSide />
            </ContentArea>
          </Page>
        </div>
        <div>
          지금 활동 중인 멤버
          {users.map((user) => (
            <div key={user.userId}>
              <Link to={`/community/profile/${user.userId}`}>
                {user.userName}
              </Link>
            </div>
          ))}
        </div>
      </>
    </ChatProvider>
  );
};

export default CommunityContainer;
