// import React from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faCommentDots } from "@fortawesome/free-solid-svg-icons";
// import theme from "../../styles/theme";
// import { FONT_FAMILY, SURFACE, RADIUS } from "../../constants";

import styled from "styled-components";
import theme from "../../../../../styles/theme";
import { FONT_FAMILY, RADIUS, SURFACE } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";

const { GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

const defaultPostIcon =
  "https://www.figma.com/api/mcp/asset/020e0f66-1d95-461e-9604-907bd4d5c27d";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-top: 1px solid ${GRAYSCALE[8]};
  background: ${SURFACE.card};
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const IconBox = styled.div`
  background: ${SURFACE.section};
  border-radius: ${RADIUS.input};
  padding: 7px;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 28px;
    height: 28px;
    object-fit: cover;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

const PostTitle = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  word-break: keep-all;
`;

const PostDesc = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: ${FONT_SIZE.h11};
    color: ${GRAYSCALE[9]};
  }

  span {
    font-family: ${FONT_FAMILY};
    font-weight: ${FONT_WEIGHT.regular};
    font-size: ${FONT_SIZE.h11};
    color: ${TEXT_COLOR.basic};
    white-space: nowrap;
  }
`;

const RelatedPostCard = ({
  icon = defaultPostIcon,
  title = "관련 게시글",
  description = "헷갈리는 것만 모았어요",
  likes = 1,
  comments = 1,
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick}>
      <IconBox>
        <img src={icon} alt="" />
      </IconBox>
      <TextArea>
        <PostTitle>{title}</PostTitle>
        <PostDesc>{description}</PostDesc>
        <StatsRow>
          <StatItem>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likes}</span>
          </StatItem>
          <StatItem>
            <FontAwesomeIcon icon={faCommentDots} />
            <span>{comments}</span>
          </StatItem>
        </StatsRow>
      </TextArea>
    </Wrapper>
  );
};

export default RelatedPostCard;
