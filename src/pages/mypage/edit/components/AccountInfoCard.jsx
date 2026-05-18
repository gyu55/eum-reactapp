import React from "react";

import S from "../style";

const AccountInfoCard = () => {
  return (
    <S.AccountInfoSection>
      {/* 섹션 제목 */}
      <S.SectionTitle>계정 정보</S.SectionTitle>

      {/* 섹션 설명 */}
      <S.SectionDesc>이메일 및 연락처 정보를 수정합니다</S.SectionDesc>

      {/* 계정 정보 카드 */}
      <S.AccountInfoCardBox>
        <S.AccountFieldGroup>
          {/* 이메일 */}
          <S.Field>
            <S.Label>
              이메일
              <S.Required>*</S.Required>
            </S.Label>

            {/* 이메일 정보 연동 */}
            <S.Input type="email" placeholder="user123@gmail.com" />

            <S.FieldDesc>
              이메일은 변경할 수 없습니다 · 소셜 로그인 계정
            </S.FieldDesc>
          </S.Field>

          {/* 전화번호 */}
          <S.PhoneField>
            <S.Label>
              전화번호
              <S.Required>*</S.Required>
            </S.Label>

            <S.PhoneInputRow>
              {/* 전화번호 정보 연동 */}
              <S.PhoneInput type="tel" placeholder="01012345678" />

              {/* 휴대폰 인증 연동 */}
              <S.CheckButton type="button">인증하기</S.CheckButton>
            </S.PhoneInputRow>

            <S.FieldDesc>
              알림 수신 및 본인 확인에 사용됩니다
            </S.FieldDesc>
          </S.PhoneField>
        </S.AccountFieldGroup>

        <S.AccountDivider />

        <S.AccountBottomArea>
          <S.ButtonArea>
            <S.CancelButton type="button">취소</S.CancelButton>

            {/* 계정 정보 저장 연동 */}
            <S.SaveButton type="button">저장하기</S.SaveButton>
          </S.ButtonArea>
        </S.AccountBottomArea>
      </S.AccountInfoCardBox>
    </S.AccountInfoSection>
  );
};

export default AccountInfoCard;