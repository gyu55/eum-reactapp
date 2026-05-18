import styled from "styled-components";
import { PRIMARY, GRAY, TEXT_BLACK, RED} from "../../style";

const CATEGORY_STYLE = {
  공지:     { color: "#4f6ef7", background: "#eef0fd" },
  업데이트: { color: "#f5a623", background: "#fff8ed" },
  이벤트:   { color: "#6dbf7e", background: "#edf8f0" },
};

/* ── Notice Row ── */

export const Tr = styled.tr`
  border-bottom: 1px solid #f5f5f8;
  cursor: pointer;
  transition: background 0.12s;

  &:hover {
    background: #f7f8fd;
  }
`;

export const TdCenter = styled.td`
  padding: 13px 12px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
  font-weight: 500;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ $category }) => CATEGORY_STYLE[$category]?.color ?? "#555"};
  background: ${({ $category }) => CATEGORY_STYLE[$category]?.background ?? "#f2f3f8"};
`;

export const TdTitle = styled.td`
  padding: 13px 12px;
  font-size: 14px;
  color: #1a1a2e;
  font-weight: ${({ $pinned }) => ($pinned ? 600 : 400)};
`;

export const TdDate = styled.td`
  padding: 13px 12px;
  text-align: center;
  font-size: 13px;
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
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
`;

export const PageNumBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
  background: ${({ $active }) => ($active ? PRIMARY : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 8px rgba(58,93,245,0.25)" : "none"};
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
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
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
  font-size: 13px;
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
  font-size: 13px;
  color: #888;
  font-weight: 600;
`;

export const StatusMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 14px;
  color: ${({ $error }) => ($error ? "#f55" : "#aaa")};
`;

/* ── Hero ── */

export const HeroCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: ${PRIMARY};
  background: #eef0ff;
  border: 1px solid #c5caff;
  border-radius: 20px;
  padding: 3px 12px;
  margin-bottom: 12px;
`;

export const HeroTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${TEXT_BLACK};
  margin: 0 0 8px;
  letter-spacing: -0.5px;
`;

export const HeroSub = styled.p`
  font-size: 12px;
  color: ${GRAY};
  margin: 0;
`;

export const HeroIllust = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eef0ff 0%, #dde1ff 100%);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

  &:hover {
    opacity: 0.7;
  }
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

/* ── Notice Write ── */

export const WriteWrap = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WriteLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

export const WriteRequired = styled.span`
  color: ${RED};
`;

export const WriteCategoryRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const WriteCategoryBtn = styled.button`
  padding: 7px 18px;
  border-radius: 20px;
  border: 1.5px solid ${({ $active }) => ($active ? PRIMARY : "#e0e0ea")};
  background: ${({ $active }) => ($active ? PRIMARY : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
`;

export const PinnedRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PinnedCheckbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: ${PRIMARY};
`;

export const PinnedLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
`;

export const WriteInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1.5px solid #e0e0ea;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${PRIMARY};
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const WriteTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1.5px solid #e0e0ea;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.15s;
  height: 200px;
  resize: vertical;

  &:focus {
    border-color: ${PRIMARY};
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const WriteBtnRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const CancelBtn = styled.button`
  padding: 12px 32px;
  border-radius: 12px;
  border: 1.5px solid #e0e0ea;
  background: #fff;
  color: #555;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const ConfirmBtn = styled.button`
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background: ${PRIMARY};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
