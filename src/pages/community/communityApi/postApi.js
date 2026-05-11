const ROOT_URL = "http://localhost:10000/api";

export const fetchPosts = async ({ page = 1, postTag = "" } = {}) => {
  const params = new URLSearchParams({ page });
  if (postTag) params.append("postTag", postTag);

  // 루트 url 정의하기
  // http://localhost:10000/api/posts?page=1
  // const rootUrl = "http://localhost:10000/api";

  const res = await fetch(`${ROOT_URL}/posts?${params}`);
  if (!res.ok) throw new Error("게시글 목록 조회 실패");
  return res.json();
};

export const fetchUserPosts = async ({ page = 1, userId = 1 }) => {
  const params = new URLSearchParams({ page });

  const res = await fetch(`${ROOT_URL}/posts/user/${userId}?${params}`);
  if (!res.ok) throw new Error("유저가 작성한 게시글 목록 조회 실패");
  return res.json();
};
