import React from "react";

import S from "../style";

const ProfilePreviewCard = ({ onLevelClick }) => {
  return (
    <S.PreviewCardBox>
      {/* 미리보기 제목 */}
      <S.PreviewTitle>👁 프로필 미리보기</S.PreviewTitle>

      {/* 미리보기 카드 */}
      <S.PreviewInnerBox>
        {/* 프로필 이미지 연동 */}
        <S.PreviewProfileImage />

        {/* 사용자 정보 연동 */}
        <S.PreviewUserName>홍길동</S.PreviewUserName>

        <S.PreviewLevelButton type="button" onClick={onLevelClick}>
          Lv.7 · 열공러
        </S.PreviewLevelButton>

        <S.PreviewIntro>
          수어를 배우며 더 넓은 세상과 소통하고 싶어요.
          <br />
          매일 조금씩 꾸준히 나아가는 중입니다 😊
        </S.PreviewIntro>

        <S.PreviewGuideText>
          다른 사용자에게 이렇게 보입니다
        </S.PreviewGuideText>
      </S.PreviewInnerBox>
    </S.PreviewCardBox>
  );
};

export default ProfilePreviewCard;