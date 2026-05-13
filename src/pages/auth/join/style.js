import styled from "styled-components";

const PRIMARY = "#4359fc";

export const PageWrap = styled.div`
  min-height: 100vh;
  background: #f5f5f7;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

export const Hero = styled.div`
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 48px 0 36px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #111;
  margin: 0 0 20px;
  letter-spacing: -0.5px;
`;

export const StepBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const StepCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? PRIMARY : "#e0e0e0")};
  color: ${({ $active }) => ($active ? "#fff" : "#aaa")};
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepName = styled.div`
  font-size: 11px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ $active }) => ($active ? PRIMARY : "#aaa")};
`;

export const StepLine = styled.div`
  width: 48px;
  height: 1px;
  background: #e0e0e0;
  margin-bottom: 18px;
`;

export const ContentArea = styled.div`
  max-width: 600px;
  margin: 40px auto 80px;
  padding: 0 20px;
`;

export const FormCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 36px 32px;
`;

export const SectionTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${PRIMARY};
  margin-bottom: 12px;
`;

export const SectionBlock = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
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
  flex-shrink: 0;
`;

export const AgreeAll = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #111;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const AgreeItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
  cursor: pointer;
  margin-bottom: 6px;
`;

export const AgreeLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ViewLink = styled.span`
  font-size: 11px;
  color: #aaa;
  text-decoration: underline;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 24px;
`;
