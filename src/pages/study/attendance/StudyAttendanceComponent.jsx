import { useState } from 'react';
import StudyAttendancePopup from './StudyAttendancePopup';
import { AttendNotice, AttendReward, AttendTitle, AttendWrap, CalendarWrap, HeadsUp, SideWrap, StyledCalendar, StyledCalendarWrapper, StyledDate, StyledDot } from './style';
import moment from 'moment';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { data } from 'react-router-dom';

// 출석체크 화면
const StudyAttendanceComponent = () => {

    // 달력
    const today = new Date();
    const [date, setDate] = useState(today);
    const [activeStartDate, setActiveStartDate] = useState(today);
    const attendDay = ["2026-05-05", "2026-05-06"];
    
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    
    const handleTodayClick = () => {
        const today = new Date();
        setActiveStartDate(today);
        setDate(today);
    };


    return(
        <AttendWrap>
            {/* Title */}
            <AttendTitle>
                <div className='checkAttendance' >
                    <p className='checkDesc1'>출석체크</p>
                    <span className='checkDesc2'>매일 출석하고 보상을 받아요</span>
                </div>

                <div className='checkComplete'>
                    <p className='completeDesc1'>✅ 오늘 출석 완료!</p>
                    <span className='completeDesc2'>+30 XP 획득했어요!</span>
                </div>
            </AttendTitle>

            {/* 알림 */}
            <AttendNotice>
                <div className='straight'>
                    <p className='noticeIcon'>🔥</p>
                    <p className='noticeDay'>7일</p>
                    <p className='noticeText'>현재 연속 출석</p>
                </div>

                <div className='month'>
                    <p className='noticeIcon'>📅</p>
                    <p className='noticeDay'>14일</p>
                    <p className='noticeText'>이번달 출석</p>
                </div>

                <div className='exp'>
                    <p className='noticeIcon'>⚡</p>
                    <p className='noticeDay'>1,240</p>
                    <p className='noticeText'>총 획득 EXP</p>
                </div>

                <div className='badge'>
                    <p className='noticeIcon'>🏅</p>
                    <p className='noticeDay'>3개</p>
                    <p className='noticeText'>획득 뱃지</p>
                </div>
            </AttendNotice>

            {/* 달력 */}
            <StyledCalendarWrapper>
                <CalendarWrap>
                    <StyledCalendar
                        value={date} //선택한 날짜
                        onChange={handleDateChange} //날짜 클릭시 실행
                        formatDay={(locale, date) => moment(date).format("D")} //일
                        formatYear={(locale, date) => moment(date).format("YYYY")} //연도
                        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} //상단 월
                        formatShortWeekday={(locale, date) => moment(date).format("ddd")} // 요일
                        calendarType="gregory" // 그레고리력 달력

                        showNeighboringMonth={false} // 이전/다음달 날짜 보기 -> true / 안봄 -> false
                        // 2칸 이동 버튼 숨기기 -> >> <<
                        next2Label={null}
                        prev2Label={null}
                        minDetail="year" // 어디까지 보여줄지
                        activeStartDate={activeStartDate === null ? undefined : activeStartDate} // 현재 보고있는 달
                        
                        // 달력 월 바뀔 때
                        // 사용자가 다음달 버튼 누를 activeStartDate 여기에 저장
                        onActiveStartDateChange={({ activeStartDate }) =>
                        setActiveStartDate(activeStartDate)}
                        
                        // 날짜 칸 안에 추가 내용 넣기
                        //  html 배열 / . 점찍기 등
                        tileContent={({ date, view }) => {
                            let html = [];
                            if (view === "month") { // view가 'month'일 때
                                // 해당 날짜가 특정 날짜인지 확인
                                if (attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                                // 점 추가    
                                html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
                                console.log(moment(date).format("YYYY-MM-DD"));
                                }
                            }
                            return <>{html}</>;
                        }}
                    />
                    
                    {/*  Today 버튼 */}
                    <StyledDate onClick={handleTodayClick}>Today</StyledDate>
                </CalendarWrap>

                <SideWrap>
                    {/* weeks */}
                    <HeadsUp>
                        <div>
                            <p>이번주</p>
                            <span>월</span>
                            <span>화</span>
                            <span>수</span>
                            <span>목</span>
                            <span>금</span>
                            <span>토</span>
                            <span>일</span>
                        </div>
                    </HeadsUp>

                    {/* 출석보상 */}
                    <AttendReward>
                        <div>
                            출석보상
                            <p></p>

                        </div>
                    </AttendReward>
                </SideWrap>
            </StyledCalendarWrapper>
        </AttendWrap>
    );

};

export default StudyAttendanceComponent;