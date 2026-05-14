import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import { DEFAULT_IMAGES } from "../constants";
import {
  CommentItemWrapper,
  LeftArea,
  DefaultAvatar,
  Body,
  AuthorName,
  CommentText,
  ReactionsRow,
  ReactionItem,
  AccessibilityRow,
  AccessBtn,
  RightArea,
  TimeText,
  ReportButton,
} from "./commentStyle";

import { AuthorAvatar } from "../post/detail/postDetailStyle";

const S = {
  CommentItemWrapper,
  LeftArea,
  AuthorAvatar,
  DefaultAvatar,
  Body,
  AuthorName,
  CommentText,
  ReactionsRow,
  ReactionItem,
  AccessibilityRow,
  AccessBtn,
  RightArea,
  TimeText,
  ReportButton,
};

const CommentItem = ({
  avatar = null,
  userNickname = "사용자",
  isAuthor = false,
  commentId = null,
  commentContent = "",
  likeCount = 1,
  replyCount = 1,
  commentCreateAt = "방금 전",
  showAccessibility = true,
}) => {
  const isReply = commentId !== null;
  const displayLines = commentContent ? commentContent.split("\n") : [];

  return (
    <S.CommentItemWrapper isReply={isReply}>
      <S.LeftArea>
        <S.AuthorAvatar
          size="40px"
          border-radius="8px"
          src={avatar}
          alt={userNickname}
          onError={(e) => {
            e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
          }}
        />
        <S.Body>
          <S.AuthorName isAuthor={isAuthor}>{userNickname}</S.AuthorName>
          <S.CommentText>
            {displayLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </S.CommentText>
          <S.ReactionsRow>
            <S.ReactionItem>
              <FontAwesomeIcon icon={faHeart} />
              <span>{likeCount}</span>
            </S.ReactionItem>
            <S.ReactionItem>
              <FontAwesomeIcon icon={faCommentDots} />
              <span>{replyCount}</span>
            </S.ReactionItem>
          </S.ReactionsRow>
          {showAccessibility && (
            <S.AccessibilityRow>
              <S.AccessBtn variant="blue">수어로 보기</S.AccessBtn>
              <S.AccessBtn variant="green">글 읽어주기</S.AccessBtn>
            </S.AccessibilityRow>
          )}
        </S.Body>
      </S.LeftArea>
      <S.RightArea>
        <S.TimeText>{commentCreateAt}</S.TimeText>
        <S.ReportButton aria-label="댓글 신고">
          <img
            src={DEFAULT_IMAGES.reportIcon}
            alt="신고"
            onError={(e) => {
              e.currentTarget.src = DEFAULT_IMAGES.reportIcon;
            }}
          />
        </S.ReportButton>
      </S.RightArea>
    </S.CommentItemWrapper>
  );
};

export default CommentItem;
