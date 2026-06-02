// 출석 팝업 컴포넌트: 홈에서 출석 완료 요약과 상세 이동을 담당
import * as S from "./style";

const rewardDays = [3, 7, 14, 30];

// 날짜표시변환: 출석 날짜를 팝업용 한글 형식으로 변환
const formatAttendanceDate = (dateText) => {
  if (!dateText) return "";

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  }).format(new Date(`${dateText}T00:00:00`));
};

const StudyAttendancePopup = ({ onClose, onDetail, summary }) => {
  const streakDays = summary?.streakDays || 0;
  const nextRewardDay = rewardDays.find((day) => day > streakDays);

  return (
    <S.AttendancePopupWrap>
      <div className="popup">
        <button className="close" type="button" onClick={onClose}>
          ×
        </button>
        <div className="fire">🔥</div>
        <h2>{streakDays}일 연속 출석!</h2>
        <p className="date">{formatAttendanceDate(summary?.currentDate)}</p>

        <div className="rewards">
          <div>
            <span>⚡</span>
            <small>획득 EXP</small>
            <strong>+30 EXP</strong>
          </div>
          <div>
            <span>🏅</span>
            <small>획득뱃지</small>
            <strong>{summary?.badgeCount || 0}개</strong>
          </div>
        </div>

        <p className="notice">
          {nextRewardDay
            ? `${nextRewardDay}일 달성까지 ${nextRewardDay - streakDays}일 남았어요`
            : "30일 연속 출석을 달성했어요!"}
        </p>
        <div className="bar"><span /></div>
        <button className="detail" type="button" onClick={onDetail}>
          자세히 보기 →
        </button>
      </div>
    </S.AttendancePopupWrap>
  );
};

export default StudyAttendancePopup;
