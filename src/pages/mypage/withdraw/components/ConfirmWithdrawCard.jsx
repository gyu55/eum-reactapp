import React, { useState } from "react";
import WithdrawActionButtons from "./WithdrawActionButtons";

import {
  ConfirmWithdrawSection,
  ConfirmWithdrawTitle,
  ConfirmWithdrawCardBox,
  ConfirmCheckRow,
  ConfirmCheckInput,
  ConfirmCheckBox,
  ConfirmPasswordArea,
  ConfirmPasswordLabel,
  ConfirmPasswordInput,
} from "../style";

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
    <ConfirmWithdrawSection>
      <ConfirmWithdrawTitle>정말 탈퇴하시겠어요?</ConfirmWithdrawTitle>

      <ConfirmWithdrawCardBox>
        <ConfirmCheckRow>
          <ConfirmCheckInput
            type="checkbox"
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />
          <ConfirmCheckBox $checked={checked}>
            {checked && <CheckIcon />}
          </ConfirmCheckBox>
          안내 사항을 확인했고 탈퇴 후 복구가 어려울 수 있음을 이해했습니다.
        </ConfirmCheckRow>

        <ConfirmPasswordArea>
          <ConfirmPasswordLabel>비밀번호 입력</ConfirmPasswordLabel>

          {/* 탈퇴 확인용 비밀번호 입력 */}
          <ConfirmPasswordInput
            type="password"
            placeholder="비밀번호 입력"
          />
        </ConfirmPasswordArea>
      </ConfirmWithdrawCardBox>

      <WithdrawActionButtons />
    </ConfirmWithdrawSection>
  );
};

export default ConfirmWithdrawCard;