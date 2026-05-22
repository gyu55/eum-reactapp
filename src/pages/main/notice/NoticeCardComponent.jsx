import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import theme from "../../../styles/theme";

const TAG_COLORS = {
  "공지":     theme.PALETTE.primary.main,
  "업데이트": theme.PALETTE.warning.main,
  "이벤트":   theme.PALETTE.secondary.main,
};

const NoticeCard = ({ id, tag, title, date }) => {
  const navigate = useNavigate();

  return (
    <S.CardWrap>
      <S.CardTop>
        <S.TagBadge $color={TAG_COLORS[tag] ?? theme.PALETTE.primary.main}>
          <S.TagLabel>{tag}</S.TagLabel>
        </S.TagBadge>
        <S.LinkBtn onClick={() => navigate(`/customService/notice/${id}`)}>
          <S.LinkIcon>↗</S.LinkIcon>
        </S.LinkBtn>
      </S.CardTop>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDate>{date}</S.CardDate>
    </S.CardWrap>
  );
};

export default NoticeCard;
