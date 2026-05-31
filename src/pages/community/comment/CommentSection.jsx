import { useState, useEffect } from "react";
import CommentItem from "./CommentItem";
import CommentItemSkeleton from "./CommentItemSkeleton";
import NoResult from "../common/NoResult";
import { getComments, postComment } from "../communityApi/commentApi";
import {
  CommentSectionWrapper,
  HeaderRow,
  CommentTitle,
  CountBadge,
  TextArea,
  SubmitRow,
  SubmitButton,
  CommentList,
} from "./commentStyle";

const S = {
  CommentSectionWrapper,
  HeaderRow,
  CommentTitle,
  CountBadge,
  TextArea,
  SubmitRow,
  SubmitButton,
  CommentList,
};

const mapComment = (item) => ({
  id: item.id,
  userProfile: item.userProfile ?? "default.jpg",
  userNickname: item.userNickname,
  commentId: item.commentId,
  commentContent: item.commentContent,
  commentLikeCount: item.commentLikeCount,
  commentReplyCount: item.commentReplyCount,
  commentCreateAt: item.commentCreateAt,
  postId: item.postId,
  userId: item.userId,
});

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!postId) return;
    setIsLoading(true);
    getComments(postId)
      .then((data) =>
        setComments(Array.isArray(data) ? data.map(mapComment) : []),
      )
      .catch(() => setComments([]))
      .finally(() => setIsLoading(false));
  }, [postId, refreshKey]);

  const handleSubmit = async () => {
    if (!inputValue.trim()) return;
    try {
      await postComment(postId, inputValue.trim());
      setInputValue("");
      setRefreshKey((prev) => prev + 1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.CommentSectionWrapper>
      <S.HeaderRow>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CountBadge>{comments.length}</S.CountBadge>
      </S.HeaderRow>

      <S.TextArea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="따뜻한 댓글을 남겨보세요"
      />

      <S.SubmitRow>
        <S.SubmitButton onClick={handleSubmit}>댓글 등록</S.SubmitButton>
      </S.SubmitRow>

      <S.CommentList>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <CommentItemSkeleton key={i} />
          ))
        ) : comments.length === 0 ? (
          <NoResult
            message="아직 댓글이 없습니다"
            subMessage="첫 번째 댓글을 남겨보세요"
          />
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment.id} {...comment} />
          ))
        )}
      </S.CommentList>
    </S.CommentSectionWrapper>
  );
};

export default CommentSection;
