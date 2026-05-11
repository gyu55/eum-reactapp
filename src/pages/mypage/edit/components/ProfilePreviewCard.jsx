import React from "react";

import {
  PreviewCardBox,
  PreviewTitle,
  PreviewInnerBox,
  PreviewProfileImage,
  PreviewUserName,
  PreviewLevelButton,
  PreviewIntro,
  PreviewGuideText,
} from "../style";

const ProfilePreviewCard = ({ onLevelClick }) => {
  return (
    <PreviewCardBox>
      {/* 미리보기 제목 */}
      <PreviewTitle>👁 프로필 미리보기</PreviewTitle>

      {/* 미리보기 카드 */}
      <PreviewInnerBox>
        {/* 프로필 이미지 연동 */}
        <PreviewProfileImage />

        {/* 사용자 정보 연동 */}
        <PreviewUserName>홍길동</PreviewUserName>

        {/* 레벨 안내 모달 연결 */}
        <PreviewLevelButton type="button" onClick={onLevelClick}>
          Lv.7 · 열공러
        </PreviewLevelButton>

        <PreviewIntro>
          수어를 배우며 더 넓은 세상과 소통하고 싶어요.
          <br />
          매일 조금씩 꾸준히 나아가는 중입니다 😊
        </PreviewIntro>

        <PreviewGuideText>
          다른 사용자에게 이렇게 보입니다
        </PreviewGuideText>
      </PreviewInnerBox>
    </PreviewCardBox>
  );
};

export default ProfilePreviewCard;