import React from 'react';
import { Link } from 'react-router-dom';

// 검색페이지
const StudySearchComponent = () => {
    return (
        <div>
            <div id=''>
            <input type='text' placeholder='안녕하세요'/>
            <Link to={"/study/search"}>검색</Link>
            <p>"안녕하세요" 검색 결과 3개 </p>
            </div>

            <div>
                <span>안녕하세요</span>
                <span>▶ 영상 보기</span>
                <span>카드 보기</span>
                <p>오른쪽 손바닥을 주먹을 쥔 왼 팔등에 내린 후
                    맞손 모두 손바닥이 바닥을 향하도록 주먹을 쥐고 가슴 앞에 내린다.</p>
                <span>🔗 한국수어사전 원문 보기</span>
            </div>

            <div>
                <span>안녕하세요 (격식)</span>
                <span>▶ 영상 보기</span>
                <span>카드 보기</span>
                <p>공식적인 자리에서 사용하는 정중한 인사 표현</p>
            </div>

            <div>
                <span>안녕 (반말)</span>
                <span>▶ 영상 보기</span>
                <span>카드 보기</span>
                <p>친한 친구나 아랫사람에게 사용하는 편안한 인사</p>
            </div> 
        </div>
    );
};

export default StudySearchComponent;
