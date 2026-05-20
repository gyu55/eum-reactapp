import React, { useState } from "react";

import S from "../style";

const PasswordChangeCard = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const strengthCount =
    newPassword.length >= 8 ? 3 : newPassword.length >= 6 ? 2 : newPassword.length >= 3 ? 1 : 0;

  const isPasswordMismatch =
    confirmPassword.length > 0 && newPassword !== confirmPassword;

  const handleChangePassword = () => {
    // 비밀번호 변경 API 연동 예정
    if (isPasswordMismatch) {
      alert("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
  };

  return (
    <S.PasswordSection>
      {/* 섹션 제목 */}
      <S.SectionTitle>비밀번호 변경</S.SectionTitle>

      {/* 섹션 설명 */}
      <S.SectionDesc>
        계정 보안을 위해 주기적으로 비밀번호를 변경해 주세요
      </S.SectionDesc>

      {/* 비밀번호 변경 카드 */}
      <S.PasswordCardBox>
        <S.PasswordFullField>
          <S.Label>
            현재 비밀번호
            <S.Required>*</S.Required>
          </S.Label>

          {/* 현재 비밀번호 확인 */}
          <S.PasswordInput
            type="password"
            placeholder="현재 비밀번호를 입력해 주세요"
          />
        </S.PasswordFullField>

        <S.PasswordFieldGroup>
          <S.PasswordField>
            <S.Label>
              새 비밀번호
              <S.Required>*</S.Required>
            </S.Label>

            {/* 새 비밀번호 입력 */}
            <S.PasswordInput
              type="password"
              placeholder="새 비밀번호 (8자 이상)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            {/* 비밀번호 강도 표시 */}
            <S.PasswordStrengthBar>
              <S.PasswordStrengthItem $active={strengthCount >= 1} />
              <S.PasswordStrengthItem $active={strengthCount >= 2} />
              <S.PasswordStrengthItem $active={strengthCount >= 3} />
            </S.PasswordStrengthBar>

            {newPassword.length === 0 && (
              <S.PasswordDesc>비밀번호를 입력해 주세요</S.PasswordDesc>
            )}
          </S.PasswordField>

          <S.PasswordField>
            <S.Label>
              새 비밀번호 확인
              <S.Required>*</S.Required>
            </S.Label>

            {/* 새 비밀번호 재입력 */}
            <S.PasswordInput
              type="password"
              placeholder="새 비밀번호를 다시 입력해 주세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {isPasswordMismatch && (
              <S.PasswordErrorText>
                비밀번호가 틀립니다.
              </S.PasswordErrorText>
            )}
          </S.PasswordField>
        </S.PasswordFieldGroup>

        <S.PasswordDivider />

        <S.PasswordBottomArea>
          <S.PasswordGuide>
            영문·숫자·특수문자 조합 8자 이상 권장
          </S.PasswordGuide>

          <S.ButtonArea>
            <S.CancelButton type="button">
              취소
            </S.CancelButton>

            {/* 비밀번호 변경 처리 */}
            <S.SaveButton type="button" onClick={handleChangePassword}>
              변경하기
            </S.SaveButton>
          </S.ButtonArea>
        </S.PasswordBottomArea>
      </S.PasswordCardBox>
    </S.PasswordSection>
  );
};

export default PasswordChangeCard;