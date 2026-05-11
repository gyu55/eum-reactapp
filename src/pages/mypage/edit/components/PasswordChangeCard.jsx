import React from "react";

import {
  PasswordSection,
  SectionTitle,
  SectionDesc,
  PasswordCardBox,
  PasswordFullField,
  PasswordFieldGroup,
  PasswordField,
  Label,
  Required,
  PasswordInput,
  PasswordStrengthBar,
  PasswordStrengthItem,
  PasswordDesc,
  PasswordDivider,
  PasswordBottomArea,
  PasswordGuide,
  ButtonArea,
  CancelButton,
  SaveButton,
} from "../style";

const PasswordChangeCard = () => {
  return (
    <PasswordSection>
      {/* 섹션 제목 */}
      <SectionTitle>비밀번호 변경</SectionTitle>

      {/* 섹션 설명 */}
      <SectionDesc>
        계정 보안을 위해 주기적으로 비밀번호를 변경해 주세요
      </SectionDesc>

      {/* 비밀번호 변경 카드 */}
      <PasswordCardBox>
        {/* 현재 비밀번호 */}
        <PasswordFullField>
          <Label>
            현재 비밀번호
            <Required>*</Required>
          </Label>

          {/* 현재 비밀번호 확인 */}
          <PasswordInput
            type="password"
            placeholder="현재 비밀번호를 입력해 주세요"
          />
        </PasswordFullField>

        <PasswordFieldGroup>
          {/* 새 비밀번호 */}
          <PasswordField>
            <Label>
              새 비밀번호
              <Required>*</Required>
            </Label>

            {/* 새 비밀번호 입력 */}
            <PasswordInput
              type="password"
              placeholder="새 비밀번호 (8자 이상)"
            />

            <PasswordStrengthBar>
              <PasswordStrengthItem />
              <PasswordStrengthItem />
              <PasswordStrengthItem />
            </PasswordStrengthBar>

            <PasswordDesc>비밀번호를 입력해 주세요</PasswordDesc>
          </PasswordField>

          {/* 새 비밀번호 확인 */}
          <PasswordField>
            <Label>
              새 비밀번호 확인
              <Required>*</Required>
            </Label>

            {/* 새 비밀번호 재입력 */}
            <PasswordInput
              type="password"
              placeholder="새 비밀번호를 다시 입력해 주세요"
            />
          </PasswordField>
        </PasswordFieldGroup>

        <PasswordDivider />

        <PasswordBottomArea>
          <PasswordGuide>
            영문·숫자·특수문자 조합 8자 이상 권장
          </PasswordGuide>

          <ButtonArea>
            <CancelButton type="button">취소</CancelButton>

            {/* 비밀번호 변경 처리 */}
            <SaveButton type="button">변경하기</SaveButton>
          </ButtonArea>
        </PasswordBottomArea>
      </PasswordCardBox>
    </PasswordSection>
  );
};

export default PasswordChangeCard;