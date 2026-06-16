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

export const Subtitle = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 24px;
`;

export const EmptyMsg = styled.div`
  font-size: 15px;
  color: #aaa;
  text-align: center;
  padding: 40px 0;
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
  border: 1px solid #eee;
  text-align: center;
`;

export const NumberTd = styled(Td)`
  font-size: 14px;
  font-weight: 700;
  color: #333;
`;

export const TextTd = styled(Td)`
  font-size: 15px;
  color: #555;
`;

export const StatusBadge = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ $status }) => ($status === "유효" ? "#129d1b" : "#e74c3c")};
  background: ${({ $status }) => ($status === "유효" ? "#e8faf2" : "#fff0f0")};
  border-radius: 20px;
  padding: 4px 12px;
`;

export const PrintBtn = styled.button`
  background: #fff;
  color: ${PRIMARY};
  border: 1.5px solid ${PRIMARY};
  border-radius: 8px;
  padding: 5px 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #eef0ff; }
`;

/* ── 모달 ── */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

export const ModalContent = styled.div`
  background: #f0f0f0;
  border-radius: 14px;
  padding: 32px 28px 28px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 14px;
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  line-height: 1;
  &:hover { color: #111; }
`;

/* ── 수료증 카드 ── */
export const CertCardWrap = styled.div`
  border: 1.5px solid #c8c8c8;
  background: #fff;
  width: 480px;
  padding: 40px 48px 36px;
  position: relative;
  overflow: hidden;
`;

export const CertWatermark = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  opacity: 0.07;
  pointer-events: none;
  user-select: none;
`;

export const CertHeader = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.45em;
  color: #111;
  margin-bottom: 36px;
  padding-bottom: 18px;
  border-bottom: 2px solid #111;
`;

export const CertBody = styled.div``;

export const CertNo = styled.div`
  font-size: 13px;
  color: #888;
  text-align: right;
  margin-bottom: 20px;
`;

export const CertFieldRow = styled.div`
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  gap: 12px;
`;

export const CertFieldLabel = styled.div`
  font-size: 15px;
  color: #555;
  min-width: 80px;
  flex-shrink: 0;
`;

export const CertFieldValue = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #111;
  flex: 1;
`;

export const CertTextBlock = styled.div`
  font-size: 16px;
  color: #222;
  line-height: 2.2;
  text-align: center;
  padding: 28px 0 24px;
`;

export const CertFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 8px;
`;

export const CertDate = styled.div`
  font-size: 15px;
  color: #444;
  text-align: center;
  flex: 1;
`;

export const CertOrg = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #111;
  margin-top: 4px;
`;

export const PrintBtnWrap = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const PrintBtnLarge = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 11px 36px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
