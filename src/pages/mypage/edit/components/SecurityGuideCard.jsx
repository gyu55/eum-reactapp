import React from "react";

import S from "../style";

const SecurityGuideCard = () => {
  return (
    <S.SecurityCardBox>
      {/* 보안 안내 제목 */}
      <S.SecurityTitle>🔐 보안 안내</S.SecurityTitle>

      {/* 개인정보 보호 안내 */}
      <S.SecurityNoticeBox>
        <S.SecurityNoticeTitle>⚠️ 개인정보 보호</S.SecurityNoticeTitle>

        <S.SecurityNoticeText>
          입력한 정보는 암호화되어 안전하게 보관됩니다.
          <br />
          비밀번호는 타인과 공유하지 마세요.
        </S.SecurityNoticeText>
      </S.SecurityNoticeBox>

      {/* 접속 정보 연동 */}
      <S.SecurityAccessInfo>
        <S.SecurityAccessRow>
          최근 접속:{" "}
          <S.SecurityAccessValue>2025-03-08 14:21</S.SecurityAccessValue>
        </S.SecurityAccessRow>

        <S.SecurityAccessRow>
          접속 기기: Chrome · macOS
        </S.SecurityAccessRow>
      </S.SecurityAccessInfo>
    </S.SecurityCardBox>
  );
};

export default SecurityGuideCard;