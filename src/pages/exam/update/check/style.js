import styled from "styled-components";

const PRIMARY = "#4359fc";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 28px 32px;
`;

export const SectionTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #111;
  margin: 0 0 14px;
  letter-spacing: -0.3px;
`;

export const SearchRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

export const SearchInput = styled.input`
  flex: ${({ $flex }) => $flex ?? 1};
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #333;
  outline: none;
`;

export const SearchBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
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
  font-size: 12px;
  font-weight: 700;
  color: ${PRIMARY};
  border: 1px solid #e8eaf0;
  text-align: center;
`;

export const Td = styled.td`
  padding: 12px 14px;
  font-size: 13px;
  color: #555;
  border: 1px solid #eee;
  text-align: center;
`;

export const NumberTd = styled(Td)`
  font-weight: 700;
  color: #111;
`;

export const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #e67e22;
  background: #fff8f0;
  border-radius: 20px;
  padding: 4px 12px;
`;

export const DetailCell = styled.td`
  padding: 10px 14px;
  border-bottom: 1px solid #eee;
  background: #fafafa;
`;

export const DetailText = styled.div`
  font-size: 12px;
  color: ${PRIMARY};
`;

export const DetailNote = styled.div`
  font-size: 11px;
  color: #999;
  margin-top: 4px;
`;
