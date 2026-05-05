import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";
import {
  flexBetweenColumn,
  flexCenterColumn,
  flexCenterRow,
  h10Bold,
  h10Regular,
  h11Bold,
  h11Regular,
  h9Bold,
} from "../../../../styles/common";
import {
  flexBetweenTopRow,
  flexStartColumn,
  textFieldStyle,
} from "../../communityStyle";
import { LAYOUT, RADIUS } from "../../constants";

// 각 필드 오른쪽 영역 고정 너비
const leftAreaWidth = css`
  width: 848px;
`;

const noWrap = css`
  white-space: nowrap;
`;

const grayText = css`
  color: ${theme.GRAYSCALE[9]};
`;

// margin 0 + h11Regular + grayText 조합 (CategoryHint, TagHint, FileDropSub 공통)
const hintStyle = css`
  margin: 0;
  ${h11Regular}
  ${grayText}
`;

/* ══ Page ══ */
export const Page = styled.div`
  background: ${theme.GRAYSCALE[10]};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/* ══ Content Area ══ */
// 해당 영역은 좌측에는 메인, 우측에는 사이드 레이아웃이 있는 구조
export const ContentArea = styled.main`
  flex: 1;
  padding: 24px 300px 60px;
  display: flex;
  align-items: flex-start;
  gap: ${LAYOUT.gridGap};
  box-sizing: border-box;
`;

/* ══ Left Block ══ */
export const LeftBlock = styled.div`
  width: ${LAYOUT.cardMaxWidth};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${LAYOUT.gridGap};
`;

/* ── 액션 버튼 그룹 (취소/임시저장/등록하기) ── */
export const ActionButtons = styled.div`
  ${flexCenterRow}
  gap: 12px;
`;

// 버튼 스타일
export const ActionBtn = styled.button`
  ${h11Bold}
  padding: 8px 30px;
  border-radius: ${RADIUS.sm};
  cursor: pointer;
  ${noWrap}
  transition: opacity 0.2s;

  background: ${({ $type }) => {
    if ($type === "submit") return theme.PALETTE.primary.main;
    return theme.PALETTE.white;
  }};
  color: ${({ $type }) => {
    if ($type === "submit") return theme.PALETTE.white;
    if ($type === "draft") return theme.PALETTE.primary.main;
    return theme.GRAYSCALE[9];
  }};
  border: 1px solid
    ${({ $type }) =>
      $type === "draft" ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};

  &:hover {
    opacity: 0.85;
  }
`;

/* ── 작성 카드 ── */
export const WriteCard = styled.div`
  width: 100%;
  ${flexCenterColumn}
`;

// 이음 커뮤니티에 새 글을 작성합니다. 라는 제목
export const CardHeader = styled.div`
  background: ${theme.PALETTE.primary.main};
  padding: 16px 36px;
  border-radius: ${RADIUS.card} ${RADIUS.card} 0 0;
  width: 100%;

  p {
    margin: 0;
    ${h10Regular}
    color: ${theme.PALETTE.white};
    ${noWrap}
  }
`;

// 게시글을 작성하는 부분
export const CardBody = styled.div`
  background: ${theme.PALETTE.white};
  padding: 32px;
  border-radius: 0 0 ${RADIUS.card} ${RADIUS.card};
  ${flexBetweenColumn}
  width: 100%;
  gap: 32px;
`;

/* ── 공통: 항목 행 레이아웃 ── */
export const FieldRow = styled.div`
  ${flexBetweenTopRow}
  width: 100%;
`;

/* ── 항목 이름 레이블 ── */
export const FieldLabel = styled.div`
  ${flexCenterRow}
  gap: 4px;
  ${noWrap}
  flex-shrink: 0;
  /* min-width: 56px; */
`;

export const LabelText = styled.span`
  ${h10Bold}
  color: ${theme.TEXT_COLOR.basic};
`;

export const RequiredMark = styled.span`
  ${h11Bold}
  color: ${theme.PALETTE.primary.main};
