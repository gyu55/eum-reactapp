// import React, { useState } from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import theme from "../../styles/theme";
// import {
//   FONT_FAMILY,
//   SURFACE, TAG_ON_PRIMARY, ACCESSIBILITY,
//   PALETTE_EXT, RADIUS,
// } from "../../constants";

import styled from "styled-components";
import theme from "../../../../../../styles/theme";
import {
  ACCESSIBILITY,
  FONT_FAMILY,
  PALETTE_EXT,
  RADIUS,
  SURFACE,
  TAG_ON_PRIMARY,
} from "../../../constants";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

const authorProfileImg =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";
const reportIconImg =
  "https://www.figma.com/api/mcp/asset/3823b07b-8dff-47fb-9bc5-b1dacb0103e8";
const linkIconImg =
  "https://www.figma.com/api/mcp/asset/307137f6-4a5b-4f60-8e17-56fb9a225552";

/* ── Header ── */
const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${PALETTE.primary.main};
  padding: 15px 52px;
  border-radius: ${RADIUS.card} ${RADIUS.card} 0 0;
`;

const CategoryTag = styled.span`
  background: ${TAG_ON_PRIMARY.bg};
  border: 1px solid ${TAG_ON_PRIMARY.border};
  color: ${PALETTE.white};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  letter-spacing: -0.24px;
  line-height: 20px;
  padding: 4px 16px;
  border-radius: ${RADIUS.pill};
  white-space: nowrap;
`;

const BreadcrumbPath = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${TAG_ON_PRIMARY.text};
  letter-spacing: -0.24px;
  margin: 0;
  white-space: nowrap;
`;

/* ── Body wrapper ── */
const BodyWrapper = styled.div`
  background: ${SURFACE.card};
  border-radius: 0 0 ${RADIUS.card} ${RADIUS.card};
  padding: 44px 52px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* ── Title ── */
const PostTitle = styled.h1`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h7};
  color: ${TEXT_COLOR.basic};
  margin: 0;
  word-break: keep-all;
`;

/* ── Author row ── */
const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 44px;
`;

const AuthorAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: ${RADIUS.sm};
  object-fit: cover;
  flex-shrink: 0;
`;

const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AuthorName = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  color: ${TEXT_COLOR.basic};
  margin: 0;
  white-space: nowrap;
`;

const AuthorSubRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LevelBadge = styled.span`
  background: ${PALETTE.primary.extraLight};
  color: ${PALETTE.primary.main};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h12};
  padding: 2px 6px;
  border-radius: ${RADIUS.pill};
  white-space: nowrap;
`;

const MetaText = styled.span`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.24px;
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${GRAYSCALE[8]};
`;

/* ── Post body text ── */
const BodyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Paragraph = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.28px;
  line-height: 22px;
  margin: 0;
`;

const HighlightWord = styled.span`
  background: ${PALETTE.primary.extraLight};
  color: ${PALETTE.primary.main};
  border-radius: 4px;
  padding: 0 2px;
`;

const BlockQuote = styled.div`
  border-left: 6px solid ${PALETTE_EXT.primaryMid};
  background: ${PALETTE.primary.extraLight};
  border-radius: 4px 8px 8px 4px;
  padding: 9px 13px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.28px;
  line-height: 22px;
`;

const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 547px;
  background: ${PALETTE.primary.extraLight};
  border: 2px dashed ${PALETTE_EXT.primaryMid};
  border-radius: 16px;
  padding: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 38px;
  box-sizing: border-box;
`;

const EmojiItem = styled.span`
  font-size: 52px;
  flex-shrink: 0;
`;

const ImageCaption = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.24px;
  line-height: 20px;
  text-align: center;
  margin: 0;
`;

/* ── Tags ── */
const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding-top: 12px;
`;

const Tag = styled.span`
  background: ${SURFACE.card};
  border: 1px solid ${GRAYSCALE[8]};
  color: ${TEXT_COLOR.basic};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  letter-spacing: -0.32px;
  line-height: 24px;
  padding: 16px 30px;
  border-radius: ${RADIUS.pill};
  white-space: nowrap;
  cursor: pointer;
`;

/* ── Accessibility Tools ── */
const AccessibilityBox = styled.div`
  width: 100%;
  border: 1px solid ${PALETTE.secondary.main};
  border-radius: 16px;
  background: ${ACCESSIBILITY.gradient};
  height: 119px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const AccessibilityLabel = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h8};
  color: ${PALETTE.primary.main};
  letter-spacing: -0.4px;
  margin: 0;
  position: absolute;
  left: 35px;
  white-space: nowrap;
`;

