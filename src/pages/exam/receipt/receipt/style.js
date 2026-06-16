import styled, { keyframes } from "styled-components";

const PRIMARY = "#4359fc";

const scaleIn = keyframes`
  from { transform: scale(0.5); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(16px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`;

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
  font-size: 15px;
  color: #888;
  margin-bottom: 24px;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #555;
  margin-bottom: 6px;
  display: block;

  span {
    color: ${PRIMARY};
    font-weight: 700;
    margin-left: 2px;
  }
`;

export const Select = styled.select`
  width: 100%;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 15px;
  color: #333;
  outline: none;
  background: #fff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
`;

export const InfoBox = styled.div`
  background: #f5f7ff;
  border: 1px solid #dde1ff;
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 12px;
  font-size: 15px;
  color: #333;
`;

export const InfoLabel = styled.span`
  color: #888;
  min-width: 72px;
  flex-shrink: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 15px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  background: ${({ readOnly }) => (readOnly ? "#f7f7f7" : "#fff")};
  cursor: ${({ readOnly }) => (readOnly ? "default" : "text")};
`;

export const FilePreviewRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilePreviewName = styled.span`
  font-size: 14px;
  color: #555;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FileRemoveBtn = styled.button`
  background: none;
  border: none;
  color: #aaa;
  font-size: 14px;
  cursor: pointer;
  padding: 2px 4px;
  flex-shrink: 0;
  &:hover { color: #e74c3c; }
`;

export const FileDropZone = styled.div`
  border: 2px dashed #d0d3f5;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover { border-color: ${PRIMARY}; }
`;

export const FileDropText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${PRIMARY};
  margin-bottom: 4px;
`;

export const FileDropSub = styled.div`
  font-size: 14px;
  color: #aaa;
`;

export const SubmitBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ── 완료 화면 ── */
export const DoneWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 24px;
  gap: 16px;
  animation: ${slideUp} 0.4s ease;
`;

export const CheckCircle = styled.div`
  width: 72px;
  height: 72px;
  animation: ${scaleIn} 0.35s ease;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const DoneTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #111;
  margin: 0;
  letter-spacing: -0.3px;
`;

export const DoneInfoBox = styled.div`
  background: #f5f7ff;
  border: 1px solid #dde1ff;
  border-radius: 12px;
  padding: 16px 24px;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DoneInfoRow = styled.div`
  display: flex;
  gap: 12px;
  font-size: 15px;
  color: #333;
`;

export const DoneInfoLabel = styled.span`
  color: #888;
  min-width: 72px;
  flex-shrink: 0;
`;

export const ConfirmBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 4px;
`;

/* ── 결제 취소 모달 ── */
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
  border-radius: 16px;
  padding: 36px 32px 28px;
  text-align: center;
  width: 340px;
  max-width: 90vw;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
  animation: ${scaleIn} 0.25s ease;
`;

export const ModalIcon = styled.div`
  font-size: 42px;
  margin-bottom: 12px;
`;

export const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #111;
  margin: 0 0 10px;
`;

export const ModalDesc = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 20px;
`;

export const ModalConfirmBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 11px 32px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
