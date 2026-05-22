// 출석 데이터 변환 담당: 백엔드 출석 응답을 출석 화면 데이터로 변환
export const mapAttendanceSummary = (summary = {}, fallback = {}) => ({
  checkedToday: summary.checkedToday ?? summary.attendedToday ?? fallback.checkedToday ?? false,
  currentDate: summary.currentDate || summary.today || fallback.currentDate,
  todayLabel: summary.todayLabel || summary.todayRewardLabel || fallback.todayLabel || "",
  streakDays: summary.streakDays ?? summary.continuousAttendanceDays ?? fallback.streakDays ?? 0,
  monthlyDays: summary.monthlyDays ?? summary.monthlyAttendanceDays ?? fallback.monthlyDays ?? 0,
  totalExp: summary.totalExp ?? summary.totalExperience ?? fallback.totalExp ?? 0,
  badgeCount: summary.badgeCount ?? summary.badges?.length ?? fallback.badgeCount ?? 0,
  weekProgress: summary.weekProgress ?? fallback.weekProgress ?? 0,
  weeklyStatus: summary.weeklyStatus || fallback.weeklyStatus || [],
  attendanceDates: summary.attendanceDates || summary.attendedDates || fallback.attendanceDates || [],
  rewards: summary.rewards || fallback.rewards || [],
});
