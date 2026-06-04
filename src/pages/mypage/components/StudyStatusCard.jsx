import React from "react";

import S from "./style";

/*
  학습 단계별 진행률은 마이페이지 메인 API 연동
*/
const StudyStatusCard = ({ studyStatusList = [] }) => {
  return (
    <S.StudyStatusWrapper>
      <S.StudyStatusTitle>📚 학습 현황</S.StudyStatusTitle>
      <S.StudyStatusDivider />

      <S.StudyStatusList>
        {/* 학습 데이터가 있을 때만 목록 표시 */}
        {studyStatusList.length > 0 &&
          studyStatusList.map((item) => (
            <S.StudyStatusItem key={item.id}>
              <S.StudyStatusRow>
                <S.StudyStatusLabel>{item.eduTitle}</S.StudyStatusLabel>
                <S.StudyStatusPercent>{item.progress}%</S.StudyStatusPercent>
              </S.StudyStatusRow>

              <S.ProgressBar>
                <S.ProgressFill $percent={item.progress} />
              </S.ProgressBar>
            </S.StudyStatusItem>
          ))}
      </S.StudyStatusList>
    </S.StudyStatusWrapper>
  );
};

export default StudyStatusCard;