import styled, { css } from "styled-components";
import { colors, COMMENT, radius } from "../../constants";

export const thumbnailStyle = css`
  width: ${COMMENT.avatarSize};
  height: ${COMMENT.avatarSize};
  border-radius: ${radius.input};
  background: ${colors.primaryLight};
`;

export const ThumbnailBox = styled.img`
  ${thumbnailStyle}
  flex-shrink: 0;
  object-fit: cover;
`;

export const PopupThumbnailBox = styled.img`
  width: 30px;
  height: 30px;
  border-radius: ${radius.input};
  background: ${colors.primaryLight};
  flex-shrink: 0;
  object-fit: cover;
`;
