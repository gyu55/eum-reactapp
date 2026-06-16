import styled from "styled-components";

const PRIMARY = "#4359fc";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 28px 32px;
`;

export const SectionTitle = styled.h2`
  font-size: 19px;
  font-weight: 700;
  color: #111;
  margin: 0 0 16px;
  letter-spacing: -0.3px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TheadRow = styled.tr`
  background: #f5f7ff;
`;

export const Th = styled.th`
  padding: 11px 14px;
  font-size: 14px;
  font-weight: 700;
  color: ${PRIMARY};
  border: 1px solid #e8eaf0;
  text-align: center;
`;

export const Td = styled.td`
  padding: 12px 14px;
  font-size: 15px;
  border: 1px solid #eee;
  text-align: center;
  color: ${({ $dark }) => ($dark ? "#333" : "#555")};
`;

export const StatusBadge = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({ $status }) =>
    $status === "취소" || $status === "cancelled" ? "#e74c3c" :
    $status === "완료" ? "#888" :
    "#27ae60"};
  background: ${({ $status }) =>
    $status === "취소" || $status === "cancelled" ? "#fff0f0" :
    $status === "완료" ? "#f0f0f0" :
    "#e8faf2"};
  border-radius: 20px;
  padding: 4px 12px;
`;

export const CancelBtn = styled.button`
  background: #fff;
  color: #e74c3c;
  border: 1.5px solid #e74c3c;
  border-radius: 8px;
  padding: 5px 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const Note = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 12px;
`;
