import React, { useEffect, useMemo, useState } from "react";

import S from "../style";

const PAGE_SIZE = 5;

const IndividualAnalysisList = ({
  analysisList = [],
  selectedAnalysis,
  onSelectAnalysis,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const safeAnalysisList = Array.isArray(analysisList) ? analysisList : [];
  const totalPages = Math.max(1, Math.ceil(safeAnalysisList.length / PAGE_SIZE));
  const showPagination = safeAnalysisList.length > PAGE_SIZE;

  const pagedAnalysisList = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return safeAnalysisList.slice(startIndex, startIndex + PAGE_SIZE);
  }, [safeAnalysisList, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [analysisList]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (pagedAnalysisList.length === 0) {
      return;
    }

    const hasSelectedAnalysis = pagedAnalysisList.some(
      (analysis) => analysis.id === selectedAnalysis?.id
    );

    if (!hasSelectedAnalysis) {
      onSelectAnalysis(pagedAnalysisList[0]);
    }
  }, [pagedAnalysisList, selectedAnalysis, onSelectAnalysis]);

  return (
    <S.IndividualListArea>
      <S.SectionTitle>개별 분석 목록</S.SectionTitle>

      <S.IndividualTable>
        <S.IndividualHeader>
          <S.IndividualHeaderText>학습결과 제목</S.IndividualHeaderText>
          <S.IndividualHeaderText>카테고리</S.IndividualHeaderText>
          <S.IndividualHeaderText>정답률</S.IndividualHeaderText>
          <S.IndividualHeaderText>학습 시간</S.IndividualHeaderText>
          <S.IndividualHeaderText>분석</S.IndividualHeaderText>
        </S.IndividualHeader>

        {pagedAnalysisList.map((analysis) => (
          <S.IndividualRow
            key={analysis.id}
            $active={selectedAnalysis?.id === analysis.id}
          >
            <S.IndividualTitleCell>
              <S.IndividualDot $color={analysis.color} />
              <S.IndividualText>{analysis.title}</S.IndividualText>
            </S.IndividualTitleCell>

            <S.IndividualText $muted>{analysis.category}</S.IndividualText>
            <S.IndividualText>{analysis.rate}%</S.IndividualText>
            <S.IndividualText>{analysis.studyTime}</S.IndividualText>

            <S.IndividualButton
              type="button"
              onClick={() => onSelectAnalysis(analysis)}
            >
              분석 보기
            </S.IndividualButton>
          </S.IndividualRow>
        ))}
      </S.IndividualTable>

      {showPagination && (
        <S.IndividualPaginationArea>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;

            return (
              <S.IndividualPageButton
                key={pageNumber}
                type="button"
                $active={currentPage === pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </S.IndividualPageButton>
            );
          })}
        </S.IndividualPaginationArea>
      )}
    </S.IndividualListArea>
  );
};

export default IndividualAnalysisList;