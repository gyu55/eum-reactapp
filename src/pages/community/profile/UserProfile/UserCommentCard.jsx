import React from "react";
import * as S from "./userCommentCardStyle";
import { Divider } from "../../communityStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const UserCommentCard = ({
  userNickname,
  userProfile,
  commentContent,
  commentCreateAt,
  commentLikeCount,
  commentReplyCount,
  postId,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <S.UserCommentWrapper onClick={() => navigate(`/community/post/${postId}`)}>
        <S.UserCommentMid>
          <S.UserCommentProfile src={userProfile} alt={userNickname} />
          <S.UserCommentTitleAndDetail>
            <S.UserCommentWriter>{userNickname}</S.UserCommentWriter>
            <S.UserCommentDetail>{commentContent}</S.UserCommentDetail>
          </S.UserCommentTitleAndDetail>
        </S.UserCommentMid>

        <Divider />

        <S.UserCommentStateRow>
          <S.UserCommentCreateAt>
            {formatDate(commentCreateAt)}
          </S.UserCommentCreateAt>

          <S.ReactionsRow>
            <S.ReactionItem>
              <FontAwesomeIcon icon={faHeart} />
              <span>{commentLikeCount}</span>
            </S.ReactionItem>
            <S.ReactionItem>
              <FontAwesomeIcon icon={faCommentDots} />
              <span>{commentReplyCount}</span>
            </S.ReactionItem>
          </S.ReactionsRow>
        </S.UserCommentStateRow>
      </S.UserCommentWrapper>
    </div>
  );
};

export default UserCommentCard;
