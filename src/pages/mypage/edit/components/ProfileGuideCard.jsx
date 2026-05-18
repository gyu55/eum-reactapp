import React from "react";

import S from "../style";

const ProfileGuideCard = () => {
  return (
    <S.GuideCardBox>
      {/* 작성 안내 제목 */}
      <S.GuideTitle>📋 작성 안내</S.GuideTitle>

      {/* 작성 안내 내용 */}
      <S.GuideList>
        <S.GuideItem>
          ✏️ <S.GuideStrong>닉네임</S.GuideStrong>은 2~12자, 한글·영문·숫자만 가능합니다
        </S.GuideItem>

        <S.GuideItem>
          🖼️ <S.GuideStrong>프로필 사진</S.GuideStrong>은 5MB 이하 이미지를 권장합니다
        </S.GuideItem>

        <S.GuideItem>
          📝 <S.GuideStrong>자기소개</S.GuideStrong>는 150자 이내로 작성해 주세요
        </S.GuideItem>

        <S.GuideItem>
          🔒 <S.GuideStrong>비밀번호</S.GuideStrong>는 영문+숫자+특수문자 8자 이상 권장합니다
        </S.GuideItem>

        <S.GuideItem>
          📧 <S.GuideStrong>이메일</S.GuideStrong>은 소셜 계정 연동 시 변경할 수 없습니다
        </S.GuideItem>
      </S.GuideList>
    </S.GuideCardBox>
  );
};

export default ProfileGuideCard;