// 출석 팝업 컴포넌트: 홈에서 출석 완료 요약과 상세 이동을 담당
import * as S from "./style";

const StudyAttendancePopup = ({ onClose, onDetail }) => {
  return (
    <S.AttendancePopupWrap>
      <div className="popup">
        <button className="close" type="button" onClick={onClose}>
          ×
        </button>
        <div className="fire">🔥</div>
        <h2>7일 연속 출석!</h2>
        <p className="date">2026년 01월 01일 목요일</p>

        <div className="rewards">
          <div>
            <span>⚡</span>
            <small>획득 EXP</small>
            <strong>+30 EXP</strong>
          </div>
          <div>
            <span>🏅</span>
            <small>획득뱃지</small>
            <strong>4개</strong>
          </div>
        </div>

        <p className="notice">14일 달성까지 7일 남았어요</p>
        <div className="bar"><span /></div>
        <button className="detail" type="button" onClick={onDetail}>
          자세히 보기 →
        </button>
      </div>
    </S.AttendancePopupWrap>
  );
};

export default StudyAttendancePopup;
