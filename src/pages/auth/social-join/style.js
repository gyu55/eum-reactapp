import styled, { keyframes } from "styled-components";

const PRIMARY = "#4359fc";

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
  from { transform: translateY(28px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`;

export const PageWrap = styled.div`
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

export const FormBox = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 140px;
  margin-bottom: 36px;
`;

export const Card = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 36px 32px;
`;

export const ProviderBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: ${PRIMARY};
  background: #eef0ff;
  border: 1px solid #c5caff;
  border-radius: 20px;
  padding: 4px 14px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #111;
  margin-bottom: 20px;
  letter-spacing: -0.3px;
`;

export const SectionBlock = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const BlockTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${PRIMARY};
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #555;
  margin-bottom: 4px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #111;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${PRIMARY};
  }

  &::placeholder {
    color: #bbb;
  }

  &:disabled {
    background: #f9f9f9;
    color: #aaa;
  }
`;

export const InlineRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

export const SmallBtn = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  background: ${({ $green }) => ($green ? "#03C75A" : PRIMARY)};
  color: #fff;

  &:disabled {
    background: #c0c0c0;
    cursor: not-allowed;
  }
`;

export const StatusMsg = styled.div`
  font-size: 12px;
  color: ${({ $success }) => ($success ? "#03C75A" : "#e74c3c")};
  margin-top: 6px;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 13px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  transition: opacity 0.15s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 13px;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 12px;
`;

export const DoneWrap = styled.div`
  text-align: center;
  padding: 20px 0;
`;

export const CheckCircle = styled.div`
  width: 88px;
  height: 88px;
  margin: 0 auto 28px;
  animation: ${scaleIn} 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  svg { width: 100%; height: 100%; }

  path {
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: ${drawCheck} 0.4s ease 0.45s forwards;
  }
`;

export const DoneTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
  opacity: 0;
  animation: ${slideUp} 0.5s ease 0.35s forwards;
`;

export const DoneSub = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 36px;
  opacity: 0;
  animation: ${slideUp} 0.5s ease 0.5s forwards;
`;
