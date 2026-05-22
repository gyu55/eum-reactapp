// 출석 요약 카드: 연속 출석, 월간 출석, EXP, 뱃지 표시를 담당
import * as S from "../style";

const AttendanceSummaryCard = ({ tone, icon, label, value }) => {
  return (
    <S.SummaryCard $tone={tone}>
      <S.SummaryIcon>{icon}</S.SummaryIcon>
      <strong>{value}</strong>
      <span>{label}</span>
    </S.SummaryCard>
  );
};

export default AttendanceSummaryCard;
