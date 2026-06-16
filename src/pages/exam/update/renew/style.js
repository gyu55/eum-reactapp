import styled, { css, keyframes } from "styled-components";
import theme from "../../../../styles/theme";

const PRIMARY = "#4359fc";
const WARNING = theme.PALETTE.warning.main;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-8px); }
  40%       { transform: translateX(8px); }
  60%       { transform: translateX(-5px); }
  80%       { transform: translateX(5px); }
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
  margin: 0 0 14px;
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

export const RadioRow = styled.div`
  display: flex;
  gap: 24px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  accent-color: ${PRIMARY};
`;

export const RadioText = styled.span`
  font-size: 15px;
  color: ${({ $active }) => ($active ? PRIMARY : "#666")};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #555;
  margin-bottom: 6px;
  display: block;

  span {
    color: #4359fc;
    font-weight: 700;
    margin-left: 2px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1.5px solid ${({ $shake }) => ($shake ? WARNING : "#e0e0e0")};
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 15px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  ${({ $shake }) => $shake && css`animation: ${shake} 0.4s ease;`}
`;

export const FieldError = styled.p`
  font-size: 14px;
  color: ${WARNING};
  margin: 5px 0 0;
`;

export const FeeText = styled.div`
  font-size: 15px;
  color: ${PRIMARY};
  font-weight: 600;
`;

export const FeeNote = styled.div`
  font-size: 14px;
  color: #999;
  font-weight: 400;
  margin-top: 4px;
`;

export const ReceiveNote = styled.p`
  font-size: 14px;
  color: #888;
  margin: 6px 0 0;
`;

export const MsgBox = styled.div`
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  background: ${({ $success }) => ($success ? "#eaffea" : "#fff0f0")};
  color: ${({ $success }) => ($success ? "#1a7f1a" : "#c0392b")};
  border: 1px solid ${({ $success }) => ($success ? "#b2dfb2" : "#f5c6c6")};
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

export const ReadonlyInput = styled.input`
  width: 100%;
  border: 1.5px solid #e8e8e8;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 15px;
  color: #555;
  background: #f7f7f7;
  outline: none;
  box-sizing: border-box;
  cursor: default;
`;

export const StepDivider = styled.div`
  border-top: 1px dashed #e0e0e0;
  margin: 4px 0;
`;

export const LoginPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 36px;
  gap: 10px;
`;

export const LoginPromptIcon = styled.div`
  font-size: 36px;
  margin-bottom: 4px;
`;

export const LoginPromptText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #222;
`;

export const LoginPromptSub = styled.div`
  font-size: 15px;
  color: #999;
  margin-bottom: 8px;
`;

export const LoginPromptBtn = styled.button`
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

export const InlineRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SmallBtn = styled.button`
  flex-shrink: 0;
  background: ${({ $green }) => ($green ? "#27ae60" : PRIMARY)};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FieldHint = styled.p`
  font-size: 14px;
  color: ${({ $ok }) => ($ok ? "#27ae60" : WARNING)};
  margin: 5px 0 0;
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
