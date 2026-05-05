import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

/* 카드 전체 */
const Wrapper = styled.div`
  width: 312px;
  min-height: 166px;
  padding: 13px 17px 10px;

  border-radius: 16px;
  background: ${PALETTE.white};
`;

/* 제목 */
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 밑줄 */
const Divider = styled.div`
  height: 1px;
  margin-top: 9px;
  background: #f3f4f6;
`;

/* 메뉴 그리드 */
const MenuGrid = styled.div`
  margin-top: 9px;
  display: grid;
  grid-template-columns: repeat(2, 124px);
  gap: 8px;
`;

const MenuButton = styled.button`
  width: 124px;
  height: 51px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border-radius: 10px;
  background: ${GRAYSCALE[10]};

  font-size: ${FONT_SIZE.h11};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};

  &:focus {
    outline: none;
  }
`;

/*
  - 각 메뉴 클릭 경로는 라우터 담당 페이지와 협의 후 연결 필요
*/
const QuickMenuCard = () => {
  return (
    <Wrapper>
      <Title>⚡ 빠른 메뉴</Title>
      <Divider />

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
    </Wrapper>
  );
};

export default QuickMenuCard;