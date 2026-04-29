import { css } from "styled-components";
import theme from "../../styles/theme";

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
