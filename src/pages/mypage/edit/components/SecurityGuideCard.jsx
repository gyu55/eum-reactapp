import React from "react";

import S from "../style";

const SecurityGuideCard = ({ userInfo }) => {
  // 브라우저 정보 확인
  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome")) {
      return "Chrome";
    }

    if (userAgent.includes("Firefox")) {
      return "Firefox";
    }

    if (userAgent.includes("Safari")) {
      return "Safari";
    }

    return "브라우저";
  };

  // 운영체제 정보 확인
  const getOsInfo = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Windows")) {
      return "Windows";
    }

    if (userAgent.includes("Mac")) {
      return "macOS";
    }

    if (userAgent.includes("Linux")) {
      return "Linux";
    }

    return "OS";
  };

  // 최근 접속 시간 표시
  const formattedDate = userInfo?.userCreateAt
    ? new Date(userInfo.userCreateAt).toLocaleString()
    : "-";

  return (
    <S.SecurityCardBox>
      {/* 보안 안내 제목 */}
      <S.SecurityTitle>🔐 보안 안내</S.SecurityTitle>

      {/* 개인정보 보호 안내 */}
      <S.SecurityNoticeBox>
        <S.SecurityNoticeTitle>
          ⚠️ 개인정보 보호
        </S.SecurityNoticeTitle>

        <S.SecurityNoticeText>
          입력한 정보는 암호화되어 안전하게 보관됩니다.
          <br />
          비밀번호는 타인과 공유하지 마세요.
        </S.SecurityNoticeText>
      </S.SecurityNoticeBox>

      {/* 접속 정보 */}
      <S.SecurityAccessInfo>
        <S.SecurityAccessRow>
          최근 접속:{" "}
          <S.SecurityAccessValue>
            {formattedDate}
          </S.SecurityAccessValue>
        </S.SecurityAccessRow>

        <S.SecurityAccessRow>
          접속 기기: {getBrowserInfo()} · {getOsInfo()}
        </S.SecurityAccessRow>
      </S.SecurityAccessInfo>
    </S.SecurityCardBox>
  );
};

export default SecurityGuideCard;