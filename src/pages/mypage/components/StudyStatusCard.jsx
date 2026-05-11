import React from "react";

import {
  StudyStatusWrapper,
  StudyStatusTitle,
  StudyStatusDivider,
  StudyStatusList,
  StudyStatusRow,
  StudyStatusLabel,
  StudyStatusPercent,
  ProgressBar,
  ProgressFill,
} from "./style";

/*
  학습 단계별 진행률은 학습 API 연동 필요
*/
const studyList = [
  { label: "수어 기초", percent: 100 },
  { label: "수어 중급", percent: 68 },
  { label: "수어 고급", percent: 12 },
];

const StudyStatusCard = () => {
  return (
    <StudyStatusWrapper>
      <StudyStatusTitle>📚 학습 현황</StudyStatusTitle>
      <StudyStatusDivider />

      <StudyStatusList>
        {studyList.map((item) => (
          <div key={item.label}>
            <StudyStatusRow>
              <StudyStatusLabel>{item.label}</StudyStatusLabel>
              <StudyStatusPercent>{item.percent}%</StudyStatusPercent>
            </StudyStatusRow>

            <ProgressBar>
              <ProgressFill $percent={item.percent} />
            </ProgressBar>
          </div>
        ))}
      </StudyStatusList>
    </StudyStatusWrapper>
  );
};

export default StudyStatusCard;