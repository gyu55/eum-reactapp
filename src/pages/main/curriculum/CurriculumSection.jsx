import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import CurriculumInfoBox from "./CurriculumInfoBox";
import { CURRICULUM } from "./constants";

const CurriculumSection = () => {
  const navigate                    = useNavigate();
  const [activeStep, setActiveStep] = useState(-1);
  const [showModal, setShowModal]   = useState(false);

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