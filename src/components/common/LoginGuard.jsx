import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PRIMARY = "#4359fc";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 44px;
  gap: 10px;
`;

const Icon = styled.div`
  font-size: 38px;
  margin-bottom: 4px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #222;
`;

const Sub = styled.div`
  font-size: 13px;
  color: #999;
  margin-bottom: 8px;
`;

const Btn = styled.button`
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 36px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 4px;
`;

const LoginGuard = ({ message = "로그인 후 이용 가능한 서비스입니다." }) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Icon>🔒</Icon>
      <Title>{message}</Title>
      <Sub>해당 기능은 회원 로그인이 필요합니다.</Sub>
      <Btn onClick={() => navigate("/auth/login")}>로그인하기</Btn>
    </Wrap>
  );
};

export default LoginGuard;
