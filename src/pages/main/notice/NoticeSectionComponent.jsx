import React from "react";
import NoticeCard from "./NoticeCardComponent";
import * as S from "./style.js";

const NOTICES = [
  { id: 1, tag: "신규 오픈", title: "이음 커뮤니티 채팅방이 새롭게 열렸어요!",          date: "2026.03.28" },
  { id: 2, tag: "자격검증", title: "2026년 상반기 수어 능력 자격 검증 시험 일정 안내", date: "2026.03.20" },
  { id: 3, tag: "학습 팁",  title: "수어를 빠르게 익히는 3가지 방법",                  date: "2026.03.28" },
  { id: 4, tag: "업데이트", title: "수어 학습 콘텐츠 개편 및 신규 단어 추가 안내",     date: "2026.03.10" },
];

const NoticeSection = () => {
  return (
    <S.SectionWrap>
      <S.SectionHeader>
        <span>
          <img src="/assets/image/main/noticeIcon.svg" alt="" />
        </span>
        <S.SectionTitle>알려드려요</S.SectionTitle>
      </S.SectionHeader>

      <S.NoticeGrid>
        {NOTICES.map((notice, i) => (
          <NoticeCard key={i} {...notice} />
        ))}
      </S.NoticeGrid>
    </S.SectionWrap>
  );
};

export default NoticeSection;
