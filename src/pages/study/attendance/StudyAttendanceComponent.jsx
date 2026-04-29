import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StudyAttendancePopup from './StudyAttendancePopup';

// 출석체크 화면
const StudyAttendanceComponent = () => {

    return(
        <>
        <div>
        출석체크 매일 출석하고 보상을 받아요  ✅오늘 출석 완료! +30 XP 획득했어요!
        </div>
        <div>
        🔥 7일 현재 연속 출석 📅 14일 이번달 출석 ⚡1,240 총 획득 EXP 🏅3개 획득 뱃지
        </div>
        <div>
        달력
        </div>
        <div>
        이번주
        </div>
        <div>
        출석보상
        </div>
        
        </>
    );

};

export default StudyAttendanceComponent;