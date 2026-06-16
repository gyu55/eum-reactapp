import React, { useEffect, useState } from "react";

import S from "./style";

const PAGE_SIZE = 3;
const MAX_PAGE_BUTTON_COUNT = 5;

/*
  학습 단계별 진행률을 마이페이지 메인 API 데이터와 연동해서 보여줍니다.
*/
const StudyStatusCard = ({ studyStatusList = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(studyStatusList.length / PAGE_SIZE);
  const needPagination = studyStatusList.length > PAGE_SIZE;

useEffect(() => {
  if (pageCount === 0) {
    setCurrentPage(1);
    
    return;
  }

  if (currentPage > pageCount) {
    setCurrentPage(pageCount);
  }
}, [currentPage, pageCount]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleStudyStatusList = studyStatusList.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  return (
    <S.StudyStatusWrapper>
      <S.StudyStatusTitle>📚 학습 현황</S.StudyStatusTitle>
      <S.StudyStatusDivider />

      <S.StudyStatusList>
        {/* 학습 데이터가 있을 때만 목록을 보여줍니다. 100% 항목도 그대로 표시합니다. */}
        {visibleStudyStatusList.length > 0 &&
          visibleStudyStatusList.map((item) => (
            <S.StudyStatusItem key={item.id || item.eduId}>
              <S.StudyStatusRow>
                <S.StudyStatusLabel>{item.eduTitle}</S.StudyStatusLabel>
                <S.StudyStatusPercent>{item.progress}%</S.StudyStatusPercent>
              </S.StudyStatusRow>

              <S.ProgressBar>
                <S.ProgressFill $percent={item.progress} />
              </S.ProgressBar>
            </S.StudyStatusItem>
          ))}

        {studyStatusList.length === 0 && (
          <S.StudyStatusEmptyText>
            진행 중인 학습이 없습니다.
          </S.StudyStatusEmptyText>
        )}
      </S.StudyStatusList>

      {needPagination && (
        <S.PaginationArea>
          {Array.from({ length: Math.min(pageCount, MAX_PAGE_BUTTON_COUNT) }, (_, index) => index + 1).map((page) => (
            <S.PageButton
              key={page}
              type="button"
              $active={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </S.PageButton>
          ))}
        </S.PaginationArea>
      )}
    </S.StudyStatusWrapper>
  );
};

export default StudyStatusCard;