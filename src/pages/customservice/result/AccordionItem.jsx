import React, { useState } from "react";
import * as S from "./style";
import AccordionHeader from "./accordionItem/AccordionHeader";
import AccordionQA from "./accordionItem/AccordionQA";
import AccordionAnswer from "./accordionItem/AccordionAnswer";
import AccordionEdit from "./accordionItem/AccordionEdit";

const AccordionItem = ({ result, isAdmin, onAnswer, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnswerInput, setShowAnswerInput] = useState(false);
  const [showEditInput, setShowEditInput]     = useState(false);

  return (
    <S.AccordionWrap>
      <AccordionHeader
        result={result}
        isOpen={isOpen}
        isAdmin={isAdmin}
        onToggle={() => setIsOpen((prev) => !prev)}
      />
      <S.AccordionBody $height={isOpen ? 1 : 0}>
        <S.AccordionContent>
          <AccordionQA result={result} />

          {isAdmin && result.inquireStatus === "대기" && (
            <AccordionAnswer
              resultId={result.id}
              showAnswerInput={showAnswerInput}
              setShowAnswerInput={setShowAnswerInput}
              onAnswer={onAnswer}
            />
          )}

          {!isAdmin && result.inquireStatus === "대기" && (
            <AccordionEdit
              result={result}
              showEditInput={showEditInput}
              setShowEditInput={setShowEditInput}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )}
        </S.AccordionContent>
      </S.AccordionBody>
    </S.AccordionWrap>
  );
};

export default AccordionItem;