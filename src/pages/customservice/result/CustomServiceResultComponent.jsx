import React from "react";
import * as S from "./style";
import AccordionItem from "./AccordionItem";

const CustomServiceResultComponent = ({ results = [], isLoading, error, isAdmin, onAnswer }) => {
  if (isLoading) return <S.StatusMessage>불러오는 중...</S.StatusMessage>;
  if (error)     return <S.StatusMessage $error>{error}</S.StatusMessage>;
  if (results.length === 0) return (
    <S.EmptyWrap>
      <S.EmptyIcon>📭</S.EmptyIcon>
      <S.EmptyTitle>문의 내역이 없습니다.</S.EmptyTitle>
      <S.EmptySub>1:1 문의를 통해 궁금한 점을 남겨주세요.</S.EmptySub>
    </S.EmptyWrap>
  );

  return (
    <S.ResultWrap>
      <S.ResultListTitle>내 문의 목록</S.ResultListTitle>
      <S.ResultList>
        {results.map((result) => (
          <AccordionItem key={result.id} result={result} isAdmin={isAdmin} onAnswer={onAnswer} />
        ))}
      </S.ResultList>
    </S.ResultWrap>
  );
};

export default CustomServiceResultComponent;