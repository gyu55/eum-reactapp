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
  margin: 0 0 6px;
  letter-spacing: -0.3px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 24px;
`;

/* ── 수료증 목록 ── */
export const CertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CertItem = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1.5px solid ${({ $selected, $expired }) =>
    $selected ? ($expired ? "#e74c3c" : PRIMARY) : ($expired ? "#f5c6c6" : "#e0e0e0")};
  border-radius: 10px;
  padding: 14px 18px;
  cursor: pointer;
  background: ${({ $selected, $expired }) =>
    $selected ? ($expired ? "#fff5f5" : "#eef0ff") : ($expired ? "#fafafa" : "#fff")};
  transition: border-color 0.15s, background 0.15s;
`;

export const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${PRIMARY};
  flex-shrink: 0;
  cursor: pointer;
`;

export const CertItemInfo = styled.div`
  flex: 1;
`;

export const CertItemName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ $selected, $expired }) =>
    $expired ? "#999" : ($selected ? PRIMARY : "#222")};
`;

export const CertItemMeta = styled.div`
  font-size: 14px;
  color: #999;
  margin-top: 3px;
`;

export const CertStatusBadge = styled.span`
  font-size: 13px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
  flex-shrink: 0;
  color: ${({ $expired }) => ($expired ? "#e74c3c" : "#03c75a")};
  background: ${({ $expired }) => ($expired ? "#fff0f0" : "#f0fff7")};
  border: 1px solid ${({ $expired }) => ($expired ? "#f5c6c6" : "#b7efd4")};
`;

export const FeeText = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;

  strong {
    color: ${PRIMARY};
    font-weight: 700;
  }
`;

export const ConfirmBtn = styled.button`
  width: 100%;
  background: ${({ disabled }) => (disabled ? "#e0e0e0" : PRIMARY)};
  color: ${({ disabled }) => (disabled ? "#aaa" : "#fff")};
  border: none;
  border-radius: 8px;
  padding: 13px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.15s;
`;

/* ── 모달 ── */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px 28px 24px;
  width: 400px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111;
`;

export const ModalClose = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  line-height: 1;
  padding: 0;
`;

export const ModalSub = styled.div`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 20px;
`;

/* ── 본인확인 영역 ── */
export const Divider = styled.div`
  border-top: 1px solid #f0f0f0;
  margin: 24px 0;
`;

export const VerifyTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin-bottom: 14px;
`;

export const MethodCards = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export const MethodCard = styled.button`
  flex: 1;
  border: 2px solid ${({ $selected }) => ($selected ? PRIMARY : "#e0e0e0")};
  border-radius: 10px;
  padding: 16px 12px;
  background: ${({ $selected }) => ($selected ? "#eef0ff" : "#fff")};
  cursor: pointer;
  text-align: center;
  transition: border-color 0.15s, background 0.15s;
`;

export const MethodIcon = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
`;

export const MethodLabel = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ $selected }) => ($selected ? PRIMARY : "#444")};
`;

export const MethodValue = styled.div`
  font-size: 13px;
  color: #999;
  margin-top: 3px;
`;

export const CodeRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const CodeInput = styled.input`
  flex: 1;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 15px;
  color: #333;
  outline: none;

  &:focus {
    border-color: ${PRIMARY};
  }
`;

export const SendBtn = styled.button`
  background: #f5f5f7;
  color: #444;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    background: #c0c0c0;
    color: #fff;
    border-color: #c0c0c0;
    cursor: not-allowed;
  }
`;

export const VerifyBtn = styled.button`
  width: 100%;
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

/* ── 결제 단계 ── */
export const PaymentBox = styled.div`
  border: 1.5px solid #eee;
  border-radius: 10px;
  padding: 18px 20px;
  margin-bottom: 20px;
`;

export const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: #555;

  & + & {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #f0f0f0;
  }
`;

export const PaymentTotal = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const PayBtn = styled.button`
  width: 100%;
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

/* ── 완료 단계 ── */
export const DoneWrap = styled.div`
  text-align: center;
  padding: 8px 0 4px;
`;

export const DoneIcon = styled.div`
  font-size: 48px;
  margin-bottom: 12px;
`;

export const DoneTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
`;

export const DoneExpiry = styled.div`
  font-size: 15px;
  color: #555;
  margin-bottom: 24px;

  strong {
    color: ${PRIMARY};
    font-weight: 700;
  }
`;

export const DoneBtn = styled.button`
  width: 100%;
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
