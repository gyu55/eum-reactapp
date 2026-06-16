import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import CurriculumInfoBox from "./CurriculumInfoBox";
import { CURRICULUM } from "./constants";

const CurriculumSection = () => {
  const navigate = useNavigate();

  return (
    <S.Section>
      <S.SectionTitle>💎 커리큘럼</S.SectionTitle>

      <S.StepRow>
        {CURRICULUM.map((c, i) => (
          <React.Fragment key={c.step}>
            <S.StepItem>
              <S.StepTooltip>
                {c.items.map((item, j) => (
                  <span key={j}>· {item}</span>
                ))}
              </S.StepTooltip>
              <S.StepCircle>{c.step}</S.StepCircle>
              <S.StepLabel>{c.label}</S.StepLabel>
              <S.StepCount>{c.count}</S.StepCount>
            </S.StepItem>
            {i < CURRICULUM.length - 1 && (
              <S.StepLineWrap>
                <S.StepLineFill />
              </S.StepLineWrap>
            )}
          </React.Fragment>
        ))}
      </S.StepRow>

      <CurriculumInfoBox
        onStart={() => { navigate("/study/experience");}}
      />
    </S.Section>
  );
};

export default CurriculumSection;