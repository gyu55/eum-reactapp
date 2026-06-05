const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];

const attendanceRewardSteps = [
  { day: 3, exp: 50, hasBadge: false },
  { day: 7, exp: 100, hasBadge: true },
  { day: 14, exp: 200, hasBadge: true },
  { day: 30, exp: 500, hasBadge: true },
];

// 날짜문자열변환: 브라우저 시간 기준으로 YYYY-MM-DD 형식을 만든다
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// 출석보상목록생성: 자동 지급 구조에 맞춰 완료/획득/잠금 상태를 만든다
const createAttendanceRewards = (streakDays, todayRewardExp) => {
  return attendanceRewardSteps.map((reward) => {
    const achieved = streakDays >= reward.day;
    const earnedToday = achieved && streakDays === reward.day && todayRewardExp >= reward.exp;

    return {
      id: `day${reward.day}`,
      day: `${reward.day}일`,
      title: `${reward.day}일 연속${earnedToday ? " 🔥" : ""}`,
      desc: `+${reward.exp} EXP${reward.hasBadge ? " · 🏅 뱃지" : ""}`,
      status: achieved ? earnedToday ? "earned" : "done" : "locked",
      buttonText: achieved ? earnedToday ? "획득" : "완료" : "🔒",
    };
  });
};

// 주간출석목록생성: 이번 주 날짜를 출석 여부와 함께 화면 데이터로 변환
const createWeeklyStatus = (attendanceDates, currentDate) => {
  const dateSet = new Set(attendanceDates);
  const today = new Date(`${currentDate}T00:00:00`);
  const startDate = new Date(today);
  const mondayOffset = today.getDay() === 0 ? -6 : 1 - today.getDay();

  startDate.setDate(today.getDate() + mondayOffset);

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    const dateText = formatDate(date);

    return {
      id: dateText,
      label: weekdayLabels[date.getDay()],
      status: dateSet.has(dateText)
        ? dateText === currentDate ? "today" : "done"
        : dateText === currentDate ? "current" : "empty",
    };
  });
};

// 출석 데이터 변환 담당: 백엔드 출석 응답을 출석 화면 데이터로 변환
export const mapAttendanceSummary = (summary = {}, fallback = {}, periodData = {}) => {
  const monthlyAttendanceDates = summary.attendanceDates || summary.attendedDates || [];
  const attendanceDates = periodData.calendarAttendanceDates || monthlyAttendanceDates;
  const weeklyAttendanceDates = periodData.weeklyAttendanceDates || monthlyAttendanceDates;
  const currentDate = summary.currentDate || summary.today || formatDate(new Date());
  const weeklyStatus = summary.weeklyStatus || createWeeklyStatus(weeklyAttendanceDates, currentDate);
  const completedWeekDays = weeklyStatus.filter((day) => day.status === "done" || day.status === "today").length;
  const streakDays = summary.streakDays ?? summary.continuousAttendanceDays ?? 0;
  const todayRewardExp = summary.todayRewardExp ?? fallback.todayRewardExp ?? 0;

  return {
    checkedToday: summary.checkedToday ?? summary.attendedToday ?? false,
    currentDate,
    todayLabel: summary.todayLabel || summary.todayRewardLabel || "",
    todayRewardExp,
    streakDays,
    monthlyDays: summary.monthlyDays ?? summary.monthlyAttendanceDays ?? monthlyAttendanceDates.length,
    totalAttendanceDays: summary.totalAttendanceDays ?? 0,
    totalExp: summary.totalExp ?? summary.totalExperience ?? fallback.totalExp ?? 0,
    badgeCount: summary.badgeCount ?? summary.badges?.length ?? fallback.badgeCount ?? 0,
    weekProgress: summary.weekProgress ?? Math.round((completedWeekDays / 7) * 100),
    weeklyStatus,
    attendanceDates,
    rewards: summary.rewards || createAttendanceRewards(streakDays, todayRewardExp),
  };
};
