import React from "react";

import {
  GuideCardBox,
  GuideTitle,
  GuideList,
  GuideItem,
  GuideStrong,
} from "../style";

const ProfileGuideCard = () => {
  return (
    <GuideCardBox>
      {/* 작성 안내 제목 */}
      <GuideTitle>📋 작성 안내</GuideTitle>

      {/* 작성 안내 내용 */}
      <GuideList>
        <GuideItem>
          ✏️ <GuideStrong>닉네임</GuideStrong>은 2~12자, 한글·영문·숫자만 가능합니다
        </GuideItem>

        <GuideItem>
          🖼️ <GuideStrong>프로필 사진</GuideStrong>은 5MB 이하 이미지를 권장합니다
        </GuideItem>

        <GuideItem>
          📝 <GuideStrong>자기소개</GuideStrong>는 150자 이내로 작성해 주세요
        </GuideItem>

        <GuideItem>
          🔒 <GuideStrong>비밀번호</GuideStrong>는 영문+숫자+특수문자 8자 이상 권장합니다
        </GuideItem>

        <GuideItem>
          📧 <GuideStrong>이메일</GuideStrong>은 소셜 계정 연동 시 변경할 수 없습니다
        </GuideItem>
      </GuideList>
    </GuideCardBox>
  );
};

export default ProfileGuideCard;