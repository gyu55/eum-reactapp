import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import theme from "../../../styles/theme";
import { TAG_COLORS } from "./constants";

const NoticeCard = ({ id, tag, title, date }) => {
  const navigate = useNavigate();

  return (
    <S.CardWrap onClick={() => navigate(`/customservice/notice/${id}`)}>
      <S.CardTop>
        <S.TagBadge $color={TAG_COLORS[tag] ?? theme.PALETTE.primary.main}>
          <S.TagLabel>{tag}</S.TagLabel>
        </S.TagBadge>
        <S.LinkBtn>
          <S.StyledArrow src="/assets/image/main/pageMove.svg" />
        </S.LinkBtn>
      </S.CardTop>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDate>{date}</S.CardDate>
    </S.CardWrap>
  );
};

export default NoticeCard;