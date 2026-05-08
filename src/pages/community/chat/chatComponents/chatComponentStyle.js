import { css } from "styled-components";
import { colors, COMMENT, radius } from "../../constants";

// css  공통 요소 정의
// 채탕방 썸네일
export const thumbnailStyle = css`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: ${radius.input};
  background: ${colors.primaryLight};
`;
