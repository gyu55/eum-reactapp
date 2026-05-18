import styled from "styled-components";
import { flexCenterRow, flexStartRow, h11Bold } from "../../../styles/common";
import theme from "../../../styles/theme";

// 상단 헤더
export const HeaderBlock = styled.div`
  ${flexCenterRow}
  width: 100%;
  justify-content: space-between;
`;

// 중간 채팅방 나열
export const LiveChatRow = styled.div`
  ${flexCenterRow}
  width: 100%;
  justify-content: space-between;
`;

// 포스트 헤더
export const PostHeader = styled.div`
  ${flexStartRow}
  width: 100%;
  justify-content: start;
`;

// 카테고리 및 글쓰기 버튼
export const PostCategoryHeader = styled.div`
  ${flexCenterRow}
  width: 100%;
  justify-content: space-between;
`;

// 카테고리
export const PostCategoryRow = styled.div`
  ${flexCenterRow}
  gap: 8px;
`;

// 모두 이동 링크 버튼 스타일
export const AllChatButton = styled.div`
  ${h11Bold}
  color: ${theme.PALETTE.primary.main};
  width: 100%;
  display: flex;
  justify-content: center;
`;
