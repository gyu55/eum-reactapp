const ROOT_URL = "http://localhost:10000/api";

// 추후 Error 부분은 res.data 부분으로 대처

// 전체 게시글 페이지 네이션으로 조회 (검색 쿼리 추가)
export const fetchPosts = async ({
  page = 1,
  postTag = "",
  keyword = "",
} = {}) => {
  const params = new URLSearchParams({ page });
  const keywordParams = new URLSearchParams({ keyword });
  if (postTag) params.append("postTag", postTag);
  const res = await fetch(`${ROOT_URL}/posts?${params}&${keywordParams}`);
  if (!res.ok) throw new Error("게시글 목록 조회 실패");
  return res.json();
};

// 특정 유저가 작성한 모든 게시글 조회
export const fetchUserPosts = async ({
  page = 1,
  userId = 1,
  order = "latest",
  keyword = "",
}) => {
  const params = new URLSearchParams({ page });
  const orderParams = new URLSearchParams({ order });
  const searchParams = new URLSearchParams({ keyword });

  const res = await fetch(
    `${ROOT_URL}/posts/user/${userId}?${params}&${orderParams}&${searchParams}`,
  );
  if (!res.ok) throw new Error("유저가 작성한 게시글 목록 조회 실패");
  return res.json();
};

// 특정 유저가 좋아요 한 게시글 목록 조회
export const fetchUserLikedPosts = async ({
  page = 1,
  userId = 1,
  order = "latest",
  keyword = "",
}) => {
  const params = new URLSearchParams({ page });
  const orderParams = new URLSearchParams({ order });
  const searchParams = new URLSearchParams({ keyword });

  const res = await fetch(
    `${ROOT_URL}/posts/user/${userId}/likes?${params}&${orderParams}&${searchParams}`,
  );
  if (!res.ok) throw new Error("유저 좋아요 게시글 목록 조회 실패");
  return res.json();
};

// 특정 게시글 로드
export const getPostById = async (id) => {
  const res = await fetch(`${ROOT_URL}/posts/${id}`);
  if (!res.ok) throw new Error("게시글 로딩 실패");
  return res.json();
};

// 게시글 삭제
export const deletePost = async (postId) => {
  const res = await fetch(`${ROOT_URL}/posts/${postId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("게시글 삭제 실패");
};

// 게시글 좋아요
export const requestPostLike = async (postId) => {
  const res = await fetch(`${ROOT_URL}/posts/like/${postId}`);
  if (!res.ok) throw new Error("게시글 좋아요 실패");
};

// 게시글 좋아요 취소
export const cancelPostLike = async (postId) => {
  const res = await fetch(`${ROOT_URL}/posts/like/${postId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("게시글 좋아요 취소 실패");
};

// 게시글 작성
export const createPost = async ({ postTitle, postContent, postTag }) => {
  const res = await fetch(`${ROOT_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postTitle, postContent, postTag }),
  });
  if (!res.ok) throw new Error("게시글 작성 실패");
  return res.json();
};
