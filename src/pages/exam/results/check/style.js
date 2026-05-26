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

export const SearchSelect = styled.select`
  flex: ${({ $flex }) => $flex ?? 1};
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #333;
  outline: none;
  background: #fff;
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

export const ResultBox = styled.div`
  border: 1.5px solid ${({ $passed }) => ($passed ? "#27ae60" : "#e74c3c")};
  border-radius: 12px;
  padding: 24px 28px;
  background: ${({ $passed }) => ($passed ? "#f0faf5" : "#fff5f5")};
`;

export const ResultTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ $passed }) => ($passed ? "#27ae60" : "#e74c3c")};
  margin-bottom: 12px;
`;

export const ResultInfo = styled.div`
  font-size: 13px;
  color: #444;
  margin-bottom: 4px;
`;

export const ScoreRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
`;

export const ScoreItem = styled.div`
  text-align: center;
`;

export const ScoreLabel = styled.div`
  font-size: 12px;
  color: #888;
`;

export const ScoreValue = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${PRIMARY};
  margin-top: 4px;
`;

export const PassCriteria = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 14px;
`;

export const PassNote = styled.div`
  font-size: 12px;
  color: #555;
  margin-top: 8px;
`;

export const MyResultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const MyResultCard = styled.div`
  border: 1.5px solid ${({ $passed, $pending }) =>
    $pending ? "#e0e0e0" : $passed ? "#27ae60" : "#e74c3c"};
  border-radius: 12px;
  padding: 20px 24px;
  background: ${({ $passed, $pending }) =>
    $pending ? "#fafafa" : $passed ? "#f0faf5" : "#fff5f5"};
`;

export const MyResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const MyResultTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #111;
`;

export const MyResultBadge = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  background: ${({ $passed, $pending }) =>
    $pending ? "#eee" : $passed ? "#27ae60" : "#e74c3c"};
  color: ${({ $pending }) => ($pending ? "#888" : "#fff")};
`;

export const MyResultDate = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 12px;
`;

export const EmptyMsg = styled.div`
  font-size: 13px;
  color: #aaa;
  text-align: center;
  padding: 32px 0;
`;
