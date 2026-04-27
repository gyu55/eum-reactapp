import React from 'react';
import { Link } from 'react-router-dom';




const CommunityComponent = ({users}) => {
    return (
        <>
            <div>
                <Link to={"/community/chat"}>실시간 채팅</Link>
                <Link to={"/community/post"}>게시글</Link>
            </div>
            <div>
                {users?.map((user) => (
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

export default CommunityComponent;