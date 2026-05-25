import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const PasswordChangeCard = ({ userInfo }) => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 소셜 로그인 회원은 비밀번호가 없어서 변경 불가
  const isSocialUser = !userInfo?.userPassword && userInfo?.userEmail;

  const strengthCount =
    newPassword.length >= 8 ? 3 : newPassword.length >= 6 ? 2 : newPassword.length >= 3 ? 1 : 0;

  const isPasswordMismatch =
    confirmPassword.length > 0 && newPassword !== confirmPassword;

  // 비밀번호 변경
  const handleChangePassword = async () => {
    if (isSocialUser) {
      alert("소셜 로그인 회원은 비밀번호를 변경할 수 없습니다.");
      return;
    }

    if (!currentPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      alert("비밀번호를 모두 입력해 주세요.");
      return;
    }

    if (newPassword.length < 8) {
      alert("새 비밀번호는 8자 이상 입력해 주세요.");
      return;
    }

    if (isPasswordMismatch) {
      alert("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const params = new URLSearchParams({
        currentPassword,
        newPassword,
      });

      const response = await fetch(
        `http://localhost:10000/private/api/mypage/edit/password?${params.toString()}`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert("비밀번호가 변경되었습니다.");
      navigate("/mypage");
    } catch (error) {
      console.error(error);
      alert("비밀번호 변경에 실패했습니다.");
    }
  };

  // 입력값 초기화
  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <S.PasswordSection>
      {/* 섹션 제목 */}
      <S.SectionTitle>비밀번호 변경</S.SectionTitle>

      {/* 섹션 설명 */}
      <S.SectionDesc>
        계정 보안을 위해 주기적으로 비밀번호를 변경해 주세요
      </S.SectionDesc>

      <S.PasswordCardBox>
        <S.PasswordFullField>
          <S.Label>
            현재 비밀번호
            <S.Required>*</S.Required>
          </S.Label>

          <S.PasswordInput
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="현재 비밀번호를 입력해 주세요"
            disabled={isSocialUser}
          />
        </S.PasswordFullField>

        <S.PasswordFieldGroup>
          <S.PasswordField>
            <S.Label>
              새 비밀번호
              <S.Required>*</S.Required>
            </S.Label>

            <S.PasswordInput
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="새 비밀번호 (8자 이상)"
              disabled={isSocialUser}
            />

            <S.PasswordStrengthBar>
              <S.PasswordStrengthItem $active={!isSocialUser && strengthCount >= 1} />
              <S.PasswordStrengthItem $active={!isSocialUser && strengthCount >= 2} />
              <S.PasswordStrengthItem $active={!isSocialUser && strengthCount >= 3} />
            </S.PasswordStrengthBar>

            {newPassword.length === 0 && !isSocialUser && (
              <S.PasswordDesc>비밀번호를 입력해 주세요</S.PasswordDesc>
            )}
          </S.PasswordField>

          <S.PasswordField>
            <S.Label>
              새 비밀번호 확인
              <S.Required>*</S.Required>
            </S.Label>

            <S.PasswordInput
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="새 비밀번호를 다시 입력해 주세요"
              disabled={isSocialUser}
            />

            {isPasswordMismatch && !isSocialUser && (
              <S.PasswordErrorText>
                비밀번호가 틀립니다.
              </S.PasswordErrorText>
            )}
          </S.PasswordField>
        </S.PasswordFieldGroup>

        <S.PasswordDivider />

        <S.PasswordBottomArea>
          <S.PasswordGuide>
            {isSocialUser
              ? "소셜 로그인은 비밀번호를 변경할 수 없습니다."
              : "영문·숫자·특수문자 조합 8자 이상 권장"}
          </S.PasswordGuide>

          <S.ButtonArea>
            <S.CancelButton type="button" onClick={handleCancel}>
              취소
            </S.CancelButton>

            <S.SaveButton
              type="button"
              onClick={handleChangePassword}
              disabled={isSocialUser}
            >
              변경하기
            </S.SaveButton>
          </S.ButtonArea>
        </S.PasswordBottomArea>
      </S.PasswordCardBox>
    </S.PasswordSection>
  );
};

export default PasswordChangeCard;