import styled from "styled-components";
import theme from "../../styles/theme";
import MyPageTabMenu from "./MyPageTabMenu";
import ProfileCard from "./components/ProfileCard";
import BookmarkList from "./components/BookmarkList";
import FollowList from "./components/FollowList";
import ActivityCard from "./components/ActivityCard";
import StudyStatusCard from "./components/StudyStatusCard";
import AttendanceCard from "./components/AttendanceCard";
import MypostList from "./components/MypostList";
import QuickMenuCard from "./components/QuickMenuCard";

const { GRAYSCALE, FONT_SIZE, FONT_WEIGHT } = theme;

/* 전체 페이지 배경 */
const Page = styled.div`
  min-height: 100vh;
  background-color: #f7f7fb;
`;

/* 중앙 컨텐츠 영역 */
const Inner = styled.div`
  width: 1316px;
  margin: 0 auto;
  padding-top: 36px;
  padding-bottom: 120px;
`;

/* 좌우 레이아웃 */
const Layout = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 26px;
`;

/* 왼쪽 메인 영역 */
const LeftArea = styled.div`
  width: 984px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 오른쪽 사이드 영역 */
const RightArea = styled.div`
  width: 312px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 회원 탈퇴 */
const WithdrawButton = styled.button`
  align-self: flex-end;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.light};
  color: ${GRAYSCALE[9]};
`;

const MyPageComponent = () => {
  return (
    <Page>
      <Inner>
        <MyPageTabMenu />

        <Layout>
          <LeftArea>
            <ProfileCard />
            <MypostList />
            <BookmarkList />
            <FollowList />

            {/* 회원 탈퇴 API / 탈퇴 API 연결 필요 */}
            <WithdrawButton>회원탈퇴</WithdrawButton>
          </LeftArea>

          <RightArea>
            <ActivityCard />
            <StudyStatusCard />
            <AttendanceCard />
            <QuickMenuCard />
          </RightArea>
        </Layout>
      </Inner>
    </Page>
  );
};

export default MyPageComponent;