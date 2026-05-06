import React from 'react';
import { AttendPopUpWrap } from './style';

// 출석체크 Popup
const StudyAttendancePopup = () => {



    return (
        <AttendPopUpWrap>
            <div className="attendance-modal">
                <button className='close-btn' onClick={onclose}>✕</button>

                <div>
                <div className='fire'>🔥</div>
                <h1>7일 연속 출석!</h1>
                <div className='date'>2026년 01월 01일 목요일</div>
                </div>

                <div>
                <div className='fire'>⚡</div>
                <div className='get-exp'>획득 EXP</div>
                <div className='point-exp'>+30 EXP</div>
                </div>

                <div>
                <div className='badge'>🏅</div>
                <div className='get-badge'>획득뱃지</div>
                <div className='point-badge'>4개</div>
                </div>

                <div>
                    
                </div>
                <div className='attendnotice'>14일 달성까지 7일 남았어요</div>
                <div className='attendnoticebar'>--------------</div>
                
                <button className='detail-btn'>자세히 보기 →</button>
            </div>
        </AttendPopUpWrap>
    );
};

export default StudyAttendancePopup;