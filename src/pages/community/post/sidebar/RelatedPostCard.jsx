import styled from "styled-components";
import theme from "../../../../styles/theme";
import { FONT_FAMILY, SURFACE } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Thumbnail } from "../postComponents/postListCardStyle";
import postDefaultProfile from "../../assets/post_default_profile.png";

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
      {/* <IconBox>
        <img src={icon} alt="" />
      </IconBox> */}
      <Thumbnail $size="42px" $radius="8px">
        <img src={postDefaultProfile} alt="" />
      </Thumbnail>
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
