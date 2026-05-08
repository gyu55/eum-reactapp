import React from "react";
import styled from "styled-components";
import { h10Regular, h11Regular, h9Bold } from "../../../../styles/common";
import theme from "../../../../styles/theme";
import { COMMENT, LAYOUT, RADIUS } from "../../constants";
import { Divider } from "../../communityStyle";

// 감싸는 카드 만들기
const UserCommentWrapper = styled.div`
  background: ${theme.PALETTE.white};

  /* 카드 전체 너비 정의 */
  width: ${LAYOUT.cardMaxWidth};

  /* 보더 정의 */
  border-radius: ${RADIUS.card};

  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
`;

// 유저 프로필 및 댓글 내용 row 로 묶기
const UserCommentMid = styled.div`
  display: flex;
  gap: 12px;
`;

// 댓글 작성자 및 내용 세로로 묶기
const UserCommentTitleAndDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 유저 프로필
const UserCommentProfile = styled.div`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: ${RADIUS.smallCard};
  background: gray;
`;

// 댓글 작성자 및 댓글 내용
const UserCommentWriter = styled.div`
  ${h9Bold};
  color: ${theme.TEXT_COLOR.basic};
`;

const UserCommentDetail = styled.div`
  ${h10Regular};
  color: ${theme.GRAYSCALE[9]};
`;

// 댓글 작성 시간
const UserCommentCreateAt = styled.div`
  ${h11Regular};
  color: ${theme.GRAYSCALE[9]};
  margin-left: 52px;
`;

// comment DTO 고려하기
const UserCommentCard = () => {
  return (
    <div>
      <UserCommentWrapper>
        {/* 유저 프로필과 내용 단 row 로 감싸는 블럭 */}
        <UserCommentMid>
          {/* 유저 프로필 이미지 */}
          <UserCommentProfile />

          {/* 작성자 및 댓글 내용 */}
          <UserCommentTitleAndDetail>
            <UserCommentWriter>작성자</UserCommentWriter>
            <UserCommentDetail>
              내용이 이렇게 있습니다. 감사합니다
            </UserCommentDetail>
          </UserCommentTitleAndDetail>
        </UserCommentMid>

        {/* 구분선 */}
        <Divider />

        {/* 작성 시간 */}
        <UserCommentCreateAt>5분 전</UserCommentCreateAt>
      </UserCommentWrapper>
    </div>
  );
};

export default UserCommentCard;
