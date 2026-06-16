import React from "react";

import S from "../style";

const formatTime = (seconds) => {
  const value = Number(seconds || 0);

  if (value < 60) {
    return `${value}초`;
  }

  const hour = Math.floor(value / 3600);
  const minute = Math.floor((value % 3600) / 60);

  if (hour > 0) {
    return `${hour}시간${minute > 0 ? `${minute}분` : ""}`;
  }

  return `${minute}분`;
};

const StudySummaryCard = ({ summary }) => {
  const summaryList = [
    {
      icon: "📊",
      label: "전체 진행률",
      value: `${summary?.totalAccuracy || 0}%`,
    },
    {
      icon: "📝",
      label: "총 정답 수",
      value: summary?.totalQuestionCount || 0,
    },
    {
      icon: "🕐",
      label: "학습 시간",
      value: formatTime(summary?.totalStudyTime),
    },
  ];

  return (
    <S.StudySummaryCardBox>
      <S.StudySummaryTitle>📈 학습요약</S.StudySummaryTitle>

      <S.StudySummaryList>
        {/* 학습 요약 데이터 표시 */}
        {summaryList.map((summaryItem) => (
          <S.StudySummaryItem key={summaryItem.label}>
            <S.StudySummaryLabel>
              <span>{summaryItem.icon}</span>
              {summaryItem.label}
            </S.StudySummaryLabel>

            <S.StudySummaryValue>{summaryItem.value}</S.StudySummaryValue>
          </S.StudySummaryItem>
        ))}
      </S.StudySummaryList>
    </S.StudySummaryCardBox>
  );
};

export default StudySummaryCard;