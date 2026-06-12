const PRIVATE_ROOT_URL = "http://localhost:10000/private";

// 유저 차단 API
export const blockUser = async (blockingId) => {
  const response = await fetch(`${PRIVATE_ROOT_URL}/user-block/${blockingId}`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("유저 차단에 실패했습니다");
  const { success, message, data } = await response.json();
  return { success, message, data };
};
