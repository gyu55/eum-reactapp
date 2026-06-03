import styled from "styled-components";
import { h10Regular, h11Regular, h9Bold } from "../../../../styles/common";
import theme from "../../../../styles/theme";
import { BORDER_STYLE, COMMENT, LAYOUT, RADIUS } from "../../constants";
import { hoverStyle } from "../../communityStyle";
import { ReactionItem, ReactionsRow } from "../../comment/commentStyle";

export { ReactionItem, ReactionsRow };

// 감싸는 카드 만들기
export const UserCommentWrapper = styled.div`
  background: ${theme.PALETTE.white};

  /* 카드 전체 너비 정의 */
  width: ${LAYOUT.cardMaxWidth};

  /* 보더 정의 */
  border-radius: ${RADIUS.card};

  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;

  border: ${BORDER_STYLE.original};
  ${hoverStyle}
`;

// 유저 프로필 및 댓글 내용 row 로 묶기
export const UserCommentMid = styled.div`
  display: flex;
  gap: 12px;
`;

// 댓글 작성자 및 내용 세로로 묶기
export const UserCommentTitleAndDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 유저 프로필
export const UserCommentProfile = styled.img`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: ${RADIUS.smallCard};
  object-fit: cover;
  background: gray;
  flex-shrink: 0;
`;

// 댓글 작성자 및 댓글 내용
export const UserCommentWriter = styled.div`
  ${h9Bold};
  color: ${theme.TEXT_COLOR.basic};
`;

export const UserCommentDetail = styled.div`
  ${h10Regular};
  color: ${theme.GRAYSCALE[9]};
`;

// 댓글 내 작성시간 및 좋아요, 답글 수 정보 묶은것
export const UserCommentStateRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

// 댓글 작성 시간
export const UserCommentCreateAt = styled.div`
  ${h11Regular};
  color: ${theme.GRAYSCALE[9]};
  margin-left: 52px;
`;
