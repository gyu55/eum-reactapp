// 출석 화면 컴포넌트: 출석 현황, 주간 출석, 보상 목록 표시를 담당
import { useMemo, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import "react-calendar/dist/Calendar.css";
import AttendanceRewardList from "./parts/AttendanceRewardList";
import AttendanceSummaryCard from "./parts/AttendanceSummaryCard";
import WeeklyAttendance from "./parts/WeeklyAttendance";
import * as S from "./style";

const summaryCards = [
  { id: "streak", icon: "🔥", label: "현재 연속 출석", keyName: "streakDays", unit: "일" },
  { id: "month", icon: "🗓️", label: "이번 달 출석", keyName: "monthlyDays", unit: "일" },
  { id: "exp", icon: "⚡", label: "총 획득 EXP", keyName: "totalExp", unit: "" },
  { id: "badge", icon: "🏅", label: "획득 뱃지", keyName: "badgeCount", unit: "개" },
];

moment.locale("ko");

const StudyAttendanceComponent = ({ loading, error, summary }) => {
  const initialDate = useMemo(() => new Date(`${summary?.currentDate || "2026-05-21"}T00:00:00`), [summary?.currentDate]);
  const today = useMemo(() => new Date(), []);
  const [date, setDate] = useState(initialDate);
  const [activeStartDate, setActiveStartDate] = useState(initialDate);

  // 출석날짜목록: 백엔드에서 받은 날짜 배열과 달력 날짜를 비교할 때 사용
  const attendanceDateSet = useMemo(() => new Set(summary?.attendanceDates || []), [summary?.attendanceDates]);

  // 오늘로 이동: 달력을 실제 오늘 날짜가 있는 월로 돌아감
  const handleTodayClick = () => {

    setDate(today);
    setActiveStartDate(today);
  };

  if (loading) {
    return <S.AttendanceWrap>출석 정보를 불러오는 중입니다.</S.AttendanceWrap>;
  }

  return (
    <S.AttendanceWrap>
      <S.AttendanceHeader>
        <div>
          <S.AttendanceTitle>출석체크</S.AttendanceTitle>
          <S.AttendanceDesc>매일 출석하고 보상을 받아요</S.AttendanceDesc>
        </div>

        <S.TodayStatus $checked={summary.checkedToday}>
          <strong>{summary.checkedToday ? "✅ 오늘 출석 완료!" : "출석 전"}</strong>
          <span>{summary.todayLabel}</span>
        </S.TodayStatus>
      </S.AttendanceHeader>

      {error && <S.AttendanceNotice>{error}</S.AttendanceNotice>}

      <S.SummaryGrid>
        {summaryCards.map((card) => (
          <AttendanceSummaryCard
            key={card.id}
            tone={card.id}
            icon={card.icon}
            label={card.label}
            value={`${summary[card.keyName]}${card.unit}`}
          />
        ))}
      </S.SummaryGrid>

      <S.AttendanceContent>
        <S.CalendarCard>
          <S.CalendarFrame>
            <S.StyledCalendar
              value={date}
              onChange={setDate}
              activeStartDate={activeStartDate}
              onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
              formatDay={(locale, date) => moment(date).format("D")}
              formatYear={(locale, date) => moment(date).format("YYYY")}
              formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
              formatShortWeekday={(locale, date) => moment(date).format("dd")}
              calendarType="gregory"
              showNeighboringMonth
              next2Label={null}
              prev2Label={null}
              minDetail="year"
              tileContent={({ date, view }) => {
                const formattedDate = moment(date).format("YYYY-MM-DD");
                if (view !== "month" || !attendanceDateSet.has(formattedDate)) return null;
                return <S.CalendarDot />;
              }}
            />
            <S.CalendarTodayButton type="button" onClick={handleTodayClick}>
              Today
            </S.CalendarTodayButton>
          </S.CalendarFrame>
          <S.CalendarLegend>
            <span>출석</span>
            <span>미출석</span>
          </S.CalendarLegend>
        </S.CalendarCard>

        <S.SidePanel>
          <WeeklyAttendance week={summary.weeklyStatus} progress={summary.weekProgress} />
          <AttendanceRewardList rewards={summary.rewards} />
        </S.SidePanel>
      </S.AttendanceContent>
    </S.AttendanceWrap>
  );
};

export default StudyAttendanceComponent;
