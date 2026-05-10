import React from "react";
import { useNavigate } from "react-router-dom";

import {
  WithdrawActionArea,
  WithdrawCancelButton,
  WithdrawSubmitButton,
} from "../style";

const WithdrawActionButtons = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/mypage");
  };

  const handleWithdrawClick = () => {
    // 회원 탈퇴 요청 연동
    console.log("회원 탈퇴");
  };

  return (
    <WithdrawActionArea>
      <WithdrawCancelButton type="button" onClick={handleCancelClick}>
        취소
      </WithdrawCancelButton>

      <WithdrawSubmitButton type="button" onClick={handleWithdrawClick}>
        회원 탈퇴
      </WithdrawSubmitButton>
    </WithdrawActionArea>
  );
};

export default WithdrawActionButtons;