`;

/* ── 텍스트 입력 필드 ── */
export const InputField = styled.input`
  min-width: 0;
  height: 49px;
  padding: 0 24px;
  ${h10Regular}

  ${textFieldStyle}
  ${leftAreaWidth}
`;

/* ── 카테고리 ── */
export const CategoryCol = styled.div`
  ${leftAreaWidth}
  ${flexStartColumn}
  gap: 8px;
`;

export const CategoryHint = styled.p`
  ${hintStyle}
`;

export const CategoryPills = styled.div`
  ${flexCenterRow}
  gap: 8px;
  flex-wrap: wrap;
`;

// 카테고리 선택 버튼 조정
export const CategoryPill = styled.button`
  height: 36px;
  padding: 0 24px;
  border-radius: ${RADIUS.pill};
  ${h9Bold}
  ${noWrap}
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s,
    border-color 0.15s;

  background: ${({ $active }) =>
    $active ? theme.PALETTE.primary.main : theme.PALETTE.white};
  color: ${({ $active }) =>
    $active ? theme.PALETTE.white : theme.TEXT_COLOR.basic};
  border: 1px solid
    ${({ $active }) =>
      $active ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};

  &:hover {
    background: ${({ $active }) =>
      $active ? theme.PALETTE.primary.main : theme.PALETTE.primary.extraLight};
    border-color: ${theme.PALETTE.primary.main};
    color: ${({ $active }) =>
      $active ? theme.PALETTE.white : theme.PALETTE.primary.main};
  }
`;

/* ── 본문 입력 영역 ── */
export const BodyCol = styled.div`
  ${leftAreaWidth}
  ${flexStartColumn}
  gap: 8px;
`;

export const TextArea = styled.textarea`
  height: 360px;
  resize: vertical;
  ${h10Regular}
  ${textFieldStyle}
`;

/* ── 첨부파일 ── */
export const FileDropZone = styled.div`
  ${leftAreaWidth}
  min-width: 0;
  height: 180px;
  background: ${theme.GRAYSCALE[10]};
  border: 2px dashed ${theme.GRAYSCALE[8]};
  border-radius: ${RADIUS.input};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

export const UploadIcon = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;
`;

export const FileDropTitle = styled.p`
  margin: 0;
  ${h10Bold}
  ${grayText}
  text-align: center;
`;

export const FileDropSub = styled.p`
  ${hintStyle}
  text-align: center;
`;

export const FileButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  width: 100%;
`;

export const FileBtn = styled.button`
  ${h11Bold}
  padding: 8px 30px;
  border-radius: ${RADIUS.sm};
  border: 1px solid ${theme.GRAYSCALE[8]};
  background: ${theme.PALETTE.white};
  ${grayText}
  cursor: pointer;
  ${noWrap}
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: ${theme.PALETTE.primary.main};
    color: ${theme.PALETTE.primary.main};
  }
`;

/* ── 태그 입력 ── */
export const TagCol = styled.div`
  /* flex: 1; */
  ${leftAreaWidth}
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TagHint = styled.p`
  ${hintStyle}
`;

export const TagInputField = styled.input`
  width: 100%;
  height: 49px;
  padding: 0 24px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: ${RADIUS.input};
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  line-height: 22px;
  letter-spacing: -0.28px;
  color: ${theme.TEXT_COLOR.basic};
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

/* ══ Right Block ══ */
export const RightBlock = styled.div`
  width: ${LAYOUT.sidebarWidth};
  display: flex;
  flex-direction: column;
  gap: ${LAYOUT.gridGap};
  flex-shrink: 0;
`;

/* ── 자동 임시저장 알림 ── */
export const SaveNotice = styled.div`
  background: ${theme.PALETTE.primary.extraLight};
  border-radius: ${RADIUS.card};
  padding: 16px 32px;
  display: flex;
  align-items: center;
  gap: 23px;
`;

export const SaveIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const SaveText = styled.p`
  margin: 0;
  ${h11Regular}
  color: ${theme.PALETTE.primary.main};
  white-space: pre-line;
`;
