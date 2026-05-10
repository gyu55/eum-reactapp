import React from "react";

import {
  PhoneInput,
  AccountInfoSection,
  SectionTitle,
  SectionDesc,
  AccountInfoCardBox,
  AccountFieldGroup,
  Field,
  PhoneField,
  PhoneInputRow,
  Label,
  Required,
  Input,
  CheckButton,
  FieldDesc,
  AccountDivider,
  AccountBottomArea,
  ButtonArea,
  CancelButton,
  SaveButton,
} from "../style";

const AccountInfoCard = () => {
  return (
    <AccountInfoSection>
      {/* 섹션 제목 */}
      <SectionTitle>계정 정보</SectionTitle>

      {/* 섹션 설명 */}
      <SectionDesc>이메일 및 연락처 정보를 수정합니다</SectionDesc>

      {/* 계정 정보 카드 */}
      <AccountInfoCardBox>
        <AccountFieldGroup>
          {/* 이메일 */}
          <Field>
            <Label>
              이메일
              <Required>*</Required>
            </Label>

            {/* 이메일 정보 연동 */}
            <Input type="email" placeholder="user123@gmail.com" />

            <FieldDesc>
              이메일은 변경할 수 없습니다 · 소셜 로그인 계정
            </FieldDesc>
          </Field>

          {/* 전화번호 */}
          <PhoneField>
            <Label>
              전화번호
              <Required>*</Required>
            </Label>

            <PhoneInputRow>
              {/* 전화번호 정보 연동 */}
              <PhoneInput type="tel" placeholder="01012345678" />

              {/* 휴대폰 인증 연동 */}
              <CheckButton type="button">인증하기</CheckButton>
            </PhoneInputRow>

            <FieldDesc>
              알림 수신 및 본인 확인에 사용됩니다
            </FieldDesc>
          </PhoneField>
        </AccountFieldGroup>

        <AccountDivider />

        <AccountBottomArea>
          <ButtonArea>
            <CancelButton type="button">취소</CancelButton>

            {/* 계정 정보 저장 연동 */}
            <SaveButton type="button">저장하기</SaveButton>
          </ButtonArea>
        </AccountBottomArea>
      </AccountInfoCardBox>
    </AccountInfoSection>
  );
};

export default AccountInfoCard;