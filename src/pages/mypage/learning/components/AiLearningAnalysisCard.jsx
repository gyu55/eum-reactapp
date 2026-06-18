import React from "react";
import { useNavigate } from "react-router-dom";

import S from "../style";

const AiLearningAnalysisCard = () => {
  const navigate = useNavigate();

  const handleMoveAnalysis = () => {
    navigate("/mypage/learning/analysis");
  };

  return (
    <S.AiAnalysisCardBox>
      <S.AiAnalysisContent>
        <S.AiAnalysisTextArea>
          <S.AiAnalysisTitle>AI 학습 분석</S.AiAnalysisTitle>

          <S.AiAnalysisDesc>
            AI가 학습 데이터를 분석해
            <br />
            부족한 영역과 맞춤 학습을
            <br />
            추천해 드려요.
        </S.AiAnalysisDesc>
        </S.AiAnalysisTextArea>

        <S.AiAnalysisVisual viewBox="0 0 108 80" aria-hidden="true">
          <rect x="12" y="48" width="10" height="28" rx="2" />
          <rect x="40" y="30" width="10" height="46" rx="2" />
          <rect x="68" y="40" width="10" height="36" rx="2" />
          <rect x="94" y="24" width="10" height="52" rx="2" />

          <path d="M17 38L45 18L73 30L99 4" />
          <circle cx="17" cy="38" r="6" />
          <circle cx="45" cy="18" r="6" />
          <circle cx="73" cy="30" r="6" />

          <path d="M92 2L96 12L106 16L96 20L92 30L88 20L78 16L88 12L92 2Z" />
        </S.AiAnalysisVisual>
      </S.AiAnalysisContent>

      <S.AiAnalysisButton type="button" onClick={handleMoveAnalysis}>
        분석하기
      </S.AiAnalysisButton>
    </S.AiAnalysisCardBox>
  );
};

export default AiLearningAnalysisCard;