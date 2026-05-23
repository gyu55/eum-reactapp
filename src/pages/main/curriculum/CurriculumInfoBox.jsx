import React from "react";
import * as S from "./style.js";

const CurriculumInfoBox = ({ curriculum, activeStep, onStart, onShowModal }) => {
  const current = activeStep >= 0 ? curriculum[activeStep] : null;

  return (
    <S.InfoBox>
      <S.InfoSubTitle>이음 커리큘럼 소개</S.InfoSubTitle>
      {current ? (
        <>
          <S.InfoTitleCurriculum>{current.step}단계 - {current.label}</S.InfoTitleCurriculum>
          <S.ItemList>
            {current.items.map((item, i) => (
              <S.ItemRow key={i} $delay={i * 60}>
                <S.ItemNum>{i + 1}강</S.ItemNum>
                {item}
              </S.ItemRow>
            ))}
          </S.ItemList>
        </>
      ) : (
        <>
          <S.InfoTitle>입문부터 자격증까지</S.InfoTitle>
          <S.InfoMeta>총 5단계 · 50강 · 평균 수료 기간 6개월</S.InfoMeta>
          <S.TagRow>
            {["#무료시작", "#단계별학습", "#라이브참여", "#자격증", "#커뮤니티"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </S.TagRow>
        </>
        )}
      <S.BtnRow>
        <S.PrimaryBtn onClick={onStart}>무료로 시작하기</S.PrimaryBtn>
      </S.BtnRow>
    </S.InfoBox>
  );
};

export default CurriculumInfoBox;