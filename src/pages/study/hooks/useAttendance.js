// 출석 훅 담당: 출석 화면 데이터 조회와 상태 관리
import { useEffect, useRef, useState } from "react";
import { fetchAttendanceSummary } from "../apis/AttendanceApi";
import { attendanceMock } from "../attendance/data/attendanceMock";
import { mapAttendanceSummary } from "../mappers/attendanceMapper";
import { useStudyUser } from "./useStudyUser";

// 날짜문자열변환: API 요청에 사용할 YYYY-MM-DD 형식을 만듦
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// 월조회기간생성: 선택한 달의 첫날과 다음 달 첫날을 만듦
const getMonthPeriod = (date) => {
  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);

  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
  };
};

// 주조회기간생성: 이번 주 월요일과 다음 주 월요일을 만듦
const getWeekPeriod = (date) => {
  const startDate = new Date(date);
  const mondayOffset = startDate.getDay() === 0 ? -6 : 1 - startDate.getDay();

  startDate.setDate(startDate.getDate() + mondayOffset);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 7);

  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
  };
};

// 같은월확인: 현재 월과 달력에서 보고 있는 월이 같은지 확인
const isSameMonth = (leftDate, rightDate) =>
  leftDate.getFullYear() === rightDate.getFullYear()
  && leftDate.getMonth() === rightDate.getMonth();

export const useAttendance = () => {
  const { userId, isGuest } = useStudyUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState(attendanceMock);
  const [calendarDate, setCalendarDate] = useState(() => new Date());
  const hasLoaded = useRef(false);

  // 출석조회함수: 백엔드 출석 현황을 불러오고 실패하면 임시데이터 사용
  useEffect(() => {
    let ignore = false;

    const loadAttendance = async () => {
      if (!hasLoaded.current) setLoading(true);
      setError(null);

      if (isGuest || !userId) {
        setSummary({
          ...attendanceMock,
          checkedToday: false,
          todayLabel: "로그인 후 출석체크 가능",
        });

        setError("로그인 후 실제 출석 정보를 확인할 수 있어요.");
        hasLoaded.current = true;
        setLoading(false);

        return;
      }

      try {
        const today = new Date();
        const currentMonthPeriod = getMonthPeriod(today);
        const currentWeekPeriod = getWeekPeriod(today);
        const calendarMonthPeriod = getMonthPeriod(calendarDate);
        const currentMonthRequest = fetchAttendanceSummary(
          userId,
          currentMonthPeriod.startDate,
          currentMonthPeriod.endDate
        );
        const currentWeekRequest = fetchAttendanceSummary(
          userId,
          currentWeekPeriod.startDate,
          currentWeekPeriod.endDate
        );
        const calendarMonthRequest = isSameMonth(today, calendarDate)
          ? currentMonthRequest
          : fetchAttendanceSummary(
            userId,
            calendarMonthPeriod.startDate,
            calendarMonthPeriod.endDate
          );
        const [currentMonthData, currentWeekData, calendarMonthData] =
          await Promise.all([
            currentMonthRequest,
            currentWeekRequest,
            calendarMonthRequest,
          ]);

        if (ignore)
          return;

        setSummary(mapAttendanceSummary(currentMonthData, attendanceMock, {
          calendarAttendanceDates: calendarMonthData.attendanceDates,
          weeklyAttendanceDates: currentWeekData.attendanceDates,
        }));
      } catch {
        if (ignore)
          return;

        setSummary(attendanceMock);
        setError("출석 서버 연결이 어려워 임시데이터를 보여주고 있어요.");
      } finally {
        if (!ignore) {
          hasLoaded.current = true;
          setLoading(false);
        }
      }
    };

    loadAttendance();

    return () => {
      ignore = true;
    };
  }, [calendarDate, isGuest, userId]);

  // 달력월변경: 달력에서 이동한 월의 출석 날짜를 다시 조회
  const handleCalendarPeriodChange = (date) => {
    setCalendarDate(date);
  };

  return {
    loading,
    error,
    summary,
    handleCalendarPeriodChange,
  };
};
