import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import theme from "../../../styles/theme";

const BOTTOM_CARDS = [
  {
    color: theme.PALETTE.fourth.main,
    label: "수어학습",
    title: "수어 마스터 도전!",
    desc: "눈으로 듣는 새로운 대화법,\n함께 배워봐요.",
    img: "/assets/image/main/studyIcon.svg",
    path: "/study",
    paddingTop: "57px",
  },
  {
    color: theme.PALETTE.red,
    label: "응급수신호",
    title: "긴급 신호, 지금 익히기!",
    desc: "위험한 순간, 당신의 신호가\n생명을 지킵니다",
    img: "/assets/image/main/emergencyIcon.svg",
    path: "/study/chapter/sos",
    paddingTop: "57px",
  },
  {
    color: theme.PALETTE.third.main,
    label: "모스부호",
    title: "모스부호 해독 도전!",
    desc: "빛과 점으로 전하는 신호\n함께 풀어봐요",
    img: "/assets/image/main/morsIcon.svg",
    path: "/study/chapter/mors",
    paddingTop: "55px",
  },
];

const ContentSection = () => {
  const navigate = useNavigate();

  return (
    <S.ContentSection>
      <S.ContentTitle>
        이음에서만 만날 수 있는 <br />
        다양한 콘텐츠를 소개합니다.
      </S.ContentTitle>

      {/* 상단 2개 카드 */}
      <S.TopCardRow>
        {/* 자격검증 */}
        <S.LargeCard>
          <S.CardBadge $color={theme.PALETTE.secondary.main}>
            <S.CardBadgeLabel>자격검증</S.CardBadgeLabel>
          </S.CardBadge>
          <S.LargeCardTitle>
            수어·수신호 <br /> 자격검증 도전!
          </S.LargeCardTitle>
          <S.CardDesc>
            내 실력을 공식으로 <br /> 인증받아보세요
          </S.CardDesc>
          {/* <S.InfoTagRow>
            <S.InfoTag>
              <S.InfoTagGray>2회 정기 시험</S.InfoTagGray>
              <S.InfoTagSep>|</S.InfoTagSep>
              <S.InfoTagBold>접수중</S.InfoTagBold>
            </S.InfoTag>
            <S.InfoTag>
              <S.InfoTagGray>시험일</S.InfoTagGray>
              <S.InfoTagSep>|</S.InfoTagSep>
              <S.InfoTagBold>2026.05.05</S.InfoTagBold>
            </S.InfoTag>
          </S.InfoTagRow> */}
          {/* <S.GoBtn $pt="23px" onClick={() => { navigate("/exam/info"); window.scrollTo(0, 0); }}> */}
          <S.GoBtn $pt="60px" onClick={() => { navigate("/exam/info"); window.scrollTo(0, 0); }}>
            바로가기 →
          </S.GoBtn>
          <S.LargeCardImg src="/assets/image/main/examIcon.svg" />
        </S.LargeCard>

        {/* 커뮤니티 */}
        <S.LargeCard>
          <S.CardBadge $color={theme.PALETTE.primary.main}>
            <S.CardBadgeLabel>커뮤니티</S.CardBadgeLabel>
          </S.CardBadge>
          <S.LargeCardTitle>
            함께 나누는 <br /> 수어 이야기
          </S.LargeCardTitle>
          <S.CardDesc>
            다양한 사람들과 <br /> 소통하고 공유해보세요
          </S.CardDesc>
          {/* <S.InfoTagRow>
            <S.InfoTag2>
              <S.InfoTagGray2>실시간 채팅방</S.InfoTagGray2>
              <S.InfoTagSep>|</S.InfoTagSep>
              <S.InfoTagBold2>99+개 운영중</S.InfoTagBold2>
            </S.InfoTag2>
          </S.InfoTagRow> */}
          {/* <S.GoBtn2 $pt="23px" onClick={() => { navigate("/community"); window.scrollTo(0, 0); }}> */}
          <S.GoBtn2 $pt="60px" onClick={() => { navigate("/community"); window.scrollTo(0, 0); }}>
            바로가기 →
          </S.GoBtn2>
          <S.LargeCardImg src="/assets/image/main/communityIcon.svg" />
        </S.LargeCard>
      </S.TopCardRow>

      {/* 하단 3개 카드 */}
      <S.BottomCardRow>
        {BOTTOM_CARDS.map((card, i) => (
          <S.SmallCard key={i}>
            <S.CardBadge $color={card.color} $small>
              <S.CardBadgeLabel>{card.label}</S.CardBadgeLabel>
            </S.CardBadge>
            <S.SmallCardTitle>{card.title}</S.SmallCardTitle>
            <S.CardDesc $mt="5px">{card.desc}</S.CardDesc>
            <S.GoBtn $pt={card.paddingTop} onClick={() => { navigate(card.path); window.scrollTo(0, 0); }}>
              바로가기 →
            </S.GoBtn>
            <S.SmallCardImg src={card.img} />
          </S.SmallCard>
        ))}
      </S.BottomCardRow>
    </S.ContentSection>
  );
};

export default ContentSection;
