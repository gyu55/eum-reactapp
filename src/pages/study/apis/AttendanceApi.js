// 출석 API 담당: 출석 현황, 출석 체크, 보상 조회 요청
const BASE_URL = "http://localhost:10000";

export const fetchAttendanceSummary = async (userId) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {

    const response = await fetch(`${BASE_URL}/api/attendance/users/${userId}/summary`, {
      signal: controller.signal,
    });

    if (!response.ok)
      throw new Error("출석 현황 조회 실패");

    const result = await response.json();

    if (!result.success)
      throw new Error(result.message);

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};

export const checkAttendance = async (userId) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {

    const response = await fetch(`${BASE_URL}/api/attendance/users/${userId}`, {
      method: "POST",
      signal: controller.signal,
    });

    if (!response.ok)
      throw new Error("출석 체크 실패");

    const result = await response.json();
    if (!result.success)
      throw new Error(result.message);

    return result.data;
  } finally {
    clearTimeout(timeoutId);
  }
};
