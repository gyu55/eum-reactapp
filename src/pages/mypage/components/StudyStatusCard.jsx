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
  학습 단계별 진행률은 마이페이지 메인 API 연동
*/
const StudyStatusCard = ({ studyStatusList = [] }) => {
  return (
    <StudyStatusWrapper>
      <StudyStatusTitle>📚 학습 현황</StudyStatusTitle>
      <StudyStatusDivider />

      <StudyStatusList>
        {/* 학습 데이터가 있을 때만 목록 표시 */}
        {studyStatusList.length > 0 &&
          studyStatusList.map((item) => (
            <div key={item.id}>
              <StudyStatusRow>
                <StudyStatusLabel>{item.eduTitle}</StudyStatusLabel>
                <StudyStatusPercent>{item.progress}%</StudyStatusPercent>
              </StudyStatusRow>

              <ProgressBar>
                <ProgressFill $percent={item.progress} />
              </ProgressBar>
            </div>
          ))}
      </StudyStatusList>
    </StudyStatusWrapper>
  );
};

export default StudyStatusCard;