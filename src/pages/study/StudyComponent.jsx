import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Banner, BannerContent, BannerIcon, Category, Search, StudyWrap, Video } from './style';

// 학습 메인화면
const StudyComponent = () => {

    const navigate = useNavigate();

    // 검색 icon
    const words = [
        {icon: "😊", text: "기쁨"},
        {icon: "🎪", text: "놀이"},
        {icon: "❤️", text: "사랑"},
        {icon: "🤔", text: "질문"},
        {icon: "👬", text: "친구"},
        {icon: "🍚", text: "밥"},
        {icon: "💧", text: "물"},
        {icon: "☀️", text: "날씨"},
        {icon: "👨‍👩‍👧", text: "가족"},
        {icon: "🏫", text: "학교"},
        {icon: "💼", text: "일"},
        {icon: "🚌", text: "버스"},
    ];

    return (
        <StudyWrap>
            {/* 배너 */}
            <Banner>
                {/* 아이콘 */}
                <BannerIcon>
                    <span className='icon1'>🤝</span>
                    <span className='icon2'>💬</span>
                    <span className='icon3'>🤙</span>
                    <span className='icon4'>✨</span>
                    <span className='icon5'>🫶</span>
                    <span className='icon6'>🤟</span>
                    <span className='icon7'>💙</span>
                    <span className='icon8'>✨</span>
                    <span className='icon9'>🌸</span>
                    <span className='icon10'>👐</span>
                </BannerIcon>
                
                <BannerContent>
                    <div className='top-icon'>👋✌️</div>
                    <p className='title'>지금 바로 배워보세요!</p>
                    <p className='desc'>회원가입 없이 다양한 언어표현을</p>
                    <p className='desc1'>재미있게 체험할 수 있어요</p>
                    <Link className='link' to={"/study/experience"}>지금 시작하기!ㅠㅠㅠㅠ </Link>   
                </BannerContent>
            </Banner>

            {/* 카테고리 */}
            <Category>
                <div className='one-row'> 
                    <div className='attendCheck'>
                        <p className='attendCheck1'>출석체크</p>
                        <Link className='attendCheckLink' to={"/study/attendance"}>출석체크 </Link>
                        <img className='attendCheckImg' src='/assets/image/attendCheck.png' alt='출석체크 이미지'/>
                        <p className='attendCheck2'>매일매일 출석해요! </p>
                        <button className='oneButton' onClick={() => navigate("/study/attendance")}>바로가기 →</button>
                    </div>

                    <div className='ohQuiz'>
                        <p className='ohQuiz1'>오! 퀴즈</p>
                        <Link className='ohQuizLink' to={"/study/chapter"}>퀴즈</Link>
                        <img className='ohQuizImg' src='/assets/image/quiz.png' alt='오퀴즈 이미지'/>
                        <p className='ohQuiz2'>알아두면 좋을 퀴즈 </p>
                        <button className='oneButton' onClick={() => navigate("/study/chapter")}>바로가기 →</button>
                    </div>
                </div>

                <div className='two-row'>
                    <div className='signLearn'>
                        <p className='signLearn1'>수어 학습</p>
                        <Link className='signLearnLink' to={"/study/learn"}>수어 학습 </Link>
                        <img className='signLearnImg' src='/assets/image/signLearn.png' alt='수어학습 이미지'/>
                        <p className='signLearn2'>눈으로 듣는 새로운 대화법 </p>
                        <button className='twoButton' onClick={() => navigate("/study/learn")}>바로가기 →</button>
                    </div>

                    <div className='emergency'>
                        <p className='emergency1'>응급수신호</p>
                        <Link className='emergencyLink' to={"/study/learn"}>응급수신호 </Link>
                        <img className='emergencyImg' src='/assets/image/emergency.png' alt='응급수신호 이미지'/>
                        <p className='emergency2'>위험을 알리는 방법 </p>
                        <button className='twoButton' onClick={() => navigate("/study/learn")}>바로가기 →</button>
                    </div>

                    <div className='mors'>
                        <p className='mors1'>모스부호</p>
                        <Link className='morsLink' to={"/study/learn"}>모스부호</Link>
                        <img className='morsImg' src='/assets/image/mors.png' alt='모스부호 이미지'/>
                        <p className='mors2'>빛과 점으로 전하는 신호 </p>
                        <button className='twoButton' onClick={() => navigate("/study/learn")}>바로가기 →</button>
                    </div>
                </div>
            </Category>

            {/* 검색 */}
            <Search>
                <p className='title'>찾고 싶은 단어를 검색하세요</p>
                <input className='input' type='text' placeholder='단어를 입력하세요'/>
                <Link className='searchLink' to={"/study/search"}>검색</Link>
                <p className='searchText'>전체 일상 가족 음식 날씨 감정 숫자 색깔 동물 </p>

                <div className='wordGrid'>
                    {words.map((word) => (
                        <div className='wordItem'>
                            <span className='wordIcon'>{word.icon}</span>
                            <p className='wordText'>{word.text}</p>
                        </div>
                    ))}
                </div>

                <button className='searchButton'>더 많은 단어 보기 →</button>
            </Search>

            {/* 영상 */}
            <Video>
                <p className='title'>바로 배우는 <span className='blueText'>오늘의 단어</span> 영상</p>
                <p className='desc'>매일 업데이트되는 짧은 학습 영상을 만나보세요.</p>

                <div className='videoTaps'>
                    <button className='tapsButton'>
                        <img className='videoImg' src='/assets/image/signLearn.png' alt='수어학습 이미지' />
                        <span className='tapText'>수어</span>
                    </button>
                    <button className='tapsButton'>
                        <img className='videoImg' src='/assets/image/emergency.png' alt='응급수신호 이미지' />
                        <span className='tapText'>수신호</span>
                    </button>
                    <button className='tapsButton'>
                        <img className='videoImg' src='/assets/image/mors.png' alt='모스부호 이미지' />
                        <span className='tapText'>모스부호</span>
                    </button>
                </div>

                <div className='videoCards'>
                    <p className='image'>영상이미지</p>
                    <p className='image'>영상이미지</p>
                    <p className='image'>영상이미지</p>
                </div>

                <button className='videoButton'>더 많은 영상 보기 →</button>
            </Video>

        </StudyWrap>
    );
};

export default StudyComponent;
