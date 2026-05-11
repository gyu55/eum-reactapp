import React from "react";

import {
  QuickMenuWrapper,
  QuickMenuTitle,
  QuickMenuDivider,
  MenuGrid,
  MenuButton,
} from "./style";

/*
  빠른 메뉴 경로는 각 페이지 연결 시 수정 필요
*/
const QuickMenuCard = () => {
  return (
    <QuickMenuWrapper>
      <QuickMenuTitle>⚡ 빠른 메뉴</QuickMenuTitle>
      <QuickMenuDivider />

      <MenuGrid>
        <MenuButton>
          <span>📝</span>
          <span>글 작성</span>
        </MenuButton>

        <MenuButton>
          <span>📚</span>
          <span>학습 시작</span>
        </MenuButton>

        <MenuButton>
          <span>❓</span>
          <span>1:1 문의</span>
        </MenuButton>

        <MenuButton>
          <span>💬</span>
          <span>채팅방</span>
        </MenuButton>
      </MenuGrid>
    </QuickMenuWrapper>
  );
};

export default QuickMenuCard;