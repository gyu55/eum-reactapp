import styled from "styled-components";
import { PRIMARY, RED } from "../../style";

export const WriteWrap = styled.div`
  background: #fff;
  border-radius: 14px;
  border: 1px solid #eee;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WriteLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

export const WriteRequired = styled.span`
  color: ${RED};
`;

export const WriteCategoryRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const WriteCategoryBtn = styled.button`
  padding: 7px 18px;
  border-radius: 20px;
  border: 1.5px solid ${({ $active }) => ($active ? PRIMARY : "#e0e0ea")};
  background: ${({ $active }) => ($active ? PRIMARY : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
`;

export const PinnedRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PinnedCheckbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: ${PRIMARY};
`;

export const PinnedLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
`;

export const WriteInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1.5px solid #e0e0ea;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.15s;

  &:focus { border-color: ${PRIMARY}; }
  &::placeholder { color: #bbb; }
`;

export const WriteTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1.5px solid #e0e0ea;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.15s;
  height: 200px;
  resize: none;

  &:focus { border-color: ${PRIMARY}; }
  &::placeholder { color: #bbb; }
`;

export const WriteBtnRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const CancelBtn = styled.button`
  padding: 12px 32px;
  border-radius: 12px;
  border: 1.5px solid #e0e0ea;
  background: #fff;
  color: #555;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const ConfirmBtn = styled.button`
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background: ${PRIMARY};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;