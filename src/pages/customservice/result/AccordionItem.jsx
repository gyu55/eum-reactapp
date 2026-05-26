import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";

const AccordionItem = ({ result, isAdmin, onAnswer }) => {
  const [isOpen, setIsOpen]                   = useState(false);
  const [answerText, setAnswerText]           = useState("");
  const [showAnswerInput, setShowAnswerInput] = useState(false);
  const contentRef                            = useRef(null);
  const [height, setHeight]                   = useState(0);

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

export default AccordionItem;