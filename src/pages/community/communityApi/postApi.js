const ROOT_URL = "http://localhost:10000/api";

// 추후 Error 부분은 res.data 부분으로 대처

// 전체 게시글 페이지 네이션으로 조회
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

// 특정 유저가 작성한 모든 게시글 조회
export const fetchUserPosts = async ({ page = 1, userId = 1 }) => {
  const params = new URLSearchParams({ page });

  const res = await fetch(`${ROOT_URL}/posts/user/${userId}?${params}`);
  if (!res.ok) throw new Error("유저가 작성한 게시글 목록 조회 실패");
  return res.json();
};

// 특정 유저가 좋아요 한 게시글 목록 조회
export const fetchUserLikedPosts = async ({ page = 1, userId = 1 }) => {
  const params = new URLSearchParams({ page });

  const res = await fetch(`${ROOT_URL}/posts/user/${userId}/likes?${params}`);
  if (!res.ok) throw new Error("유저 좋아요 게시글 목록 조회 실패");
  return res.json();
};

// 특정 게시글 불러오기
// curl -X 'GET' \
//   'http://localhost:10000/api/posts/1' \
//   -H 'accept: */*'

export const getPostById = async (id) => {
  const res = await fetch(`${ROOT_URL}/posts/${id}`);
  if (!res.ok) throw new Error("게시글 로딩 실패");
  return res.json();
};
