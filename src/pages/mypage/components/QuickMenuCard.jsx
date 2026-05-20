import React from "react";
import { useNavigate } from "react-router-dom";

import {
  QuickMenuWrapper,
  QuickMenuTitle,
  QuickMenuDivider,
  MenuGrid,
  MenuButton,
} from "./style";

/*
  빠른 메뉴 이동 경로 연결
*/
const QuickMenuCard = () => {
  const navigate = useNavigate();

  return (
    <QuickMenuWrapper>
      <QuickMenuTitle>⚡ 빠른 메뉴</QuickMenuTitle>
      <QuickMenuDivider />

      <MenuGrid>
        {/* 게시글 작성 페이지 이동 */}
        <MenuButton
          type="button"
          onClick={() => navigate("/community/post/write")}
        >
          <span>📝</span>
          <span>글 작성</span>
        </MenuButton>

        {/* 학습 페이지 이동 */}
        <MenuButton
          type="button"
          onClick={() => navigate("/study/learn")}
        >
          <span>📚</span>
          <span>학습 시작</span>
        </MenuButton>

        {/* 고객센터 문의 페이지 이동 */}
        <MenuButton
          type="button"
          onClick={() => navigate("/customservice/result")}
        >
          <span>❓</span>
          <span>1:1 문의</span>
        </MenuButton>

        {/* 채팅방 이동 */}
        <MenuButton
          type="button"
          onClick={() => navigate("/community/chat")}
        >
          <span>💬</span>
          <span>채팅방</span>
        </MenuButton>
      </MenuGrid>
    </QuickMenuWrapper>
  );
};

export default QuickMenuCard;