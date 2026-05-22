import React, { useState } from "react";
import * as S from "./style.js";
import theme from "../../../styles/theme.js";


const CURRICULUM = [
  { step: 1, label: "입문",   count: "8강",  color: theme.PALETTE.primary.main, items: ["수어란 무엇인가", "기본 손모양 익히기", "인사 표현", "감정 표현", "숫자와 날짜", "색깔과 사물", "가족 표현", "복습 및 테스트"] },
  { step: 2, label: "초급",   count: "12강", color: "#6dbf7e", items: ["일상 대화 1", "일상 대화 2", "장소 표현", "교통 표현", "음식 표현", "쇼핑 표현", "날씨 표현", "직업 표현", "취미 표현", "학교 표현", "병원 표현", "복습 및 테스트"] },
  { step: 3, label: "중급",   count: "12강", color: "#f5a623", items: ["복합 문장 구성", "시제 표현", "의문문 표현", "부정 표현", "감정 심화", "상황별 대화 1", "상황별 대화 2", "뉴스 수어", "공식 수어", "지역 수어", "수어 문화", "복습 및 테스트"] },
  { step: 4, label: "고급",   count: "18강", color: "#e57373", items: ["고급 문법 1", "고급 문법 2", "통역 기초 1", "통역 기초 2", "의료 수어", "법률 수어", "교육 수어", "복지 수어", "비즈니스 수어 1", "비즈니스 수어 2", "방송 수어", "공공 수어 1", "공공 수어 2", "수어 토론", "수어 발표", "수어 인터뷰", "종합 실습", "복습 및 테스트"] },
  { step: 5, label: "자격증", count: "도전", color: theme.PALETTE.primary.main, items: ["자격증 소개", "시험 유형 분석", "기출 문제 풀이 1", "기출 문제 풀이 2", "실기 준비 1", "실기 준비 2", "모의 시험", "최종 점검"] },
];

const CurriculumComponent = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const current = CURRICULUM[activeStep];

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>커리큘럼 전체 보기</S.ModalTitle>
          <S.ModalCloseBtn onClick={onClose}>✕</S.ModalCloseBtn>
        </S.ModalHeader>
        <S.ModalTabRow>
          {CURRICULUM.map((c, i) => (
            <S.ModalTabBtn key={i} $active={activeStep === i} onClick={() => setActiveStep(i)}>
              {c.step}단계 · {c.label}
            </S.ModalTabBtn>
          ))}
        </S.ModalTabRow>
        <S.ModalContent>
          <S.ModalContentHeader>
            <S.ModalStepCircle $color={current.color}>{current.step}</S.ModalStepCircle>
            <S.ModalStepLabel>{current.label}</S.ModalStepLabel>
            <S.ModalStepCount>총 {current.count}</S.ModalStepCount>
          </S.ModalContentHeader>
          <S.ModalItemList>
            {current.items.map((item, i) => (
              <S.ModalItem key={i}>
                <S.ModalItemNum $color={current.color}>{i + 1}강</S.ModalItemNum>
                {item}
              </S.ModalItem>
            ))}
          </S.ModalItemList>
        </S.ModalContent>
      </S.ModalBox>
    </S.ModalOverlay>
  );
};

export default CurriculumComponent;