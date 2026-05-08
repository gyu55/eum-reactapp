import React from "react";
import styled from "styled-components";
import { h10Regular, h9Bold } from "../../../../styles/common";
import theme from "../../../../styles/theme";
import { LAYOUT, RADIUS } from "../../constants";

// 감싸는 카드 만들기
const UserCommentWrapper = styled.div`
  background: ${theme.PALETTE.white};

  /* 카드 전체 너비 정의 */
  width: ${LAYOUT.cardMaxWidth};

  /* 보더 정의 */
  border-radius: ${RADIUS.card};

  display: flex;
  flex-direction: column;
`;

const UserCommentTitleAndDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserCommentTitle = styled.div`
  ${h9Bold}
  color: ${theme.TEXT_COLOR.basic};
`;

const UserCommentDetail = styled.div`
  ${h10Regular}
  ${theme.GRAYSCALE[9]}
`;

const UserCommentCard = () => {
  return (
    <div>
      <UserCommentWrapper>
        <UserCommentTitleAndDetail>
          <UserCommentTitle>제목</UserCommentTitle>
          <UserCommentDetail>내용</UserCommentDetail>
        </UserCommentTitleAndDetail>
      </UserCommentWrapper>
    </div>
  );
};

export default UserCommentCard;
