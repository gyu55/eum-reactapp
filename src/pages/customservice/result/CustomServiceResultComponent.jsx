import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";

const AccordionItem = ({ result, isAdmin, onAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [showAnswerInput, setShowAnswerInput] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, showAnswerInput, answerText]);

  const handleAnswerSubmit = async () => {
    if (!answerText.trim()) return alert("답변 내용을 입력해주세요.");
    await onAnswer(result.id, answerText);
    setAnswerText("");
    setShowAnswerInput(false);
  };

  return (
    <S.AccordionWrap>
      <S.AccordionHeader $open={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <S.StatusBadge $status={result.inquireStatus}>
          {result.inquireStatus}
        </S.StatusBadge>
        <S.AccordionTitle>{result.inquireTitle}</S.AccordionTitle>
        <S.AccordionDate>
          {result.inquireCreateAt ? result.inquireCreateAt.slice(0, 10).replaceAll("-", ".") : ""}
        </S.AccordionDate>
        <S.AccordionArrow $open={isOpen}>→</S.AccordionArrow>
      </S.AccordionHeader>

      <S.AccordionBody ref={contentRef} $height={height}>
        <S.AccordionContent>
          <S.QAText>
            <S.QALabel>Q. </S.QALabel>
            {result.inquireContent}
          </S.QAText>
          {result.inquireAnswer ? (
            <S.QAText>
              <S.QALabel>A. </S.QALabel>
              {result.inquireAnswer}
            </S.QAText>
          ) : (
            <S.PendingText>답변 준비 중입니다.</S.PendingText>
          )}

          {/* 관리자 답변하기 버튼 */}
          {isAdmin && result.inquireStatus === "대기" && (
            <S.AnswerBtnWrap>
              {!showAnswerInput ? (
                <S.AnswerBtn
                  onClick={(e) => { e.stopPropagation(); setShowAnswerInput(true); }}
                >
                  답변하기
                </S.AnswerBtn>
              ) : (
                <S.AnswerInputWrap>
                  <S.AnswerTextarea
                    placeholder="답변 내용을 입력해주세요."
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <S.AnswerBtnRow>
                    <S.CancelBtn
                      onClick={(e) => { e.stopPropagation(); setShowAnswerInput(false); setAnswerText(""); }}
                    >
                      취소
                    </S.CancelBtn>
                    <S.ConfirmBtn
                      onClick={(e) => { e.stopPropagation(); handleAnswerSubmit(); }}
                    >
                      등록하기
                    </S.ConfirmBtn>
                  </S.AnswerBtnRow>
                </S.AnswerInputWrap>
              )}
            </S.AnswerBtnWrap>
          )}
        </S.AccordionContent>
      </S.AccordionBody>
    </S.AccordionWrap>
  );
};

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
