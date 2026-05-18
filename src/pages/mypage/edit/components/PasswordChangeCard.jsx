import React from "react";

import S from "../style";

const PasswordChangeCard = () => {
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
        {/* 현재 비밀번호 */}
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
          {/* 새 비밀번호 */}
          <S.PasswordField>
            <S.Label>
              새 비밀번호
              <S.Required>*</S.Required>
            </S.Label>

            {/* 새 비밀번호 입력 */}
            <S.PasswordInput
              type="password"
              placeholder="새 비밀번호 (8자 이상)"
            />

            <S.PasswordStrengthBar>
              <S.PasswordStrengthItem />
              <S.PasswordStrengthItem />
              <S.PasswordStrengthItem />
            </S.PasswordStrengthBar>

            <S.PasswordDesc>비밀번호를 입력해 주세요</S.PasswordDesc>
          </S.PasswordField>

          {/* 새 비밀번호 확인 */}
          <S.PasswordField>
            <S.Label>
              새 비밀번호 확인
              <S.Required>*</S.Required>
            </S.Label>

            {/* 새 비밀번호 재입력 */}
            <S.PasswordInput
              type="password"
              placeholder="새 비밀번호를 다시 입력해 주세요"
            />
          </S.PasswordField>
        </S.PasswordFieldGroup>

        <S.PasswordDivider />

        <S.PasswordBottomArea>
          <S.PasswordGuide>
            영문·숫자·특수문자 조합 8자 이상 권장
          </S.PasswordGuide>

          <S.ButtonArea>
            <S.CancelButton type="button">취소</S.CancelButton>

            {/* 비밀번호 변경 처리 */}
            <S.SaveButton type="button">변경하기</S.SaveButton>
          </S.ButtonArea>
        </S.PasswordBottomArea>
      </S.PasswordCardBox>
    </S.PasswordSection>
  );
};

export default PasswordChangeCard;