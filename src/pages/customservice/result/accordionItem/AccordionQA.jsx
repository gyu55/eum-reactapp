import React from "react";
import * as S from "../style";

const AccordionQA = ({ result }) => {
  return (
    <>
      <S.QAText>
        <S.QALabel>Q. </S.QALabel>
        {result.inquireContent}
      </S.QAText>

      {/* 기존 첨부 이미지 */}
      {result.inquireFileUrl && (
        result.inquireFileUrl.split(",").map((url, i) => (
          <S.FileItem key={i}>
            <S.FileInfo>
              <S.FileThumb src={`http://localhost:10000${url.trim()}`} alt={`첨부 이미지 ${i + 1}`} />
            </S.FileInfo>
          </S.FileItem>
        ))
      )}

      {result.inquireAnswer ? (
        <S.QAText>
          <S.QALabel>A. </S.QALabel>
          {result.inquireAnswer}
        </S.QAText>
      ) : (
        <S.PendingText>답변 준비 중입니다.</S.PendingText>
      )}
    </>
  );
};

export default AccordionQA;