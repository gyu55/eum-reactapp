import React, { useMemo } from "react";

import S from "../style";

const SecurityGuideCard = () => {
  const loginTime = useMemo(() => {
    return new Date().toLocaleString("ko-KR");
  }, []);

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

  return (
    <S.SecurityCardBox>
      <S.SecurityTitle>🔐 보안 안내</S.SecurityTitle>

      <S.SecurityNoticeBox>
        <S.SecurityNoticeTitle>⚠️ 개인정보 보호</S.SecurityNoticeTitle>

        <S.SecurityNoticeText>
          입력한 정보는 암호화되어 안전하게 보관됩니다.
          <br />
          비밀번호는 타인과 공유하지 마세요.
        </S.SecurityNoticeText>
      </S.SecurityNoticeBox>

      <S.SecurityAccessInfo>
        <S.SecurityAccessRow>
          최근 접속: <S.SecurityAccessValue>{loginTime}</S.SecurityAccessValue>
        </S.SecurityAccessRow>

        <S.SecurityAccessRow>
          접속 기기: {getBrowserInfo()} · {getOsInfo()}
        </S.SecurityAccessRow>
      </S.SecurityAccessInfo>
    </S.SecurityCardBox>
  );
};

export default SecurityGuideCard;