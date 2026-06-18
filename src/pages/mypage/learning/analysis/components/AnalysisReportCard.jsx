import React, { useEffect, useState } from "react";

import S from "../style";

// 게이지 색상
const getRateColor = (rate) => {
  if (rate <= 39) return "#FF4D4F";
  if (rate <= 79) return "#38C172";
  return "#4359FC";
};

// 등급 이름
const getRateGrade = (rate) => {
  if (rate <= 39) return "도약 필요";
  if (rate <= 59) return "성장 중";
  if (rate <= 74) return "안정형";
  if (rate <= 89) return "성장세 우수";
  return "최상위 학습자";
};

// 게이지 애니메이션
const useAnimatedRate = (targetRate, duration = 850) => {
  const [animatedRate, setAnimatedRate] = useState(0);

  useEffect(() => {
    const safeTargetRate = Math.max(0, Math.min(Number(targetRate || 0), 100));
    let animationFrameId;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedRate(Math.round(safeTargetRate * easedProgress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    setAnimatedRate(0);
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetRate, duration]);

  return animatedRate;
};

const AnalysisReportCard = ({ report }) => {
  const totalRate = Number(report.totalRate || 0);
  const animatedRate = useAnimatedRate(totalRate);
  const rateColor = getRateColor(totalRate);
  const gradeName = getRateGrade(totalRate);

  return (
    <S.ReportCardArea>
      <S.SectionTitle>종합 리포트</S.SectionTitle>

      <S.ReportContent>
        <S.ReportCircle $rate={animatedRate} $color={rateColor}>
          <S.ReportCircleText $color={rateColor}>
            {animatedRate}%
          </S.ReportCircleText>
        </S.ReportCircle>

        <S.ReportGrade $color={rateColor}>{gradeName}</S.ReportGrade>

        <S.ReportMessage>{report.message}</S.ReportMessage>

        <S.ReportTable>
          <S.ReportTableRow>
            <S.ReportTableLabel>평균 정답률</S.ReportTableLabel>
            <S.ReportTableValue>{report.averageRate}</S.ReportTableValue>
          </S.ReportTableRow>

          <S.ReportTableRow>
            <S.ReportTableLabel>총 문제 풀이</S.ReportTableLabel>
            <S.ReportTableValue>{report.solvedCount}</S.ReportTableValue>
          </S.ReportTableRow>

          <S.ReportTableRow>
            <S.ReportTableLabel>총 학습 시간</S.ReportTableLabel>
            <S.ReportTableValue>{report.studyTime}</S.ReportTableValue>
          </S.ReportTableRow>

          <S.ReportTableRow>
            <S.ReportTableLabel>연속 학습 일수</S.ReportTableLabel>
            <S.ReportTableValue>{report.streakDays}</S.ReportTableValue>
          </S.ReportTableRow>

          <S.ReportTableRow>
            <S.ReportTableLabel>획득 경험치</S.ReportTableLabel>
            <S.ReportTableValue $primary>{report.exp}</S.ReportTableValue>
          </S.ReportTableRow>
        </S.ReportTable>
      </S.ReportContent>
    </S.ReportCardArea>
  );
};

export default AnalysisReportCard;