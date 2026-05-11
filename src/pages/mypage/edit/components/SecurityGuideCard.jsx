import React from "react";

import {
  SecurityCardBox,
  SecurityTitle,
  SecurityNoticeBox,
  SecurityNoticeTitle,
  SecurityNoticeText,
  SecurityAccessInfo,
  SecurityAccessRow,
  SecurityAccessValue,
} from "../style";

const SecurityGuideCard = () => {
  return (
    <SecurityCardBox>
      {/* 보안 안내 제목 */}
      <SecurityTitle>🔐 보안 안내</SecurityTitle>

      {/* 개인정보 보호 안내 */}
      <SecurityNoticeBox>
        <SecurityNoticeTitle>⚠️ 개인정보 보호</SecurityNoticeTitle>

        <SecurityNoticeText>
          입력한 정보는 암호화되어 안전하게 보관됩니다.
          <br />
          비밀번호는 타인과 공유하지 마세요.
        </SecurityNoticeText>
      </SecurityNoticeBox>

      {/* 접속 정보 연동 */}
      <SecurityAccessInfo>
        <SecurityAccessRow>
          최근 접속:{" "}
          <SecurityAccessValue>2025-03-08 14:21</SecurityAccessValue>
        </SecurityAccessRow>

        <SecurityAccessRow>
          접속 기기: Chrome · macOS
        </SecurityAccessRow>
      </SecurityAccessInfo>
    </SecurityCardBox>
  );
};

export default SecurityGuideCard;