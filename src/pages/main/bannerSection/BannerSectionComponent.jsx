import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";

const BannerSection = React.memo(() => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      navigate("/community");
    }, 400);
  };

  return (
    <S.BannerWrap>
      <S.HeadlineWrapper>
        <S.HeadlineText>
          손짓 하나로 <br />
          <S.PrimaryText>마음이 이어지는 곳</S.PrimaryText> <br />
          이음
        </S.HeadlineText>
      </S.HeadlineWrapper>

      <S.SubtitleWrapper>
        <S.SubtitleText>
          수어를 배우고 싶은 청인과 함께하고 싶은 농인 <br />
          모두를 위한 따뜻한 대화 공간이에요.
        </S.SubtitleText>
      </S.SubtitleWrapper>

      <S.BlobLayer>
        <S.BlobGreen />
        <S.BlobBlue />
        <S.BlobOrange />
        <S.BlobYellow />
        <S.BlobPurple />
        <S.BlobPink />
      </S.BlobLayer>

      <S.BtnChapter>
        <S.BtnInner className={isActive ? "active" : ""}>
          <S.LeftFrills />
          <S.StartBtn onMouseDown={handleMouseDown}>
            지금 시작하기 →
          </S.StartBtn>
          <S.RightFrills />
        </S.BtnInner>
      </S.BtnChapter>
    </S.BannerWrap>
  );
});

export default BannerSection;