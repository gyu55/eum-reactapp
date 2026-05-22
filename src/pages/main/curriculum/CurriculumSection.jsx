import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import CurriculumComponent from "./CurriculumComponent";

const STEPS = [
  { step: 1, label: "입문",   count: "8강",  active: true },
  { step: 2, label: "초급",   count: "12강", active: false },
  { step: 3, label: "중급",   count: "12강", active: false },
  { step: 4, label: "고급",   count: "18강", active: false },
  { step: 5, label: "자격증", count: "도전", active: false },
];

const CurriculumSection = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Section>
      {showModal && <CurriculumComponent onClose={() => setShowModal(false)} />}

      <S.SectionTitle>💎 커리큘럼</S.SectionTitle>

      <S.StepRow>
        {STEPS.map((s, i) => (
          <React.Fragment key={s.step}>
            <S.StepItem>
              <S.StepCircle $active={s.active}>{s.step}</S.StepCircle>
              <S.StepLabel $active={s.active}>{s.label}</S.StepLabel>
              <S.StepCount>{s.count}</S.StepCount>
            </S.StepItem>
            {i < STEPS.length - 1 && <S.StepLine />}
          </React.Fragment>
        ))}
      </S.StepRow>

      <S.InfoBox>
        <S.InfoSubTitle>이음 커리큘럼 소개</S.InfoSubTitle>
        <S.InfoTitle>입문부터 자격증까지</S.InfoTitle>
        <S.InfoMeta>총 5단계 · 50강 · 평균 수료 기간 6개월</S.InfoMeta>
        <S.TagRow>
          {["#무료시작", "#단계별학습", "#라이브참여", "#자격증", "#커뮤니티"].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </S.TagRow>
        <S.BtnRow>
          <S.PrimaryBtn>
            <S.PrimaryBtnLabel onClick={() => { navigate("/study/experience"); window.scrollTo(0, 0); }}>
              무료로 시작하기
            </S.PrimaryBtnLabel>
          </S.PrimaryBtn>
          <S.OutlineBtn>
            <S.OutlineBtnLabel onClick={() => setShowModal(true)}>
              커리큘럼 보기
            </S.OutlineBtnLabel>
          </S.OutlineBtn>
        </S.BtnRow>
      </S.InfoBox>
    </S.Section>
  );
};

export default CurriculumSection;