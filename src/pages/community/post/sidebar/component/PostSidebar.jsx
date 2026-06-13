import { useNavigate } from "react-router-dom";
import PostSideUserProfile from "./postSideUserProfile";
import { Wrapper, BackButton } from "../postSideBarStyle";
import SideNotice from "../../../common/SideNotice";
import SidePopularPosts from "./SidePopularPosts";

const S = {
  Wrapper,
  BackButton,
};

const PostSidebar = ({ userId }) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.BackButton onClick={() => navigate(-1)}>
        ← 목록으로 돌아가기
      </S.BackButton>

      <PostSideUserProfile userId={userId} />

      <SidePopularPosts />

      <SideNotice />
    </S.Wrapper>
  );
};

export default PostSidebar;
