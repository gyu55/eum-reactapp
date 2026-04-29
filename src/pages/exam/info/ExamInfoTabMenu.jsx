import React from 'react';
import { Link } from 'react-router-dom';

const ExamInfoTabMenu = () => {
    return (
        <div>
            <Link to={"/exam/info/intro"}>자격증</Link>
            <Link to={"/exam/info/notice"}>수료증</Link>
        </div>
    );
};

export default ExamInfoTabMenu;