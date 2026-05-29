export const BREADCRUMB_MAP = {
  "/customservice/notice":  "공지사항",
  "/customservice/inquire": "1:1 문의",
  "/customservice/result":  "문의 결과",
  "/customservice/privacy": "개인정보 처리방침",
};

export const TAB_MENU_ITEMS = [
  { label: "고객지원",         isCategory: true },
  { label: "공지사항",         path: "/customservice/notice" },
  { label: "1:1 문의",        path: "/customservice/inquire" },
  { label: "문의 결과",        path: "/customservice/result" },
  { label: "개인정보 처리방침", path: "/customservice/privacy" },
];

export const API = {
  AUTH_CHECK: "http://localhost:10000/api/auth/status",
  AUTH_ME:    "http://localhost:10000/api/auth/me",
};