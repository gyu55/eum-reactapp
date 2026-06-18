import React from "react";

import AnswerGrid from "./AnswerGrid";

import S from "../style";

const IndividualAnalysisDetail = ({ analysis }) => {
  return (
    <S.DetailArea>
      <S.SectionTitle>{analysis.title} 상세 분석</S.SectionTitle>

      <S.DetailStats>
        <S.DetailStat>
          <S.DetailStatLabel>정답률</S.DetailStatLabel>
          <S.DetailStatValue $color={analysis.color}>
            {analysis.rate}%
          </S.DetailStatValue>
        </S.DetailStat>

        <S.DetailStat>
          <S.DetailStatLabel>문제 수</S.DetailStatLabel>
          <S.DetailStatValue>{analysis.questionCount}문제</S.DetailStatValue>
        </S.DetailStat>

        <S.DetailStat>
          <S.DetailStatLabel>학습 시간</S.DetailStatLabel>
          <S.DetailStatValue>{analysis.studyTime}</S.DetailStatValue>
        </S.DetailStat>
      </S.DetailStats>

      <AnswerGrid answers={analysis.answers} />

      <S.AnswerLegend>
        <S.LegendItem $color="#4359FC">O 정답</S.LegendItem>
        <S.LegendItem $color="#FF4D4F">X 오답</S.LegendItem>
      </S.AnswerLegend>

      <S.RecommendBox>
        <S.RecommendIcon>!</S.RecommendIcon>

        <S.RecommendTextArea>
          <S.RecommendTitle>AI 추천 학습 가이드</S.RecommendTitle>
          <S.RecommendDesc>{analysis.guide}</S.RecommendDesc>
        </S.RecommendTextArea>
      </S.RecommendBox>
    </S.DetailArea>
  );
};

export default IndividualAnalysisDetail;