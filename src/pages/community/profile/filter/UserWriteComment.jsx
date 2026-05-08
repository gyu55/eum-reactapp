import React from "react";
import styled from "styled-components";
import { LAYOUT } from "../../constants";
import UserCommentCard from "../UserProfile/UserCommentCard";

const Wrapper = styled.div`
  width: ${LAYOUT.cardMaxWidth};
  display: flex;
  flex-direction: column;
  gap: ${LAYOUT.gridGap};
`;

const UserWriteComment = () => {
  return (
    <div>
      <Wrapper>
        <UserCommentCard />
        <UserCommentCard />
        <UserCommentCard />
      </Wrapper>
    </div>
  );
};

export default UserWriteComment;
