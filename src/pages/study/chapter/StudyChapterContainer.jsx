import React from 'react';
import { Link } from 'react-router-dom';
import StudyChapterComponent from './StudyChapterComponent';

const StudyChapterContainer = () => {
    return (
        <div>
            <p>스터디 컨테이너</p>
            <Link to={"/study/chapter/history"}>역사</Link>
            <Link to={"/study/chapter/sos"}>응급 수신호</Link>
            <Link to={"/study/chapter/mors"}>모스부호</Link>
            <Link to={"/study/chapter/culture"}>문화</Link>
            <Link to={"/study/chapter/global"}>세계수화</Link>
            <StudyChapterComponent />
        </div>
    );
};

export default StudyChapterContainer;