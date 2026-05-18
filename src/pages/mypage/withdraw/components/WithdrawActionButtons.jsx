import React from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

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
    <S.WithdrawActionArea>
      <S.WithdrawCancelButton type="button" onClick={handleCancelClick}>
        취소
      </S.WithdrawCancelButton>

      <S.WithdrawSubmitButton type="button" onClick={handleWithdrawClick}>
        회원 탈퇴
      </S.WithdrawSubmitButton>
    </S.WithdrawActionArea>
  );
};

export default WithdrawActionButtons;