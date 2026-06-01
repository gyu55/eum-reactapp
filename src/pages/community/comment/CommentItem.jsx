import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import { DEFAULT_IMAGES } from "../constants";
import {
  requestCommentLike,
  cancelCommentLike,
  postReply,
  deleteComment,
  updateComment,
} from "../communityApi/commentApi";
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
  ReplyInputWrapper,
  ReplyTextArea,
  ReplySubmitRow,
  ReplyCancelButton,
  ReplySubmitButton,
  ActionRow,
  EditButton,
  DeleteButton,
  EditInputWrapper,
} from "./commentStyle";

import { AuthorAvatar } from "../post/detail/postDetailStyle";
import formatRelativeTime from "../functions/formatRelativeTime";

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
  ReplyInputWrapper,
  ReplyTextArea,
  ReplySubmitRow,
  ReplyCancelButton,
  ReplySubmitButton,
  ActionRow,
  EditButton,
  DeleteButton,
  EditInputWrapper,
};

const CommentItem = ({
  id,
  postId,
  userProfile = "default.jpg",
  userNickname = "사용자",
  commentId = null,
  commentContent = "",
  commentIsLiked = false,
  commentLikeCount = 0,
  commentReplyCount = 0,
  commentCreateAt = "방금 전",
  commentIsWrited = false,
  showAccessibility = true,
  onReplySubmit,
  onDelete,
  onEditSubmit,
}) => {
  const [liked, setLiked] = useState(commentIsLiked);
  const [likeCount, setLikeCount] = useState(commentLikeCount);
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [editText, setEditText] = useState("");

  const isReply = commentId !== null;
  const displayLines = commentContent ? commentContent.split("\n") : [];

  const clickCommentLike = async () => {
    const prevLiked = liked;
    const prevCount = likeCount;

    setLiked(!prevLiked);
    setLikeCount(prevLiked ? prevCount - 1 : prevCount + 1);

    try {
      prevLiked ? await cancelCommentLike(id) : await requestCommentLike(id);
    } catch (e) {
      setLiked(prevLiked);
      setLikeCount(prevCount);
    }
  };

  const handleReplySubmit = async () => {
    if (!replyText.trim()) return;
    try {
      await postReply(postId, id, replyText.trim());
      setReplyText("");
      setReplyOpen(false);
      onReplySubmit?.();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("댓글을 삭제하시겠습니까?")) return;
    try {
      await deleteComment(id);
      onDelete?.();
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditOpen = () => {
    setEditText(commentContent);
    setEditOpen(true);
  };

  const handleEditSubmit = async () => {
    if (!editText.trim()) return;
    const commentContent = editText.trim();
    try {
      await updateComment({ id, commentContent });
      setEditOpen(false);
      onEditSubmit?.();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <S.CommentItemWrapper isReply={isReply}>
        <S.LeftArea>
          <S.AuthorAvatar
            size="40px"
            border-radius="8px"
            src={userProfile}
            alt={userNickname}
            onError={(e) => {
              e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
            }}
          />
          <S.Body>
            <S.AuthorName isAuthor={false}>{userNickname}</S.AuthorName>
            <S.CommentText>
              {displayLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </S.CommentText>
            <S.ReactionsRow>
              <S.ReactionItem
                onClick={clickCommentLike}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: liked ? "red" : "inherit" }}
                />
                <span>{likeCount}</span>
              </S.ReactionItem>
              {!isReply && (
                <S.ReactionItem
                  onClick={() => setReplyOpen((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faCommentDots} />
                  <span>{commentReplyCount}</span>
                </S.ReactionItem>
              )}
              {isReply && (
                <S.ReactionItem>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <span>{commentReplyCount}</span>
                </S.ReactionItem>
              )}
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
          <S.TimeText>{formatRelativeTime(commentCreateAt)}</S.TimeText>
          {commentIsWrited ? (
            <S.ActionRow>
              <S.EditButton onClick={handleEditOpen}>수정</S.EditButton>
              <S.DeleteButton onClick={handleDelete}>삭제</S.DeleteButton>
            </S.ActionRow>
          ) : (
            <S.ReportButton aria-label="댓글 신고">
              <img
                src={DEFAULT_IMAGES.reportIcon}
                alt="신고"
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_IMAGES.reportIcon;
                }}
              />
            </S.ReportButton>
          )}
        </S.RightArea>
      </S.CommentItemWrapper>

      {editOpen && (
        <S.EditInputWrapper isReply={isReply}>
          <S.ReplyTextArea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="수정할 내용을 입력하세요"
          />
          <S.ReplySubmitRow>
            <S.ReplyCancelButton
              onClick={() => {
                setEditOpen(false);
                setEditText("");
              }}
            >
              취소
            </S.ReplyCancelButton>
            <S.ReplySubmitButton onClick={handleEditSubmit}>
              저장
            </S.ReplySubmitButton>
          </S.ReplySubmitRow>
        </S.EditInputWrapper>
      )}

      {replyOpen && (
        <S.ReplyInputWrapper>
          <S.ReplyTextArea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="대댓글을 입력하세요"
          />
          <S.ReplySubmitRow>
            <S.ReplyCancelButton
              onClick={() => {
                setReplyOpen(false);
                setReplyText("");
              }}
            >
              취소
            </S.ReplyCancelButton>
            <S.ReplySubmitButton onClick={handleReplySubmit}>
              등록
            </S.ReplySubmitButton>
          </S.ReplySubmitRow>
        </S.ReplyInputWrapper>
      )}
    </>
  );
};

export default CommentItem;
