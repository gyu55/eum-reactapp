import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./alertPopupStyle";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { RADIUS } from "../constants";

const LoginButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: ${RADIUS.button};
  border: none;
  background: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${theme.PALETTE.primary.dark};
  }
`;

const LoginRequiredPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = () => {
    onClose();
    navigate("/login");
  };

  return ReactDOM.createPortal(
    <S.Overlay onClick={onClose}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        <S.Title>안내</S.Title>
        <S.InfoLabel style={{ color: "inherit" }}>
          로그인이 필요합니다.
        </S.InfoLabel>
        <S.ButtonRow>
          <S.CancelButton onClick={onClose}>닫기</S.CancelButton>
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </S.ButtonRow>
      </S.Card>
    </S.Overlay>,
    document.body
  );
};

export default LoginRequiredPopup;
