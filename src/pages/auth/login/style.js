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
  padding: 48px 0 40px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #111;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
`;

export const HeroSub = styled.p`
  font-size: 13px;
  color: #888;
  margin: 0;
`;

export const ContentArea = styled.div`
  max-width: 900px;
  margin: 40px auto 80px;
  padding: 0 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

export const LoginCard = styled.div`
  flex: 1;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 36px 32px;
`;

export const CardTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #111;
  margin: 0 0 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
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

export const PrimaryBtn = styled.button`
  width: 100%;
  padding: 12px;
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const OutlineBtn = styled.button`
  width: 100%;
  padding: 12px;
  background: #fff;
  color: ${PRIMARY};
  border: 1.5px solid ${PRIMARY};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const Divider = styled.div`
  text-align: center;
  font-size: 12px;
  color: #bbb;
  position: relative;
  margin: 4px 0 16px;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 42%;
    height: 1px;
    background: #eee;
  }
  &::before { left: 0; }
  &::after { right: 0; }
`;

export const SocialBtnRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SocialBtn = styled.button`
  width: 100%;
  padding: 11px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1.5px solid ${({ $outline }) => ($outline ? "#e0e0e0" : "transparent")};
  background: ${({ $bg }) => $bg || "#fff"};
  color: ${({ $color }) => $color || "#111"};
`;

export const FindPwLink = styled.button`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #888;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 12px;
  text-decoration: underline;
`;

export const FindPwCard = styled.div`
  width: 320px;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 24px;
`;

export const StepLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${PRIMARY};
  margin-bottom: 8px;
`;

export const StepSection = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const InlineRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

export const SmallInput = styled(Input)`
  flex: 1;
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
`;

export const ChangeBtn = styled(PrimaryBtn)`
  margin-top: 16px;
  margin-bottom: 0;
`;
