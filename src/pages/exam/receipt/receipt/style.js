import styled, { keyframes } from "styled-components";

const scaleIn = keyframes`
  0%   { transform: scale(0); opacity: 0; }
  70%  { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const drawCheck = keyframes`
  from { stroke-dashoffset: 40; }
  to   { stroke-dashoffset: 0; }
`;

const slideUp = keyframes`
  from { transform: translateY(24px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`;

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

export const Subtitle = styled.p`
  font-size: 13px;
  color: #888;
  margin-bottom: 24px;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 13px;
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

export const Input = styled.input`
  width: 100%;
  border: 1.5px solid ${({ readOnly }) => (readOnly ? "#e8e8e8" : "#e0e0e0")};
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: ${({ readOnly }) => (readOnly ? "#888" : "#333")};
  background: ${({ readOnly }) => (readOnly ? "#f5f5f7" : "#fff")};
  outline: none;
  box-sizing: border-box;
  cursor: ${({ readOnly }) => (readOnly ? "default" : "text")};
`;

export const Select = styled.select`
  width: 100%;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 40px 10px 14px;
  font-size: 13px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  appearance: none;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 14px center;
  cursor: pointer;
`;

export const GradeBtnRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const GradeBtn = styled.button`
  flex: 1;
  padding: 10px 0;
  border: ${({ $active }) => ($active ? `2px solid ${PRIMARY}` : "1.5px solid #e0e0e0")};
  border-radius: 8px;
  background: ${({ $active }) => ($active ? "#eef0ff" : "#fff")};
  color: ${({ $active }) => ($active ? PRIMARY : "#666")};
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
`;

export const FilePreviewRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f0f2ff;
  border: 1.5px solid #c5caff;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #333;
`;

export const FilePreviewName = styled.span`
  flex: 1;
  font-weight: 600;
  color: ${PRIMARY};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FileRemoveBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  padding: 2px 4px;
  font-size: 16px;
  line-height: 1;
  border-radius: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: #e74c3c;
    background: #fff0f0;
  }
`;

export const FileDropZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 2px dashed #c5caff;
  border-radius: 10px;
  padding: 28px 20px;
  background: #f8f9ff;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: #eef0ff;
    border-color: ${PRIMARY};
  }
`;


export const FileDropText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const FileDropSub = styled.div`
  font-size: 12px;
  color: #aaa;
`;

export const InfoBox = styled.div`
  background: #f5f7ff;
  border: 1px solid #dde3ff;
  border-radius: 8px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: #333;
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  color: #888;
  min-width: 60px;
`;

export const SubmitBtn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
`;

export const DoneWrap = styled.div`
  text-align: center;
  padding: 20px 0 8px;
`;

export const CheckCircle = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  animation: ${scaleIn} 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  svg { width: 100%; height: 100%; }

  path {
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: ${drawCheck} 0.4s ease 0.45s forwards;
  }
`;

export const DoneTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #111;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${slideUp} 0.5s ease 0.35s forwards;
`;

export const DoneInfoBox = styled.div`
  background: #f5f7ff;
  border: 1px solid #dde3ff;
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  animation: ${slideUp} 0.5s ease 0.5s forwards;
`;

export const DoneInfoRow = styled.div`
  display: flex;
  font-size: 13px;
  color: #333;
  gap: 12px;
`;

export const DoneInfoLabel = styled.span`
  font-weight: 600;
  color: #888;
  min-width: 64px;
`;

export const ConfirmBtn = styled.button`
  width: 100%;
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  opacity: 0;
  animation: ${slideUp} 0.5s ease 0.6s forwards;
`;
