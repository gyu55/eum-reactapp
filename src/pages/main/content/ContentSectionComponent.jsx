import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.js";
import theme from "../../../styles/theme";

const TOP_CARDS = [
  {
    large: true,
    tone: "blue",
    label: "자격검증",
    title: "수어·수신호 자격검증 도전!",
    desc: "내 실력을 공식으로 인증받아보세요",
    img: "/assets/image/main/examIcon.svg",
    path: "/exam/info",
  },
  {
    large: true,
    tone: "green",
    label: "커뮤니티",
    title: "함께 나누는 수어 이야기",
    desc: "다양한 사람들과 소통하고 공유해보세요",
    img: "/assets/image/main/communityIcon.svg",
    path: "/community",
  },
];

const BOTTOM_CARDS = [
  {
    tone: "yellow",
    label: "수어학습",
    title: "수어 마스터 도전!",
    desc: "눈으로 듣는 새로운 대화법,\n 함께 배워봐요.",
    img: "/assets/image/main/studyIcon.svg",
    path: "/study",
  },
  {
    tone: "red",
    label: "응급수신호",
    title: "긴급 신호, 지금 익히기!",
    desc: "위험한 순간, 당신의 신호가 생명을 지킵니다",
    img: "/assets/image/main/emergencyIcon.svg",
    path: "/study/chapter/sos",
  },
  {
    tone: "purple",
    label: "모스부호",
    title: "모스부호 해독 도전!",
    desc: "빛과 점으로 전하는 신호 함께 풀어봐요",
    img: "/assets/image/main/morsIcon.svg",
    path: "/study/chapter/mors",
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

      <S.CategoryBand>
        <S.CategoryGrid>
          {[...TOP_CARDS, ...BOTTOM_CARDS].map((card, i) => (
            <S.CategoryCard
              key={i}
              type="button"
              $large={card.large}
              $tone={card.tone}
              onClick={() => { navigate(card.path); window.scrollTo(0, 0); }}
            >
              <span className="badge">{card.label}</span>
              <strong>{card.title}</strong>
              <p>{card.desc}</p>
              <span className="go">바로가기 →</span>
              <img src={card.img} alt={`${card.label} 아이콘`} />
            </S.CategoryCard>
          ))}
        </S.CategoryGrid>
      </S.CategoryBand>
    </S.ContentSection>
  );
};

export default ContentSection;