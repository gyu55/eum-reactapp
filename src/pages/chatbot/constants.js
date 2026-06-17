export const CATEGORIES = [
  { id: "account", label: "계정 / 로그인",  desc: "로그인 문제, 비밀번호 변경 등", icon: "/assets/image/chatbot/userIDPW.svg" },
  { id: "report",  label: "신고 / 불편 신고", desc: "부적절한 콘텐츠, 사용자 신고",  icon: "/assets/image/chatbot/siren.svg" },
  { id: "etc",     label: "기타 문의",      desc: "기타 궁금한 사항", icon: "/assets/image/chatbot/etc.svg" },
];

export const QUICK_REPLIES = {
  account: ["계정 / 로그인 안되시나요?", "비밀번호 분실", "소셜 로그인 오류"],
  report:  ["부적절한 콘텐츠 신고", "사용자 신고", "기타 불편신고"],
  etc:     ["서비스 이용 방법", "자주 묻는 질문", "기타 문의"],
};

export const timeNow = () => {
  const d = new Date();
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
};