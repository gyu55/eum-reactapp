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

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TheadRow = styled.tr`
  background: #f5f7ff;
`;

export const Th = styled.th`
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 700;
  color: ${PRIMARY};
  border: 1px solid #e8eaf0;
  text-align: center;
`;

export const TbodyRow = styled.tr`
  background: ${({ $even }) => ($even ? "#fff" : "#fafafa")};
`;

export const GradeTd = styled.td`
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 700;
  color: ${PRIMARY};
  border: 1px solid #eee;
  text-align: center;
`;

export const Td = styled.td`
  padding: 14px 16px;
  font-size: 13px;
  color: #444;
  border: 1px solid #eee;
`;
