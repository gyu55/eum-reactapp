// 출석 컨테이너: 출석 데이터 조회와 출석 화면 연결을 담당
import { useAttendance } from "../hooks/useAttendance";
import StudyAttendanceComponent from "./StudyAttendanceComponent";

const StudyAttendanceContainer = () => {
  const { loading, error, summary, handleCalendarPeriodChange } = useAttendance();

  return (
    <StudyAttendanceComponent
      loading={loading}
      error={error}
      summary={summary}
      onCalendarPeriodChange={handleCalendarPeriodChange}
    />
  );
};

export default StudyAttendanceContainer;
