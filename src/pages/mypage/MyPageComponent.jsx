import ProfileCard from "./components/ProfileCard";
import BookmarkList from "./components/BookmarkList";
import FollowList from "./components/FollowList";
import ActivityCard from "./components/ActivityCard";
import StudyStatusCard from "./components/StudyStatusCard";
import AttendanceCard from "./components/AttendanceCard";
import MypostList from "./components/MypostList";
import QuickMenuCard from "./components/QuickMenuCard";

import {
  Layout,
  LeftArea,
  RightArea,
  WithdrawButton,
} from "./style";

const MyPageComponent = () => {
  return (
    <Layout>
      <LeftArea>
        <ProfileCard />
        <MypostList />
        <BookmarkList />
        <FollowList />

        <WithdrawButton>회원탈퇴</WithdrawButton>
      </LeftArea>

      <RightArea>
        <ActivityCard />
        <StudyStatusCard />
        <AttendanceCard />
        <QuickMenuCard />
      </RightArea>
    </Layout>
  );
};

export default MyPageComponent;