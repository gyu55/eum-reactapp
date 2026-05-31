import React from "react";

import WithdrawActionButtons from "./WithdrawActionButtons";

import S from "../style";

const CheckIcon = () => {
  return (
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4.5L4.33333 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const ConfirmWithdrawCard = ({
  userInfo,
  isSocialUser,
  userPassword,
  setUserPassword,
  emailCode,
  setEmailCode,
  isEmailCodeSent,
  withdrawAgree,
  setWithdrawAgree,
  onSendEmailCode,
  onWithdrawSubmit,
  isSubmitting,
}) => {
  const canShowAgreeCheck = isSocialUser
    ? isEmailCodeSent && emailCode.trim()
    : userPassword.trim();

  return (
    <S.ConfirmWithdrawSection>
      <S.ConfirmWithdrawTitle>정말 탈퇴하시겠어요?</S.ConfirmWithdrawTitle>

      <S.ConfirmWithdrawCardBox>
        {isSocialUser ? (
          <S.ConfirmPasswordArea>
            <S.ConfirmPasswordLabel>이메일 인증</S.ConfirmPasswordLabel>

            <S.EmailAuthInfo>
              {userInfo.userEmail}로 인증번호를 발송합니다.
            </S.EmailAuthInfo>

            <S.EmailAuthRow>
              <S.ConfirmPasswordInput
                type="text"
                value={emailCode}
                onChange={(e) => {
                  setEmailCode(e.target.value);
                  setWithdrawAgree(false);
                }}
                placeholder="이메일 인증번호 입력"
              />

              <S.EmailAuthButton type="button" onClick={onSendEmailCode}>
                {isEmailCodeSent ? "재발송" : "인증 발송"}
              </S.EmailAuthButton>
            </S.EmailAuthRow>

            <S.EmailAuthDesc>
              인증번호는 탈퇴하기 버튼을 누를 때 최종 확인됩니다.
            </S.EmailAuthDesc>
          </S.ConfirmPasswordArea>
        ) : (
          <S.ConfirmPasswordArea>
            <S.ConfirmPasswordLabel>비밀번호 입력</S.ConfirmPasswordLabel>

            {/* 일반 회원 탈퇴 확인용 비밀번호 */}
            <S.ConfirmPasswordInput
              type="password"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
                setWithdrawAgree(false);
              }}
              placeholder="비밀번호 입력"
            />
          </S.ConfirmPasswordArea>
        )}

        {canShowAgreeCheck && (
          <S.ConfirmCheckRow>
            <S.ConfirmCheckInput
              type="checkbox"
              checked={withdrawAgree}
              onChange={() => setWithdrawAgree((prev) => !prev)}
            />

            <S.ConfirmCheckBox $checked={withdrawAgree}>
              {withdrawAgree && <CheckIcon />}
            </S.ConfirmCheckBox>

            안내 사항을 확인했고 탈퇴 후 복구가 어려울 수 있음을 이해했습니다.
          </S.ConfirmCheckRow>
        )}
      </S.ConfirmWithdrawCardBox>

      <WithdrawActionButtons
        onWithdrawSubmit={onWithdrawSubmit}
        isSubmitting={isSubmitting}
      />
    </S.ConfirmWithdrawSection>
  );
};

export default ConfirmWithdrawCard;