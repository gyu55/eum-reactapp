import styled from "styled-components";

const PRIMARY = "#4359fc";

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
  max-width: 420px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 160px;
  margin-bottom: 40px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  color: #111;
  outline: none;
  box-sizing: border-box;
  background: #fff;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${PRIMARY};
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const AutoLoginRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
`;

export const AutoLoginCheckbox = styled.input`
  width: 15px;
  height: 15px;
  accent-color: ${PRIMARY};
  cursor: pointer;
`;

export const AutoLoginLabel = styled.label`
  font-size: 15px;
  color: #666;
  cursor: pointer;
  user-select: none;
`;

export const ErrorMsg = styled.div`
  width: 100%;
  font-size: 14px;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 8px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 16px;
  letter-spacing: 0.5px;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const SubLinks = styled.div`
  display: flex;
  gap: 24px;
  font-size: 15px;
  color: #888;
  margin-bottom: 24px;

  span {
    cursor: pointer;
    &:hover {
      color: ${PRIMARY};
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #bbb;
  position: relative;
  margin-bottom: 20px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 43%;
    height: 1px;
    background: #eee;
  }
  &::before { left: 0; }
  &::after { right: 0; }
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const SocialTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #555;
`;

export const SocialBtnRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialCircle = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: ${({ $outline }) => ($outline ? "1.5px solid #e0e0e0" : "none")};
  background: ${({ $bg }) => $bg || "#fff"};
  color: ${({ $color }) => $color || "#111"};
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
