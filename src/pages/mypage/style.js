import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../../styles/theme";

const { PALETTE, GRAYSCALE, FONT_SIZE, FONT_WEIGHT } = theme;

/* MyPageComponent */

/* 전체 페이지 배경 */
export const Page = styled.div`
  min-height: 100vh;
  background-color: #f7f7fb;
`;

/* 중앙 컨텐츠 영역 */
export const Inner = styled.div`
  width: 1316px;
  margin: 0 auto;
  padding-top: 36px;
  padding-bottom: 120px;
`;

/* 좌우 레이아웃 */
export const Layout = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 26px;
`;

/* 왼쪽 메인 영역 */
export const LeftArea = styled.div`
  width: 984px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 오른쪽 사이드 영역 */
export const RightArea = styled.div`
  width: 312px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 회원 탈퇴 */
export const WithdrawButton = styled.button`
  align-self: flex-end;

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.light};
  color: ${GRAYSCALE[9]};
`;

/* MyPageTabMenu */

/* 탭 메뉴 전체 */
export const TabMenu = styled.div`
  height: 37px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* 탭 버튼 크기 */
const tabSizeCSS = {
  main: css`
    width: 96px;
    height: 37px;
  `,
  small: css`
    width: 72px;
    height: 37px;
  `,
  medium: css`
    width: 88px;
    height: 37px;
  `,
};

/* 탭 버튼 */
export const TabButton = styled(NavLink)`
  ${({ $size }) => tabSizeCSS[$size]}

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d1d5db;
  border-radius: 10px;
  background: ${PALETTE.white};
  text-decoration: none;

  span {
    font-size: ${FONT_SIZE.h10};
    font-weight: ${FONT_WEIGHT.bold};
    color: ${GRAYSCALE[9]};
  }

  &.active {
    background: ${PALETTE.primary.main};
    border-color: ${PALETTE.primary.main};

    span {
      color: ${PALETTE.white};
    }
  }

  &:focus {
    outline: none;
  }
`;