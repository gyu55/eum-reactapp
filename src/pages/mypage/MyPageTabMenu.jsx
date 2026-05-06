import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";

const { PALETTE, GRAYSCALE, FONT_SIZE, FONT_WEIGHT } = theme;

/* 탭 메뉴 전체 */
const TabMenu = styled.div`
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
const TabButton = styled(NavLink)`
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

const tabs = [
  { name: "마이페이지", path: "/mypage", size: "main" },
  { name: "학습", path: "/mypage/learning", size: "small" },
  { name: "자격증", path: "/mypage/certificate", size: "medium" },
  { name: "설정", path: "/mypage/setting", size: "medium" },
];

const MyPageTabMenu = () => {
  return (
    <TabMenu>
      {tabs.map((tab) => (
        <TabButton
          key={tab.path}
          to={tab.path}
          $size={tab.size}
          end={tab.path === "/mypage"}
        >
          <span>{tab.name}</span>
        </TabButton>
      ))}
    </TabMenu>
  );
};

export default MyPageTabMenu;