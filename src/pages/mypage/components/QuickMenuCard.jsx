import React from "react";
import { useNavigate } from "react-router-dom";

import S from "./style";

/*
  빠른 메뉴 이동 경로 연결
*/
const QuickMenuCard = () => {
  const navigate = useNavigate();

  return (
    <S.QuickMenuWrapper>
      <S.QuickMenuTitle>⚡ 빠른 메뉴</S.QuickMenuTitle>
      <S.QuickMenuDivider />

      <S.MenuGrid>
        {/* 게시글 작성 페이지 이동 */}
        <S.MenuButton
          type="button"
          onClick={() => navigate("/community/post/write")}
        >
          <span>📄</span>
          <span>글 작성</span>
        </S.MenuButton>

        {/* 학습 페이지 이동 */}
        <S.MenuButton
          type="button"
          onClick={() => navigate("/study/learn")}
        >
          <span>📚</span>
          <span>학습 시작</span>
        </S.MenuButton>

        {/* 고객센터 문의 페이지 이동 */}
        <S.MenuButton
          type="button"
          onClick={() => navigate("/customservice/result")}
        >
          <span>❓</span>
          <span>1:1 문의</span>
        </S.MenuButton>

        {/* 채팅방 이동 */}
        <S.MenuButton
          type="button"
          onClick={() => navigate("/community/chat")}
        >
          <span>💬</span>
          <span>채팅방</span>
        </S.MenuButton>
      </S.MenuGrid>
    </S.QuickMenuWrapper>
  );
};

export default QuickMenuCard;