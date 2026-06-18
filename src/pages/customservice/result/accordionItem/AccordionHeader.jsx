import React from "react";
import * as S from "../style";

const maskName = (name) => {
  if (!name) return "";
  if (name.length === 2) return name[0] + "*";
  return name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
};

const AccordionHeader = ({ result, isOpen, onToggle, isAdmin }) => {
  return (
    <S.AccordionHeader $open={isOpen} onClick={onToggle}>
      <S.StatusBadge $status={result.inquireStatus}>
        {result.inquireStatus}
      </S.StatusBadge>
      <S.AccordionTitle>{result.inquireTitle}</S.AccordionTitle>
      {isAdmin && (
        <S.AccordionUserInfo>
          <span>{maskName(result.userName)}</span>
          <span>{result.inquireEmail}</span>
        </S.AccordionUserInfo>
      )}
      <S.AccordionDate>
        {result.inquireCreateAt
          ? result.inquireCreateAt.slice(0, 10).replaceAll("-", ".")
          : ""}
      </S.AccordionDate>
      <S.AccordionArrow $open={isOpen}>→</S.AccordionArrow>
    </S.AccordionHeader>
  );
};

export default AccordionHeader;