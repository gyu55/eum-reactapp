import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { h11Bold, h9Bold } from "../../styles/common";
import { RADIUS } from "./constants";

// 커뮤니티 좌측 (9개 그리드) 영역 너비
export const communityWidthStyle = css`
  width: 984px;
`;

// 커뮤니티 우측 (3개 그리드) 영역 너비
export const communitySideWidth = css`
  width: 312px;
`;

export const communityBorderRadius = css`
  border-radius: 20px;
`;

// 커뮤니티 에서 좌측 9개, 우측 3 개로 나누는 과정을 위한 Page
/* ══ Page ══ */
// 가장 상위 메인
export const Page = styled.div`
  background: ${theme.GRAYSCALE[10]};
  /* min-width: 1920px; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

/* ══ Content Area ══ */
// 해당 영역은 좌측에는 메인, 우측에는 사이드 레이아웃이 있는 구조
export const ContentArea = styled.main`
  width: 1320px;
  flex: 1;
  /* padding: 24px 300px 60px; */
  display: flex;
  align-items: start;
  gap: 24px;
  box-sizing: border-box;
`;

/* ══ Left Block ══ */
// export const LeftBlock = styled.div`
//   width: 984px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 24px;
// `;

// export const LeftBlock = styled.div`
//   width: 984px;
//   display: flex;
//   flex-direction: ${({ wrap }) => (wrap ? "row" : "column")};
//   ${({ wrap }) => wrap && `flex-wrap: wrap;`}
//   align-items: flex-end;
//   gap: 24px;
// `;

export const LeftBlock = styled.div`
  width: 984px;
  display: flex;
  flex-direction: ${({ wrap }) => (wrap ? "row" : "column")};
  ${({ wrap }) => wrap && `flex-wrap: wrap;`}
  align-items: flex-end;
  gap: ${({ spaceBetween }) => (spaceBetween ? "0" : "24px")};
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? "space-between" : "flex-start"};
  margin-top: ${({ marginTop }) => marginTop || 0}px;
`;

export const ColumnBlock = styled.div`
  width: ${({ width }) => width || "984px"};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "24px"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
`;

export const RowBlock = styled.div`
  width: ${({ width }) => width || "984px"};
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  align-items: flex-end;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "24px"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
`;

// 카드 종류를 간단하게 크기를 맞춰서 하는 것
export const RowSimpleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: ${({ gap }) => gap || "24px"};
`;

// 너비 고정 없이 row 배치 — 카드 내부 레이아웃 용
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "0px"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
`;

// column 으로 24px 간격 으로 리스트 하는 개념
export const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
`;

// 마우스를 카드 에 올렸을 때 상호작용 할 요소
export const hoverStyle = css`
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${theme.PALETTE.primary.main};
    box-shadow: 0 8px 24px rgba(67, 89, 252, 0.12);
    transform: translateY(-2px);
  }
`;

// column 방향으로 정렬 시 왼쪽 시작점에 컴포넌트들이 붙어서 정렬되도록 하기
export const flexStartColumn = css`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

// row 방향으로 할 시에 위로 붙어지게 하기
export const flexBetweenTopRow = css`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: row;
`;

// 가운데 정렬 할 수 있도록 하기

// 텍스트 필드 스타일 정의
export const textFieldStyle = css`
  width: 100%;
  padding: 16px 24px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px;
  color: ${theme.TEXT_COLOR.basic};
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
    white-space: nowrap;
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

// 버튼 스타일 컴포넌트
export const ActionBtn = styled.button`
  ${h11Bold}
  padding: 8px 30px;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
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

// 카테고리 선택 버튼 타입
export const CategoryPill = styled.button`
  height: 51px;
  padding: 16px 30px;
  border-radius: 100px;
  ${h9Bold}
  line-height: 0;
  white-space: nowrap;
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

// 메인 사이드 에서 공지사항 및 유저 프로필 공통 속성
export const sideComponentStyle = css`
  padding: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: ${RADIUS.smallCard};
`;

// 제목 등 스타일
export const sideHeaderStyle = css`
  padding-right: 10px;
  padding-left: 10px;
`;

// 사이드 카드 속성
export const sideCardStyle = css`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 16px;
  padding-bottom: 16px;
  gap: 16px;
  border-radius: ${RADIUS.card};
`;

// 구분선 만들기
export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${theme.GRAYSCALE[8]};
  margin: 0;
`;
