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
`;

export const Input = styled.input`
  width: 100%;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #333;
  outline: none;
  box-sizing: border-box;
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
