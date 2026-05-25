/**
 * ISO 8601 타임스탬프를 현재 시각 기준 상대 시간 문자열로 변환
 *
 * - 1분 이내        → "방금 전"
 * - 1분 ~ 1시간     → "N분 전"
 * - 당일 작성       → "HH시 MM분"
 * - 당일 이전 작성  → "YYYY년 M월 D일"
 */
const formatRelativeTime = (isoString) => {
  const created = new Date(isoString);
  const now = new Date();
  const diffMs = now - created;
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return "방금 전";
  if (diffMin < 60) return `${diffMin}분 전`;

  const isSameDay =
    created.getFullYear() === now.getFullYear() &&
    created.getMonth() === now.getMonth() &&
    created.getDate() === now.getDate();

  if (isSameDay) {
    const h = String(created.getHours()).padStart(2, "0");
    const m = String(created.getMinutes()).padStart(2, "0");
    return `${h}시 ${m}분`;
  }

  return `${created.getFullYear()}년 ${created.getMonth() + 1}월 ${created.getDate()}일`;
};

export default formatRelativeTime;
