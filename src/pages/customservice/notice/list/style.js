import styled from "styled-components";
import { PRIMARY } from "../../style";

export const CATEGORY_STYLE = {
  공지:     { color: "#4f6ef7", background: "#eef0fd" },
  업데이트: { color: "#f5a623", background: "#fff8ed" },
  이벤트:   { color: "#6dbf7e", background: "#edf8f0" },
};

/* ── Notice Row ── */
export const Tr = styled.tr`
  border-bottom: 1px solid #f5f5f8;
  cursor: pointer;
  transition: background 0.12s;

  &:hover { background: #f7f8fd; }
`;

export const TdCenter = styled.td`
  padding: 13px 12px;
  text-align: center;
  font-size: clamp(10px, 1vw, 14px);
  color: #aaa;
  font-weight: 500;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: clamp(10px, 1vw, 14px);
  font-weight: 700;
  color: ${({ $category }) => CATEGORY_STYLE[$category]?.color ?? "#555"};
  background: ${({ $category }) => CATEGORY_STYLE[$category]?.background ?? "#f2f3f8"};
`;

export const TdTitle = styled.td`
  padding: 13px 12px;
  font-size: clamp(12px, 1.2vw, 16px);
  color: #1a1a2e;
  font-weight: ${({ $pinned }) => ($pinned ? 600 : 400)};
`;

export const TdDate = styled.td`
  padding: 13px 12px;
  text-align: center;
  font-size: clamp(12px, 1.2vw, 16px);
  color: #aaa;
`;

/* ── Pagination ── */
export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 28px;
`;

export const PageArrowBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1.5px solid #e0e0ea;
  background: #fff;
  color: #888;
  font-size: clamp(10px, 1vw, 14px);
  cursor: pointer;
  transition: all 0.15s;
`;

export const PageNumBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  font-size: clamp(10px, 1vw, 14px);
  cursor: pointer;
  transition: all 0.15s;
  background: ${({ $active }) => ($active ? PRIMARY : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  box-shadow: ${({ $active }) => ($active ? "0 2px 8px rgba(58,93,245,0.25)" : "none")};
`;

/* ── Notice List ── */
export const ListWrap = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 24px 28px;
  border: 1px solid #eee;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TabRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const TabBtn = styled.button`
  padding: 7px 18px;
  border-radius: 20px;
  border: none;
  background: ${({ $active }) => ($active ? PRIMARY : "#f2f3f8")};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
`;

export const WriteBtn = styled.button`
  padding: 7px 18px;
  border-radius: 20px;
  border: none;
  background: ${PRIMARY};
  color: #fff;
  font-weight: 600;
  font-size: clamp(12px, 1vw, 14px);
  cursor: pointer;
  transition: all 0.15s;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;

export const ThRow = styled.tr`
  border-bottom: 2px solid #f0f0f5;
`;

export const Th = styled.th`
  padding: 10px 12px;
  text-align: ${({ $left }) => ($left ? "left" : "center")};
  font-size: clamp(12px, 1vw, 14px);
  color: #888;
  font-weight: 600;
`;

export const StatusMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: clamp(12px, 1vw, 14px);
  color: ${({ $error }) => ($error ? "#f55" : "#aaa")};
`;