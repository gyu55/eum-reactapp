// 주간 출석 컴포넌트: 이번 주 요일별 출석 상태 표시를 담당
import * as S from "../style";

const WeeklyAttendance = ({ week = [], progress = 0 }) => {
  return (
    <S.WeeklyCard>
      <S.CardTitle>이번 주 출석</S.CardTitle>
      <S.WeekList>
      {week.map((day) => (
        <S.WeekItem key={day.id || day.label} $status={day.status}>
          <span>{day.label}</span>
          <strong>{day.status === "done" || day.status === "today" ? "✓" : ""}</strong>
        </S.WeekItem>
      ))}
      </S.WeekList>
      <S.WeeklyProgressText>
        이번 주 목표까지 <strong>{progress}%</strong>
      </S.WeeklyProgressText>
      <S.WeeklyProgressBar $progress={progress}>
        <span />
      </S.WeeklyProgressBar>
    </S.WeeklyCard>
  );
};

export default WeeklyAttendance;
