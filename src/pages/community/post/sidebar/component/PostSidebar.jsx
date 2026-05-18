import { DEFAULT_IMAGES } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { AuthorAvatar } from "../../detail/postDetailStyle";
import NoticeItem from "./NoticeItem";
import RelatedPostCard from "../RelatedPostCard";
import {
  Wrapper,
  BackButton,
  AuthorCard,
  SectionHeader,
  SectionTitle,
  Divider,
  AuthorProfileBlock,
  AuthorName,
  LevelBadge,
  StatsRow,
  StatItem,
  StatValue,
  StatLabel,
  OutlineButton,
  FilledButton,
  RelatedCard,
  NoticeCard,
  NoticeTitleText,
  NoticeList,
} from "../postSideBarStyle";

const S = {
  Wrapper,
  BackButton,
  AuthorCard,
  SectionHeader,
  SectionTitle,
  Divider,
  AuthorProfileBlock,
  AuthorName,
  LevelBadge,
  StatsRow,
  StatItem,
  StatValue,
  StatLabel,
  OutlineButton,
  FilledButton,
  RelatedCard,
  NoticeCard,
  NoticeTitleText,
  NoticeList,
};

const authorProfileImg =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";
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
  authorName = "수어러버김지민",
  authorAvatar = authorProfileImg,
  authorLevel = "Lv.7 · 열공러",
  authorPosts = 42,
  authorLikes = 128,
  authorStreak = 30,
  relatedPosts = MOCK_RELATED_POSTS,
  notices = MOCK_NOTICES,
}) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.BackButton onClick={() => navigate(-1)}>
        ← 목록으로 돌아가기
      </S.BackButton>

      <S.AuthorCard>
        <S.SectionHeader>
          <S.SectionTitle>작성자 정보</S.SectionTitle>
          <S.Divider />
        </S.SectionHeader>

        <S.AuthorProfileBlock>
          {/* 유저 아바타 */}
          <AuthorAvatar
            size="64px"
            border-radius="12px"
            src={authorAvatar}
            alt={authorName}
            onError={(e) => {
              e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
            }}
          />
          <S.AuthorName>{authorName}</S.AuthorName>
          <S.LevelBadge>{authorLevel}</S.LevelBadge>
        </S.AuthorProfileBlock>

        <S.StatsRow>
          <S.StatItem>
            <S.StatValue>{authorPosts}</S.StatValue>
            <S.StatLabel>게시글</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatValue>{authorLikes}</S.StatValue>
            <S.StatLabel>좋아요</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatValue>{authorStreak}</S.StatValue>
            <S.StatLabel>연속학습</S.StatLabel>
          </S.StatItem>
        </S.StatsRow>

        <S.OutlineButton>+ 팔로우</S.OutlineButton>
        <S.FilledButton>해당 회원과 1:1 채팅 시작</S.FilledButton>
      </S.AuthorCard>

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

      <S.NoticeCard>
        <S.NoticeTitleText>공지사항</S.NoticeTitleText>
        <S.NoticeList>
          {notices.map((notice) => (
            <NoticeItem
              key={notice.id}
              title={notice.title}
              date={notice.date}
            />
          ))}
        </S.NoticeList>
      </S.NoticeCard>
    </S.Wrapper>
  );
};

export default PostSidebar;
