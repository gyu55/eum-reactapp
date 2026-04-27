import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CommunityUserProfileComponent = () => {

    const {userId} = useParams();

    return (
        <div>
            {userId}번 유저 프로필
        </div>
    );
};

export default CommunityUserProfileComponent;