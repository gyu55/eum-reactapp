const ROOT_URL = "http://localhost:10000/api";
const PRIVATE_ROOT_URL = "http://localhost:10000/private";

// 유저 정보 로드
export const getCommunityUserInfo = async (userId) => {
  const response = await fetch(`${ROOT_URL}/community-profile/${userId}`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("유저 정보를 불러오는 데 실패했습니다.");
  const { success, message, data } = await response.json();
  return { success, message, data };
};

// 유저 팔로우
export const userFollow = async (followingId) => {
  const response = await fetch(`${PRIVATE_ROOT_URL}/follow/${followingId}`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("유저 정보를 불러오는 데 실패했습니다.");
  const { success, message, data } = await response.json();
  return { success, message, data };
};

// 유저 팔로우 취소
export const cancelFollow = async (followingId) => {
  const response = await fetch(
    `${PRIVATE_ROOT_URL}/follow/cancel/${followingId}`,
    {
      method: "DELETE",
      credentials: "include",
    },
  );
  if (!response.ok) throw new Error("유저 정보를 불러오는 데 실패했습니다.");
};
