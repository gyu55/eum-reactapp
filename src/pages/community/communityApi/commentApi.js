const ROOT_URL = "http://localhost:10000/api";
const PRIVATE_ROOT_URL = "http://localhost:10000/private";

// 댓글 불러오기
export const getComments = async (postId) => {
  const response = await fetch(`${ROOT_URL}/comments/${postId}`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("댓글을 불러오는 데 실패했습니다.");
  const result = await response.json();
  return result.data || [];
};

// 유저가 작성한 댓글 목록 페이지네이션 조회
export const getUserComments = async ({
  userId,
  page = 1,
  order = "latest",
  keyword = "",
}) => {
  const params = new URLSearchParams({ page, order, keyword });
  const response = await fetch(
    `${ROOT_URL}/comments/users/${userId}?${params}`,
  );
  if (!response.ok) throw new Error("유저 댓글을 불러오는 데 실패했습니다.");
  const result = await response.json();
  return result.data;
};

// 댓글 작성
export const postComment = async (postId, commentContent) => {
  const response = await fetch(`${PRIVATE_ROOT_URL}/comments/${postId}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ commentContent }),
  });
  if (!response.ok) throw new Error("댓글 등록에 실패했습니다.");
  return response.json();
};

// 댓글 좋아요
export const requestCommentLike = async (commentId) => {
  const res = await fetch(`${PRIVATE_ROOT_URL}/comments/likes/${commentId}`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("댓글 좋아요 실패");
};

// 댓글 좋아요 취소
export const cancelCommentLike = async (commentId) => {
  const res = await fetch(`${PRIVATE_ROOT_URL}/comments/likes/${commentId}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("댓글 좋아요 취소 실패");
};

// 대댓글 작성
export const postReply = async (postId, commentId, commentContent) => {
  const response = await fetch(
    `${PRIVATE_ROOT_URL}/comments/${postId}/replies/${commentId}`,
    {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commentContent }),
    },
  );
  if (!response.ok) throw new Error("대댓글 등록에 실패했습니다.");
  return response.json();
};

// 댓글 삭제
export const deleteComment = async (commentId) => {
  const res = await fetch(`${PRIVATE_ROOT_URL}/comments/${commentId}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("댓글 삭제에 실패했습니다.");
};

// 댓글 수정
export const updateComment = async ({ id, commentContent }) => {
  const res = await fetch(`${PRIVATE_ROOT_URL}/comments/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ commentContent }),
  });
  if (!res.ok) throw new Error("댓글 수정에 실패했습니다.");
  return res.json();
};
