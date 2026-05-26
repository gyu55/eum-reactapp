import React from "react";
import * as S from "./style.js";
import { CURRICULUM_TAGS, CURRICULUM_META } from "./constants";

const CurriculumInfoBox = ({ curriculum, activeStep, onStart, onShowModal }) => {
  const current = activeStep >= 0 ? curriculum[activeStep] : null;

  return (
    <S.InfoBox>
      <S.InfoHeader>
        <S.InfoSubTitle>이음 커리큘럼 소개</S.InfoSubTitle>
        <S.InfoSub>
          <S.ClickIcon src="/assets/image/main/clickIcon.svg" alt="clickIcon" />
          단계를 눌러보세요
        </S.InfoSub>
      </S.InfoHeader>
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
          <S.InfoMeta>{CURRICULUM_META}</S.InfoMeta>
          <S.TagRow>
            {CURRICULUM_TAGS.map((tag) => (
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