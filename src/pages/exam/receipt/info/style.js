import styled from "styled-components";

const STEP_COLORS = ["#4359fc", "#27ae60", "#e67e22", "#e74c3c"];

export const StepCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px 24px;
`;

export const StepItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 12px 0;
`;

export const StepCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $index }) => STEP_COLORS[$index]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
`;

export const StepTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #111;
`;

export const StepDesc = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 2px;
`;

export const StepDivider = styled.div`
  width: 1px;
  height: 14px;
  background: #e0e0e0;
  margin-left: 13px;
`;

export const WarningBox = styled.div`
  background: #fff8f0;
  border: 1px solid #ffd7a8;
  border-radius: 8px;
  padding: 10px 14px;
  margin-top: 12px;
  font-size: 12px;
  color: #e67e22;
`;

export const Note = styled.div`
  font-size: 11px;
  color: #999;
  margin-top: 6px;
  padding-left: 4px;
`;
