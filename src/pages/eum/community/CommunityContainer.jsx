import React from 'react';
import CommunityComponent from './CommunityComponent';
import { Link, Outlet } from 'react-router-dom';

const users = [
  { userId: 1, userName: '홍길동' },
  { userId: 2, userName: '장보고' },
];


const CommunityContainer = () => {
    return (
        <>
            <div>
                커뮤니티페이지
                <CommunityComponent />
                <Outlet />
            </div>
            <div>
                지금 활동 중인 멤버
                {users.map((user) => (
                    <div key={user.userId}>
                        <Link to={`/community/profile/${user.userId}`}>
                            {user.userName}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CommunityContainer;