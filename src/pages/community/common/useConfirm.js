import { useState, useRef } from "react";
import ConfirmPopup from "./ConfirmPopup";

const useConfirm = () => {
  const [state, setState] = useState({ isOpen: false, message: "" });
  const resolveRef = useRef(null);

  const confirm = (message) => {
    setState({ isOpen: true, message });
    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  };

  const handleConfirm = () => {
    setState({ isOpen: false, message: "" });
    resolveRef.current?.(true);
  };

  const handleClose = () => {
    setState({ isOpen: false, message: "" });
    resolveRef.current?.(false);
  };

  const ConfirmPopupComponent = (
    <ConfirmPopup
      isOpen={state.isOpen}
      message={state.message}
      onConfirm={handleConfirm}
      onClose={handleClose}
    />
  );

  return { confirm, ConfirmPopupComponent };
};

export default useConfirm;
