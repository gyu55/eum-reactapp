import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Thumbnail } from "../../postComponents/postListCardStyle";
import postDefaultProfile from "../../../assets/post_default_profile.png";
import * as S from "./relatedPostCardStyle";

const defaultPostIcon =
  "https://www.figma.com/api/mcp/asset/020e0f66-1d95-461e-9604-907bd4d5c27d";

const RelatedPostCard = ({
  icon = defaultPostIcon,
  title = "관련 게시글",
  description = "헷갈리는 것만 모았어요",
  likes = 1,
  comments = 1,
  onClick,
}) => {
  return (
    <S.Wrapper onClick={onClick}>
      {/* <IconBox>
        <img src={icon} alt="" />
      </IconBox> */}
      <Thumbnail $size="42px" $radius="8px">
        <img src={postDefaultProfile} alt="" />
      </Thumbnail>
      <S.TextArea>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDesc>{description}</S.PostDesc>
        <S.StatsRow>
          <S.StatItem>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likes}</span>
          </S.StatItem>
          <S.StatItem>
            <FontAwesomeIcon icon={faCommentDots} />
            <span>{comments}</span>
          </S.StatItem>
        </S.StatsRow>
      </S.TextArea>
    </S.Wrapper>
  );
};

export default RelatedPostCard;
