import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AnalysisReportCard from "./components/AnalysisReportCard";
import OverallAnalysisCard from "./components/OverallAnalysisCard";
import IndividualAnalysisSection from "./components/IndividualAnalysisSection";

import S from "./style";

const MyPageLearningAnalysisComponent = () => {
  const navigate = useNavigate();

  const [analysisData, setAnalysisData] = useState({
    report: null,
    overallAnalysisList: [],
    individualAnalysisList: [],
  });
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBackClick = () => {
    navigate("/mypage/learning");
  };

  useEffect(() => {
    const fetchLearningAnalysis = async () => {
      try {
        const response = await fetch(
          "http://localhost:10000/private/api/mypage/learning/analysis",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "AI 학습 분석 조회에 실패했습니다.");
        }

        const data = result.data;

        setAnalysisData({
          report: data.report,
          overallAnalysisList: data.overallAnalysisList || [],
          individualAnalysisList: data.individualAnalysisList || [],
        });

        setSelectedAnalysis((data.individualAnalysisList || [])[0] || null);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLearningAnalysis();
  }, []);

  if (isLoading) {
    return (
      <S.AnalysisWrapper>
        <S.AnalysisHeader>
          <S.AnalysisTitle>AI 학습 분석</S.AnalysisTitle>
          <S.AnalysisDesc>AI 학습 분석 결과를 불러오고 있습니다.</S.AnalysisDesc>
        </S.AnalysisHeader>
      </S.AnalysisWrapper>
    );
  }

  if (errorMessage) {
    return (
      <S.AnalysisWrapper>
        <S.AnalysisHeader>
          <S.AnalysisTitle>AI 학습 분석</S.AnalysisTitle>
          <S.AnalysisDesc>{errorMessage}</S.AnalysisDesc>
        </S.AnalysisHeader>
      </S.AnalysisWrapper>
    );
  }

  if (!analysisData.report) {
    return (
      <S.AnalysisWrapper>
        <S.AnalysisHeader>
          <S.AnalysisTitle>AI 학습 분석</S.AnalysisTitle>
          <S.AnalysisDesc>분석할 학습 데이터가 없습니다.</S.AnalysisDesc>
        </S.AnalysisHeader>
      </S.AnalysisWrapper>
    );
  }

  return (
    <S.AnalysisWrapper>
      <S.AnalysisHeader>
        <S.AnalysisTitle>AI 학습 분석</S.AnalysisTitle>
        <S.AnalysisDesc>
          AI가 학습 데이터를 분석하여 전체 성과와 맞춤형 학습 가이드를 제공합니다.
        </S.AnalysisDesc>
      </S.AnalysisHeader>

      <S.AnalysisTopCard>
        <AnalysisReportCard report={analysisData.report} />
        <S.AnalysisDivider />
        <OverallAnalysisCard analysisList={analysisData.overallAnalysisList} />
      </S.AnalysisTopCard>

      {selectedAnalysis && (
        <IndividualAnalysisSection
          analysisList={analysisData.individualAnalysisList}
          selectedAnalysis={selectedAnalysis}
          onSelectAnalysis={setSelectedAnalysis}
        />
      )}

      <S.AnalysisBackButtonArea>
        <S.AnalysisBackButton type="button" onClick={handleBackClick}>
          학습 목록으로 돌아가기
        </S.AnalysisBackButton>
      </S.AnalysisBackButtonArea>
    </S.AnalysisWrapper>
  );
};

export default MyPageLearningAnalysisComponent;