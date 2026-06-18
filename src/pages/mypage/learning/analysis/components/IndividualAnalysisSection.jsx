import React from "react";

import IndividualAnalysisList from "./IndividualAnalysisList";
import IndividualAnalysisDetail from "./IndividualAnalysisDetail";

import S from "../style";

const IndividualAnalysisSection = ({
  analysisList,
  selectedAnalysis,
  onSelectAnalysis,
}) => {
  return (
    <S.AnalysisBottomCard>
      <IndividualAnalysisList
        analysisList={analysisList}
        selectedAnalysis={selectedAnalysis}
        onSelectAnalysis={onSelectAnalysis}
      />

      <S.AnalysisBottomDivider />

      <IndividualAnalysisDetail analysis={selectedAnalysis} />
    </S.AnalysisBottomCard>
  );
};

export default IndividualAnalysisSection;