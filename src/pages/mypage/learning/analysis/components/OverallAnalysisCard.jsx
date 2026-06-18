import React from "react";

import OverallAnalysisRow from "./OverallAnalysisRow";

import S from "../style";

const OverallAnalysisCard = ({ analysisList }) => {
  return (
    <S.OverallCardArea>
      <S.SectionTitle>전체 분석 결과</S.SectionTitle>

      <S.OverallList>
        {analysisList.map((analysis) => (
          <OverallAnalysisRow key={analysis.title} analysis={analysis} />
        ))}
      </S.OverallList>
    </S.OverallCardArea>
  );
};

export default OverallAnalysisCard;