// import React from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faCommentDots } from "@fortawesome/free-solid-svg-icons";
// import theme from "../../styles/theme";
// import { FONT_FAMILY, FONT_SIZE_EXT, SURFACE, ACCESSIBILITY, RADIUS } from "../../constants";

import styled from "styled-components";
import theme from "../../../../../../styles/theme";
import {
  ACCESSIBILITY,
  FONT_FAMILY,
  FONT_SIZE_EXT,
  RADIUS,
  SURFACE,
} from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

const reportIconImg =
  "https://www.figma.com/api/mcp/asset/3823b07b-8dff-47fb-9bc5-b1dacb0103e8";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 0;
  background: ${SURFACE.card};
  padding-left: ${({ isReply }) => (isReply ? "56px" : "0")};
`;

const LeftArea = styled.div`
  display: flex;
  gap: 19px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${SURFACE.section};
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DefaultAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${PALETTE.primary.extraLight};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${FONT_SIZE_EXT.h8_5};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 0;
`;

const AuthorName = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${({ isAuthor }) =>
    isAuthor ? PALETTE.primary.main : TEXT_COLOR.basic};
  margin: 0;
`;

const CommentText = styled.div`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.28px;
  line-height: 22px;

  p {
    margin: 0;
  }
`;

const ReactionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  svg {
    font-size: ${FONT_SIZE.h11};
    color: ${({ active }) => (active ? PALETTE.primary.main : GRAYSCALE[9])};
  }

  span {
    font-family: ${FONT_FAMILY};
    font-weight: ${FONT_WEIGHT.regular};
    font-size: ${FONT_SIZE.h11};
    color: ${TEXT_COLOR.basic};
    white-space: nowrap;
  }
`;

const AccessibilityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const AccessBtn = styled.button`
  padding: 6px 16px;
  border-radius: ${RADIUS.sm};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  letter-spacing: -0.24px;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ variant }) =>
    variant === "blue" ? PALETTE.primary.extraLight : ACCESSIBILITY.readBg};
  color: ${({ variant }) =>
    variant === "blue" ? PALETTE.primary.main : ACCESSIBILITY.readColor};
  border: 1px solid
    ${({ variant }) =>
      variant === "blue" ? PALETTE.primary.main : ACCESSIBILITY.readColor};
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  width: 74px;
`;

const TimeText = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.24px;
  margin: 0;
  text-align: right;
`;

const ReportButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${RADIUS.button};
  background: ${SURFACE.card};
  border: 2px solid ${PALETTE.red};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;

const CommentItem = ({
  avatar = null,
  authorName = "사용자",
  isAuthor = false,
  isReply = false,
  text = "",
  lines = [],
  likes = 1,
  replies = 1,
  time = "방금 전",
  showAccessibility = true,
}) => {
  const displayLines = lines.length > 0 ? lines : text ? [text] : [];

  return (
    <Wrapper isReply={isReply}>
      <LeftArea>
        {avatar ? (
          <Avatar>
            <img src={avatar} alt={authorName} />
          </Avatar>
        ) : (
          <DefaultAvatar>👤</DefaultAvatar>
        )}
        <Body>
          <AuthorName isAuthor={isAuthor}>{authorName}</AuthorName>
          <CommentText>
            {displayLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </CommentText>
          <ReactionsRow>
            <ReactionItem>
              <FontAwesomeIcon icon={faHeart} />
              <span>{likes}</span>
            </ReactionItem>
            <ReactionItem>
              <FontAwesomeIcon icon={faCommentDots} />
              <span>{replies}</span>
            </ReactionItem>
          </ReactionsRow>
          {showAccessibility && (
            <AccessibilityRow>
              <AccessBtn variant="blue">수어로 보기</AccessBtn>
              <AccessBtn variant="green">글 읽어주기</AccessBtn>
            </AccessibilityRow>
          )}
        </Body>
      </LeftArea>
      <RightArea>
        <TimeText>{time}</TimeText>
        <ReportButton aria-label="댓글 신고">
          <img src={reportIconImg} alt="신고" />
        </ReportButton>
      </RightArea>
    </Wrapper>
  );
};

export default CommentItem;
