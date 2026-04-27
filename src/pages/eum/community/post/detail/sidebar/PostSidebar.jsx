// import React from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import RelatedPostCard from "./RelatedPostCard";
// import NoticeItem from "./NoticeItem";
// import theme from "../../styles/theme";
// import { FONT_FAMILY, SURFACE, RADIUS, LAYOUT } from "../../constants";

import styled from "styled-components";
import theme from "../../../../../../styles/theme";
import { FONT_FAMILY, LAYOUT, RADIUS, SURFACE } from "../../../constants";
import { useNavigate } from "react-router-dom";
import NoticeItem from "./NoticeItem";
import RelatedPostCard from "./RelatedPostCard";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

const authorProfileImg =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";
const defaultPostIcon =
  "https://www.figma.com/api/mcp/asset/020e0f66-1d95-461e-9604-907bd4d5c27d";

/* ── Layout ── */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${LAYOUT.sidebarWidth};
  flex-shrink: 0;
`;

/* ── Back Button ── */
const BackButton = styled.button`
  background: ${SURFACE.card};
  border: 2px solid ${GRAYSCALE[8]};
  border-radius: ${RADIUS.button};
  padding: 14px 10px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: ${PALETTE.primary.main};
    color: ${PALETTE.primary.main};
  }
`;

/* ── Card base ── */
const Card = styled.div`
  background: ${SURFACE.card};
  border-radius: ${RADIUS.card};
  width: 100%;
`;

/* ── Author Info Card ── */
const AuthorCard = styled(Card)`
  padding: 19px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`;

const SectionTitle = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${GRAYSCALE[8]};
`;

const AuthorProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const AuthorAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${RADIUS.button};
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

const LevelBadge = styled.span`
  background: ${PALETTE.primary.extraLight};
  color: ${PALETTE.primary.main};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  letter-spacing: -0.24px;
  line-height: 20px;
  padding: 4px 12px;
  border-radius: ${RADIUS.pill};
  white-space: nowrap;
`;

const StatsRow = styled.div`
  background: ${SURFACE.section};
  border-radius: ${RADIUS.button};
  padding: 8px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const StatValue = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  color: ${PALETTE.primary.main};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

const StatLabel = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  text-align: center;
`;

const OutlineButton = styled.button`
  background: ${SURFACE.card};
  border: 2px solid ${PALETTE.primary.main};
  border-radius: ${RADIUS.button};
  padding: 10px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${PALETTE.primary.main};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: ${PALETTE.primary.extraLight};
  }
`;

const FilledButton = styled.button`
  background: ${PALETTE.primary.main};
  border: none;
  border-radius: ${RADIUS.button};
  padding: 10px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${PALETTE.white};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: ${PALETTE.primary.dark};
  }
`;

/* ── Related Posts Card ── */
const RelatedCard = styled(Card)`
  padding: 17px 24px 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ── Notice Card ── */
const NoticeCard = styled(Card)`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NoticeTitleText = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  margin: 0;
  width: 100%;
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

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
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}>← 목록으로 돌아가기</BackButton>

      <AuthorCard>
        <SectionHeader>
          <SectionTitle>작성자 정보</SectionTitle>
          <Divider />
        </SectionHeader>

        <AuthorProfileBlock>
          <AuthorAvatar src={authorAvatar} alt={authorName} />
          <AuthorName>{authorName}</AuthorName>
          <LevelBadge>{authorLevel}</LevelBadge>
        </AuthorProfileBlock>

        <StatsRow>
          <StatItem>
            <StatValue>{authorPosts}</StatValue>
            <StatLabel>게시글</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{authorLikes}</StatValue>
            <StatLabel>좋아요</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{authorStreak}</StatValue>
            <StatLabel>연속학습</StatLabel>
          </StatItem>
        </StatsRow>

        <OutlineButton>+ 팔로우</OutlineButton>
        <FilledButton>해당 회원과 1:1 채팅 시작</FilledButton>
      </AuthorCard>

      <RelatedCard>
        <SectionTitle>관련 게시글</SectionTitle>
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
      </RelatedCard>

      <NoticeCard>
        <NoticeTitleText>공지사항</NoticeTitleText>
        <NoticeList>
          {notices.map((notice) => (
            <NoticeItem
              key={notice.id}
              title={notice.title}
              date={notice.date}
            />
          ))}
        </NoticeList>
      </NoticeCard>
    </Wrapper>
  );
};

export default PostSidebar;
