import React from "react";
import ReactDOM from "react-dom";
import * as S from "../../community/common/alertPopupStyle";
import styled from "styled-components";
import theme from "../../../styles/theme";
import * as JS from "../../auth/join/style";

const ResultButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: 12px;
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

const InquireDonePopup = ({
  isOpen,
  onClose,
  title = "문의가 등록되었습니다!",
  sub = "답변은 문의 결과 페이지에서 확인하실 수 있습니다.",
  buttonText = "문의 결과 보기",
  onConfirm,
  showCheck = true,
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onClose();
    if (onConfirm) onConfirm();
  };

  return ReactDOM.createPortal(
    <S.Overlay onClick={onClose}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        <JS.DoneWrap>
          {showCheck && (
            <JS.CheckCircle>
              <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" r="24" stroke="#4359fc" strokeWidth="2.5" />
                <path
                  d="M14 26l9 9 15-15"
                  stroke="#4359fc"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </JS.CheckCircle>
          )}
          <JS.DoneTitle>{title}</JS.DoneTitle>
          <JS.DoneSub>{sub}</JS.DoneSub>
        </JS.DoneWrap>
        <S.ButtonRow>
          <S.CancelButton onClick={onClose}>닫기</S.CancelButton>
          <ResultButton onClick={handleConfirm}>{buttonText}</ResultButton>
        </S.ButtonRow>
      </S.Card>
    </S.Overlay>,
    document.body
  );
};

export default InquireDonePopup;