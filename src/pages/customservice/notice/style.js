import styled from "styled-components";
import { PRIMARY } from "../style";

export const CATEGORY_STYLE = {
  공지:     { color: "#4f6ef7", background: "#eef0fd" },
  업데이트: { color: "#f5a623", background: "#fff8ed" },
  이벤트:   { color: "#6dbf7e", background: "#edf8f0" },
};

/* ── Notice Detail ── */
export const DetailWrap = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 28px 32px;
`;

export const DetailCategoryBadge = styled.span`
  display: inline-block;
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ $category }) => CATEGORY_STYLE[$category]?.color ?? "#555"};
  background: ${({ $category }) => CATEGORY_STYLE[$category]?.background ?? "#f2f3f8"};
`;

export const DetailTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 800;
  color: #1a1a2e;
  letter-spacing: -0.3px;
`;

export const DetailMeta = styled.div`
  font-size: 13px;
  color: #aaa;
  margin-bottom: 24px;
`;

export const Divider = styled.div`
  border-top: 1.5px solid #f0f0f5;
  margin-bottom: 24px;
`;

export const DividerBottom = styled.div`
  border-top: 1.5px solid #f0f0f5;
  margin-top: 24px;
  margin-bottom: 20px;
`;

export const DetailContent = styled.div`
  font-size: 14px;
  color: #444;
  line-height: 2;
  white-space: pre-line;
  min-height: 120px;
`;

export const DetailFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackLink = styled.span`
  font-size: 14px;
  color: ${PRIMARY};
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover { opacity: 0.7; }
`;

export const AdminBtnRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditBtn = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  border: 1.5px solid ${PRIMARY};
  background: #fff;
  color: ${PRIMARY};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  border: 1.5px solid #f55;
  background: #fff;
  color: #f55;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;


export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #aaa;
  font-size: 14px;
`;

export const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #f55;
  font-size: 14px;
`;