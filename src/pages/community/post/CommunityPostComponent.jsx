import React from 'react';
import { Link } from 'react-router-dom';

const CommunityPostComponent = () => {



    return (
        <div>
            게시글 페이지
            <Link to={"/community/post/write"}>게시글 작성</Link>
        </div>
    );
};

export default CommunityPostComponent;