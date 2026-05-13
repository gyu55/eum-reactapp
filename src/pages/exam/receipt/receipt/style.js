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
  padding: 10px 14px;
  font-size: 13px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  background: #fff;
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
