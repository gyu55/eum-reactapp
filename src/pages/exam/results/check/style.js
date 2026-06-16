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
  font-size: 15px;
  color: #333;
  outline: none;
`;

export const SearchSelect = styled.select`
  flex: ${({ $flex }) => $flex ?? 1};
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 15px;
  color: #333;
  outline: none;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 14px center;
  appearance: none;
  cursor: pointer;
`;

export const SearchBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 15px;
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
  font-size: 20px;
  font-weight: 700;
  color: ${({ $passed }) => ($passed ? "#27ae60" : "#e74c3c")};
  margin-bottom: 12px;
`;

export const ResultInfo = styled.div`
  font-size: 15px;
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
  font-size: 14px;
  color: #888;
`;

export const ScoreValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${PRIMARY};
  margin-top: 4px;
`;

export const PassCriteria = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 14px;
`;

export const PassNote = styled.div`
  font-size: 14px;
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
  font-size: 17px;
  font-weight: 700;
  color: #111;
`;

export const MyResultBadge = styled.span`
  font-size: 14px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  background: ${({ $passed, $pending }) =>
    $pending ? "#eee" : $passed ? "#27ae60" : "#e74c3c"};
  color: ${({ $pending }) => ($pending ? "#888" : "#fff")};
`;

export const MyResultDate = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 12px;
`;

export const EmptyMsg = styled.div`
  font-size: 15px;
  color: #aaa;
  text-align: center;
  padding: 32px 0;
`;

export const RoundTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const RoundThead = styled.tr`
  background: #f5f7ff;
`;

export const RoundTh = styled.th`
  padding: 11px 14px;
  font-size: 14px;
  font-weight: 700;
  color: ${PRIMARY};
  border: 1px solid #e8eaf0;
  text-align: center;
`;

export const RoundTd = styled.td`
  padding: 13px 14px;
  font-size: 15px;
  color: #555;
  border: 1px solid #eee;
  text-align: center;
`;

export const RoundTitle = styled(RoundTd)`
  font-weight: 700;
  color: #111;
  text-align: left;
`;

export const ViewBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 400px;
  max-width: 92vw;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
`;

export const ModalHeader = styled.div`
  background: ${({ $passed }) => $passed ? "#27ae60" : "#e74c3c"};
  padding: 32px 28px 28px;
  text-align: center;
  position: relative;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
  background: rgba(255,255,255,0.25);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { background: rgba(255,255,255,0.4); }
`;

export const ModalIcon = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const ModalStatus = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.3px;
`;

export const ModalSubtitle = styled.div`
  font-size: 15px;
  color: rgba(255,255,255,0.85);
  margin-top: 6px;
`;

export const ModalBody = styled.div`
  padding: 24px 28px 28px;
`;

export const ModalInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 0;
  border-bottom: 1px solid #f0f0f0;
  &:last-of-type { border-bottom: none; }
`;

export const ModalInfoLabel = styled.span`
  font-size: 14px;
  color: #aaa;
  font-weight: 600;
  min-width: 52px;
`;

export const ModalInfoValue = styled.span`
  font-size: 15px;
  color: #333;
  font-weight: 600;
`;

export const ModalScoreBox = styled.div`
  background: #f5f7ff;
  border-radius: 12px;
  padding: 18px;
  text-align: center;
  margin: 18px 0 14px;
`;

export const ModalScoreNum = styled.div`
  font-size: 42px;
  font-weight: 800;
  color: ${({ $passed }) => $passed ? "#27ae60" : "#e74c3c"};
  letter-spacing: -1px;
`;

export const ModalScoreSub = styled.div`
  font-size: 14px;
  color: #999;
  margin-top: 4px;
`;

export const ModalNote = styled.div`
  font-size: 14px;
  color: #888;
  background: #fffbf0;
  border: 1px solid #ffe9a0;
  border-radius: 8px;
  padding: 10px 14px;
  margin-top: 14px;
`;

export const GoLicenseBtn = styled.button`
  display: block;
  width: 100%;
  margin-top: 12px;
  padding: 13px 0;
  background: #4359fc;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #3448e0; }
`;

export const PassGoBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  padding: 10px 20px;
  background: #4359fc;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #3448e0; }
`;
