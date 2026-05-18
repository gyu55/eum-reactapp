import React, { useState } from "react";
import WithdrawActionButtons from "./WithdrawActionButtons";

import S from "../style";

const CheckIcon = () => {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.5L4.33333 8L11 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ConfirmWithdrawCard = () => {
  const [checked, setChecked] = useState(false);

  return (
    <S.ConfirmWithdrawSection>
      <S.ConfirmWithdrawTitle>
        정말 탈퇴하시겠어요?
      </S.ConfirmWithdrawTitle>

      <S.ConfirmWithdrawCardBox>
        <S.ConfirmCheckRow>
          <S.ConfirmCheckInput
            type="checkbox"
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />

          <S.ConfirmCheckBox $checked={checked}>
            {checked && <CheckIcon />}
          </S.ConfirmCheckBox>

          안내 사항을 확인했고 탈퇴 후 복구가 어려울 수 있음을 이해했습니다.
        </S.ConfirmCheckRow>

        <S.ConfirmPasswordArea>
          <S.ConfirmPasswordLabel>
            비밀번호 입력
          </S.ConfirmPasswordLabel>

          {/* 탈퇴 확인용 비밀번호 입력 */}
          <S.ConfirmPasswordInput
            type="password"
            placeholder="비밀번호 입력"
          />
        </S.ConfirmPasswordArea>
      </S.ConfirmWithdrawCardBox>

      <WithdrawActionButtons />
    </S.ConfirmWithdrawSection>
  );
};

export default ConfirmWithdrawCard;