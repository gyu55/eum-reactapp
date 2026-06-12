import ReactDOM from "react-dom";
import * as S from "./alertPopupStyle";

const ConfirmPopup = ({ isOpen, message, onConfirm, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.Overlay onClick={onClose}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        <S.Title>[알림]</S.Title>
        <S.InfoLabel style={{ color: "inherit", fontWeight: "normal" }}>
          {message}
        </S.InfoLabel>
        <S.ButtonRow>
          <S.CancelButton onClick={onClose}>아니오</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>예</S.ConfirmButton>
        </S.ButtonRow>
      </S.Card>
    </S.Overlay>,
    document.body
  );
};

export default ConfirmPopup;
