const ROOT_URL = "http://localhost:10000/private";

export const postUserReport = async ({ userReportTitle, userReportDetail, reportingUserId }) => {
  const response = await fetch(`${ROOT_URL}/user-reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ userReportTitle, userReportDetail, reportingUserId }),
  });
  if (!response.ok) throw new Error("유저 신고 요청에 실패했습니다.");
  const { success, message, data } = await response.json();
  return { success, message, data };
};

export const postPostReport = async ({ postReportTitle, postReportDetail, postId }) => {
  const response = await fetch(`${ROOT_URL}/post-reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ postReportTitle, postReportDetail, postId }),
  });
  if (!response.ok) throw new Error("게시글 신고 요청에 실패했습니다.");
  const { success, message, data } = await response.json();
  return { success, message, data };
};
