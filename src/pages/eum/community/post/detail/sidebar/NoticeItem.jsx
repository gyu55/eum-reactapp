// import React from "react";
// import styled from "styled-components";
// import theme from "../../styles/theme";
// import { FONT_FAMILY, SURFACE, RADIUS } from "../../constants";

import styled from "styled-components";
import theme from "../../../../../../styles/theme";
import { FONT_FAMILY, RADIUS, SURFACE } from "../../../constants";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${SURFACE.section};
  border-radius: ${RADIUS.input};
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

const Badge = styled.div`
  background: ${PALETTE.primary.main};
  color: ${PALETTE.white};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h12};
  letter-spacing: -0.2px;
  text-align: center;
  padding: 4px 5px;
  border-radius: 4px;
  flex-shrink: 0;
  white-space: nowrap;
`;

const Title = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
`;

const DateText = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h12};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.2px;
  text-align: right;
  margin: 0;
  flex-shrink: 0;
  white-space: nowrap;
`;

const NoticeItem = ({ title = "공지 제목", date = "3/8" }) => {
  return (
    <Wrapper>
      <LeftArea>
        <Badge>공</Badge>
        <Title>{title}</Title>
      </LeftArea>
      <DateText>{date}</DateText>
    </Wrapper>
  );
};

export default NoticeItem;
