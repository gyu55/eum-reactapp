import React, { useState } from "react";

import {
  WithdrawReasonSection,
  WithdrawReasonTitle,
  WithdrawReasonDesc,
  WithdrawReasonCardBox,
  ReasonList,
  ReasonColumn,
  ReasonItem,
  ReasonRadio,
  ReasonCircle,
  OtherReasonRow,
  OtherReasonInput,
} from "../style";

const leftReasons = [
  "자주 사용하지 않아요",
  "원하는 기능이 없어요",
  "서비스 이용이 불편했어요",
];

const rightReasons = [
  "개인정보가 걱정돼요",
  "다른 계정을 사용할게요",
  "기타",
];

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

const WithdrawReasonCard = () => {
  const [selectedReason, setSelectedReason] = useState("");

  return (
    <WithdrawReasonSection>
      <WithdrawReasonTitle>탈퇴 사유 선택</WithdrawReasonTitle>
      <WithdrawReasonDesc>어떤 이유로 탈퇴하시나요?</WithdrawReasonDesc>

      <WithdrawReasonCardBox>
        {/* 탈퇴 사유 선택값은 회원 탈퇴 요청 시 함께 전달 */}
        <ReasonList>
          <ReasonColumn>
            {leftReasons.map((reason) => {
              const checked = selectedReason === reason;

              return (
                <ReasonItem key={reason}>
                  <ReasonRadio
                    type="checkbox"
                    name="withdrawReason"
                    checked={checked}
                    onChange={() =>
                      setSelectedReason((prev) => (prev === reason ? "" : reason))
                    }
                  />
                  <ReasonCircle $checked={checked}>
                    {checked && <CheckIcon />}
                  </ReasonCircle>
                  {reason}
                </ReasonItem>
              );
            })}
          </ReasonColumn>

          <ReasonColumn>
            {rightReasons.map((reason) => {
              const checked = selectedReason === reason;

              if (reason === "기타") {
                return (
                  <OtherReasonRow key={reason}>
                    <ReasonItem>
                      <ReasonRadio
                        type="checkbox"
                        name="withdrawReason"
                        checked={checked}
                        onChange={() =>
                          setSelectedReason((prev) => (prev === reason ? "" : reason))
                        }
                      />
                      <ReasonCircle $checked={checked}>
                        {checked && <CheckIcon />}
                      </ReasonCircle>
                      {reason}
                    </ReasonItem>
                    {/* API 연동 필요 */}
                    {checked && (
                      <OtherReasonInput placeholder="기타 사유 입력" />
                    )}
                  </OtherReasonRow>
                );
              }

              return (
                <ReasonItem key={reason}>
                  <ReasonRadio
                    type="checkbox"
                    name="withdrawReason"
                    checked={checked}
                    onChange={() =>
                      setSelectedReason((prev) => (prev === reason ? "" : reason))
                    }
                  />
                  <ReasonCircle $checked={checked}>
                    {checked && <CheckIcon />}
                  </ReasonCircle>
                  {reason}
                </ReasonItem>
              );
            })}
          </ReasonColumn>
        </ReasonList>
      </WithdrawReasonCardBox>
    </WithdrawReasonSection>
  );
};

export default WithdrawReasonCard;