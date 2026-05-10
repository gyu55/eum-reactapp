import React, { useState } from "react";

import {
  SectionTitle,
  SectionDesc,
  ProfileEditCard,
  ProfileTop,
  ProfileImageBox,
  ProfileImageInfo,
  ProfileImageTitle,
  UploadDesc,
  ImageButtonArea,
  ImageChangeButton,
  ImageDeleteButton,
  FormArea,
  FieldGroup,
  Field,
  NicknameField,
  Label,
  Required,
  Input,
  NicknameInput,
  NicknameInputRow,
  CheckButton,
  IntroArea,
  IntroLabelRow,
  OptionalBadge,
  IntroTextarea,
  CountText,
  ExtraDivider,
  ExtraLabel,
  ExtraFormArea,
  SelectWrapper,
  Select,
  BottomDivider,
  BottomArea,
  RequiredGuide,
  ButtonArea,
  CancelButton,
  SaveButton,
  ProfileSection,
} from "../style";

const ProfileCard = () => {
  const [job, setJob] = useState("학생");
  const [region, setRegion] = useState("서울 · 수도권");

  return (
    <>
    <ProfileSection>
      {/* 섹션 제목 */}
      <SectionTitle>기본 프로필</SectionTitle>

      {/* 섹션 설명 */}
      <SectionDesc>
        프로필 사진, 이름, 닉네임 등 기본 정보를 수정합니다
      </SectionDesc>
    </ProfileSection>
    
      {/* 기본 프로필 카드 */}
      <ProfileEditCard>
        {/* 프로필 상단 */}
        <ProfileTop>
          {/* 프로필 이미지 */}
          <ProfileImageBox />

          {/* 프로필 이미지 정보 */}
          <ProfileImageInfo>
            <ProfileImageTitle>프로필 사진</ProfileImageTitle>

            <UploadDesc>
              JPG, PNG, GIF 형식 · 최대 5MB
              <br />
              권장 크기: 400×400px 이상
            </UploadDesc>

            {/* 프로필 이미지 변경 */}
            <ImageButtonArea>
              <ImageChangeButton type="button">
                📷 사진 변경
              </ImageChangeButton>

              <ImageDeleteButton type="button">
                삭제
              </ImageDeleteButton>
            </ImageButtonArea>
          </ProfileImageInfo>
        </ProfileTop>

        {/* 입력 영역 */}
        <FormArea>
          {/* 이름 / 닉네임 */}
          <FieldGroup>
            {/* 이름 */}
            <Field>
              <Label>
                이름
                <Required>*</Required>
              </Label>

              {/* 이름 입력 */}
              <Input placeholder="홍길동" />
            </Field>

            {/* 닉네임 */}
            <NicknameField>
              <Label>
                닉네임
                <Required>*</Required>
              </Label>

              <NicknameInputRow>
                {/* 닉네임 입력 */}
                <NicknameInput placeholder="수어러버홍길동" />

                {/* 닉네임 중복 확인 */}
                <CheckButton type="button">
                  중복 확인
                </CheckButton>
              </NicknameInputRow>
            </NicknameField>
          </FieldGroup>

          {/* 자기소개 */}
          <IntroArea>
            <IntroLabelRow>
              <Label as="span">자기소개</Label>

              <OptionalBadge>선택</OptionalBadge>
            </IntroLabelRow>

            {/* 자기소개 입력 */}
            <IntroTextarea
              maxLength={150}
              placeholder="수어를 배우며 더 넓은 세상과 소통하고 싶어요. 매일 조금씩 꾸준히 나아가는 중입니다 😊"
            />

            <CountText>50 / 150</CountText>
          </IntroArea>

          {/* 추가정보 구분선 */}
          <ExtraDivider>
            <ExtraLabel>추가 정보</ExtraLabel>
          </ExtraDivider>

          {/* 추가정보 */}
          <ExtraFormArea>
            <FieldGroup>
              {/* 직업 */}
              <Field>
                <Label>
                  직업
                  <Required>*</Required>
                </Label>

                <SelectWrapper>
                  <Select
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  >
                    <option value="학생">학생</option>
                    <option value="직장인">직장인</option>
                    <option value="프리랜서">프리랜서</option>
                    <option value="기타">기타</option>
                  </Select>
                </SelectWrapper>
              </Field>

              {/* 지역 */}
              <Field>
                <Label>
                  지역
                  <Required>*</Required>
                </Label>

                <SelectWrapper>
                  <Select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="서울 · 수도권">
                      서울 · 수도권
                    </option>

                    <option value="강원권">강원권</option>
                    <option value="충청권">충청권</option>
                    <option value="전라권">전라권</option>
                    <option value="경상권">경상권</option>
                    <option value="제주권">제주권</option>
                  </Select>
                </SelectWrapper>
              </Field>
            </FieldGroup>
          </ExtraFormArea>

          {/* 하단 구분선 */}
          <BottomDivider />

          {/* 하단 버튼 영역 */}
          <BottomArea>
            <RequiredGuide>
              * 표시는 필수 입력 항목입니다
            </RequiredGuide>

            <ButtonArea>
              {/* 취소 */}
              <CancelButton type="button">
                취소
              </CancelButton>

              {/* 기본 프로필 저장 */}
              <SaveButton type="button">
                저장하기
              </SaveButton>
            </ButtonArea>
          </BottomArea>
        </FormArea>
      </ProfileEditCard>
    </>
  );
};

export default ProfileCard;