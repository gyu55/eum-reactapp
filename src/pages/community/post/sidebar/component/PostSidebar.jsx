import { useNavigate } from "react-router-dom";
import RelatedPostCard from "../RelatedPostCard";
import PostSideUserProfile from "./postSideUserProfile";
import {
  Wrapper,
  BackButton,
  SectionTitle,
  RelatedCard,
  NoticeCard,
  NoticeTitleText,
  NoticeList,
} from "../postSideBarStyle";
import SideNotice from "../../../common/SideNotice";

const S = {
  Wrapper,
  BackButton,
  SectionTitle,
  RelatedCard,
  NoticeCard,
  NoticeTitleText,
  NoticeList,
};

const defaultPostIcon =
  "https://www.figma.com/api/mcp/asset/020e0f66-1d95-461e-9604-907bd4d5c27d";

const MOCK_RELATED_POSTS = [
  {
    id: 1,
    title: "수어 자음 20개 한번에 정리!",
    description: "헷갈리는 것만 모았어요",
    likes: 1,
    comments: 1,
  },
  {
    id: 2,
    title: "연관 게시글 2",
    description: "헷갈리는 것만 모았어요",
    likes: 1,
    comments: 1,
  },
  {
    id: 3,
    title: "연관 게시글 3",
    description: "헷갈리는 것만 모았어요",
    likes: 1,
    comments: 1,
  },
  {
    id: 4,
    title: "연관 게시글 4",
    description: "헷갈리는 것만 모았어요",
    likes: 1,
    comments: 1,
  },
];

const MOCK_NOTICES = [
  { id: 1, title: "2025 수어 챌린지 이벤트 안내", date: "3/8" },
  { id: 2, title: "커뮤니티 이용 규칙 업데이트", date: "3/8" },
];

const PostSidebar = ({
  userId,
  relatedPosts = MOCK_RELATED_POSTS,
  notices = MOCK_NOTICES,
}) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.BackButton onClick={() => navigate(-1)}>
        ← 목록으로 돌아가기
      </S.BackButton>

      <PostSideUserProfile userId={userId} />

      <S.RelatedCard>
        <S.SectionTitle>관련 게시글</S.SectionTitle>
        {relatedPosts.map((post) => (
          <RelatedPostCard
            key={post.id}
            icon={post.icon || defaultPostIcon}
            title={post.title}
            description={post.description}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </S.RelatedCard>

      <SideNotice />
    </S.Wrapper>
  );
};

export default PostSidebar;
