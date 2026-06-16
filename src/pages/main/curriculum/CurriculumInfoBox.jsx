import React from "react";
import * as S from "./style.js";
import { CURRICULUM_TAGS, CURRICULUM_META } from "./constants";

const CurriculumInfoBox = ({ onStart }) => {
  return (
    <S.InfoBox>
      <S.InfoHeader>
        <S.InfoSubTitle>이음 커리큘럼 소개</S.InfoSubTitle>
      </S.InfoHeader>
      <S.InfoTitle>입문부터 자격증까지</S.InfoTitle>
      <S.InfoMeta>{CURRICULUM_META}</S.InfoMeta>
      <S.TagRow>
        {CURRICULUM_TAGS.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </S.TagRow>
      <S.BtnRow>
        <S.PrimaryBtn onClick={onStart}>무료로 시작하기</S.PrimaryBtn>
      </S.BtnRow>
    </S.InfoBox>
  );
};

export default CurriculumInfoBox;