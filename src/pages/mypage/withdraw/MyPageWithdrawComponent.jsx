import React from "react";

import WithdrawNoticeCard from "./components/WithdrawNoticeCard";
import WithdrawReasonCard from "./components/WithdrawReasonCard";
import ConfirmWithdrawCard from "./components/ConfirmWithdrawCard";

import S from "./style";

const MyPageWithdrawComponent = () => {
  return (
    <S.WithdrawWrapper>
      <S.WithdrawIntroText>
        계정을 삭제하기 전에 아래 내용을 꼭 확인해주세요.
      </S.WithdrawIntroText>

      <WithdrawNoticeCard />
      <WithdrawReasonCard />
      <ConfirmWithdrawCard />
    </S.WithdrawWrapper>
  );
};

export default MyPageWithdrawComponent;