const AccessBtn = styled.button`
  position: absolute;
  top: 36px;
  left: ${({ pos }) => pos};
  padding: 14px 80px;
  border-radius: ${RADIUS.input};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h9};
  letter-spacing: -0.32px;
  line-height: 24px;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ variant }) =>
    variant === "blue" ? PALETTE.primary.main : ACCESSIBILITY.readBg};
  color: ${({ variant }) =>
    variant === "blue" ? PALETTE.white : PALETTE.secondary.main};
  border: ${({ variant }) =>
    variant === "blue" ? "none" : `1px solid ${ACCESSIBILITY.readColor}`};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

/* ── Like / Share / Report ── */
const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 275px;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    font-size: ${FONT_SIZE.h9};
    color: ${({ liked }) => (liked ? PALETTE.red : TEXT_COLOR.basic)};
    transition: color 0.2s;
  }

  span {
    font-family: ${FONT_FAMILY};
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.h8};
    color: ${TEXT_COLOR.basic};
    letter-spacing: -0.4px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${RADIUS.button};
  background: ${SURFACE.card};
  border: 2px solid ${({ danger }) => (danger ? PALETTE.red : GRAYSCALE[8])};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ danger }) =>
      danger ? PALETTE_EXT.redHover : GRAYSCALE[9]};
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  svg {
    font-size: ${FONT_SIZE.h9};
    color: ${({ danger }) => (danger ? PALETTE.red : TEXT_COLOR.basic)};
  }
`;

const PostContent = ({
  category = "학습 인증",
  breadcrumb = "이음 커뮤니티 › 학습 인증 게시판",
  title = "수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌",
  authorName = "수어러버김지민",
  authorLevel = "Lv.7",
  authorAvatar = authorProfileImg,
  postDate = "2025.03.08 (오늘)",
  views = 324,
  likes = 42,
  tags = ["# 수어기초", "# 알파벳", "# 태그1", "# 태그2"],
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div>
      <PostHeader>
        <CategoryTag>{category}</CategoryTag>
        <BreadcrumbPath>{breadcrumb}</BreadcrumbPath>
      </PostHeader>

      <BodyWrapper>
        <PostTitle>{title}</PostTitle>

        <AuthorRow>
          <AuthorAvatar src={authorAvatar} alt={authorName} />
          <AuthorMeta>
            <AuthorName>{authorName}</AuthorName>
            <AuthorSubRow>
              <LevelBadge>{authorLevel}</LevelBadge>
              <MetaText>
                · {postDate} · 조회 {views}
              </MetaText>
            </AuthorSubRow>
          </AuthorMeta>
        </AuthorRow>

        <Divider />

        <BodyText>
          <Paragraph>안녕하세요! 이음 커뮤니티 여러분 😊</Paragraph>

          <Paragraph>
            드디어 제가 <HighlightWord>수어 알파벳 마스터</HighlightWord> 도전을
            완료했어요! 1달 전부터 시작해서 매일 꾸준히 연습한 결과를 오늘
            공유하려고 합니다.
          </Paragraph>

          <Paragraph>
            처음엔 정말 막막했어요. 손 모양 하나하나가 너무 헷갈리고, 특히
            비슷하게 생긴 ㄱ, ㄴ, ㄷ 같은 자음들은 진짜 무슨 차이인지 한참을
            봐야 했어요. 그런데 이음 앱의{" "}
            <HighlightWord>수형 연습 기능</HighlightWord> 을 사용하면서 카메라로
            직접 내 손을 인식하니까 훨씬 빨리 늘더라고요!
          </Paragraph>

          <BlockQuote>
            <p style={{ margin: 0 }}>
              "처음 2주는 그냥 인풋 기간이라고 생각하고 무조건 보기만 했어요.
            </p>
            <p style={{ margin: 0 }}>
              3주차부터 직접 따라 하면서 피드백 받으니 확실히 달랐어요."
            </p>
          </BlockQuote>

          <Paragraph>
            특히 제가 추천하는 방법은{" "}
            <HighlightWord>하루 15분, 같은 시간에 연습하기</HighlightWord> 예요.
            출근 전 아침 7시에 딱 알람 맞춰서 이음 앱 열고 오늘의 학습 하는 게
            습관이 됐어요. 한 달 동안 단 하루도 빠지지 않고 연속 30일 달성! 🎉
          </Paragraph>

          <Paragraph>
            아래에 제가 오늘 촬영한 수어 알파벳 영상 썸네일을 첨부했어요.
            <br />
            영상은 조만간 수어 영상 게시판에도 올릴 예정이에요. 다들 응원해
            주세요! 💪
          </Paragraph>

          <ImageArea>
            <ImageBox>
              <EmojiItem>🤟</EmojiItem>
              <EmojiItem>✌️</EmojiItem>
              <EmojiItem>👌</EmojiItem>
              <EmojiItem>🤙</EmojiItem>
              <EmojiItem>👍</EmojiItem>
            </ImageBox>
            <ImageCaption>
              수어 알파벳 연습 영상 스틸컷 (촬영: 2025.03.08)
            </ImageCaption>
          </ImageArea>
        </BodyText>

        <TagRow>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagRow>

        <AccessibilityBox>
          <AccessibilityLabel>접근성 도구</AccessibilityLabel>
          <AccessBtn variant="blue" pos="180px">
            수어로 보기
          </AccessBtn>
          <AccessBtn variant="green" pos="466px">
            글 읽어주기
          </AccessBtn>
        </AccessibilityBox>

        <ActionRow>
          <LikeButton liked={liked} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likeCount}</span>
          </LikeButton>
          <ActionButtons>
            <IconButton aria-label="링크 복사">
              <img src={linkIconImg} alt="링크" />
            </IconButton>
            <IconButton danger aria-label="게시글 신고">
              <img src={reportIconImg} alt="신고" />
            </IconButton>
          </ActionButtons>
        </ActionRow>
      </BodyWrapper>
    </div>
  );
};

export default PostContent;
