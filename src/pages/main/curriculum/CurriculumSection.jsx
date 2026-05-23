import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import CurriculumInfoBox from "./CurriculumInfoBox";

const CURRICULUM = [
  { step:1, label:"입문",   count:"8강",  items:["수어란 무엇인가","기본 손모양 익히기","인사 표현","감정 표현","숫자와 날짜","색깔과 사물","가족 표현","복습 및 테스트"] },
  { step:2, label:"초급",   count:"12강", items:["일상 대화 1","일상 대화 2","장소 표현","교통 표현","음식 표현","쇼핑 표현","날씨 표현","직업 표현","취미 표현","학교 표현","병원 표현","복습 및 테스트"] },
  { step:3, label:"중급",   count:"12강", items:["복합 문장 구성","시제 표현","의문문 표현","부정 표현","감정 심화","상황별 대화 1","상황별 대화 2","뉴스 수어","공식 수어","지역 수어","수어 문화","복습 및 테스트"] },
  { step:4, label:"고급",   count:"18강", items:["고급 문법 1","고급 문법 2","통역 기초 1","통역 기초 2","의료 수어","법률 수어","교육 수어","복지 수어","비즈니스 수어 1","비즈니스 수어 2","방송 수어","공공 수어 1","공공 수어 2","수어 토론","수어 발표","수어 인터뷰","종합 실습","복습 및 테스트"] },
  { step:5, label:"자격증", count:"도전", items:["자격증 소개","시험 유형 분석","기출 문제 풀이 1","기출 문제 풀이 2","실기 준비 1","실기 준비 2","모의 시험","최종 점검"] },
];

const CurriculumSection = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const handleStepClick = (idx) => {
    setActiveStep(prev => prev === idx ? -1 : idx);
  };

  return (
    <S.Section>
      {showModal && <CurriculumInfoBox onClose={() => setShowModal(false)} />}

      <S.SectionTitle>💎 커리큘럼</S.SectionTitle>

      <S.StepRow>
        {CURRICULUM.map((c, i) => (
          <React.Fragment key={c.step}>
            <S.StepItem onClick={() => handleStepClick(i)}>
              <S.StepCircle $active={activeStep >= 0 && activeStep >= i}>{c.step}</S.StepCircle>
              <S.StepLabel $active={activeStep >= 0 && activeStep >= i}>{c.label}</S.StepLabel>
              <S.StepCount>{c.count}</S.StepCount>
            </S.StepItem>
            {i < CURRICULUM.length - 1 && (
              <S.StepLineWrap>
                <S.StepLineFill $fill={activeStep > i} />
              </S.StepLineWrap>
            )}
          </React.Fragment>
        ))}
      </S.StepRow>

      <CurriculumInfoBox
        curriculum={CURRICULUM}
        activeStep={activeStep}
        onStart={() => { navigate("/study/experience"); window.scrollTo(0, 0); }}
        onShowModal={() => setShowModal(true)}
      />
    </S.Section>
  );
};

export default CurriculumSection;