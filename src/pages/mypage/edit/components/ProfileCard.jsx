import React, { useState } from "react";

import S from "../style";

const ProfileCard = () => {
  const [job, setJob] = useState("학생");
  const [region, setRegion] = useState("서울 · 수도권");

  return (
    <>
      <S.ProfileSection>
        {/* 섹션 제목 */}
        <S.SectionTitle>기본 프로필</S.SectionTitle>

        {/* 섹션 설명 */}
        <S.SectionDesc>
          프로필 사진, 이름, 닉네임 등 기본 정보를 수정합니다
        </S.SectionDesc>
      </S.ProfileSection>

      {/* 기본 프로필 카드 */}
      <S.ProfileEditCard>
        {/* 프로필 상단 */}
        <S.ProfileTop>
          {/* 프로필 이미지 */}
          <S.ProfileImageBox />

          {/* 프로필 이미지 정보 */}
          <S.ProfileImageInfo>
            <S.ProfileImageTitle>프로필 사진</S.ProfileImageTitle>

            <S.UploadDesc>
              JPG, PNG, GIF 형식 · 최대 5MB
              <br />
              권장 크기: 400×400px 이상
            </S.UploadDesc>

            {/* 프로필 이미지 변경 */}
            <S.ImageButtonArea>
              <S.ImageChangeButton type="button">
                📷 사진 변경
              </S.ImageChangeButton>

              <S.ImageDeleteButton type="button">
                삭제
              </S.ImageDeleteButton>
            </S.ImageButtonArea>
          </S.ProfileImageInfo>
        </S.ProfileTop>

        {/* 입력 영역 */}
        <S.FormArea>
          {/* 이름 / 닉네임 */}
          <S.FieldGroup>
            {/* 이름 */}
            <S.Field>
              <S.Label>
                이름
                <S.Required>*</S.Required>
              </S.Label>

              {/* 이름 입력 */}
              <S.Input placeholder="홍길동" />
            </S.Field>

            {/* 닉네임 */}
            <S.NicknameField>
              <S.Label>
                닉네임
                <S.Required>*</S.Required>
              </S.Label>

              <S.NicknameInputRow>
                {/* 닉네임 입력 */}
                <S.NicknameInput placeholder="수어러버홍길동" />

                {/* 닉네임 중복 확인 */}
                <S.CheckButton type="button">
                  중복 확인
                </S.CheckButton>
              </S.NicknameInputRow>
            </S.NicknameField>
          </S.FieldGroup>

          {/* 자기소개 */}
          <S.IntroArea>
            <S.IntroLabelRow>
              <S.Label as="span">자기소개</S.Label>
              <S.OptionalBadge>선택</S.OptionalBadge>
            </S.IntroLabelRow>

            {/* 자기소개 입력 */}
            <S.IntroTextarea
              maxLength={150}
              placeholder="수어를 배우며 더 넓은 세상과 소통하고 싶어요. 매일 조금씩 꾸준히 나아가는 중입니다 😊"
            />

            <S.CountText>50 / 150</S.CountText>
          </S.IntroArea>

          {/* 추가정보 구분선 */}
          <S.ExtraDivider>
            <S.ExtraLabel>추가 정보</S.ExtraLabel>
          </S.ExtraDivider>

          {/* 추가정보 */}
          <S.ExtraFormArea>
            <S.FieldGroup>
              {/* 직업 */}
              <S.Field>
                <S.Label>
                  직업
                  <S.Required>*</S.Required>
                </S.Label>

                <S.SelectWrapper>
                  <S.Select value={job} onChange={(e) => setJob(e.target.value)}>
                    <option value="학생">학생</option>
                    <option value="직장인">직장인</option>
                    <option value="프리랜서">프리랜서</option>
                    <option value="기타">기타</option>
                  </S.Select>
                </S.SelectWrapper>
              </S.Field>

              {/* 지역 */}
              <S.Field>
                <S.Label>
                  지역
                  <S.Required>*</S.Required>
                </S.Label>

                <S.SelectWrapper>
                  <S.Select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="서울 · 수도권">서울 · 수도권</option>
                    <option value="강원권">강원권</option>
                    <option value="충청권">충청권</option>
                    <option value="전라권">전라권</option>
                    <option value="경상권">경상권</option>
                    <option value="제주권">제주권</option>
                  </S.Select>
                </S.SelectWrapper>
              </S.Field>
            </S.FieldGroup>
          </S.ExtraFormArea>

          {/* 하단 구분선 */}
          <S.BottomDivider />

          {/* 하단 버튼 영역 */}
          <S.BottomArea>
            <S.RequiredGuide>
              * 표시는 필수 입력 항목입니다
            </S.RequiredGuide>

            <S.ButtonArea>
              <S.CancelButton type="button">취소</S.CancelButton>

              {/* 기본 프로필 저장 */}
              <S.SaveButton type="button">저장하기</S.SaveButton>
            </S.ButtonArea>
          </S.BottomArea>
        </S.FormArea>
      </S.ProfileEditCard>
    </>
  );
};

export default ProfileCard;