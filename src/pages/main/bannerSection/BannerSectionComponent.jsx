import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import theme from "../../../styles/theme";

const BannerSection = React.memo(() => {
  const navigate = useNavigate();

  return (
    <S.BannerWrap>
      <S.HeadlineWrapper>
        <S.HeadlineText>
          손짓 하나로 <br />
          <span style={{ color: theme.TEXT_COLOR.primary }}>마음이 이어지는 곳</span> <br />
          이음
        </S.HeadlineText>
      </S.HeadlineWrapper>

      <S.SubtitleWrapper>
        <S.SubtitleText>
          수어를 배우고 싶은 청인과 함께하고 싶은 농인 <br />
          모두를 위한 따뜻한 대화 공간이에요.
        </S.SubtitleText>
      </S.SubtitleWrapper>

      <S.BlobGreen />
      <S.BlobBlue />
      <S.BlobOrange />
      <S.BlobYellow />
      <S.BlobPurple />
      <S.BlobPink />

      <S.BtnChapter>
        <S.StartBtn onClick={() => navigate("/community")}>
          지금 시작하기 →
        </S.StartBtn>
      </S.BtnChapter>
    </S.BannerWrap>
  );
});

export default BannerSection;
