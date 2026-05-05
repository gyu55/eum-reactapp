import React from "react";
import styled from "styled-components";
import Card from "./Card";
import theme from "../../../styles/theme";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

/* 카드 전체 */
const Wrapper = styled(Card)`
  width: 312px;
  min-height: 255px;
  padding: 18px 20px 22px;
`;

/* 제목 */
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 9px;

  font-size: ${FONT_SIZE.h10};
  font-weight: ${FONT_WEIGHT.bold};
  color: ${TEXT_COLOR.basic};
`;

/* 구분선 */
const Divider = styled.div`
  height: 1px;
  background: ${GRAYSCALE[8]};
`;

/* 그룹 */
const Group = styled.div`
  margin-top: ${({ $first }) => ($first ? "14px" : "12px")};
`;

/* 한 줄 */
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 12px;
  }
`;

/* 이모티콘 + 텍스트 */
const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 13px;
  font-weight: ${FONT_WEIGHT.regular};
  color: ${TEXT_COLOR.basic};
`;

/* 이모티콘 크기 고정 */
const Icon = styled.span`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  line-height: 1;
`;

/* 오른쪽 숫자 */
const Count = styled.span`
  font-size: 14px;
  font-weight: ${FONT_WEIGHT.bold};
  color: ${PALETTE.primary.main};
`;

/*
   활동 수치는 백엔드 마이페이지 통계 API 연동 필요
*/
const ActivityCard = () => {
  return (
    <Wrapper>
      <Title>📈 내 활동</Title>
      <Divider />

      <Group $first>
        <Item>
          <Label>
            <Icon>📝</Icon>
            작성 게시글
          </Label>
          <Count>42</Count>
        </Item>

        <Item>
          <Label>
            <Icon>💬</Icon>
            작성 댓글
          </Label>
          <Count>87</Count>
        </Item>
      </Group>

      <Divider style={{ marginTop: "12px" }} />

      <Group>
        <Item>
          <Label>
            <Icon>❤️</Icon>
            받은 좋아요
          </Label>
          <Count>128</Count>
        </Item>

        <Item>
          <Label>
            <Icon>📌</Icon>
            즐겨찾기
          </Label>
          <Count>63</Count>
        </Item>
      </Group>

      <Divider style={{ marginTop: "12px" }} />

      <Group>
        <Item>
          <Label>
            <Icon>👥</Icon>
            팔로잉
          </Label>
          <Count>12</Count>
        </Item>

        <Item>
          <Label>
            <Icon>👤</Icon>
            팔로워
          </Label>
          <Count>12</Count>
        </Item>
      </Group>
    </Wrapper>
  );
};

export default ActivityCard;