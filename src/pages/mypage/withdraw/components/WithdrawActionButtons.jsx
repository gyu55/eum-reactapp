import React from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const WithdrawActionButtons = ({ onWithdrawSubmit, isSubmitting }) => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/mypage");
  };

  return (
    <S.WithdrawActionArea>
      <S.WithdrawCancelButton type="button" onClick={handleCancelClick}>
        취소
      </S.WithdrawCancelButton>

      <S.WithdrawSubmitButton
        type="button"
        onClick={onWithdrawSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? "처리 중" : "회원 탈퇴"}
      </S.WithdrawSubmitButton>
    </S.WithdrawActionArea>
  );
};

export default WithdrawActionButtons;