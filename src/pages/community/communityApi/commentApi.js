const ROOT_URL = "http://localhost:10000/api";

// 댓글 불러오기
export const getComments = async (postId) => {
  const response = await fetch(`${ROOT_URL}/comments/${postId}`);
  if (!response.ok) throw new Error("댓글을 불러오는 데 실패했습니다.");
  const result = await response.json();
  return result.data || [];
};

// 댓글 작성
export const postComment = async (postId, commentContent) => {
  const response = await fetch(`${ROOT_URL}/comments/${postId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ commentContent }),
  });
  if (!response.ok) throw new Error("댓글 등록에 실패했습니다.");
  return response.json();
};
